import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm,Field } from 'redux-form';
import { connect } from 'react-redux';
import { setPropsAsInitial } from '../helpers/setPropsAsInitial';
import  CustomersActions  from "./../components/CustomersActions";
import { Prompt } from 'react-router-dom';
import { Component } from 'react';

const isRequired=value=>{
    console.log(!value && "este campo es requerido")
    return !value && "este campo es requerido"
}

var isNumber=dato=>(
    isNaN(Number(dato)) && "El campo debe ser un número"
)
var validate=values=>{
    const error={};
    if(!values.name){
        error.name="El campo nombre es requerido"
    }
    if(!values.dni){
        error.dni="El campo DNI es requerido"
    }
    return error;
}
const toNumber=value=>value && Number(value);
const toUpper=value=>value && value.toUpperCase();
const toLowe=value=>value && value.toLowerCase();
const toGrow=(value,previusValue,values)=>value && (!previusValue ? value :  (value>previusValue? value:previusValue));

class CustomerEdit  extends Component{

    componentDidMount(){
        if(this.txt){
            this.txt.focus();
        }
    }

    renderField=({input,meta,type,field,name,withFocus})=>(
        <div>
            <label htmlFor={name}>{field}</label> 
            <input {...input} type={!type ? "text": type} ref={withFocus && (txt => this.txt=txt)}/>{ meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
        )

    render(){
       const {handleSubmit,submitting,onBack,pristine,submitSucceeded}=this.props;
            return (
                <div>
                    <h2>Edición del cliente</h2>
                    <form onSubmit={handleSubmit}>   
        
                            <Field withFocus={true} name="name" component={this.renderField} type="text"  field="Nombre" ></Field>
                   
                            <Field name="dni" component={this.renderField} type="text"  field="DNI"></Field>
                  
                            <Field name="age" component={this.renderField} type="number" validate={isNumber} field="Edad" parse={toNumber} normalize={toGrow}></Field>      
                            <CustomersActions>
                                <button type="submit" disabled={pristine || submitting}>Aceptar</button>
                                <button type="button" disabled={ submitting} onClick={onBack}>Cancelar</button>
                            </CustomersActions>
                            <Prompt
                            when={!pristine && !submitSucceeded}
                            message="Se perderán los datos si continúa"></Prompt>
                    </form>
                </div>
            );
    }
};

CustomerEdit.propTypes = {
    name: PropTypes.string,
    dni: PropTypes.string,
    age: PropTypes.number,
    onBack:PropTypes.func.isRequired,
};
const customerEditForm=reduxForm({
    form:"CustomerEdit",
    validate
    })(CustomerEdit);
//export default connect(    (state,props)=>({initialValues:props})    )(customerEditForm);
export default setPropsAsInitial(customerEditForm);
