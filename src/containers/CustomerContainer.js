import React, { Component } from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { getCustomerByDni } from '../selectors/customer';
import { Route, withRouter } from 'react-router-dom';
import  CustomerEdit  from "./../components/CustomerEdit";
import  CustomerData  from "./../components/CustomerData";
import { fetchCustomers } from "./../actions/fetchCustomers";
import { updateCostomer } from "./../actions/updateCostomer";
import { deleteCustomer } from "./../actions/deleteCustomer";
import { SubmissionError } from 'redux-form';

class CustomerContainer extends Component {
    
    componentDidMount(){
        if(!this.props.customer){
            console.log("fetch desde customer")
            this.props.fetchCustomers();
        }
    }

    constructor(props) {
        super(props);
        // No llames this.setState() aquí!
        console.log("Se crea CustomerContainer");
      }
      //<p>Datos del cliente : {this.props.customer.name}</p>

      handleSubmit=values=>{
          console.log(JSON.stringify(values))

          const {id}=values;
          return this.props.updateCostomer(id,values).then(r=>{
              if(r.error){
                  throw new SubmissionError(r.payload);
              }
          });
      }
      handleSubmitSucces=()=>{
        this.props.history.goBack(); 
      }
      handleOnBack=()=>{
        this.props.history.goBack();
      }

      renderBody(){
          return <Route path="/customers/:dni/edit" children={({match:isEdit} )=>
              (
                <Route path="/customers/:dni/del" children={({ match:isDelete }) =>(  this.renderCustomerControl(isEdit,isDelete))   
                } />
              )
             }></Route>
      }

    handleOnDelete=id=>{
        console.log("borrado")
        this.props.deleteCustomer(id).then(v=>{
            this.props.history.goBack();
        })
    }
    renderCustomerControl=(isEdit,isDelete)=>{
        if(this.props.customer){
            const CustomerControl= isEdit ? CustomerEdit: CustomerData;
            return <CustomerControl {...this.props.customer} onSubmit={this.handleSubmit} 
                onSubmitSuccess={this.handleSubmitSucces}
            onBack={this.handleOnBack}
            isDeleteAllow={!!isDelete}
            onDelete={this.handleOnDelete}
            />
            //return <CustomerControl initialValues={this.props.customer}/>
            }
            return null;
        }
        
    
    render() {
     
        return (
            <div>
                <AppFrame header={`Cliente ${this.props.dni}`} body={this.renderBody()}></AppFrame>
            </div>
        );
    }
}


CustomerContainer.propTypes = {
    dni:PropTypes.string.isRequired,
    customer:PropTypes.object,
    fetchCustomers:PropTypes.func.isRequired,
    updateCostomer:PropTypes.func.isRequired,
    deleteCustomer:PropTypes.func.isRequired,
};

const mapStateToProps=(state,props)=>({
    
   customer : getCustomerByDni(state, props)
   
});
export default withRouter(connect(mapStateToProps, {
    fetchCustomers,updateCostomer,deleteCustomer
})(CustomerContainer));