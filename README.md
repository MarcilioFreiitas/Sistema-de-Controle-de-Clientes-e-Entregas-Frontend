
# Sistema de Controle de Clientes e Entregas (Front-End) 🚀



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

4. **API's usadas** 🗺️:
   - Google Maps API 🗺️:
     A Google Maps API é uma ferramenta poderosa para exibir mapas interativos em aplicativos. Ela permite que você mostre 
     os clientes cadastrados em um mapa, facilitando a visualização e a navegação.
     A integração com a Google Maps API é essencial para fornecer uma experiência visual rica para os usuários.
   - API de Geocodificação do Google 🌐:
     Essa API é responsável por converter endereços em coordenadas geográficas (latitude e longitude). Quando um cliente é 
     cadastrado com um endereço, você pode usar essa API para obter as coordenadas correspondentes.
     Isso é especialmente útil para preencher automaticamente o formulário com as informações corretas e garantir que os 
     clientes estejam posicionados corretamente no mapa.
    - API de clientes 🚀:
     O sistema possui uma API de clientes para salvar sua informações e guardar no banco de dados da aplicação.
   
## Tecnologias Utilizadas 🛠️

- Angular
- Google Maps API (para exibir os clientes no mapa)

## Como Executar o Projeto ▶️

1. Baixe o docker e instale em sua máquina.
2. clone a imagem do projeto no docker.hub: https://hub.docker.com/repository/docker/marcilio777/maximatech/general.
3. Veja as imagens disponíveis em sua máquina com o comando: `docker images`.
4. Execute a imagem do projeto no contêiner docker com o comando: `docker run nome_da_imagem`.
5. Acesse a aplicação em `http://localhost:4200`.

## Docker Compose

`version: '3.8'
services:
  frontend:
    image: marcilio777/maximatech:frontend
    ports:
      - "4200:80"
  backend:
    image: marcilio777/maximatech:backend
    ports:
      - "8080:8080"`

Acesse a aplicação em: `http://localhost:4200`.

## Imagens 🚀

## Página inicial
![Captura de tela 2024-07-11 175303](https://github.com/user-attachments/assets/a7a5c0b9-8a2f-415e-92e5-396762eda017)


## Mapa de clientes cadastrados
![Captura de tela 2024-07-12 114345](https://github.com/user-attachments/assets/02c4c807-b93d-4784-90ae-2ec08c1ed886)


## Cadastro de clientes
![Captura de tela 2024-07-11 175335](https://github.com/user-attachments/assets/b4e8c27b-217e-41cd-877e-9e286fbe10b0)


## Contribuição 🤝

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

Link do backend: https://github.com/MarcilioFreiitas/Sistema-de-Controle-de-Clientes-e-Entregas/tree/main


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8.








