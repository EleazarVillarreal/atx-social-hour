import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto max-w-6xl bg-white drop-shadow-sm">
      <div className="mx-auto max-w-3xl p-6">
        <Link href="/">
          <h1 className="text-2xl font-bold text-zinc-800 md:text-4xl">
            ATX Social Hour
          </h1>
        </Link>
      </div>
    </header>
  )
}
