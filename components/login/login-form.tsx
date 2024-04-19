export default function LoginForm() {
  
  return (
    <div className="flex size-full flex-col items-center justify-center p-10">
      <div className="flex w-[360px] flex-col items-center justify-center gap-6 rounded-md bg-[#cbb8ff] p-4">
        <div className="p-4">Frit</div>
        <form>
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="email"
            id="email"
            name="email"
            placeholder="email"
            // required
          />
          <input
            className="mb-4 w-full rounded-md border border-gray-300 p-3"
            type="password"
            id="password"
            name="password"
            placeholder="password"
            // required
          />
          <button
            type="button"
            // onClick={}
            className="mb-2 h-12 w-full rounded-lg bg-[#b085f5]"
          >
            Log in
          </button>
          {/* <div className="inline-block bg-[#b085f5]">
            <Link href="/login">Sign up</Link>
          </div> */}
        </form>
      </div>
    </div>
  )
}
