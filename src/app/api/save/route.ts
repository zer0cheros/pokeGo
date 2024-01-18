import prisma from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/utils/authOptions"
import { updateStats } from "@/utils/fetchData"
import { Session } from "next-auth"

export async function POST(req: Request, res: Response,){
  const {user}:Session = await getServerSession(authOptions) as Session
  if(!user){
    return new Response(JSON.stringify({message: 'You are not logged in'}))
  }else{
  const body = await req.json()
    try {
        await prisma.pokemon.create({
          data: {
            name: body.name,
            authorId: user.id,
            base_experience: String(body.base_experience),
            catched: true,
            img: `https://img.pokemondb.net/artwork/large/${body.name}.jpg`, 
          },
          })
          try {
            const updatedStats = await updateStats(user.id, body.credits || 1, body.base_experience );
            console.log("Updated stats:", updatedStats);
            return new Response(JSON.stringify({ message: "Stats saved", updatedStats }));
          } catch (error) {
            return new Response(JSON.stringify({ message: "Error updating stats", error }));
          }  
      } catch (error) {
        return new Response(JSON.stringify({message: error}))
      }
    } 
}