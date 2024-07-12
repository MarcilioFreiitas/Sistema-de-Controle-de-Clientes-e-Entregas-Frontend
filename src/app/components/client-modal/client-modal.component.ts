// client-modal.component.ts
import { Component, Input } from '@angular/core';
import { Client } from '../../model/model.client'; // Importe o modelo Client

@Component({
  selector: 'app-client-modal',
  templateUrl: './client-modal.component.html',
  styleUrls: ['./client-modal.component.css'],
})
export class ClientModalComponent {
  @Input() cliente: Client | undefined; // Recebe o cliente como entrada
  modalAberto = false; // Variável de controle para abrir/fechar o modal

  abrirModal(): void {
    this.modalAberto = true;
  }

  fecharModal(): void {
    this.modalAberto = false;
  }
}
