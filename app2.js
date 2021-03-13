const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3000               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table><tr><th>Location</th>')
      res.write('<th>Number Of Hours</th>')
      res.write('<th>Amount Of Money</th>')
      res.write('</tr>') 
      res.write('<tr>')
      res.write('<td>Tirupati</td>')
      res.write('<td>Ten</td>')
      res.write('<td>&#36; 200</td>')
      res.write('</tr>')


      res.write('<tr>')
      res.write('<td>New delhi</td>')
      res.write('<td>six</td>')
      res.write('<td>&#36; 350</td>')
      res.write('</tr>')
      
      
      res.write('<tr>')
      res.write('<td>Goa</td>')
      res.write('<td>Seven</td>')
      res.write('<td>&#36; 400</td>')
      res.write('</tr>')


      res.write('<tr>')
      res.write('<td>Kolkata</td>')
      res.write('<td>Eight</td>')
      res.write('<td>&#36; 300</td>')
      res.write('</tr>')        
      res.write('</table>')  
      
      
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})