'use client'
import React, {useEffect, useState} from 'react'
import { useAtom } from 'jotai'
import { timer, isCatchingAtom, catchAtom, next } from '@/app/store'
import { useRouter } from 'next/navigation'

export default function Timer() {
    const [isCatching, setIsCatching] = useAtom(isCatchingAtom)
    const [caught, setCaught] = useAtom(catchAtom)
    const [nextPokemon, setNextPokemon] = useAtom(next)
    const [time, setTime] = useAtom(timer)
    const saveToDb = async () => {
        const res = await fetch('/api/stats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({credits: 1})
        })
        const data = await res.json()
    }
    const router = useRouter()
       useEffect(()=>{
        if(!isCatching && !nextPokemon){
            setTimeout(()=>{
                time <= 0 ? setTime(0) : setTime(time - 1)              
            }, 1000)
        }
    }, [time, nextPokemon])   
    if(time <= 0 && !caught){
        setTime(20)
        setNextPokemon(true)
        saveToDb()
        router.refresh()
        setTimeout(()=>setNextPokemon(false), 3000)
    }
  return (
    <div className='relative'>
        <h1 className='text-3xl font-semibold text-slate-800'>Next Pokemon in: {time}</h1>
    </div>
  )
}
