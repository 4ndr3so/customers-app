import React from 'react';
import PropTypes from 'prop-types';
import {Link,BrowserRouter as Router} from 'react-router-dom'

const CustemerListItem = ({name, editAction,delAction,urlPah,dni}) => {
    return (
        <div>
            <div className="customers-list-item">
                <div className="field">
                    <Link to={`${urlPah}${dni}`}>{name}</Link>
                </div>
                <div className="field">
                    <Link to={`${urlPah}${dni}/edit`}>{editAction}</Link>
                </div>
                <div className="field">
                     <Link to={`${urlPah}${dni}/del`}>{delAction}</Link>
                </div>
            </div>
        </div>
    );
};

CustemerListItem.propTypes = {
    name: PropTypes.string.isRequired,
    editAction: PropTypes.string.isRequired,
    delAction: PropTypes.string.isRequired,
    urlPah: PropTypes.string.isRequired
};

export default CustemerListItem;