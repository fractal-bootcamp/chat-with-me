import { useEffect, useState } from "react"
import { SERVER_URL } from "./Lobby"
import { Message } from "./Message"
import { motion } from "framer-motion"
import { useParams } from "react-router-dom"
import { Wind } from "lucide-react"
import { Button, ScrollView, TextInput, Window, WindowContent, WindowHeader } from "react95"


export type Thread = {
    id: string,
    messages: Message[]
}
const initialThread: Thread =
{
    id: 'initialThread',
    messages: [
        { id: 'initialThreadMessage', sender: '', text: '' }
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
        const thr = await response.json()
        if (thr.id) {
            console.log("parsedThreadead before set", thr)
            setThread(thr)
        }
    }


    return (
        <>
            <div className="flex h-screen w-screen bg-[#A2DBD2] items-center justify-center">


                <Window className="window">
                    <WindowHeader className="flex flex-row justify-between window-title">
                        <span>Thread ID: {thread.id}

                        </span>
                        <Button>
                            <img className="w-[20px]" src="/close.png" />

                            {/* <span className="close-button" style={{ backgroundImage: "close.png" }} /> */}

                        </Button>

                    </WindowHeader>

                    <WindowContent>
                        <ScrollView id='cutout' className="bg-white">
                            <motion.div
                                className="box mx-2 my-3"
                                /**
                                 * Setting the initial keyframe to "null" will use
                                 * the current value to allow for interruptable keyframes.
                                 */
                                whileHover={{ scale: [null, 1.5, 1.4] }}
                                transition={{ duration: 0.3 }}
                            >
                                <h2></h2>
                                <div>
                                    {thread.messages.map((message) => {
                                        // console.log(('hey im a thread' + JSON.stringify(thread)))
                                        // console.log(('hey im a message' + JSON.stringify(message)))
                                        return <Message key={message.id} {...message} />
                                    })}
                                </div>
                            </motion.div>

                        </ScrollView>
                        <div className=''>


                            {/* Input */}
                            <div className="flex flex-row gap-2 my-3 justify-center">

                                <TextInput name="sender" onChange={(event) => {
                                    setSenderInput(event.target.value);
                                }} className="border border-black w-[25%]" placeholder="your name"></TextInput>
                                <TextInput name="text" onChange={(event) => {
                                    setMsgInput(event.target.value)
                                }}
                                    className="border border-black" placeholder="new message">
                                </TextInput>

                                <Button primary onClick={async () => {

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

                                }} className="border border-black" type="submit">submit</Button>
                            </div>

                        </div >
                    </WindowContent>


                </Window>
            </div>


        </>
    )
}