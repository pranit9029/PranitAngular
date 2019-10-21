import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Employee } from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  url = "https://localhost:44391/"
  constructor(private http: HttpClient) { }
  createemployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url + 'api/UserMasters', employee)
  }
}
