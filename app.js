const express = require('express');
const app = express();
const email = require('./Email');
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/status", (request, response) => {
   const status = {
      Status: "Running"
   };

   response.send(status);
});

app.get("/email", (request, response) => {
    const recipient = request.query.Recipient;
    const subject = request.query.Subject;
    const message = request.query.Message;
    const status = {
        Status: ""
    }
    try {
        email.email(recipient, subject, message);
        status.Status = "Email sent successfully!"
       
    }
    catch (error) {
        status.Status(error)
        
    }
    response.send(status);

});