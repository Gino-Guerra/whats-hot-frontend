"use client"
import { useEffect,useState } from "react"
import GameCard from "../Components/GameCard"


export default function displayGame(){
    const [gameCard, setGameCard] = useState()

    useEffect(() => {
        fetch("https://whats-hot-api.web.app")
        .then(res => res.json())
        .then(setGameCard)
        .catch(alert)
    },[])

    return(
        <main>
            <h1 className="text-3xl font-bold dark:text-amber-200 text-amber-700">Hot new games</h1>
            <section className="cotainer mx-auto sm:px-5 px-2 py-8 flex flex-wrap">
                {gameCard && gameCard.map(item => (
                    <GameCard key={item.id} item={item}/>
             
             
                ) 
                )}
            </section>
        </main>
    )
}