from django.db import models

# Create your models here.
class Product(models.Model):
    id = models.IntegerField(primary_key='true')
    product_name = models.CharField(max_length=255)
    category = models.CharField( max_length=50)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    offer = models.CharField(max_length=50)
    img = models.URLField((""), max_length=200)
    description = models.TextField()

    def __str__(self):
        return self.product_name




#from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)   # ✅ password HASH
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    full_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()   # 🔥 MOST IMPORTANT

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['full_name']

    def __str__(self):
        return self.email





    


    
    