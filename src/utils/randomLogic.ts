import prisma from "@/lib/prisma";

export async function catchLogic(base_experience:number){
    let chance:number = -0.00132075471698113 * base_experience + 0.572641509433962
    let randomNumber = Math.random();
    return randomNumber <= chance;
}

export const securityCheck = async (name: string, email: string,password: string) => {
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

const validateEmail = (email: string): boolean => {
    const regEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regEx.test(email);
    };