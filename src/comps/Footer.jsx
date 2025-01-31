export default function Footer() {
  return (
    <footer className="h-[10vh] border-t border-gray-200 mt-auto flex items-center justify-between mx-11  text-xl bg-white text-black">
      <p>©2025 Lifty. All rights reserved</p>
      <div>
        <ul className="flex gap-4 items-center justify-center">
          <li>
            <a href="">Terms of Service</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Cookie Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
