// client-registration.component.ts

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css'],
})
export class ClientRegistrationComponent {
  formValues: any = {}; // Inicialize com os campos do formulário

  constructor(private http: HttpClient) {}

  onSubmit() {
    // Obtenha a geolocalização (latitude e longitude) antes disso
    const endereco = `${this.formValues.rua}, ${this.formValues.numero}, ${this.formValues.cidade}, ${this.formValues.estado}`;
    this.getGeolocation(endereco);
  }

  getGeolocation(address: string) {
    const apiKey = 'AIzaSyDn5ro8nDDMxGZfRYdkbFpGfM2Ns70CXb0'; // Substitua pela sua chave de API do Google Geocoding
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

    this.http.get(apiUrl).subscribe(
      (data: any) => {
        if (data.status === 'OK' && data.results.length > 0) {
          const location = data.results[0].geometry.location;
          this.formValues.latitude = location.lat;
          this.formValues.longitude = location.lng;
          this.saveClientData();
        } else {
          console.error('Endereço não encontrado.');
          alert('Endereço não encontrado. Verifique os dados informados.');
        }
      },
      (error) => {
        console.error('Erro ao obter geolocalização:', error);
        alert('Erro ao obter geolocalização. Tente novamente mais tarde.');
      }
    );
  }

  saveClientData() {
    const clienteData = {
      codigo: this.formValues.codigo,
      nome: this.formValues.nome,
      cnpj: this.formValues.cnpj,
      endereco: {
        rua: this.formValues.rua,
        numero: this.formValues.numero,
        cidade: this.formValues.cidade,
        estado: this.formValues.estado,
        cep: this.formValues.cep,
        latitude: this.formValues.latitude,
        longitude: this.formValues.longitude,
      },
    };

    // Envie os dados para o backend (implemente conforme sua lógica)
    this.http.post('http://localhost:8080/v1/clientes', clienteData).subscribe(
      (response) => {
        console.log('Cliente cadastrado com sucesso!', response);
        alert('Cliente cadastrado com sucesso!');
        this.formValues = {}; // Limpe os campos após o cadastro

        // Lógica adicional após o cadastro:
        // - Redirecionar para outra página
        // - Atualizar a lista de clientes, se necessário
      },
      (error) => {
        console.error('Erro ao cadastrar cliente:', error);
        alert(
          'Erro ao cadastrar cliente. Tente novamente. Verifique todos os campos do formulário!'
        );
      }
    );
  }
}
