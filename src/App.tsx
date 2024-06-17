
import { useEffect, useState } from 'react'
import './App.css'

type ThreadProps = {
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

const SERVER_URL = 'http://localhost:3000'

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
        {threads.map((thread) => {
          return <Thread {...thread} />
        })}

      </div>
      <div>
        <button onClick={getThreads} className='border border-blue-500'>
          Get threads
        </button>


      </div>



    </>
  )
}

const Thread = (props: ThreadProps) => {

  const { id } = props
  const { messages } = props

  return (
    <div className='flex flex-col border border-black'>
      <h3>Thread ID: {id}</h3>
      <div>
        {messages.map((message, i) => {
          return <Message {...message} />
        })}
      </div>

    </div>
  )
}

const Message = (props: MessageProps) => {
  const { text } = props
  const { sender } = props
  const { id } = props
  return (
    <div className='flex border border-black'>
      <p>Message ({id})from {sender}: {text}</p>

    </div>

  )
}

export default App
