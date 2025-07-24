import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Kuba.me</Link>
        </div>
        <ul className="flex space-x-6 text-base font-medium">
          <li>
            <Link href="/o-mnie" className="hover:text-blue-600 transition">O mnie</Link>
          </li>
          <li>
            <Link href="/podroze" className="hover:text-blue-600 transition">Podróże</Link>
          </li>
          <li>
            <Link href="/biznes" className="hover:text-blue-600 transition">Biznes</Link>
          </li>
          <li>
            <Link href="/kontakt" className="hover:text-blue-600 transition">Kontakt</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}