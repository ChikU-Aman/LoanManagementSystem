const reducer = (ledgerFilter = 
    {
        loanType : "All",
        loanName :""
    },action) =>{
    switch(action.type){
        case 'CHANGE_LOAN_TYPE':
            return {...ledgerFilter,loanType:action.payload};
        case 'CHANGE_LOAN_NAME':
            return {...ledgerFilter,loanName:action.payload};
        default:
            return ledgerFilter;
    }
}

export default reducer;