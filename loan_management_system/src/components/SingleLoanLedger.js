import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import { useDispatch } from 'react-redux';
import { ledgerActions } from '../state';
import { useLocation } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import LedgerFilter from './LedgerFilter';

const SingleLoanLedger = (props) => {
  const dispatch = useDispatch();
  const transactions = useSelector(state => state.transactionRecord);
  const location = useLocation();
  const loanDetail = location.state.ledger;
  const [addModalShow, setAddModalShow] = useState(false);
  let filterTransaction = useSelector(state => state.transactionFilter);
  

  const [transaction, setTransaction] = useState(
    {
      "ReferenceNo": loanDetail.ReferenceNo,
      "TransactionsDetailId": "",
      "Date": "",
      "TransactionAmount": 0,
      "TransactionType": "",
      "TransactionDescription": ""
    }
  );


  const transformedTransaction = () => {
    let transformTransaction = transactions;

    if (filterTransaction.transactionType != 'All') {
      transformTransaction = transformTransaction.filter((t) => {
        return t.TransactionType.toLowerCase().includes(filterTransaction.transactionType.toLowerCase())
      })
    }

    if (filterTransaction.transactionDate != '') {
      transformTransaction = transformTransaction.filter((t) => {
        return t.Date.toLowerCase().includes(filterTransaction.transactionDate.toLowerCase())
      })
    }

    return transformTransaction;
  }

  const addTransaction = () => {
    dispatch(ledgerActions.addNewTransaction(transaction))
    setAddModalShow(false);
    window.location.reload(false);
  }

  const changeHandler = (e) => {
    console.log(e.target.value);
    setTransaction({ ...transaction, [e.target.name]: e.target.value });

  }

  useEffect(() => {
    dispatch(ledgerActions.getAllTransaction(loanDetail.ReferenceNo))
  }, [])
  return (
    <Container>
      <Container>
        <Modal
          show={addModalShow}
          onHide={() => setAddModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add Transaction
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Reference No</Form.Label>
                <Form.Control type="text" placeholder="Reference No" value={loanDetail.ReferenceNo} onChange={(e) => changeHandler(e)} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="" name="Date" value={transaction.Date} onChange={(e) => changeHandler(e)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Transaction Amount</Form.Label>
                <Form.Control type="text" placeholder="Transaction Amount" name="TransactionAmount" value={transaction.TransactionAmount} onChange={(e) => changeHandler(e)} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Transaction Type</Form.Label>
                <Form.Select name="TransactionType" value={transaction.TransactionType}  onChange={(e)=>changeHandler(e)}>
                  <option>Select Type</option>
                  <option value="Credit">Credit</option>
                  <option value="Debit">Debit</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Transaction Description</Form.Label>
                <Form.Control type="text" placeholder="Transaction Description" name="TransactionDescription" value={transaction.TransactionDescription} onChange={(e)=>changeHandler(e)}  />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" type="submit" onClick={(e) => addTransaction()}>
              Submit
            </Button>
            <Button onClick={() => setAddModalShow(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
      <Container>
        <Container>
          <Row>
            <Col>
              <label>Reference No</label>
              &nbsp;&nbsp;&nbsp;&nbsp;<span>{loanDetail.ReferenceNo}</span>
            </Col>
          </Row>

          &nbsp;
          <Row>
            <label style={{ paddingBottom: "10px" }}>Personal Details</label>

            <Col>
              <label>First Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={loanDetail.FirstName}></input>
            </Col>
            <Col>
              <label>Last Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={loanDetail.LastName}></input>
            </Col>
            <Col>
              <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={loanDetail.Email}></input>
            </Col>
            <Col>
              <label>Mobile</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={loanDetail.MobileNo}></input>
            </Col>
          </Row>
          <Row style={{ "paddingTop": "20px" }}>
            <Col>
              <label>Corresspondenece Address</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input style={{ "height": "100px", "width": "300px" }} type="text" value={loanDetail.CorresspondeneceAddress}></input>
            </Col>
            <Col>
              <label>Permanenet Address</label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input style={{ "height": "100px", "width": "300px" }} type="text" value={loanDetail.PermanenetAddress}></input>
            </Col>
          </Row>
          <Row>
            <label style={{ paddingBottom: "10px", paddingTop: "10px" }}>Document Details</label>
            <Col>
              <label>Adhar Card</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={loanDetail.AdharCardNo} ></input>
            </Col>
            <Col>
              <label>Pan Card</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={loanDetail.PanCardNo}></input>
            </Col>
          </Row>
          <Row>
            <label style={{ paddingBottom: "10px", paddingTop: "10px" }}>Bank Details</label>
            <Col>
              <label>Bank Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={loanDetail.BankName}></input>
            </Col>
            <Col>
              <label>IFSC Code</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={loanDetail.IFSCCode} ></input>
            </Col>
          </Row>
          <Row>
            <label style={{ paddingBottom: "10px", paddingTop: "10px" }}>Loan Details</label>
            <Col>
              <label>Loan Type</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={loanDetail.LoanType}></input>
            </Col>
            <Col>
              <label>Loan Amount</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={loanDetail.LoanAmount}></input>
            </Col>
            <Col>
              <label>Interest Rate</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text" value={loanDetail.InterestRate}></input>
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }}>
            <Col>
              <label>Monthly EMI</label>
              <input type="text" value={loanDetail.MonthlyPayment}></input>
            </Col>
            <Col>
              <label>Loan Period</label>
              <input type="text" value={loanDetail.LoanPeriodInMonth}></input>
            </Col>
          </Row>
        </Container>
        <Container style={{ "paddingTop": "50px" }}>
          <input type="text" placeholder='Enter to search'></input>
          <Button variant="primary" onClick={() => setAddModalShow(!addModalShow)}>Add Transaction</Button>
        </Container>
        <LedgerFilter />
        <Container style={{ "paddingTop": "10px" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>ReferenceNo</th>
                <th>Transaction Detail Id</th>
                <th>Date</th>
                <th>Transaction Description</th>
                <th>Transaction Type</th>
                <th>Transaction Amount</th>
               
              </tr>
            </thead>
            <tbody>
              {transformedTransaction().map((txn) => (
                <tr>
                  <td>{txn.id}</td>
                  <td>{txn.ReferenceNo}</td>
                  <td>{txn.TransactionsDetailId}</td>
                  <td>{txn.Date}</td>
                  <td>{txn.TransactionDescription}</td>
                  <td>{txn.TransactionType}</td>
                  <td>{txn.TransactionAmount}</td>
                
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </Container>
    </Container>


  )
}

export default SingleLoanLedger