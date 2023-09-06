import React from 'react';
import PropTypes from 'prop-types';
import './choosePanel.sass';
import {Card, Space, Radio, Button, Checkbox} from "antd";

//
// import type {CheckboxValueType} from 'antd/es/checkbox/Group';
// import type {SizeType} from 'antd/es/config-provider/SizeContext';
import CheckboxRow from "../checkboxRow";


// const plainOptions = ['Без пересадок'];

const choosePanel = props => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [checkedList, setCheckedList] = React.useState([]);
  // const checkAll = plainOptions.length === checkedList.length;
  // const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    // setCheckedList(e.target.checked ? plainOptions : []);
  };

  const renderCheckboxRows = (num) => {
    const rows = []
    for (let i = 0; i < num+1; i++) {
      rows.push(<CheckboxRow  getStop={getStop} stops={i} ></CheckboxRow>)
    }
    return rows
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [payment, setPayment] = React.useState('0'); // default is 'middle'



  const getStop = (number) => {
      setCheckedList([...new Set([...checkedList,number])])
      debugger
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (


    <Card title={<div className={'paymentBlock'}><span className={'titleFilter'}>ВАЛЮТА</span>
      <Radio.Group value={payment} onChange={(e) => {     props.changePayment(payment,e.target.value); setPayment(e.target.value)}}>
        <Radio.Button value="0">RUB</Radio.Button>
        <Radio.Button value="1">USD</Radio.Button>
        <Radio.Button value="2">EUR</Radio.Button>
      </Radio.Group>
    </div>} style={{height: 'fit-content', filter: "drop-shadow(2px 4px 6px lightgrey)"}}>
      <div className={"stopsBlock"}>
        <span className={'titleFilter'}>количество пересадок</span>
        {/*<Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>*/}
        {/*  Все*/}
        {/*</Checkbox>*/}

        {renderCheckboxRows(props.stops)}
        {/*<CheckboxRow></CheckboxRow>*/}
      </div>
    </Card>
  );
}

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section. 
// class choosePanel extends React.Component {
//   render() {
//     return <div>This is a component called choosePanel.</div>;
//   }
// }

const choosePanelPropTypes = {
  // always use prop types!
};

choosePanel.propTypes = choosePanelPropTypes;

export default choosePanel;
