'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { cn, formUrlQuery } from '@/lib/utils'

const links = ['All', 'Next.js 13', 'Frontend', 'Backend', 'Fullstack']

const Filters = () => {
  const [active, setActive] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleFilter = (link: string) => {
    let newUrl = ''

    if (active === link) {
      setActive('')

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
      })
    } else {
      setActive(link)

      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: link.toLowerCase(),
      })
    }

    router.push(newUrl, { scroll: false })
  }
  return (
    <ul className="body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 text-white-800 sm:max-w-2xl">
      {links.map((link) => (
        <li
          key={link}
          onClick={() => handleFilter(link)}
          className={cn(
            'cursor-pointer whitespace-nowrap rounded-lg px-8 py-2.5 capitalize',
            active === link
              ? 'gradient_blue-purple text-black-400'
              : 'bg-black-400 text-white-800',
          )}
        >
          {link}
        </li>
      ))}
    </ul>
  )
}

export default Filters
