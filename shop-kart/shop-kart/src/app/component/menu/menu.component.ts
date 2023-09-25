import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  navbar: any = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
      name: 'Our Products', id: 'product', child: [
        { name: 'Product 1', id: 'p1' },
        { name: 'Product 2', id: 'p2' },
        { name: 'Product 3', id: 'p3' },
        { name: 'Product 4', id: 'p4' },
      ]
    },
    { name: 'Contact Us', id: 'contact' },
  ];

}
