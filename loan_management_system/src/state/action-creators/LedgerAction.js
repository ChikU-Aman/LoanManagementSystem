import { store } from "../store";

const getAllRecord = () => {
    return async () => {
        const data = await fetch("http://localhost:5000/LoanDetails");
        const parsedData = await data.json();
        store.dispatch({ type: 'GET_ALL_RECORD', payload: parsedData });
    }
}

const getAllTransaction = (referenceNo) => {
    return async () => {
        const data = await fetch("http://localhost:5000/TransactionsDetail");
        const parsedData = await data.json();

        let filteredTxnByRefNo = parsedData.filter((d) => {
            return d.ReferenceNo == referenceNo;
        });
        store.dispatch({ type: 'GET_ALL_TRANSACTION', payload: filteredTxnByRefNo });
    }
}

const addNewTransaction = (transaction) => {
    transaction.TransactionsDetailId = Math.floor(1000 + Math.random() * 9000);
    return async () => {
        await fetch('http://localhost:5000/TransactionsDetail', {
            method: 'POST',
            body: JSON.stringify(transaction),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                getAllTransaction(transaction.ReferenceNo);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
}

const changeTransactionType = (value) =>{
    return async () =>{
        store.dispatch({type:'CHANGE_TRANSACTION_TYPE',payload:value})
    }
}

const changeTransactionDate = (date) =>{
    return async () =>{
        store.dispatch({type:'CHANGE_TRANSACTION_DATE',payload:date})
    }
}

const changeLedgerType = (value) =>{
    console.log("value", value);
    return async () =>{
        store.dispatch({type:'CHANGE_LOAN_TYPE',payload:value})
    }
}

const onChangeName = (query) =>{
    return async ()=>{
        store.dispatch({type:'CHANGE_LOAN_NAME',payload:query})
    }
}

export { getAllRecord, getAllTransaction, 
    addNewTransaction, changeTransactionType, changeTransactionDate
, changeLedgerType, onChangeName }