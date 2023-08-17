import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import  AppFrame  from "./../components/AppFrame";
import CustomersActions from "./../components/CustomersActions";

class HomeContainer extends Component {
    handledOnClick=()=>{
        this.props.history.push('/customers');
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <AppFrame header="Home" body={
                    <div>
                        Esta es la pantalla inicial
                        <CustomersActions> 
                            <button onClick={this.handledOnClick}>Listado de clientes </button>
                           
                        </CustomersActions>
                    </div>
                }
                ></AppFrame>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

export default withRouter(HomeContainer);