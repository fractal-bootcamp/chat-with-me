import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

import { Thread } from "./Thread"


const initialThreads: Thread[] = [
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

            <div className='flex flex-row gap-4'>

                {threads.map((thread) => {
                    return <LobbyThread id={thread.id} />
                })}


            </div>



        </>
    )

}

export const LobbyThread = (props: { id: string }) => {
    const navigate = useNavigate();


    return (
        <>
            <div onClick={() => {
                navigate(`/threads/${props.id}`)
            }} className="flex flex-col justify-center " >

                <img className="flex flex-col w-[200px]" src="/yarn.png" />
                <p>
                    Thread: {props.id}
                </p>
            </div>
        </>




    )
}