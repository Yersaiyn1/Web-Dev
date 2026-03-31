from django.core.management.base import BaseCommand
from api.models import Category, Product


class Command(BaseCommand):
    help = 'Seed database with 4 categories and 20 products'

    def handle(self, *args, **options):
        Category.objects.all().delete()
        Product.objects.all().delete()

        phones = Category.objects.create(name='Phones')
        laptops = Category.objects.create(name='Laptops')
        tablets = Category.objects.create(name='Tablets')
        accessories = Category.objects.create(name='Accessories')

        products_data = [
            # Phones (5)
            {'name': 'iPhone 15', 'price': 999.99, 'description': 'Latest Apple smartphone with A16 chip', 'count': 50, 'is_active': True, 'category': phones},
            {'name': 'Samsung Galaxy S24', 'price': 899.99, 'description': 'Samsung flagship with AI features', 'count': 40, 'is_active': True, 'category': phones},
            {'name': 'Google Pixel 8', 'price': 699.99, 'description': 'Pure Android experience with great camera', 'count': 30, 'is_active': True, 'category': phones},
            {'name': 'OnePlus 12', 'price': 799.99, 'description': 'Fast charging and smooth display', 'count': 25, 'is_active': True, 'category': phones},
            {'name': 'Xiaomi 14', 'price': 599.99, 'description': 'Great value flagship phone', 'count': 35, 'is_active': True, 'category': phones},
            # Laptops (5)
            {'name': 'MacBook Air M3', 'price': 1099.00, 'description': 'Thin and light with M3 chip', 'count': 20, 'is_active': True, 'category': laptops},
            {'name': 'Dell XPS 15', 'price': 1299.99, 'description': 'Premium Windows laptop', 'count': 15, 'is_active': True, 'category': laptops},
            {'name': 'Lenovo ThinkPad X1', 'price': 1399.99, 'description': 'Business laptop with great keyboard', 'count': 18, 'is_active': True, 'category': laptops},
            {'name': 'ASUS ROG Strix', 'price': 1599.99, 'description': 'Gaming laptop with RTX 4070', 'count': 10, 'is_active': True, 'category': laptops},
            {'name': 'HP Pavilion 15', 'price': 649.99, 'description': 'Affordable everyday laptop', 'count': 45, 'is_active': True, 'category': laptops},
            # Tablets (5)
            {'name': 'iPad Pro 12.9', 'price': 1099.00, 'description': 'Professional tablet with M2 chip', 'count': 22, 'is_active': True, 'category': tablets},
            {'name': 'iPad Air', 'price': 599.00, 'description': 'Versatile tablet for everyone', 'count': 30, 'is_active': True, 'category': tablets},
            {'name': 'Samsung Galaxy Tab S9', 'price': 849.99, 'description': 'Android tablet with AMOLED screen', 'count': 20, 'is_active': True, 'category': tablets},
            {'name': 'Lenovo Tab P12', 'price': 349.99, 'description': 'Budget tablet with large screen', 'count': 40, 'is_active': True, 'category': tablets},
            {'name': 'Microsoft Surface Pro 9', 'price': 999.99, 'description': '2-in-1 tablet and laptop', 'count': 12, 'is_active': False, 'category': tablets},
            # Accessories (5)
            {'name': 'AirPods Pro 2', 'price': 249.99, 'description': 'Wireless earbuds with noise cancellation', 'count': 100, 'is_active': True, 'category': accessories},
            {'name': 'Samsung Galaxy Watch 6', 'price': 299.99, 'description': 'Smartwatch with health tracking', 'count': 60, 'is_active': True, 'category': accessories},
            {'name': 'Logitech MX Master 3S', 'price': 99.99, 'description': 'Premium wireless mouse', 'count': 80, 'is_active': True, 'category': accessories},
            {'name': 'Anker 65W Charger', 'price': 35.99, 'description': 'Compact USB-C fast charger', 'count': 200, 'is_active': True, 'category': accessories},
            {'name': 'Apple Magic Keyboard', 'price': 299.00, 'description': 'Wireless keyboard with Touch ID', 'count': 55, 'is_active': True, 'category': accessories},
        ]

        for p in products_data:
            Product.objects.create(**p)

        self.stdout.write(self.style.SUCCESS(
            f'Created {Category.objects.count()} categories and {Product.objects.count()} products'
        ))