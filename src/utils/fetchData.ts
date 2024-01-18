import prisma from "@/lib/prisma";

export async function fetchPokemons() {
    const random = Math.floor(Math.random() * 1000);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`);
    const data = await response.json();
    return data
}


export async function fetchStats(id:string){
    const data = await prisma.stats.findMany({
        where:{
            userId: id
        },
        
    }) 
    return data
}

export async function updateStats(userId:string, creditsIncrement:number, exp:number) {
    try {
      const result = await prisma.stats.upsert({
        where: { userId },
        update: { credits: { increment: creditsIncrement }, experience: { increment: exp }  },
        create: { userId, credits: 5, level: 1, experience: 0 },
      });
  
      return result;
    } catch (error) {
      console.error("Error updating stats:", error);
      throw error; // Re-throw the error for the caller to handle
    }
  }