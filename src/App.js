import React, { Component } from 'react';
import logo from './logo.svg';
import soo from './soo.jpg'
import './App.css';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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
        <Table>
          <TableHead>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableHead>
          <TableBody>
            {customers.map((c,i)=>(<Customer key={i} id={c.id} image={c.image} name={c.name} birthday={c.birthday} job={c.job}/>))}

          </TableBody>
        </Table>
      </div>
    );
  }
}

export default App;
