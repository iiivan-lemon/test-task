import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.sass';
import img from "../../mocks/airlines.png";
import {Button, Card} from "antd";

const card = props => (
	<Card title={<div className={'headerCard'}><img className={'logoAirlines'} src={img} /> <Button className={'primaryBtn'} type="primary">Купить<span>за 10000$</span></Button></div>} style={{ display: "flex", filter: "drop-shadow(2px 4px 6px lightgrey)" }} bodyStyle={{display: "flex",
		columnGap: "1rem",
		alignItems: "center",
		borderLeft: "solid 1px #f0f0f0",
		borderRadius: 0
	}} headStyle={{padding: "1rem"}}>
		<div className={'timeData'}>
			<span className={'time'}>9:25</span>
			<span>VVO Moscow</span>
			<span className={'subTitle'}>17 окт. 2018</span>
		</div>
		<div className={'flightBlock'}>
			<div className={'flightTrack'}>
				<span className={'flightStops subTitle'}>1 пересадка</span></div>
			<svg version="1.1"
					 id="svg2"
					 xmlns="http://www.w3.org/2000/svg"
					 xmlnXlink="http://www.w3.org/1999/xlink"
					 viewBox="0 0 1200 1200"
					 enableBackground="new 0 0 1200 1200"
					 width='20px'
					 xmlSpace="preserve"
					 fill="lightgrey"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
				<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
				<g id="SVGRepo_iconCarrier"> <path id="path16765"
																					 d="M321,1164h120l269.28-480.06H1020c0,0,180,0,180-83.94c0-84-180-84-180-84 H710.28L441,36H321l149.28,480H255.06L120,395.94H0l96.06,204L0,804h120l135.06-120.06h215.22L321,1164z"></path> </g></svg>				</div>
		<div className={'timeData'}>
			<span className={'time'}>9:25</span>
			<span>VVO Moscow</span>
			<span className={'subTitle'}>17 окт. 2018</span>
		</div>
	</Card>
);

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class card extends React.Component {
//   render() {
//     return <div>This is a component called card.</div>;
//   }
// }

const cardPropTypes = {
	// always use prop types!
};

card.propTypes = cardPropTypes;

export default card;
