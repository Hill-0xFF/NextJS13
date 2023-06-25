import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <h1>
        <Link href='/'>WikiRocket!</Link>
      </h1>
    </nav>
  )
}
