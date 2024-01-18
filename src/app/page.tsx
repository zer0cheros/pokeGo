import { fetchPokemons, fetchStats } from '@/utils/fetchData'
import GetPokemon from '@/components/Pokemon/Pokemon'
import type { Pokemon, Stats } from './types'
import CatchEmAll from '@/components/Pokemon/CatchEmAll'
import FormModal from '@/components/Forms'
import Profile from '@/components/Profile'
import Timer from '@/components/Timer'
import Uppgrades from '@/components/Upgrades/Uppgrades'
import { Session, getServerSession } from 'next-auth'
import { authOptions } from '@/utils/authOptions'

export default async function Home() {
  const {user}:Session = await getServerSession(authOptions) as Session
  const pokemon:Pokemon = await fetchPokemons()
  const stats:Stats[] = await fetchStats(user?.id)
  return (
    <main className="flex h-screen p-5 w-full items-center justify-center bg-slate-200">
      <div className='flex flex-col w-1/3 h-full'>
        <Profile stats={stats} />
      </div>
      <div className='flex flex-col w-2/3 h-full'>
      <div className='w-2/2 h-full flex mx-auto flex-col items-center justify-center text-center bg-white w-2/3 rounded-md shadow-md'>
        <GetPokemon pokemon={pokemon}/> 
      </div>
      <div className='text-center'>
        <CatchEmAll />
        <FormModal pokemon={pokemon} />
        
        <Uppgrades/>
      </div>
      </div>
    </main>
  )
}
