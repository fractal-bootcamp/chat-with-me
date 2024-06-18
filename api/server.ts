import express from 'express';
import cors from 'cors';
import MessageService, { Thread } from './messageService';
import bodyParser from 'body-parser';

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors())


const threads: Thread[] = [
    {
        id: '11a',
        messages: [
            {
                id: '11a',
                sender: 'My Guy',
                text: 'Hey this is bob the builder'
            },
            {
                id: '2a',
                sender: 'Jimmy',
                text: 'im just a guy im just a gooby guy'
            }
        ]
    },
    {
        id: '2a',
        messages: [
            {
                id: '3a',
                sender: 'Johnny',
                text: 'You like my cakes? Best cakes out there'
            },
            {
                id: '4a',
                sender: 'Peach',
                text: 'Im a big ol peach'
            }
        ]
    }

]

app.get('/threads/:id', (req, res) => {

    const threadId = req.params.id
    const thread = MessageService(threads).findThread(threadId)
    res.json(thread)
})

app.get('/allthreads', (req, res) => {
    res.send(threads)
})

app.post('/threads/:id/message', (req, res) => {

    console.log('ayo! received')
    // req 
    const threadId = req.params.id
    const thread = MessageService(threads).findThread(threadId)

    console.log('body' + req)
    const { sender } = req.body
    const { text } = req.body
    console.log(sender)
    console.log(text)

    if (thread) {
        debugger;

        MessageService(threads).appendMessage(thread, sender, text)
        console.log("successful add")
        res.send('cool')
    }
    else {
        res.send('Error: no thread found')
    }


})


const PORT = 3000
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT)
})