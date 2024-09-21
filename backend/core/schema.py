from datetime import datetime
from pydantic import Field
from pydantic import BaseModel
from typing import Optional

from ninja.schema import Schema

from core.models import Product
from core.models import Review


class GenericSchema(Schema):
    detail: str


####### Custom BaseModel #########


class ProductSchema(Schema):
    id: int
    name: str
    made_by: str
    posted_on: datetime


class ReviewSchema(Schema):
    id: int
    product: str
    user: str
    rating: int
    comment: str
    created_at: datetime


###### POST Model Schema ######


class PostProductSchema(BaseModel):
    name: str
    made_by: str


class PostReviewSchema(BaseModel):
    product: int
    user: int
    rating: int = Field(..., ge=0, le=5)
    comment: Optional[str] = None


###### PATCH Model Schema #######


class PartialUpdateProduct(Schema):
    name: Optional[str] = None
    made_by: Optional[str] = None


class PartialUpdateReview(Schema):
    rating: Optional[int] = None
    comment: Optional[str] = None
