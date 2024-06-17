
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
            debugger;
            const foundThread = threads.find((thread) => {
                return thread.id === messageId;
            })

            if (!foundThread) {
                console.log("Error: no thread found")
                return
            }

            return foundThread

        }
        // appendMessage
        //
    }

}

export default MessageService;