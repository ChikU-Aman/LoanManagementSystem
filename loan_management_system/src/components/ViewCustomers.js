import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Form, Input, Label, FormGroup, Button, Row, Col } from 'reactstrap'


const ViewCustomers = () => {

    const location = useLocation()
    const [cust, setCustomer] = useState({})
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        setCustomer({ ...cust, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log("location:", location)
        setCustomer(location.state.cust)
    }, [])

    const backToDetails = (e) => {
        navigate('/customerdetails')
    }

    const [disable, setDisable] = useState(true)
    const handleChange = event => {
        if (event.target.checked) {
            setDisable(false)
        } else {
            setDisable(true)
        }

    }


    const onClickApprove = async (e) => {
        const status = e.target.id
        const requestOptions = {
            'method': 'PUT',
            'body': JSON.stringify({
                EnquiryId: cust.EnquiryId,
                CustomerId: cust.CustomerId,
                FirstName: cust.FirstName,
                LastName: cust.LastName,
                LoanType: cust.LoanType,
                dob: cust.dob,
                CorrespondanceAddress: cust.CorrespondanceAddress,
                PermanentAddress: cust.PermanentAddress,
                Pincode: cust.Pincode,
                MobileNo: cust.MobileNo,
                Email: cust.Email,
                LoanAmount: cust.LoanAmount,
                InterestRate: cust.InterestRate,
                CibilScore: cust.CibilScore,
                Organisation: cust.Organisation,
                Designation: cust.Designation,
                Salary: cust.Salary,
                PAN: cust.PAN,
                Adhar: cust.Adhar,
                BankName: cust.BankName,
                IFSCCode: cust.IFSCCode,
                LoanStatus: status
            }),
            'headers': { "Content-type": "application/json" }

        }

        const data = await fetch(`http://localhost:5000/Customers/${cust.id}`, requestOptions)
        const response = await data.json();
        navigate('/customerdetails')

    }

    return (
        <Container>
            <h4>Customer details</h4>
            <hr style={{ color: 'red', backgroundColor: 'black', height: 3 }} />
            <Form >
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="enquiryid">Enquiry Id</Label>
                            <Input id="enquiryid" name="EnquiryId" placeholder="Enquiry Id" type="text" value={cust.EnquiryId}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="customerid">Customer Id</Label>
                            <Input id="customerid" name="CustomerId" placeholder="Customer Id" type="text" value={cust.CustomerId}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="firstname">First Name</Label>
                            <Input id="firstname" name="FirstName" placeholder="First Name" type="text" value={cust.FirstName}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="lastname">Last Name</Label>
                            <Input id="lastname" name="lastname" placeholder="Last Name" type="text" value={cust.LastName}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="loantype">Loan Type</Label>
                            <Input id="loantype" name="loantype" placeholder="LoanType" type="text" value={cust.LoanType}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="dob">DOB</Label>
                            <Input id="dob" name="dob" placeholder="DOB" type="text" value={cust.DOB}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="correspondanceaddress">Correspondance Address</Label>
                            <Input id="correspondanceaddress" name="correspondanceaddress" placeholder="Correspondance Address" type="text" value={cust.CorrespondanceAddress}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="permanentaddress">Permanent Address</Label>
                            <Input id="permanentaddress" name="permanentaddress" placeholder="Permanent Address" type="text" value={cust.PermanentAddress}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="pincode">Pincode</Label>
                            <Input id="pincode" name="pincode" placeholder="Pincode" type="text" value={cust.Pincode}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="mobileno">Mobile No</Label>
                            <Input id="mobileno" name="mobileno" placeholder="MobileNo" type="text" value={cust.MobileNo}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input id="email" name="email" placeholder="Email" type="text" value={cust.Email}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="loanamount">Loan Amount</Label>
                            <Input id="loanamount" name="loanamount" placeholder="Loan Amount" type="text" value={cust.LoanAmount}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="interestrate">Interest Rate</Label>
                            <Input id="interestrate" name="interestrate" placeholder="InterestRate" type="text" value={cust.InterestRate}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="cibilscore">CibilScore</Label>
                            <Input id="cibilscore" name="cibilscore" placeholder="CibilScore" type="text" value={cust.CibilScore}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="organisation">Organisation</Label>
                            <Input id="organisation" name="organisation" placeholder="Organisation" type="text" value={cust.Organisation}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="designation">Designation</Label>
                            <Input id="designation" name="designation" placeholder="Designation" type="text" value={cust.Designation}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="salary">Salary</Label>
                            <Input id="salary" name="salary" placeholder="Salary" type="text" value={cust.Salary}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="Pan">PAN</Label>
                            <Input id="Pan" name="Pan" placeholder="PAN" type="text" value={cust.PAN}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="adhar">Adhar</Label>
                            <Input id="adhar" name="adhar" placeholder="Adhar" type="text" value={cust.Adhar}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="bankname">Bank Name</Label>
                            <Input id="bankname" name="bankname" placeholder="BankName" type="text" value={cust.BankName}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="ifsccode">IFSC Code</Label>
                            <Input id="ifsccode" name="ifsccode" placeholder="IFSCCode" type="text" value={cust.IFSCCode}
                                onChange={onChangeHandler} disabled="true" />
                        </FormGroup>
                    </Col>
                </Row>
                <hr style={{ color: 'red', backgroundColor: 'black', height: 3 }} />
                <h4>Verification</h4>
                <Row>
                    <Col md={6}>
                        <FormGroup check>
                            <Input type="checkbox" id="chkbox" onChange={handleChange} />
                            {' '}
                            <Label check>
                                Is Verification
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col md={6} className='col text-right'>
                        <Button color="success" id="Approved" disabled={disable} onClick={onClickApprove}>Approve</Button>{' '}
                        <Button color="danger" id="Disapproved" disabled={disable} onClick={onClickApprove}>Disapprove</Button>{' '}
                        <Button color="primary" onClick={backToDetails}>Back</Button>
                    </Col>
                </Row>
                <>
                </><br /><br /><br />
            </Form>
        </Container>
    )
}

export default ViewCustomers