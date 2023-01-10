const reducer = (ledgerRecord = [], action) => {
    switch (action.type) {
        case 'GET_ALL_RECORD':
            ledgerRecord = action.payload;
            return (ledgerRecord);    
        default:
            return ledgerRecord;
    }
}

export default reducer;