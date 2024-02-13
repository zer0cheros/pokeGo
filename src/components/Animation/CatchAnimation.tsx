import React from 'react'
import { pokeAtom } from '@/app/store'
import { useAtom } from 'jotai'

export default function CatchAnimation() {
    const [pokemon, setPokemon] = useAtom(pokeAtom)
  return (
    <div className='relative flex z-10 h-full w-full left-1/2 top-1/3 -translate-x-1/2'>
        <h1 className='text-4xl font-serif font-semibold text-slate-800'>Congratulations, you caught {pokemon}</h1>
    </div>
  )
}
