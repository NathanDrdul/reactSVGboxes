import React, { Component } from 'react';

import './App.css';

import _ from 'lodash';

const	dataSet	=	[	
                  [0,100]	  , [0,200]   , [0,300]  ,[0,400]   , 
                  [100,100]	, [100,200] , [100,300],[100,400]	, 
                  [200,100]	, [200,200] , [200,300],[200,400]	, 
                  [300,100]	, [300,200] , [300,300],[300,400]	, 
                  [400,100]	, [400,200] , [400,300],[400,400]	, 
                  [500,100]	, [500,200] , [500,300],[500,400]	, 
                  [600,100]	, [600,200] , [600,300],[600,400]	,  
                  [700,100]	, [700,200] , [700,300],[700,400]	, 
                  [800,100]	, [800,200] , [800,300],[800,400]	,  
                ];



const colorArray = ["#66FCF1","#45A29E", "#246A73",  "#368F8B" ]

const colorFill = () => {
  return _.sample(colorArray);
}

const Databox = (props) => {

    const dataItems = props.data.map((number)=>
      <rect width="98" height="98" x={number[0]} y={number[1]} fill={colorFill()}/>
  );
  
    return dataItems;
 
};


class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React SVG Grid</h1>
        </header>
       

      <br />
      <svg width="800" height="500">
        <Databox data={dataSet}/> 
     </svg>
     
      </div>
    );
  }
}

export default App;
