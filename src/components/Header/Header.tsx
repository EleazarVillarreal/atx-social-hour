import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mx-auto max-w-6xl bg-white drop-shadow-sm">
      <div className="mx-auto flex max-w-3xl items-center p-6">
        <Image alt="" className="mr-2" height={36} src="/beer.png" width={36} />
        <Link href="/">
          <h1 className="text-3xl font-bold text-zinc-800">ATX Social Hour</h1>
        </Link>
      </div>
    </header>
  )
}
