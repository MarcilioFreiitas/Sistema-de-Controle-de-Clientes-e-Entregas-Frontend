
# Sistema de Controle de Clientes e Entregas (Front-End) 🚀

## Descrição

O Sistema de Controle de Clientes e Entregas é uma aplicação front-end desenvolvida em Angular para uma empresa que trabalha com vendas. O objetivo principal é gerenciar o cadastro de clientes e suas localizações geográficas, permitindo que as entregas sejam realizadas de forma precisa.

## Funcionalidades

1. **Cadastro de Clientes** 📝:
   - O sistema permite o cadastro de clientes com as seguintes informações obrigatórias:
     - Código do cliente
     - Nome do cliente
     - CNPJ do cliente
   - O endereço do cliente também é cadastrado e deve conter a localização geográfica (latitude e longitude).

2. **Validações** ✅:
   - Um cliente não pode ser cadastrado sem nome, CNPJ e endereço com localização.

3. **Visualização no Mapa** 🗺️:
   - Os clientes cadastrados podem ser visualizados em um mapa interativo.
   - Opções de filtro permitem segmentar os clientes com base em critérios específicos (por exemplo, região, tipo de cliente etc.).

## Tecnologias Utilizadas 🛠️

- Angular
- Google Maps API (para exibir os clientes no mapa)

## Como Executar o Projeto ▶️

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Execute o servidor de desenvolvimento com `ng serve`.
4. Acesse a aplicação em `http://localhost:4200`.

## Contribuição 🤝

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Docker Compose

version: '3.8'
services:
  frontend:
    image: marcilio777/maximatech:frontend
    ports:
      - "4200:80"
  backend:
    image: marcilio777/maximatech:backend
    ports:
      - "8080:8080"

https://hub.docker.com/repository/docker/marcilio777/maximatech/general

Acesse a aplicação em `http://localhost:4200`

Lembre-se de adaptar essa descrição conforme o contexto do seu projeto. Se precisar de mais detalhes ou tiver outras dúvidas, estou à disposição! 😊🚀

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.








