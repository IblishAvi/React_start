import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <h1>Hii ,I have started learning React. </h1>
//     </>
//   )
// }
class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>It's a {this.props.model}!</h2>;
  }
}
class Garage extends React.Component {
  render() {
    return (
      <div>
      <h1>Who lives in Your Garage?</h1>
      <Car model="Mustang" />
      </div>
    );
  }
}

// export default App
export default Garage



