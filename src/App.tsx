
import { useEffect, useState } from 'react'
import './App.css'
import { Thread } from './components/Thread'
import { motion } from 'framer-motion'

export type ThreadProps = {
  id: string,
  messages: MessageProps[]
}


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


function App() {



  return (
    <>



      <div>
        <h1 className="text-4xl">
          Chat app
        </h1>



      </div>
      <div>

      </div>



    </>
  )
}





export default App
