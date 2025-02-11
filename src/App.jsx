import { useState } from 'react'
import Typewriter , {TypewriterClass} from 'typewriter-effect';
import './App.css'

export default function BudgetApp() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (category && amount) {
      setExpenses([...expenses, { category, amount: parseFloat(amount) }]);
      setCategory("");
      setAmount("");
    }
  };

  // const spent = expenses.map(expense => 
  //   <tr>
  //   <td>{expense.category}</td>
  //   <td>{expense.amount}</td>
  //   </tr>
  // )

  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const remainingBudget = income - totalExpenses;

  return (
    <>
    <img src="assets/logo.svg" alt="Logo for the app" />
    <div className="text-gray-700 text-2xl font-[Courier_New]"> <Typewriter 
    onInit={(typewriter) => {
      typewriter.typeString('Welcome to Budget Manager <br/>')
      .pauseFor(1000)
      .typeString("Let's make your Wallet great again.")
      .start(); 
    }
  }
      options={{
        cursor: "",
        delay: 70
      }}
    
  /></div>

    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg mt-10 ">

      <h1 className="text-xl font-bold mb-4 text-gray-700">Budget Calculator</h1> 

      <div className="mb-4">
        <label className="block text-gray-700">Income:</label>
        <input 
          type="number" 
          className="w-full p-2 border rounded mt-1 mb-4 text-gray-700" 
          value={income} 
          onChange={(e) => setIncome(parseFloat(e.target.value) || 0)}
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Expense Category:</label>
        <input 
          type="text" 
          className="w-full p-2 border rounded mt-1 mb-4 text-gray-700" 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700">Amount:</label>
        <input 
          type="number" 
          className="w-full p-2 border rounded mt-1 mb-4 text-gray-700" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      
      <button 
        className="w-full bg-blue-500 text-white p-2 rounded" 
        onClick={addExpense}
      >
        Add Expense
      </button>
      
      <h2 className="mt-6 font-bold">Expenses:</h2>
      <ul className="mt-2 text-gray-700">
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between border-b p-2">
            <span>{expense.category}</span>
            <span>${expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      
      <h2 className="mt-6 font-bold">Summary:</h2>
      <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
      <p className={`font-bold ${remainingBudget < 0 ? "text-red-500" : "text-green-500"}`}>
        Remaining Budget: ${remainingBudget.toFixed(2)}
      </p>
    </div>

    {/* <div>
        <table className="text-gray-700 table-auto w-full">

        <tr>
          <th>Category</th>
          <th>Amount</th>
        </tr>
        {spent}
        </table>


    </div> */}
    </>
  );
}

