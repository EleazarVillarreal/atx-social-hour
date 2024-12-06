import Link from 'next/link'
import Image from 'next/image'
import { ThemeToggle } from '../ThemeToggle'

export function Header() {
  return (
    <header className="mx-auto my-6 max-w-3xl px-6">
      <div className="flex items-center justify-between">
        <Link
          className="flex items-center justify-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-indigo-600"
          href="/"
        >
          <Image
            alt=""
            className="mr-2 flex sm:h-[36px] sm:w-[36px]"
            height={32}
            src="/logo.png"
            width={32}
          />
          <h1 className="text-2xl font-bold sm:text-3xl">ATX Social Hour</h1>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
