import React from 'react';
import PropTypes from 'prop-types';
import styles from './checkboxRow.sass';
import {Button, Checkbox} from "antd";

const checkboxRow = props => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [stop,setStop] = React.useState(props.stops)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	React.useEffect(()=>{

		setChecked(props.checked)
	},[props.checked])
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [checked, setChecked]  = React.useState(props.checked)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [onlyOne, setOnlyOne] = React.useState(false)
	return(
	<div className={'row'}><Checkbox checked={checked} onClick={() => { setChecked(!checked); props.getStop(stop,!checked,false)}}>
		{(!props.stops ? 'Без пересадок' :( (stop === 1) ? (stop + ' пересадка'): (stop + ' пересадки')))}
	</Checkbox>{<Button style={{ visibility: (checked)?'visible': 'hidden'}}  type="text" onClick={() => {
		setOnlyOne(true)
		props.getStop(stop,checked,true)
	}}>только</Button>}</div>
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
