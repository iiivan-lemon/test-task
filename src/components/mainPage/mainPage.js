import React from 'react';
// import PropTypes from 'prop-types';
import './mainPage.sass';
import {Button, Space} from "antd";
import img from '../../mocks/airlines.png'
import Card from "../card";
import choosePanel from "../choosePanel";
import ChoosePanel from "../choosePanel";
const mainPage = props => (
	<div className={'page'}>
		<ChoosePanel></ChoosePanel>
		<Space direction="vertical" size={16}>
			<Card></Card>
			<Card></Card>
			<Card></Card>
		</Space></div>

);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class mainPage extends React.Component {
//   render() {
//     return <div>This is a component called mainPage.</div>;
//   }
// }

const mainPagePropTypes = {
	// always use prop types!
};

mainPage.propTypes = mainPagePropTypes;

export default mainPage;
