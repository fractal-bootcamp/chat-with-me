import { useEffect, useState } from "react"
import { ThreadProps } from "../App"
import { Thread } from "./Thread"


const initialThreads: ThreadProps[] = [
    {
        id: '',
        messages: []
    },

]


export const SERVER_URL = 'http://localhost:3000'

export const Lobby = () => {
    const [step, setStep] = useState(0)
    const [threads, setThreads] = useState(structuredClone(initialThreads))


    useEffect(() => {
        getThreads()
        setTimeout(() => setStep(step + 1), 1000)
    }, [step])

    async function getThreads() {
        const response = await fetch(`${SERVER_URL}/allthreads`)
        const jsonResponse = await response.json()
        console.log('response', jsonResponse)
        setThreads(jsonResponse)

    }


    return (
        <>

            <div className='flex flex-col gap-4'>

                {threads.map((thread) => {
                    return <Thread {...thread} />
                })}


            </div>



        </>
    )

}