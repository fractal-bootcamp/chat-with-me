import { useState } from "react"
import { SERVER_URL, ThreadProps } from "../App"
import { Message } from "./Message"
import { motion } from "framer-motion"


export const Thread = (props: ThreadProps) => {

    const { id } = props
    const { messages } = props

    const [msgInput, setMsgInput] = useState('');
    const [senderInput, setSenderInput] = useState('')

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
                    {messages.map((message, i) => {
                        return <Message {...message} />
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
                    await fetch(`${SERVER_URL}/${id}/message`, {
                        method: "POST",
                        mode: "cors",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            "sender": { senderInput },
                            "message": { msgInput }
                        })
                    }
                    )
                    debugger;
                    console.log('click')

                }} className="border border-black" type="submit">submit</button>
            </div>

        </div >
    )
}