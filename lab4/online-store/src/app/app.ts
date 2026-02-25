
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './service/product.service';
import { Category } from './models/category.models';
import { Product } from './models/product.model';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[];
  selectedCategoryId: number | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    this.products = this.productService.getProductsByCategory(categoryId);
  }

  onDeleteProduct(productId: number): void {
    this.productService.deleteProduct(productId);
    // Update the displayed products after deletion
    if (this.selectedCategoryId !== null) {
      this.products = this.productService.getProductsByCategory(this.selectedCategoryId);
    }
  }

  onLikeProduct(productId: number): void {
    this.productService.likeProduct(productId);
    // Update the like count in the displayed products
    if (this.selectedCategoryId !== null) {
      // Create a new array reference to trigger change detection
      this.products = [...this.productService.getProductsByCategory(this.selectedCategoryId)];
    }
  }
}
