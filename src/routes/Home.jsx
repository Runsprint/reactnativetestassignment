import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  const arr1= [
      {"id": 1,"body": "First Item","name": "პირველი ელემენტი"},
      {"id": 2,"body": "Second Item","name": "მეორე ელემენტი"},
      {"id": 2,"body": "Second Item","name": "მეორე ელემენტი"},
      {"id": 2,"body": "Second Item","name": "მეორე ელემენტი"},
      {"id": 3,"body": "Third Item","name": "მესამე ელემენტი"},
      {"id": 4,"body": "Forth Item","name": "მეოთხე ელემენტი"},
      {"id": 4,"body": "Forth Item","name": "მეოთხე ელემენტი"},
      {"id": 5,"body": "Fifth Item","name": "მეხუთე ელემენტი"},
      {"id": 6,"body": "Sixth Item","name": "მექვსე ელემენტი"},
      {"id": 7,"body": "Seventh Item","name": "მეშვიდე ელემენტი"},
      {"id": 7,"body": "Seventh Item","name": "მეშვიდე ელემენტი"},
    ]
    const arr2= [
    {"id": 11,"body": "Eleventh Item","name": "მეთერთმეტე ელემენტი"},
    {"id": 12,"body": "Twelfth Item","name": "მეთორმეტე ელემენტი"},
    {"id": 12,"body": "Twelfth Item","name": "მეთორმეტე ელემენტი"},
  ]  
const sumArray = (arr1,arr2) =>{
  const sumArray = []
  for (var i = 0; i < arr1.length; i++) {
      sumArray.push(arr1[i] + arr2[i]);
  }
  return sumArray
}
  return (
    <div className='App'>
      <header className='App-header'>
        <Link onClick={sumArray} to='list'>დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  )
}
