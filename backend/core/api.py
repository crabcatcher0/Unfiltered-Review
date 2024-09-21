from typing import List

from django.http import HttpRequest
from django.shortcuts import get_object_or_404

from silk.profiling.profiler import silk_profile

from ninja import NinjaAPI
from ninja.security import django_auth

from core.models import Product
from core.models import Review
from core.schema import ProductSchema
from core.schema import PostProductSchema
from core.schema import PartialUpdateProduct
from core.schema import GenericSchema
from core.schema import ReviewSchema
from core.schema import PostReviewSchema
from core.schema import PartialUpdateReview


session_auth = django_auth


api = NinjaAPI(docs_url="/docs/", auth=(session_auth))


@api.get(path="/home/", tags=["Home"])
def home(request: HttpRequest):
    return {"message": "Hello, Django-Ninja"}


@api.post(
    path="/products/create-product/",
    response={200: GenericSchema, 400: GenericSchema},
    tags=["Products"],
)
@silk_profile(name="Add Products")
def create_products(request: HttpRequest, payload: PostProductSchema):
    try:
        product = Product(name=payload.name, made_by=payload.made_by)
        product.save()
        return 200, GenericSchema(detail="Successfully created product")
    except Exception as e:
        return 400, GenericSchema(detail=str(e))


@api.patch(
    path="/products/update-product/{id}/",
    response={200: GenericSchema, 400: GenericSchema},
    tags=["Products"],
)
@silk_profile(name="Update Products")
def partial_update(request: HttpRequest, id: int, payload: PartialUpdateProduct):
    try:
        product = get_object_or_404(Product, id=id)
        for attr, value in payload.dict(exclude_unset=True).items():
            setattr(product, attr, value)
        product.save()
        return 200, GenericSchema(detail="Product Updated Successfully.")
    except Exception as e:
        return 400, GenericSchema(detail=str(e))


@api.get(path="/products/", response=List[ProductSchema], tags=["Products"])
@silk_profile(name="Get Products")
def list_products(request: HttpRequest):
    return Product.objects.all()


@api.get(path="/products/{id}/", response={200: ProductSchema}, tags=["Products"])
@silk_profile(name="Get Product By Id")
def retrive_products(request: HttpRequest, id: int):
    return get_object_or_404(Product, id=id)


@api.delete("/products/delete/{id}", response={200: GenericSchema}, tags=["Products"])
def delete_product(request: HttpRequest, id: int):
    product = get_object_or_404(Product, id=id)
    product.delete()
    return 200, GenericSchema(
        detail=f"Product with the Id: '{id}' deleted successfully."
    )


@api.post(
    path="/reviews/create-reviews/",
    response={200: GenericSchema, 400: GenericSchema, 404: GenericSchema},
    tags=["Reviews"],
)
@silk_profile(name="Add Reviews")
def create_review(request: HttpRequest, payload: PostReviewSchema):
    product_instance = Product.objects.get(id=payload.product)
    try:
        Review(
            product=product_instance,
            user=request.user,
            rating=payload.rating,
            comment=payload.comment,
        ).save()
        return 200, GenericSchema(detail="Review posted successfully.")
    except Product.DoesNotExist:
        return 404, GenericSchema(detail="Product doesn't exist")
    except Exception as e:
        return 400, GenericSchema(detail=str(e))


@api.patch(
    path="/reviews/update-comment/{id}/",
    response={200: GenericSchema, 400: GenericSchema},
    tags=["Reviews"],
)
def update_review(request: HttpRequest, id: int, payload: PartialUpdateReview):
    review = get_object_or_404(Review, id=id)

    try:
        for attr, value in payload.dict(exclude_unset=True).items():
            setattr(review, attr, value)
        review.save()
        return 200, GenericSchema(detail="Comment updated successfully")
    except Exception as e:
        return 400, GenericSchema(detail=str(e))


@api.get(path="/reviews/", response=List[ReviewSchema], tags=["Reviews"])
@silk_profile(name="Get Reviews")
def list_reviews(request: HttpRequest):
    reviews = Review.objects.all()
    review_data = [
        {
            "id": review.id,
            "product": review.product.name,
            "user": review.user.username,
            "rating": review.rating,
            "comment": review.comment,
            "created_at": review.created_at,
        }
        for review in reviews
    ]
    return 200, review_data


@api.get(path="/reviews/{id}/", response={200: ReviewSchema}, tags=["Reviews"])
def retrive_reviews(request: HttpRequest, id: int):
    review = get_object_or_404(Review, id=id)
    review_data = {
        "id": review.id,
        "product": review.product.name,
        "user": review.user.username,
        "rating": review.rating,
        "comment": review.comment,
        "created_at": review.created_at,
    }
    return 200, review_data


@api.delete(
    path="/reviews/delete/{id}/", response={200: GenericSchema}, tags=["Reviews"]
)
def delete_review(request: HttpRequest, id: int):
    review = get_object_or_404(Review, id=id)
    review.delete()
    return 200, GenericSchema(
        detail=f"Review with the ID: '{id}' deleted successfully."
    )
