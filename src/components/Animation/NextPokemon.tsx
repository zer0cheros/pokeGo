'use client'
import React from 'react'
import { isCatchingAtom } from '@/app/store'
import { useAtom } from 'jotai'
import { motion } from 'framer-motion'

export default function NextPokemon() {
    const [isCatching, setIsCatching] = useAtom(isCatchingAtom)
    return (
    <motion.div className='absolute z-50 w-full h-screen left-0 top-0 bg-slate-400 flex items-center justify-center'>
        <h1 className='tex-center text-8xl text-slate-50 text-clip font-bold'>Get ready for the next Pokemon</h1>
    </motion.div>
  )
}
