from typing import List

from django.http import HttpRequest
from django.shortcuts import get_object_or_404

from ninja import NinjaAPI
from ninja.security import django_auth

from core.models import Product
from core.models import Review
from core.schema import ProductSchema
from core.schema import PostProductSchema
from core.schema import PartialUpdateProduct
from core.schema import GenericSchema
from core.schema import ReviewSchema

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
def list_products(request: HttpRequest):
    return Product.objects.all()


@api.get(path="/products/{id}/", response={200: ProductSchema}, tags=["Products"])
def retrive_products(request: HttpRequest, id: int):
    return get_object_or_404(Product, id=id)
