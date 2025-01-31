import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer.jsx";
export default function SignUp() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow flex items-center justify-center bg-[#ffffff]">
        <div className="text-white w-full max-w-lg p-4 bg-black rounded-3xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-neon-green">
            Sign Up
          </h2>
          <form name="signUp" className="space-y-4">
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
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-neon-green"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-neon-green rounded-md shadow-sm bg-gray-800 text-neon-green focus:outline-none focus:ring-neon-green focus:border-neon-green"
              />
            </div>
            <Link to="/" className="text-[12px] text-blue-400">
              Already have an account? Sign In
            </Link>
            <Link to="/" className="text-[12px] text-blue-400">
              <button
                type="submit"
                className="w-full px-4 py-2 bg-neon-green rounded-md hover:bg-green-950 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
