// product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  private products: Product[] = [
    // Smartphones (categoryId: 1)
    {
      id: 1,
      name: 'Apple iPhone 15 Pro Max 256GB Natural Titanium',
      description: '6.7" Super Retina XDR display, A17 Pro chip, titanium design, 48MP main camera',
      price: 649990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/hda/86319874048030.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf4/h73/84933438865438.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-natural-titanium-113138420/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 Ultra 512GB Titanium Gray',
      description: '6.8" Dynamic AMOLED 2X, 200MP camera, S Pen included, Snapdragon 8 Gen 3',
      price: 599990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf5/hf1/86368676347934.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-512gb-titanium-gray-116043556/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Xiaomi 14 Ultra 512GB Black',
      description: '6.73" LTPO AMOLED, Leica quad camera, Snapdragon 8 Gen 3, 90W fast charging',
      price: 499990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p1d/p7b/67214880.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc5/hfc/85135304392734.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-14-ultra-512gb-black-115905962/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Google Pixel 7 Pro 128GB Black',
      description: '6.7" Super Actua display, Tensor G3 chip, advanced AI camera features',
      price: 449990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h23/h98/85135304097822.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-chernyi-107066141/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 5,
      name: 'OnePlus 12 512GB Silky Black',
      description: '6.82" LTPO AMOLED, Hasselblad camera, Snapdragon 8 Gen 3, 100W charging',
      price: 399990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p48/pa8/54233333.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h23/h98/85135304097822.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/oneplus-nord-5-12-gb-512-gb-seryi-142846291/?c=750000000',
      likes: 0,
      categoryId: 1
    },

    // Laptops (categoryId: 2)
    {
      id: 6,
      name: 'Apple MacBook Pro 16 M3 Max 48GB 1TB Space Gray',
      description: '16.2" Liquid Retina XDR, M3 Max chip with 16-core CPU, 40-core GPU',
      price: 1999990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf4/h73/84981723562014.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-m3-max-48gb-1tb-space-gray-117522894/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 7,
      name: 'ASUS ROG Zephyrus G16 16" 32GB 1TB SSD Gray',
      description: 'Intel Core Ultra 9, NVIDIA RTX 4090, 240Hz OLED display',
      price: 1299990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2e/p89/47502192.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf4/h73/84981723562014.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g16-16-32gb-1tb-ssd-gray-115915354/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 8,
      name: 'Lenovo Legion 5 Pro 16" 32GB 1TB SSD Gray',
      description: 'AMD Ryzen 9, NVIDIA RTX 4060, 165Hz WQXGA display',
      price: 899990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p44/pb8/59691124.JPG?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf4/h73/84981723562014.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lenovo-legion-5-pro-16-32gb-1tb-ssd-gray-115915354/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Dell XPS 15 15.6" 32GB 1TB SSD Silver',
      description: 'Intel Core i9, NVIDIA RTX 4060, 3.5K OLED touch display',
      price: 1099990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h1e/64860295462942.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf4/h73/84981723562014.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-15-6-32gb-1tb-ssd-silver-115915353/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 10,
      name: 'HP Spectre x360 14" 16GB 1TB SSD Blue',
      description: 'Intel Core i7, 2-in-1 convertible, OLED display, pen included',
      price: 749990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5b/24177956.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf4/h73/84981723562014.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-14-16gb-1tb-ssd-blue-115915352/?c=750000000',
      likes: 0,
      categoryId: 2
    },

    // Headphones (categoryId: 3)
    {
      id: 11,
      name: 'Apple AirPods Max Space Black',
      description: 'Over-ear headphones with active noise cancellation, spatial audio',
      price: 299990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h4f/h73/63801737035716.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-airpods-max-space-gray-101161415/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 12,
      name: 'Sony WH-1000XM5 ',
      description: 'Industry-leading noise cancellation, 30-hour battery, LDAC support',
      price: 179990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h56/64476310306846.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h0e/64340636221470.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5-chernyi-105338729/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 13,
      name: 'Bose QuietComfort Ultra White',
      description: 'Immersive audio, world-class noise cancellation, spatial audio',
      price: 199990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h04/84919601987614.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h0e/64340636221470.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/bose-quietcomfort-ultra-white-115905963/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 14,
      name: 'Sennheiser Momentum 4 Black',
      description: 'Signature sound, 60-hour battery, adaptive noise cancellation',
      price: 159990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/hde/84609205698590.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h0e/64340636221470.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/sennheiser-momentum-4-black-115905964/?c=750000000',
      likes: 0,
      categoryId: 3
    },
    {
      id: 15,
      name: 'JBL Tour One M2 Black',
      description: 'Premium adaptive noise cancelling, JBL spatial sound, 50h battery',
      price: 99990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h29/h67/81468757114910.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hc1/h0e/64340636221470.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/jbl-tour-one-m2-black-115905965/?c=750000000',
      likes: 0,
      categoryId: 3
    },

    // Tablets (categoryId: 4)
    {
      id: 16,
      name: 'Apple iPad Pro 13 M4 256GB Space Gray',
      description: '13" Ultra Retina XDR display, M4 chip, compatible with Apple Pencil Pro',
      price: 699990,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p83/p57/43613590.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h0a/hc1/85546616684574.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-13-m4-256gb-space-gray-122138673/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 17,
      name: 'Samsung Galaxy Tab S9 Ultra 14.6" 512GB Graphite',
      description: 'Dynamic AMOLED 2X 120Hz, Snapdragon 8 Gen 2, S Pen included',
      price: 599990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h6e/82770436030494.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hb0/hd3/84908092784670.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-ultra-14-6-512gb-graphite-113423260/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 18,
      name: 'Xiaomi Pad 6 11" 256GB Gray',
      description: '144Hz display, Snapdragon 870, 4 speakers, stylus support',
      price: 179990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hb0/hd3/84908092784670.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-256gb-gray-115878232/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 19,
      name: 'Lenovo Tab P12 12.7" 256GB Gray',
      description: '3K display, MediaTek Dimensity 7050, 8 speakers, stylus support',
      price: 199990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p2b/p29/43598687.jpg?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hb0/hd3/84908092784670.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/lenovo-tab-p12-12-7-256gb-gray-115878233/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 20,
      name: 'Huawei MatePad 11.5" 256GB Gray',
      description: '120Hz PaperMatte display, Snapdragon 7 Gen 1, 6 speakers',
      price: 149990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p12/p46/65766777.png?format=preview-large',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hb0/hd3/84908092784670.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-11-5-256gb-gray-115878234/?c=750000000',
      likes: 0,
      categoryId: 4
    }
  ];

  getCategories(): Category[] {
    return [...this.categories];
  }

  getProducts(): Product[] {
    return [...this.products];
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }

  deleteProduct(productId: number): void {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  likeProduct(productId: number): void {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes++;
    }
  }
}
