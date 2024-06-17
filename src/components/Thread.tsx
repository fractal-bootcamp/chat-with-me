import { ThreadProps } from "../App"
import { Message } from "./Message"
import { motion } from "framer-motion"


export const Thread = (props: ThreadProps) => {

    const { id } = props
    const { messages } = props

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

        </div>
    )
}