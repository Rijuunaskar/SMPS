import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormStep1 from './page/FormStep1'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormStep1 />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
