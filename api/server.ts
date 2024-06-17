import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('hello world')
})

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
    res.send(thread)
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:' + PORT)
})