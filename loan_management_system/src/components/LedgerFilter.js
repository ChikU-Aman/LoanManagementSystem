import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { ledgerActions } from '../state';

const LedgerFilter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(state => state.transactionFilter)
    
    const onChangeTransactionType = (e) =>{
        dispatch(ledgerActions.changeTransactionType(e.target.value))
    }

    const onChangeTransactionDate = (e)=>{
        dispatch(ledgerActions.changeTransactionDate(e.target.value))
    }

    useEffect(()=>{
        dispatch(ledgerActions.changeTransactionType('All'))
        dispatch(ledgerActions.changeTransactionDate(''))
    },[])
    return (
        <div>
            <Form.Group className="mb-3">
                <Form.Label>Transaction Type</Form.Label>
                <select onChange={(e) =>onChangeTransactionType(e)}>
                    <option value="All">All Type</option>
                    <option value="Credit">Credit</option>
                    <option value="Debit">Debit</option>
                </select>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" placeholder="" name="Date" 
                onChange={(e) => onChangeTransactionDate(e)} />
            </Form.Group>

        </div>
    )
}

export default LedgerFilter