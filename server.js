const express = require('express')
const nunjunks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjunks.configure("views", {
  express:server,
  autoescape: false,
  noCache: true,
})

server.listen(5000, function () {
  console.log("server is running")
})

server.get("/", function (req, res) {
  const aboutdata = {
    avatar_url : "https://avatars3.githubusercontent.com/u/19331255?s=460&v=4",
    name: "Caio Targino",
    role: "Desenvolvedor FullStack",
    description: "Programador full-stack em progresso.",
    links: [
      { name: "Github", url: "https://github.com/ctargino"},
      { name: "Linkedin", url: "https://linkedin.com/in/caiotargino"},
      { name: "Facebook", url: "https://facebook.com/caiotar"}
    ],
  }
    return res.render("about", { about: aboutdata })
})

server.get("/portfolio", function (req, res) {
  return res.render("portfolio", { items: videos })
})

server.get("/cv", function (req, res) {
  return res.render("cv")
})

server.get("/video", function (req, res) {
  const id = req.query.id
  
  const video = videos.find(function(video) {
    return video.id == id
  })

  if (!video) {
    return res.send("Video not found")
  }
  
  return res.render ("video", { item: video })
})