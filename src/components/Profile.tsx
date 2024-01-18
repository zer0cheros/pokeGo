'use client'
import React from 'react'
import Image from 'next/image'
import type { Stats } from '@/app/types'
import {signOut} from 'next-auth/react'

export default function Profile({stats}: {stats: Stats[]}) {
    if (stats.length === 0) {
        return <div>No stats found</div>;
    }
  return (
    <div className='w-full h-full flex flex-col items-center justify-center bg-white rounded-md shadow-sm'>
        {stats.map((stat) => (
        <div key={stat.id} className='flex flex-col items-center justify-center text-center p-10'>
            <h1 className='text-3xl font-bold'>Profile</h1>
            <p className='text-xl'>Your Credits, {stat.credits}</p>
            <p className='text-xl'>Experience {stat.experience}</p>
            <p className='text-xl'>Your Level is {stat.level}</p>
        </div>
        ))}
        <Image priority className='m-auto' src={'/ash.webp'} alt={'ash'} width={400} height={800}></Image>
        <button className='p-5 mb-4 text-slate-50 text-2xl bg-slate-500 rounded-md shadow-md' onClick={()=>signOut()}>Sign Out</button>
    </div>
  )
}
