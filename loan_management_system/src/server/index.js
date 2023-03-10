const path = require('path');
const express = require('express');
const transporter = require('./config');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

app.post('/send', (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of receivers
      subjesct : req.body.suject,//Subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        
      
      <li>CustomerID: ${req.body.customerid}</li>
      <li>CustomerName: ${req.body.customername}</li>
      <li>LoanType: ${req.body.loantype}</li>
      <li>DOB: ${req.body.dateofbirth}</li>
      <li>CorrespondanceAddress: ${req.body.correspondanceaddress}</li>
      <li>Permanent Address: ${req.body.permanentaddress}</li>
      <li>PinCode: ${req.body.pincode}</li>
      <li>Mobile Number: ${req.body.mobileno}</li>
      <li>Email: ${req.body.email}</li>
      <li>Loan Amount: ${req.body.loanamount}</li>
      <li>PAN Number: ${req.body.panno}</li>
      <li>Adhaar Number: ${req.body.adhaar}</li>
      <li>Bank Name: ${req.body.bankname}</li>
      <li>IFSC Code: ${req.body.ifsccode}</li>
        
      </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
  }
});

app.listen(3030, () => {
  console.log('server start on port 3030');
});