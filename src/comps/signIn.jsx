export default function SignIn() {
  return (
    <div className="flex items-center justify-center bg-[#081808] ">
      <div className=" text-white w-full max-w-md p-4 bg-black rounded-3xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-neon-green">
          Sign In
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-neon-green"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-neon-green rounded-md shadow-sm bg-gray-800 text-neon-green focus:outline-none focus:ring-neon-green focus:border-neon-green"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-neon-green"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-neon-green rounded-md shadow-sm bg-gray-800 text-neon-green focus:outline-none focus:ring-neon-green focus:border-neon-green"
            />
          </div>
          <a href="" className="text-[12px] text-blue-400 ">
            signup?
          </a>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-neon-green rounded-md hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
