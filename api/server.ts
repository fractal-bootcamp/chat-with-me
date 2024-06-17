import express from 'express';
import cors from 'cors';
import MessageService, { Thread } from './messageService';

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

app.use(express.json())
app.use(cors())


const threads: Thread[] = [
    {
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
    },
    {
        id: '2a',
        messages: [
            {
                id: '3a',
                sender: 'Johnny',
                text: 'You like my cakes? '
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
    res.json(JSON.stringify(thread))
})

app.get('/threads/all', (req, res) => {
    res.send(JSON.stringify(threads))
})


const PORT = 3000
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT)
})