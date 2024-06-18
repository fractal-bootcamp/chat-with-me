import { useEffect, useState } from "react"
import { SERVER_URL } from "./Lobby"
import { Message } from "./Message"
import { motion } from "framer-motion"
import { useParams } from "react-router-dom"


export type Thread = {
    id: string,
    messages: Message[]
}
const initialThread: Thread =
{
    id: '',
    messages: [
        { id: '', sender: '', text: '' }
    ]
}


type ThreadProps = {
    id?: string
}

export const Thread = (props: ThreadProps) => {
    const id = props.id ? props.id : useParams().id

    console.log('hello')

    const [step, setStep] = useState(0)
    const [thread, setThread] = useState(structuredClone(initialThread))


    const [msgInput, setMsgInput] = useState('');
    const [senderInput, setSenderInput] = useState('')


    useEffect(() => {
        getCurrentThread()
        setTimeout(() => setStep(step + 1), 1000)
    }, [step])

    async function getCurrentThread() {
        const response = await fetch(`${SERVER_URL}/threads/${id}`)
        const thread = await response.json() as Thread
        if (thread.id) {
            setThread(thread)
        }
    }


    return (
        <div className='flex flex-col border border-black'>
            <motion.div
                className="box"
                /**
                 * Setting the initial keyframe to "null" will use
                 * the current value to allow for interruptable keyframes.
                 */
                whileHover={{ scale: [null, 1.5, 1.4] }}
                transition={{ duration: 0.3 }}
            >
                <h3>Thread ID: {id}</h3>
                <div>
                    {thread.messages?.map((message) => {
                        return <Message key={message.id} {...message} />
                    })}
                </div>
            </motion.div>

            {/* Input */}
            <div className="flex flex-row gap-2 justify-center">

                <input name="sender" onChange={(event) => {
                    setSenderInput(event.target.value);
                }} className="border border-black w-[25%]" placeholder="your name"></input>
                <input name="text" onChange={(event) => {
                    setMsgInput(event.target.value)
                }}
                    className="border border-black" placeholder="new message">
                </input>
                <button onClick={async () => {

                    return await fetch(`${SERVER_URL}/threads/${id}/message`, {
                        method: "POST",
                        mode: "cors",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "sender": senderInput,
                            "text": msgInput
                        })
                    }
                    )

                }} className="border border-black" type="submit">submit</button>
            </div>

        </div >
    )
}