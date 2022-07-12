import './content.css';
import oyu from "/home/zhadyra/hackaton_test/client/src/img/oyu.png";
import oyusec from "/home/zhadyra/hackaton_test/client/src/img/oyu2.png";
import five from "/home/zhadyra/hackaton_test/client/src/img/5tenge.png";
import ten from "/home/zhadyra/hackaton_test/client/src/img/10tenge.png";
import twenty from "/home/zhadyra/hackaton_test/client/src/img/20tenge.png";
import fifty from "/home/zhadyra/hackaton_test/client/src/img/50tenge.png";
import hundred from "/home/zhadyra/hackaton_test/client/src/img/100tenge.png";


import * as React from 'react';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const cashTitles = [
  { 
    id: 200,
    title: '200тг',
    sum: [fifty, twenty, fifty, twenty, five,twenty, twenty, ten, five]
  },
  { 
    id: 500,
    title: '500тг',
    sum: [hundred, fifty, fifty, twenty, twenty,  ten,twenty, twenty, twenty, ten, ten,hundred, ten, five,fifty,five]
  },
  { 
    id: 1000,
    title: '1000тг',
    sum: [hundred, five,five, hundred, hundred, hundred, fifty, fifty, hundred, hundred,fifty, fifty, fifty,twenty,twenty,twenty, ten, ten,twenty,twenty, ten, five,five]
  },
  { 
    id: 2000,
    title: '2000тг',
    sum: [ hundred, hundred, hundred, fifty, fifty,twenty,twenty,twenty,twenty,twenty, ten, ten, five,five,five,five,
      fifty,fifty, twenty,twenty,fifty, fifty, fifty,twenty,ten,ten,five,hundred,ten, hundred, hundred,five,ten, hundred, hundred, hundred, hundred, fifty, fifty, fifty, fifty, fifty,twenty,twenty,twenty,five,five,twenty,twenty, ten, ten, ten, five,five]
  },
]

function Content() {

  const [showCoins, setShowCoins] = useState(false);
  const [coinArray, setCoinArray] = useState([]);

  const handleTwoHundred = ({id, sum}) => {
    console.log(id, sum)
    setCoinArray(sum)
    setShowCoins(true)
  }

  return (
    <div className="main-container">
      <div className="row">
        <div className="col-1"><img src={oyu} alt="oyu" style={{width:'37%', height:'100%'}}/></div>
        <div className="col"><h1>Шашу</h1></div>
        <div className="col-2"><img src={oyusec} alt="oyu2" style={{width:'37%', height:'100%'}}/></div>
      </div>

      <div className="row-main">
        {coinArray.map((coins)=>(
          <Button className='btn'>
            <img src={coins} alt="" className="coin" style={showCoins ? {display: 'inline'}: {display: 'none'}  }/>
          </Button>
        ))}
        
      </div>

      <div className="row-w-btns">
        <Stack spacing={2} direction="row">
        {cashTitles.map((money)=>(
          <Button variant="contained" key={money.id} onClick={()=>handleTwoHundred(money)}>{money.title}</Button>
        ))}
          
          
        </Stack>
      </div>

    </div>
  );
}

export default Content;