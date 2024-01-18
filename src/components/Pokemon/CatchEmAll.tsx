'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai'
import { catchAtom, isCatchingAtom } from '@/app/store'

export default function CatchEmAll() {
  const [caught, setCaught] = useAtom(catchAtom)
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(()=>{
      setCaught(!caught)
    }, 1000)
    setTimeout(()=>{
      setIsClicked(false);
      setCaught(false)
    }, 6000)
    
  };
  return (
    <div>
      <motion.button
        initial={{ x: 0, y: 0, rotateX: 0 }} 
        animate={{ y: isClicked ? -250 : 0, rotateX: isClicked ? 720 : 0 }} // Animate to new position and rotation when clicked
        transition={{ duration: 1 }} 
        onClick={handleClick}
        disabled={caught}
      >
        <Image className={`${caught ? 'animate-pulse' : ''}`} width={100} height={100} src={'/pokeball.webp'} alt={'pokeball'} />
      </motion.button>
    </div>
  );
}
