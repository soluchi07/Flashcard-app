import { useState } from 'react'
import './App.css'
import '/src/components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card title="ques 1"/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
