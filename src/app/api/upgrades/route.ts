import prisma from "@/lib/prisma"
import { Session, getServerSession } from "next-auth"
import { authOptions } from "@/utils/authOptions"

export async function POST(req: Request, res: Response){
    const {user} = await getServerSession(authOptions) as Session
    const body = await req.json()
    if(body.id == "ultra"){
        await prisma.stats.update({
            where: {
                userId: user.id
            },
            data: {
                credits: {decrement: 10},
                ultraball: {increment: 1} || 1, 
            }
        })
    }
    if(body.id == "master"){
        await prisma.stats.update({
            where: {
                userId: user.id
            },
            data: {
                credits: {decrement: 50},
                masterball: {increment: 1} || 1, 
            }
        })
    }
    return new Response(JSON.stringify({message: 'Stats updated'}))
}