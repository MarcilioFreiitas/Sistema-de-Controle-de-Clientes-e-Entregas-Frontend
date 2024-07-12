# Use a imagem base do Node.js
FROM node:20

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copie os arquivos do projeto para o contêiner
COPY . .

# Instale as dependências
RUN npm install --force

# Execute o build do projeto
RUN npm install @angular/cli -g --force

# Exponha a porta 80 (ou a porta que você desejar)
EXPOSE 80

# Comando para iniciar o servidor
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "80"]
