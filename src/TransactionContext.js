
import React , {createContext, useReducer} from "react"
import TransactionReducer from './TransactionReducer'

/*
  Create Context file declare a initial state and import in that component 
  where we want to use it
*/
const initialTransactions = [ 
    {amount:500, desc: "Cash" },
    {amount:-300, desc: "Book" },
    {amount:-200, desc: "Camera" }

]
export const TransactionContext = createContext(initialTransactions);

/*
  Before writing this code we will create a Reducer and import reducer here 
  and write functionality how we want to update our initial state
*/

export const TransactionProvider = ({children})=>{
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions );

    function addTransaction(transObj){
        dispatch({
            type: "ADD_TRANSAC",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            },  
        })
    }
    return(
        <TransactionContext.Provider value={{ transactions: state, addTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
        
}