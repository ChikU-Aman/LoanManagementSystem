import { combineReducers } from "redux";
import LedgerReducer from './LedgerReducer'
import TransactionReducer from './TransactionReducer'
import TransactionFilterReducer from './TransactionFilterReducer'
import LedgerFilterReducer from './LedgerFilterReducer'

const reducers = combineReducers({
    ledgerRecord: LedgerReducer,
    transactionRecord : TransactionReducer,
    transactionFilter: TransactionFilterReducer,
    ledgerFilter : LedgerFilterReducer
});

export default reducers