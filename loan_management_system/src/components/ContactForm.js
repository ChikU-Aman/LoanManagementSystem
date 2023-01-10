import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const ContactForm = () => {


  const [user, setUser] = useState({
    customerid: '',
    customername: '',
    loantype: '',
    dateofbirth: '',
    correspondanceaddress: '',
    permanentaddress: '',
    pincode: '',
    mobileno: '',
    email: '',
    loanamount: '',
    panno: '',
    adhaar: '',
    bankname: '',
    ifsccode: ''
  });


  const sendEmail = async (event) => {
    await fetch('http://localhost:5000/profile', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {

      })
      .catch((err) => {
        console.log(err.message);
      });

  }
const onInputChange = (event) => {
  setUser({ ...user, [event.target.name]: event.target.value })
  console.log(user);
};

return (
  <div className='first'>
    {/* {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )} */}
    <form onSubmit={sendEmail}>
      <Form.Group controlId="customerid">
        <Form.Label>CustomerID</Form.Label>
        <Form.Control
          type="text"
          name="customerid"
          value={user.customerid}
          placeholder="Enter id"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="customername">
        <Form.Label>FirstName</Form.Label>
        <Form.Control
          type="text"
          name="customername"
          value={user.customername}
          placeholder="Enter name"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>LoanType</Form.Label>
        <Form.Control
          type="text"
          name="loantype"
          value={user.loantype}
          placeholder="Type of loan"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="dateofbirth">
        <Form.Label>DOB</Form.Label>
        <Form.Control
          type="text"
          name="dateofbirth"
          value={user.dateofbirth}
          placeholder="DD/MM/YYYY"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="correspondenceaddress">
        <Form.Label>CorrespondanceAddress</Form.Label>
        <Form.Control
          type="text"
          name="correspondanceaddress"
          value={user.correspondanceaddress}
          placeholder="Address1"
          onChange={(e) => onInputChange(e)}

        />
      </Form.Group>
      <Form.Group controlId="permanentaddress">
        <Form.Label>Permanent Address</Form.Label>
        <Form.Control
          type="text"
          name="permanentaddress"
          value={user.permanentaddress}
          placeholder="Address2"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="pincode">
        <Form.Label>PinCode</Form.Label>
        <Form.Control
          type="text"
          name="pincode"
          value={user.pincode}
          placeholder="Enter pincode"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="mobileno">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          name="mobileno"
          value={user.mobileno}
          placeholder="Enter your Mobile number"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={user.email}
          placeholder="Enter your email"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="loanamount">
        <Form.Label>Loan Amount</Form.Label>
        <Form.Control
          type="text"
          name="loanamount"
          value={user.loanamount}
          placeholder="Enter amount"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>

      <Form.Group controlId="panno">
        <Form.Label>PAN Number</Form.Label>
        <Form.Control
          type="text"
          name="panno"
          value={user.panno}
          placeholder="XXX XXX XXX"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="adhaar">
        <Form.Label>Adhaar Number</Form.Label>
        <Form.Control
          type="text"
          name="adhaar"
          value={user.adhaar}
          placeholder="XXX XXX XXX XXX"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="bankname">
        <Form.Label>Bank Name</Form.Label>
        <Form.Control
          type="text"
          name="bankname"
          value={user.bankname}
          placeholder="Enter bank name"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group controlId="ifsccode">
        <Form.Label>IFSC Code</Form.Label>
        <Form.Control
          type="text"
          name="ifsccode"
          value={user.ifsccode}
          placeholder="Enter IFSC CODE"
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </form>
  </div>
);
    }

export default ContactForm