import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Table, Button } from 'reactstrap'


const CustomerDetails = () => {
    const [customers, setCustomers] = useState([])
    const navigate = useNavigate();

    const fetchCustomers = async () => {
        const data = await fetch("http://localhost:5000/Customers")
        const parsedData = await data.json()
        setCustomers(parsedData)
    }

    const getCustomerByEnqId = async (id) => {
        //console.log(id, 'Id')
        const data = await fetch(`http://localhost:5000/Customers/${id}`)
        const response = await data.json();
        // console.log(data, 'data');
        navigate("/viewcustomers", { state: { cust: response } })
    }


    useEffect(() => {
        fetchCustomers()
    }, [])

    return (
        <Container>
            <Table hover>
                <thead>
                    <th>ENQUIRY_ID</th>
                    <th>CUSTOMER_ID</th>
                    <th>FIRST_NAME</th>
                    <th>LAST_NAME</th>
                    <th>LOANT_TYPE</th>
                    <th>LOANA_MOUNT</th>
                    <th>ACTION</th>
                    <th>STATUS</th>
                </thead>
                <tbody>
                    {customers.map((cust) => {
                        return <tr>
                            <td>{cust.EnquiryId}</td>
                            <td>{cust.CustomerId}</td>
                            <td>{cust.FirstName}</td>
                            <td>{cust.LastName}</td>
                            <td>{cust.LoanType}</td>
                            <td>{cust.LoanAmount}</td>
                            <td><Button color="primary" onClick={() => getCustomerByEnqId(cust.id)}>View Details</Button></td>
                            <td style={{fontWeight:'bold'}}>{cust.LoanStatus}</td>
                            <td></td>
                        </tr>
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default CustomerDetails