# LauchBase-Back-End

Seguimento do curso Rocketseat - Launchbase, onde, neste modulo, se trabalhou o Back End.

#Passos
1. Instalação dos pacotes do NodeJs (npm init -y)
2. Instalação dos pacotes do Express (npm install express)
3. Instalação do nodemon em modo Desenvolvimento (npm install -D nodemon)
4. Instalação do template engine "nunjunks" (npm install nunjunks)

Edição do package.json: ""scripts": {
    "start": "nodemon server.js"
  },

Criação de rotas através do *express*: "server.listen" "server.get" "function(req,res)" "res.send" "res.render"

Todas as Html's foram refatoradas para o formato ".njk" e os recursos "block" utilizado de forma sistemática afim de limpar o cdigo e reutilizar códigos previamente escritos: *{{%block name%}} {{%endblock%}} {{%for 0 in 00%}} {{%endfor%}}*

*Arquivos trabalhados de forma extensiva :
ºserver.js
ºlayout.njk
ºabout.njk
ºportfolio.njk
ºvideo.njk*

![Captura de tela de 2020-03-22 16-56-36](https://user-images.githubusercontent.com/19331255/77259133-2f07fe00-6c5e-11ea-98cd-34ef2d49b152.png)
![Captura de tela de 2020-03-22 16-56-59](https://user-images.githubusercontent.com/19331255/77259135-316a5800-6c5e-11ea-834d-7df4ea97f15e.png)


