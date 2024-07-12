import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../../model/model.client';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-cliente-service',
  templateUrl: './cliente-service.component.html',
  styleUrl: './cliente-service.component.css',
})
export class ClienteServiceComponent {
  private apiUrl = 'http://localhost:8080/v1/clientes'; // Seu endpoint de API

  constructor(private http: HttpClient) {}

  cadastrarCliente(clienteData: any) {
    // Aqui você pode fazer a requisição POST para o servidor
    return this.http.post(this.apiUrl, clienteData);
  }

  getClientes(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl);
  }
}
