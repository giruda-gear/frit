import LoginForm from '@/components/login/login-form'
import { prisma } from '@/prisma/prisma'

async function getMembers() {
  const member = await prisma.member.findMany()
  console.log(member)
  return JSON.stringify(member)
}

export default function LoginPage() {
  return (
    <main className="h-sreen m-0 w-full p-1">
      <LoginForm />
      {/* {member} */}
    </main>
  )
}
