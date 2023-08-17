import {  UPDATE_CUSTOMER } from "./../constants";
import { createAction } from "redux-actions";
import {  apiPut } from "../api";
import { urlCustomers } from "../api/url";


const customers=[
    { "dni":"2870000","name":"Juan Pereza","age":37},
    { "dni":"23123123","name":"Pepito Ruiz","age":23},
    { "dni":"4578453","name":"Pablo Aldana","age":34}
]
const url='http://localhost:3001/customers';

var apiFetchCustomer =()=> fetch(url).then(v=>v.json())

export const updateCostomer =createAction(UPDATE_CUSTOMER,(id,customer) =>apiPut(urlCustomers, id, customer)());