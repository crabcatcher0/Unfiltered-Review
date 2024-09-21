from django.db import models
from django.contrib.auth.models import User


class Product(models.Model):
    name = models.CharField(max_length=125, blank=False, null=False)
    made_by = models.CharField(max_length=125, blank=False, null=False)
    posted_on = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return self.name


class Review(models.Model):
    product = models.ForeignKey(
        Product, related_name="reviews", on_delete=models.CASCADE
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField(default=0)
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self) -> str:
        return f"Review for {self.product.name} by {self.user.username}"
