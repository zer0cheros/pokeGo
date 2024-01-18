import { User } from "@/app/types"
import prisma from "@/lib/prisma"
import { authOptions } from "@/utils/authOptions"
import { stat } from "fs"
import { Session, getServerSession } from "next-auth"

export async function POST(req: Request, res: Response,){
  const {user}:Session = await getServerSession(authOptions) as Session
    const body = await req.json()
      try {
        await prisma.stats.update({
          where: {
            userId: user.id,
          },
          data: {
            credits: { increment: body.credits || 1 }
        }
        })
            return new Response(JSON.stringify({message: 'stats saved'}))
          } catch (error) {
            return new Response(JSON.stringify({message: error}))
          }
      }
    