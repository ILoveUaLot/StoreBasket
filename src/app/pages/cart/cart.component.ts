import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart, CartItem } from '../../models/cart.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table'
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterLink,
    MatTableModule,
    CommonModule,
    MatIconModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent{
  cart: Cart = { items: [{
    product: 'https://via.placeholder.com/150',
    name: 'snickers',
    price: 150,
    quantity: 1,
    id: 1
  }]}

  dataSource: Array<CartItem> = []
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]

  constructor() {
    this.dataSource = this.cart.items;
    console.log(this.dataSource);
  }

  getTotal(cartItems: Array<CartItem>): number
  {
    return cartItems
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

}
