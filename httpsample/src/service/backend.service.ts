import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
  export class BackendService {
    private apiUrl = 'https://api.isevenapi.xyz/api/iseven'

    constructor(private http: HttpClient) {}

    getIsEven(num: number) {
      const url = this.apiUrl + num;
      return this.http.get<IsEvenApiResponse>(url);
    }
  }