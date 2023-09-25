import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './model/contact';
import { Observable } from 'rxjs';
import { Product } from './model/product';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private contactList: Contact[];

  constructor(private httpClient: HttpClient) {
    this.contactList = [];
  }

  saveContact(contact: Contact): Number {
    contact.contactId = this.contactList.length + 1;
    this.contactList.push(contact);
    return contact.contactId;
  }

  getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>("https://fakestoreapi.com/products/categories");
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>("https://fakestoreapi.com/products");
  }
}
