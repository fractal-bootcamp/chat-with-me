
type Thread = {
    id: string,
    messages: Message[]
}
type Message = {
    id: string,
    sender: string,
    text: string
}
const MessageService = (messageThreads: Thread[]) => {
    return {
        findThread: (messageId: string) => {

        }
        // appendMessage
        //
    }

}