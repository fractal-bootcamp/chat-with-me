
import './App.css'

type ThreadProps = {
  id: string,
  messages: MessageProps[]
}

const tempThread = {
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
}

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

        <Thread {...tempThread} />
      </div>
      <div>
        <input>
        </input>

      </div>



    </>
  )
}

const Thread = (props: ThreadProps) => {

  const { id } = props
  const { messages } = props

  return (
    <div className='flex border border-black'>
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
    <div>
      <p>Message ({id})from {sender}: {text}</p>

    </div>

  )
}

export default App
