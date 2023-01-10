const reducer = (transactionRecord = [], action) => {
    switch (action.type) {
        case 'GET_ALL_TRANSACTION':
            transactionRecord = action.payload;
            return (transactionRecord);    
        default:
            return transactionRecord;
    }
}

export default reducer;