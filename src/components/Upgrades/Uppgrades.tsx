'use client'
import React, {useState} from 'react'

export default function Uppgrades() {
    const [open, setOpen] = useState(false)
    const buy = async (id:string)=>{
        await fetch('/api/upgrades', {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({id})})
    }
  return (
    <div className={`absolute h-screen ${open ? 'w-64 justify-start' : 'w-10 justify-center'} text-4xl text-slate-50 flex items-center bg-slate-900 top-0 right-0`}>
        {!open ? <p className='cursor-pointer' onClick={()=>setOpen(!open)}>&#11160;</p> :
        <ul className='flex gap-2 flex-col p-4'>
            <button onClick={()=>buy('ultra')} className='p-3 bg-slate-500 rounded-sm shadow'><li>Buy Ultraball 10 credits </li></button>
            <button className='p-3 bg-slate-500 rounded-sm shadow'><li>Buy Masterball 40 credits</li></button>
            <button className='p-3 bg-slate-500 rounded-sm shadow'><li>Buy 1000 exp 30 credits</li></button>
            <p className='cursor-pointer' onClick={()=>setOpen(!open)}>&#11162;</p>
        </ul>
        }
    </div>
  )
}
