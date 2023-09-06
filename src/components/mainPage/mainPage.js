import React from 'react';
import './mainPage.sass';
import {Button, Space} from "antd";
import Card from "../card";
import ChoosePanel from "../choosePanel";



const exRate = {
	"1":90,
	"2":100,
	"0":1,
};
const PRECISION = 10_000;
const mainPage = props => {
	const renderCards = (data,sort) => data.sort((a,b)=> (!sortPrice) ? (a.price-b.price): b.price-a.price).map(el=>{ if(!el.payment) el['payment']='0' ; return el}).map(el => (<Card data={el}></Card>))
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [sortPrice, setSortPrice] = React.useState(0)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [stops, setStops] = React.useState(props.data.sort((a,b)=> b.stops - a.stops)[0].stops)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	// const [sortDepature, setSortDepature] = React.useState(0)
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [data,setData]= React.useState(props.data)
	const changePayment = (previousPayment, payment) =>{
		if(!props.data){
			return
		}
		setData(props.data.map(el=> {
			if (previousPayment === payment){
				return el
			}
			if (previousPayment !== 0) {
				const conversion = el.price * exRate[previousPayment];
				el.price = Math.round((conversion / exRate[payment]) * PRECISION) / PRECISION;
			} else if (payment !== 0) {
				const conversion = el.price / exRate[payment];
				el.price = Math.round((conversion / exRate[previousPayment]) * PRECISION) / PRECISION;
			}
			el['payment'] = payment
			return el}))
	}
	return (
	<div className={'page'}>

		<ChoosePanel changePayment={changePayment} stops={stops}></ChoosePanel>
		<div className={'subpage'}>
			<Button type={'text'} onClick={() => {setSortPrice(+!sortPrice)}}>{'Сортировать по цене '+ ((sortPrice) ? '↑':'↓')}</Button>
			{/*<Button type={'text'} onClick={() => {setSortDepature(+!sortDepature)}}>{'Сортировать по дате отправления '+ ((sortDepature) ? '↑':'↓')}</Button>*/}
			<Space direction="vertical" size={16}>
				{renderCards(props.data, sortPrice)}
			</Space></div>
</div>

)};

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
