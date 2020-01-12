import React, { Component } from 'react';
import logo from './logo.svg';
import soo from './soo.jpg'
import './App.css';
import Customer from './components/Customer';

const customers =[
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name':'박지',
    'birthday':"951212",
    'gender':'여자',
    'job': '모델'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/2',
    'name':'수지',
    'birthday':"951212",
    'gender':'여자',
    'job': '모델'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/3',
    'name':'고지',
    'birthday':"951212",
    'gender':'남자',
    'job': '모델'
  }
];  

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          customers.map(c=>{
            return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} job={c.job}/>
          })
        }
      </div>
    );
  }
}

export default App;
