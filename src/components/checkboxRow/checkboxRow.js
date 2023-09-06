import React from 'react';
import PropTypes from 'prop-types';
import styles from './checkboxRow.sass';
import {Button, Checkbox} from "antd";

const checkboxRow = props => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [stop,setStop] = React.useState(props.stops)
	return(
	<div className={'row'}><Checkbox onClick={props.getStop(stop)}>
		{(!props.stops ? 'Без пересадок' :( (stop === 1) ? (stop + ' пересадка'): (stop + ' пересадки')))}
	</Checkbox><Button type="text">только</Button></div>
)};

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
