import { handleActions } from "redux-actions";
import { FETCH_CUSTOMER,INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from "../constants";


export const customers= handleActions( {[FETCH_CUSTOMER]:(state,action)=>[...action.payload],
    [INSERT_CUSTOMER]:(state,action)=>[...state,action.payload],
    [UPDATE_CUSTOMER]:(state,action)=>{

        var customerPayload=action.payload;
        const { id }= customerPayload;
        var initialValue=[];

        var newCustomers = state.reduce( (acc, customer) =>{
            if(customer.id=== id){
                return[...acc, customerPayload]
            }else{
                return[...acc, customer]
            }
        },initialValue);
        return newCustomers;
    },[DELETE_CUSTOMER]:(state,action)=>state.filter(c=> c.id !== action.payload),
},[])

  