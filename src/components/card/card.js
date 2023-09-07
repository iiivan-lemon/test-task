import React from 'react';
import PropTypes from 'prop-types';
import styles from './card.sass';
import img from "../../mocks/airlines.png";
import {Button, Card} from "antd";

const card = props => {
  return (
    <>{!props.data ? <Card title={'не найдено'} style={{display: "flex", filter: "drop-shadow(2px 4px 6px lightgrey)",     width: "42rem"}}
                      bodyStyle={{
                        display: "flex",
                        columnGap: "1rem",
                        alignItems: "center",
                        borderLeft: "solid 1px #f0f0f0",
                        borderRadius: 0
                      }} headStyle={{padding: "1rem"}}>
    </Card> : <Card title={<div className={'headerCard'}>
      <img className={'logoAirlines'} src={img}/>
      <Button className={'primaryBtn'}
              type="primary">Купить<span>{'за ' + props.data.price + ((+props.data?.payment === 0) ? ' ₽' : (+props.data?.payment === 1 ? ' $' : ' €'))}
		</span></Button></div>} style={{display: "flex", filter: "drop-shadow(2px 4px 6px lightgrey)"}} bodyStyle={{
      display: "flex",
      columnGap: "1rem",
      alignItems: "center",
      borderLeft: "solid 1px #f0f0f0",
      borderRadius: 0
    }} headStyle={{padding: "1rem"}}>
      <div className={'timeData'}>
        <span className={'time'}>{props.data.departure_time}</span>
        <span>{props.data.origin + ", " + props.data.origin_name}</span>
        <span className={'subTitle'}>{props.data.departure_date}</span>
      </div>
      <div className={'flightBlock'}>
        <div className={'flightTrack'}>
          <span
            className={'flightStops subTitle'}>{(props.data.stops === 0) ? 'без пересадок' : (props.data.stops + ((props.data.stops === 1) ? ' пересадка' : ' пересадки'))}</span>
        </div>
        <svg version="1.1"
             id="svg2"
             xmlns="http://www.w3.org/2000/svg"
             xmlnXlink="http://www.w3.org/1999/xlink"
             viewBox="0 0 1200 1200"
             enableBackground="new 0 0 1200 1200"
             width='20px'
             xmlSpace="preserve"
             fill="lightgrey">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path id="path16765"
                  d="M321,1164h120l269.28-480.06H1020c0,0,180,0,180-83.94c0-84-180-84-180-84 H710.28L441,36H321l149.28,480H255.06L120,395.94H0l96.06,204L0,804h120l135.06-120.06h215.22L321,1164z"></path>
          </g>
        </svg>
      </div>
      <div className={'timeData'}>
        <span className={'time'}>{props.data.arrival_time}</span>
        <span>{props.data.destination + ", " + props.data.destination_name}</span>
        <span className={'subTitle'}>{props.data.arrival_date}</span>
      </div>
    </Card>}</>
  )
};

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
