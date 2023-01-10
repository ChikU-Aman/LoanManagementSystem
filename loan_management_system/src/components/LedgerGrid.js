import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { ledgerActions } from '../state';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import LedgerLoanFilter from './LedgerLoanFilter'
import { Button } from 'reactstrap';

const LedgerGrid = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const data = useSelector(state => state.ledgerRecord);

    const filter = useSelector(state => state.ledgerFilter)
    
    const goToRecordButton = (ledgerData) => {
        navigate("/Ledger", { state: { ledger: ledgerData } })
    }

    const transformedLedger = () => {
        let transformledger = data;

        if(filter.loanType!='All'){
            transformledger = transformledger.filter((t) => {
                return t.LoanType.toLowerCase().includes(filter.loanType.toLowerCase())
              })
        }

        if(filter.loanName!=""){
            transformledger = transformledger.filter((t) => {
                return t.FirstName.toLowerCase().includes(filter.loanName.toLowerCase())
              })
        }
        
        return transformledger;
        // console.log(filter)
        // console.log(data);

    }

    useEffect(() => {
        dispatch(ledgerActions.getAllRecord())
    }, [])

    return (
        <Container>
            <LedgerLoanFilter/>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Reference No</th>
                        <th>Name</th>
                        <th>Loan Amount</th>
                        <th>Interest Rate</th>
                        <th>Loan Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {transformedLedger().map(dat => (<tr>
                        <td onClick={() => goToRecordButton(dat)}>{dat.ReferenceNo}</td>
                        <td>{`${dat.FirstName} ${dat.LastName}`}</td>
                        <td>{dat.LoanAmount}</td>
                        <td>{dat.InterestRate}</td>
                        <td>{dat.LoanType}</td>
                        <td><Button color='primary' onClick={() => goToRecordButton(dat)}>View</Button></td>
                    </tr>))}
                    {/* {data.map(dat => (<tr>
                        <td onClick={() => goToRecordButton(dat)}>{dat.ReferenceNo}</td>
                        <td>{`${dat.FirstName} ${dat.LastName}`}</td>
                        <td>{dat.LoanAmount}</td>
                        <td>{dat.InterestRate}</td>
                        <td>{dat.LoanType}</td>
                        <td>{dat.BankName}</td>
                    </tr>))} */}
                </tbody>
            </Table>
        </Container>

    )
}

export default LedgerGrid