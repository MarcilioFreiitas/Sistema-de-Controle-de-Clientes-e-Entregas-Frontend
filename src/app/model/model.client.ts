import { Endereco } from './model.endereco';

// cliente.model.ts
export class Client {
  id!: number;
  nome!: string;
  cnpj!: string;
  endereco!: Endereco; // Outro modelo para o endereço
}
