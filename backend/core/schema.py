from datetime import datetime
from pydantic import Field
from typing import Optional

from ninja.schema import Schema


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


class PostProductSchema(Schema):
    name: str
    made_by: str


class PostReviewSchema(Schema):
    product: int
    user: int
    rating: int = Field(..., ge=0, le=5)
    comment: Optional[str] = None


class PostUserRegisterSchema(Schema):
    username: str
    password: str
    email: str


###### PATCH Model Schema #######


class PartialUpdateProduct(Schema):
    name: Optional[str] = None
    made_by: Optional[str] = None


class PartialUpdateReview(Schema):
    rating: Optional[int] = None
    comment: Optional[str] = None
