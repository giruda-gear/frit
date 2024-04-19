'use client'

import { LoginState, createMember } from '@/app/lib/actions'
import { useFormState } from 'react-dom'

export default function LoginForm() {
  const initialState: LoginState = { message: null };
  const [state, formAction] = useFormState(createMember, initialState)

  return (
    <div className="flex size-full flex-col items-center justify-center p-10">
      <div className="flex w-[360px] flex-col items-center justify-center gap-6 rounded-md bg-[#cbb8ff] p-4">
        <div className="p-4">Frit</div>
        <form action={formAction}>
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="email"
            id="email"
            name="email"
            placeholder="email"
            required
          />
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
          />
          {/* <button
            type="button"
            // onClick={}
            className="mb-2 h-12 w-full rounded-lg bg-[#b085f5]"
          >
            Log in
          </button> */}
          <button
            type="submit"
            className="mb-2 h-12 w-full rounded-lg bg-[#b085f5]"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}
