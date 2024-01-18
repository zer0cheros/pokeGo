import prisma from '@/lib/prisma';
import { hashSync } from 'bcrypt'


const validateEmail = (email: string): boolean => {
const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
return regEx.test(email);
};
const securityCheck = async (name: string, email: string,password: string) => {
    if (name.length < 3) {
        return { error: "Username must have 3 or more characters" };
    }
    if (!validateEmail(email)) {
        return { error: "Email is invalid" };
    }
    if(!email.includes('optimaedu.fi') && !email.includes('optistud.fi')){
        return { error: "Only Optima-domain emails" }
    }
    const emailUser = await prisma.user.findMany({ where: {email: email} });
    if(emailUser.length > 0){
        return {error: 'Email already exists'}
    }
    if (password.length < 5) {
        return { error: "Password must have 5 or more characters" };
    }
    return null;
}

export async function POST(req: Request,res: Response){    
        const {password, name, email, image} = await req.json()
            const errorMsg = await securityCheck(name, email, password)
            if(errorMsg){
                return new Response(JSON.stringify(errorMsg))
            }
            const hasedPassword = hashSync(password, 10)
                try {
                    await prisma.user.create({
                    data: {
                        name: name,
                        password: hasedPassword,
                        email: email,
                    }
            })
            } catch (err:unknown) {
                return new Response(JSON.stringify(err))
            }

            return new Response(JSON.stringify({msg: 'user created'})) 
}