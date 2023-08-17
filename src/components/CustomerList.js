import React from 'react';
import PropTypes from 'prop-types';
import CustemerListItem from './CustemerListItem';

const CustomerList = ({customers,urlPah}) => {
    return (
        <div>
            <div className="customers-list">
                {
                    customers.map(c=>
                        <CustemerListItem key={c.dni } dni={c.dni} name={c.name} editAction={"Editar"} delAction={"Eliminar"} urlPah={urlPah}></CustemerListItem>
                        )
                }
            </div>
        </div>
    );
};

CustomerList.propTypes = {
    customers: PropTypes.array.isRequired,
    urlPah: PropTypes.string.isRequired,
};

export default CustomerList;