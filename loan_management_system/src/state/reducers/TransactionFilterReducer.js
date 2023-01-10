const reducer = (transactionFilter = 
    {
        transactionType : "All",
        transactionDate :""
    },action) =>{
    switch(action.type){
        case 'CHANGE_TRANSACTION_TYPE':
            return {...transactionFilter,transactionType:action.payload};

        case 'CHANGE_TRANSACTION_DATE':
            return {...transactionFilter,transactionDate:action.payload};
        default:
            return transactionFilter;
    }
}

export default reducer;