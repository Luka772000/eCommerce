import { IOrder } from '../shared/models/order';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getUsersOrders() {
    return this.http.get(this.baseUrl + 'orders');
  }
  getOrderDetailed(id: number) {
    return this.http.get(this.baseUrl + 'orders/' + id);
  }
}
