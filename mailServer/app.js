// const express = require('express');
// const cors=require("cors");
// const app = express();
// const PORT = process.env.PORT || 5000;
// app.use(express.json());
// const nodemailer = require('nodemailer');
// const sgMail=require('@sendgrid/mail');

// const sendGridTransport = require('nodemailer-sendgrid-transport');
// const SENDGRID_API = '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';
// sgMail.setApiKey(SENDGRID_API);
// const transporter = nodemailer.createTransport(
//   sendGridTransport({
//     auth: {
//       api_key: SENDGRID_API
//     }
//   })
// );
// const msg = {
//      to: 'guruvignesh.274m@gmail.com', // Change to your recipient
//      from: 'vigneshguru274@gmail.com', // Change to your verified sender
//      subject: 'Sending with SendGrid is Fun',
//      text: 'and easy to do anywhere, even with Node.js',
//      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//    }
// sgMail.send(msg)
//    .then((resp) => {
  
//     console.log("resp",resp);
   

//    })
//    .catch((err) => {
//      console.log(err);
//    });
// const corsOptions ={
//      origin:'*', 
//      credentials:true,            //access-control-allow-credentials:true
//      optionSuccessStatus:200,
//   }
//   app.use(cors(corsOptions))
// app.post('/send', (req, res) => {
//   const { name, email, text, subject } = req.body;
//   console.log("bodddy",req.body);
//   sgMail.send({
//      to: email,
//      from: 'vigneshguru274@gmail.com',
//      subject: subject,
//      text:"gurue",
//      html: `<h3>${name}</h3><p>${text}</p>`
//    })
//    .then((resp) => {
// //     resp.json();
//     console.log("resp",resp);
//     return resp;

//    })
//    .catch((err) => {
//      console.log(err);
//    });
// //   transporter
// //     .sendMail({
// //       to: email,
// //       from: 'vigneshguru274@gmail.com',
// //       subject: subject,
// //       text:"gurue",
// //       html: `<h3>${name}</h3><p>${text}</p>`
// //     })
// //     .then((resp) => {
// // //     resp.json();
// //      console.log("resp",resp);
// //      return resp;

// //     })
// //     .catch((err) => {
// //       console.log(err);
// //     });
// });
// app.listen(PORT, () => {
//   console.log('server is running on', PORT);
// });
