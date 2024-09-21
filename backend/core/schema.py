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
    product: int
    user: int
    rating: int = Field(..., ge=0, le=5)
    comment: Optional[str] = None
    created_at: Optional[datetime] = None


###### POST Model Schema ######


class PostProductSchema(BaseModel):
    name: str
    made_by: str

    class Config:
        arbitrary_types_allowed = True


###### PATCH Model Schema #######


class PartialUpdateProduct(Schema):
    name: Optional[str]
    made_by: Optional[str]
