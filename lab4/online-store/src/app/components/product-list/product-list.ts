
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<number>();
  @Output() likeProduct = new EventEmitter<number>();

  onDelete(productId: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.deleteProduct.emit(productId);
    }
  }

  onLike(productId: number): void {
    this.likeProduct.emit(productId);
  }

  getCategoryName(categoryId: number | undefined): string {
    if (categoryId === undefined) {
      return 'Products';
    }

    const categories: { [key: number]: string } = {
      1: 'Smartphones',
      2: 'Laptops',
      3: 'Headphones',
      4: 'Tablets'
    };
    return categories[categoryId] || 'Products';
  }
}
