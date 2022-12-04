import logo from './logo.svg';
import './App.css';
import Expense from './DemoWork/Expense';


function App() {
  const expenses =[
    {id:'e1',title:'paper',amount:6700,date:new Date(2020,5,12)},
    {id: 'e2',title:'boat',amount:8900,date:new Date(2021,4,22)},
    {id: 'e3',title:'car',amount:1200,date:new Date(2022,8,16)}
  ];
  return (
    <div className="App">
    <h2>Lets Get Started</h2> 
    <Expense title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></Expense>
    <Expense title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></Expense>
    <Expense title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></Expense>

    
    </div>
    
  );
}

export default App;
