import { useState } from 'react'
import './App.css'
import Card from '/src/components/Card.jsx'
import Card_DATA from './Cards.JSON'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card title="ques 1" description="N/A"/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
