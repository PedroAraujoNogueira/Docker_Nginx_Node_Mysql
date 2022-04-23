# Docker_Nginx_Node_Mysql  

### Como executar o projeto:  
-> Para ver o resultado basta, após baixar o projeto, usar o seguinte comando no seu terminal:  
docker-compose up -d --build  

### Descrição do projeto:  
Esse projeto tem o objetivo de gerar um arquivo Docker Compose que
suba um container de um NGINX que servirá como proxy Reverso, um container de uma aplicação Nodejs que será acessada pelo NGINX e um container com MySQL que será acessada pela aplicação Nodejs. Além disso para garantir que a aplicação Nodejs só suba após o MySQL ter subido usamos o Dockerize que é um script que vai garantir que o nosso Container Node só seja iniciado após o container Mysql estar no ar.  

### Requisitos de software e bibliotecas:  
-> Docker e Docker Compose. 

### Links úteis:  
-> Link do Dockerize: https://github.com/jwilder/dockerize     
-> Proxy Reverso com NGINX: https://javascript.plainenglish.io/using-nginx-as-a-reverse-proxy-for-containerized-node-js-microservices-e7c4800f05a1  
