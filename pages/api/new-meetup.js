// api/new-meetup

//req object will have the data for incoming request.  
// res object will be handling the response. 
function handler(req, res) {
   if(req.method === 'POST') {
       const data = req.body;

       const { title, image, address, description } = data;  

       
   }
}

export default handler;