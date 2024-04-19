'use server'

import bcrypt from 'bcrypt'
import { Prisma, prisma } from '@/prisma/prisma'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export type LoginState = {
  message?: string | null
}

export async function createMember(prevState: LoginState, formData: FormData) {
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const hashedPassword = (await bcrypt.hash(password, 10)) as string

  try {
    const user: Prisma.memberCreateInput = {
      email,
      password: hashedPassword,
    }
    const member = await prisma.member.create({
      data: user,
    })
    console.log(member)
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    }
  }

  revalidatePath('/login')
  redirect('/login')
}
