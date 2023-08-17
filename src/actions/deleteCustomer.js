import {  UPDATE_CUSTOMER, DELETE_CUSTOMER } from "./../constants";
import { createAction } from "redux-actions";
import {  apiDelete } from "../api";
import { urlCustomers } from "../api/url";




export const deleteCustomer =createAction(DELETE_CUSTOMER,id =>apiDelete(urlCustomers, id)());