import React from 'react';
import PropTypes from 'prop-types';
import styles from './checkboxRow.scss';
import {Button, Checkbox} from "antd";

const checkboxRow = props => (
	<div><Checkbox>
		Без пересадок
	</Checkbox><Button type="text">только</Button></div>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class checkboxRow extends React.Component {
//   render() {
//     return <div>This is a component called checkboxRow.</div>;
//   }
// }

const checkboxRowPropTypes = {
	// always use prop types!
};

checkboxRow.propTypes = checkboxRowPropTypes;

export default checkboxRow;
