import { securityCheck } from "@/utils/randomLogic"
import { hashSync } from "bcrypt"
import Image from "next/image"
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation"


export default function Register() {
    const handleRegister = async (formData: FormData)=>{
        'use server'
            const username = formData.get('username') as string
            const email = formData.get('email') as string
            const password = formData.get('password') as string
            const errorMsg = await securityCheck(username, email, password)
            console.log(errorMsg)   
            const hasedPassword = hashSync(password, 10)
                try  {
                    await prisma.user.create({
                    data: {
                        name: username,
                        password: hasedPassword,
                        email: email,
                    }
            })
            } catch (err) {
                console.log(err)
            }
            console.log("registered")
            redirect('/api/auth/signin') 
    }
    return (
      <>
        <div className="flex min-h-full flex-1">
          <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <Image src={"/pokeball.png"} alt={"pokeball"} width={100} height={100}></Image>
                <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Not a member?{' '}
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Start a 14 day free trial
                  </a>
                </p>
              </div>
  
              <div className="mt-10">
                <div>
                  <form action={handleRegister} method="POST" className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="username"
                          type="text"
                          autoComplete="email"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
  
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
  
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-700">
                          Remember me
                        </label>
                      </div>
  
                      <div className="text-sm leading-6">
                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                          Forgot password?
                        </a>
                      </div>
                    </div>
  
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
  
                
              </div>
            </div>
          </div>
          <div className="relative hidden w-0 flex-1 lg:block">
            <Image src={"/pok.jpg"} alt={"pok"} width={2000} height={1900}></Image>
          </div>
        </div>
      </>
    )
  }
  