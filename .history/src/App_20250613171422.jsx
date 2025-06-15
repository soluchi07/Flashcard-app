import { useState } from 'react'
import './App.css'
import Card from '/src/components/Card.jsx'
import Card_DATA from '/src/components/Cards.JSON'

function App() {
  const [index, setIndex] = useState(0)

  const flipCard = () => {
    setIndex((prevIndex) => {
      if (prevIndex < Card_DATA.length - 1) {
        return prevIndex + 1
      } else {
        return 0
      }
    })
  }
  return (
    <>
      <Card title="ques 1" description="N/A" onClick={flipCard}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
