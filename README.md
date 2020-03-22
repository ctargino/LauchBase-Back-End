# LauchBase-Back-End

Seguimento do curso Rocketseat - Launchbase, onde, neste modulo, se trabalhou o Back End.

#Passos
- [x] Instalação dos pacotes do NodeJs (npm init -y)
- [x] Instalação dos pacotes do Express (npm install express)
- [x] Instalação do nodemon em modo Desenvolvimento (npm install -D nodemon)
- [x] Instalação do template engine "nunjunks" (npm install nunjunks)

Edição do package.json: 
```
  ""scripts": {
    "start": "nodemon server.js"
  },
```
Criação de rotas através do __express__: *"server.listen" "server.get" "function(req,res)" "res.send" "res.render"*

Todas as Html's foram refatoradas para o formato __".njk"__ e os recursos "block" utilizado de forma sistemática afim de limpar o cdigo e reutilizar códigos previamente escritos: *{{%block name%}} {{%endblock%}} {{%for 0 in 00%}} {{%endfor%}}*

#Arquivos trabalhados de forma extensiva :
- server.js
- layout.njk
- about.njk
- portfolio.njk
- video.njk*

![Captura de tela de 2020-03-22 16-56-36](https://user-images.githubusercontent.com/19331255/77259133-2f07fe00-6c5e-11ea-98cd-34ef2d49b152.png)
![Captura de tela de 2020-03-22 16-56-59](https://user-images.githubusercontent.com/19331255/77259135-316a5800-6c5e-11ea-834d-7df4ea97f15e.png)


