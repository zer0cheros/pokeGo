'use client'
import React from 'react'
import CatchAnimation from '../Animation/CatchAnimation'
import Image from 'next/image'
import { Pokemon } from '@/app/types'
import { useAtom, useSetAtom } from 'jotai'
import { catchAtom, isCatchingAtom, next, pokeAtom } from '@/app/store'
import { motion } from 'framer-motion'
import { catchLogic } from '@/utils/randomLogic'
import NextPokemon from '../Animation/NextPokemon'

export default function GetPokemon({pokemon}: {pokemon: Pokemon}) {
    const [caught, setCaught] = useAtom(catchAtom)
    const setPokemon = useSetAtom(pokeAtom)
    const [nextPokemon, setNextPokemon] = useAtom(next)
    setPokemon(pokemon.name)
    const [isCatching, setIsCatching] = useAtom(isCatchingAtom)
    async function getChance() {
        const chance = await catchLogic(parseFloat(pokemon.base_experience))
        setTimeout(()=>{
           setIsCatching(chance)
        }, 5000)
        if(isCatching){
            setCaught(false)
        }
    }
    if(caught) getChance()
    return (
    <div>
        {nextPokemon ? <NextPokemon /> : <> 
        {isCatching ? <CatchAnimation /> : 
        <motion.div initial={{scale: 1, opacity: 1, y: 0}} animate={{scale: caught ? 0 : 1, opacity: caught ? 0 : 1, y: !caught ? 0 : 120 }} transition={{ duration: 1 }} >
            <h2>{pokemon.id}</h2>
            <h2>{pokemon.name}</h2>
            <h2>{pokemon.base_experience}</h2>
            <Image priority className='w-full h-full' width={280} height={420} src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`} alt={'pokemon'}/>
        </motion.div>
        }
        </>
    }
    </div>
  )
}
