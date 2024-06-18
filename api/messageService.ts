import { createId } from "@paralleldrive/cuid2"

export type Thread = {
    id: string,
    messages: Message[]
}
export type Message = {
    id: string,
    sender: string,
    text: string
}
export const MessageService = (threads: Thread[]) => {
    return {
        findThread: (messageId: string) => {

            console.log('threads are', threads)
            console.log('looking for id ', messageId)
            const foundThread = threads.find((thread) => {
                return thread.id === messageId;
            })

            if (!foundThread) {
                console.log("Error: no thread found")
                return null
            }

            return foundThread

        },
        // appendMessage
        //

        appendMessage: (thread: Thread, sender: string, text: string) => {
            thread.messages.push(
                {
                    id: createId(),
                    sender: sender,
                    text: text
                }
            )

        }
    }

}

export default MessageService;