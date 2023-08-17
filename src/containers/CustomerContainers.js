import React, { Component } from 'react';
import PropTypes from 'prop-types';
import  AppFrame  from "../components/AppFrame";
import CustomerList from "../components/CustomerList";
import CustomerActions from "../components/CustomersActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCustomers } from "../actions/fetchCustomers"
import { getCustomers } from '../selectors/customer';


class CustomerContainers extends Component {

    componentDidMount(){
        console.log(this.props.customers.length);
        if(this.props.customers.length === 0){
            console.log("desde customerss")
            this.props.fetchCustomers();
        }
        
    }
    handleAddNew=()=>{
        this.props.history.push('/customers/new')
    }
    
    renderBody = customers=>( 
        <div>
            <CustomerList customers={customers} urlPah={'customers/'}></CustomerList>
            <CustomerActions>
                <button onClick={this.handleAddNew}> Nuevo Cliente</button>
            </CustomerActions>
        </div>
)
        
   
    render() {
        return (
            <div>
                <AppFrame header={'Listado de clientes'} body={this.renderBody(this.props.customers)}> </AppFrame>
            </div>
        );
    }
}

CustomerContainers.propTypes = {
    fetchCustomers: PropTypes.func.isRequired,
    customers:PropTypes.array.isRequired,
};
const mapDispatchToProps=dispatch=>(
    {
        fetchCustomers:()=> dispatch(fetchCustomers())
    }
)
CustomerContainers.defaultProps ={
    customers:[]
}

const mapStateToProps = state=>({
    customers: getCustomers(state)
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerContainers));