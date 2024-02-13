import React from 'react'
import { Pokemon } from '@prisma/client'

export default function ListPokemon({pokemon}:{pokemon:Pokemon[]}) {
  
  return (
    <div className='flex flex-col gap-3 w-full p-5 items-center justify-center'>
      <h1 className='text-xl font-semibold'>Latest catch</h1>
        {pokemon.map((pok)=>(
            <div key={pok.id} className='flex flex-col gap-2 p-3 rounded-sm bg-slate-50'>
                <img src={pok.img || ''} alt={pok.name} className='w-full h-full shadow-sm'/>
                <p>{pok.name}</p>
            </div>
        )
        )}
    </div>
  )
}
