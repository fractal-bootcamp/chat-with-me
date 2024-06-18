
import { useEffect, useState } from 'react'
import './App.css'
import { Thread } from './components/Thread'
import { motion } from 'framer-motion'

export type ThreadProps = {
  id: string,
  messages: MessageProps[]
}

const tempThreads = [
  {
    id: '1a',
    messages: [
      {
        id: '1a',
        sender: 'Bob',
        text: 'Hey this is bob the builder'
      },
      {
        id: '2a',
        sender: 'Jimmy',
        text: 'jimmy the ripper is coming for you'
      }
    ]
  },

]
// const tempThread = {
//   id: '1a',
//   messages: [
//     {
//       id: '1a',
//       sender: 'Bob',
//       text: 'Hey this is bob the builder'
//     },
//     {
//       id: '2a',
//       sender: 'Jimmy',
//       text: 'jimmy the ripper is coming for you'
//     }
//   ]
// }

export type MessageProps = {
  id: string,
  sender: string,
  text: string
}

export const SERVER_URL = 'http://localhost:3000'

function App() {

  const [step, setStep] = useState(0)
  const [threads, setThreads] = useState(structuredClone(tempThreads))

  useEffect(() => {
    getThreads()
    setTimeout(() => setStep(step + 1), 1000)
  }, [step])

  async function getThreads() {
    const response = await fetch(`${SERVER_URL}/allthreads`)
    const jsonResponse = await response.json()
    console.log('response', jsonResponse)
    setThreads(jsonResponse)

  }

  return (
    <>



      <div>
        <h1 className="text-4xl">
          Chat app
        </h1>

        <div className='flex flex-col gap-4'>

          {threads.map((thread) => {
            return <Thread {...thread} />
          })}
        </div>

      </div>
      <div>

      </div>



    </>
  )
}





export default App
