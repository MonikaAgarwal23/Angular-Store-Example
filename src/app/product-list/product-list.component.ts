import { Component } from '@angular/core';
import { products } from '../products';

// The @Component() decorator indicates that the following class is a component.
// @Component() also provides metadata about the component, including its selector, templates, and styles.

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  // The parent acts when the child raises the event.
  onNotify() {
    window.alert('You will be notified when the product goes on sale!');
  }
}
