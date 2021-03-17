const http =require("http")


const hostname = process.env.hostname || '127.0.0.1'
const port = process.env.port || 3000




let Subjects = ["Design patterns","Devops","Cloud Computing","AI","DataScience","IOS"]

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Context-Type','text/plain')
    res.write(Subjects[Math.floor(Math.random()*Subjects.length)])
    res.end()
})
server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
  })