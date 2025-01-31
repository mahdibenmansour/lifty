export default function HF({ children }) {
  return (
    <div className="flex flex-col min-h-screen min-w-screen bg-[#081808] text-white">
      <div
        name="header"
        className="h-[100px] flex flex-col content-center justify-center bg-white shadow-lg"
      >
        <div className="px-6 flex items-center justify-center gap-5">
          <a href="">
            <img src="/dumbbell.svg" width={80} height={80} alt="" />
          </a>
          <p className="text-black text-2xl font-bold">Lifty</p>
        </div>
      </div>
      <div className=" p-[228px]">{children}</div>
      <footer class="bg-white h-[100px] text-black p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 class="font-bold text-lg mb-2">Links</h3>
            <ul class="space-y-1">
              <li>
                <a href="/" class="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/features" class="hover:underline">
                  Features
                </a>
              </li>
              <li></li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold text-lg mb-2">Legal</h3>
            <ul class="space-y-1">
              <li>
                <a href="/privacy-policy" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" class="hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-4 text-center text-sm">
          <p>© 2025 Lifty. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
