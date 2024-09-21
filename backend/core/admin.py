from django.contrib import admin

from core.models import Product
from core.models import Review


admin.site.register(Product)
admin.site.register(Review)
