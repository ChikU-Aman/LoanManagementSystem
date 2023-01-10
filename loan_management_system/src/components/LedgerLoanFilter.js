import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ledgerActions } from '../state';

const LedgerLoanFilter = () => {
    const dispatch = useDispatch();

    const onChangeTransactionType = (e) =>{
        console.log(e);
        dispatch(ledgerActions.changeLedgerType(e.target.value))
    }

    const onChangeName = (e) =>{
        dispatch(ledgerActions.onChangeName(e.target.value))
    }
    return (
        <div className="d-flex col-md-12">
            <Form.Group className="d-flex my-3 col-md-6 me-3">
                <Form.Label className="col-md-3">Enter to search</Form.Label>
                <Form.Control type="text" placeholder="" name="query" 
                onChange={(e) => onChangeName(e)} />
            </Form.Group>
            <Form.Group className="my-3 col-md-4">
                <Form.Label className="col-md-3">Loan Type</Form.Label>
                <select onChange={(e) =>onChangeTransactionType(e)}>
                    <option value="All">All Type</option>
                    <option value="Education Loan">Education Loan</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Car Loan">Car Loan</option>
                </select>
            </Form.Group>
        </div>
    )
}

export default LedgerLoanFilter