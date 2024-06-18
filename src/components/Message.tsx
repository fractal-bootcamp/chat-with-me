import { MessageProps } from "../App"

export type Message = {
    id: string,
    sender: string,
    text: string
}

export const Message = (props: MessageProps) => {
    const { text } = props
    const { sender } = props
    // const { id } = props
    return (
        <div className='flex border border-black'>
            <p>{sender} says: {text}</p>

        </div>

    )
}