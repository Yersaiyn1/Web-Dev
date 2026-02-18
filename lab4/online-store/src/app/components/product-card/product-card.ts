import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})

export class ProductCard {

  @Input() product!: Product;


  getStars(rating: number): string {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '★'.repeat(full) + '½'.repeat(half) + '☆'.repeat(empty);
  }

   shareOnWhatsApp(): void {
    const url = `https://wa.me/?text=${encodeURIComponent('Посмотри этот товар: ' + this.product.link)}`;
    window.open(url, '_blank');
  }

   shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  }
