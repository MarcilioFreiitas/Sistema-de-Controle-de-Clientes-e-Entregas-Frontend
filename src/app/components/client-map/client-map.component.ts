import { Component, OnInit } from '@angular/core';
import { ClienteServiceComponent } from '../cliente-service/cliente-service.component';
import { Client } from '../../model/model.client';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-client-map',
  templateUrl: './client-map.component.html',
  styleUrls: ['./client-map.component.css'],
})
export class ClientMapComponent implements OnInit {
  clientes: Client[] = [];
  center: google.maps.LatLngLiteral = { lat: -14.181272, lng: -54.917385 };
  zoom = 5;
  modalAberto = false;
  clienteSelecionado: Client | undefined;

  constructor(
    private clienteService: ClienteServiceComponent,
    private zone: NgZone // Adicione o serviço NgZone
  ) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(
      (response) => {
        this.clientes = response;
        this.exibirMapaComMarcadores();
      },
      (error) => {
        console.error('Erro ao obter dados dos clientes:', error);
      }
    );
  }

  exibirMapaComMarcadores(): void {
    const map = new google.maps.Map(
      document.getElementById('map') as HTMLElement,
      {
        center: this.center,
        zoom: this.zoom,
      }
    );

    this.clientes.forEach((cliente) => {
      if (
        cliente.endereco &&
        cliente.endereco.latitude &&
        cliente.endereco.longitude
      ) {
        const marker = new google.maps.Marker({
          position: {
            lat: cliente.endereco.latitude,
            lng: cliente.endereco.longitude,
          },
          map,
          title: cliente.nome,
        });

        // Adicione um ouvinte de evento de clique ao marcador
        marker.addListener('click', () => {
          // Aqui você pode abrir um modal ou janela com as informações do cliente
          this.zone.run(() => {
            // Execute dentro da NgZone
            this.exibirInformacoesCliente(cliente);
          });
        });
      }
    });
  }

  exibirInformacoesCliente(cliente: Client): void {
    this.clienteSelecionado = cliente;
    this.modalAberto = true;
  }
}
