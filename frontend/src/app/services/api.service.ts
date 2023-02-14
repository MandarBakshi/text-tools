import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  getText(formData: any) {
    let destUrl = `${this.baseUrl}/api/conversion/pdf-to-text/`;
    let res = this.http.post(destUrl, formData);

    return res;
  }

  getWordFile(formData: any) {
    let destUrl = `${this.baseUrl}/api/conversion/pdf-to-word/`;
    let res = this.http.post(destUrl, formData);

    return res;
  }

  getSummaryText(formData: any) {
    let destUrl = `${this.baseUrl}/api/summary/extractive-lex/`;
    let res = this.http.post(destUrl, formData);

    return res;
  }
}
