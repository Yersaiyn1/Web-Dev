 import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<void>();
  @Output() like = new EventEmitter<void>();

  getStars(rating: number): string {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + '½'.repeat(half) + '☆'.repeat(empty);
  }

  shareOnWhatsApp(): void {
    const url = `https://wa.me/?text=${encodeURIComponent('Check this product: ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  onLike(): void {
    this.like.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }
}
