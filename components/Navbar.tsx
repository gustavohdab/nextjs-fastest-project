import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:p-8 sm:px-16">
        <Link href="/">
          <Image
            src="/jsm-logo.svg"
            alt="jsm Logo"
            width={55}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        <Image
          src="/hamburger-menu.svg"
          alt="hamburger menu"
          width={30}
          height={30}
          className="block md:hidden"
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="/" referrerPolicy="no-referrer">
              Next.js 13.5 course
            </Link>
          </li>
          <li className="body-text !font-bold">
            <Link href="/" referrerPolicy="no-referrer">
              Masterclass
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
