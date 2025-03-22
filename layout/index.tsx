import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Exo_2 } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'

const exo2 = Exo_2({
  subsets: ['latin'],
  variable: '--font-exo2',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Head>
        <title>Hello, Pace here !!</title>
        <meta name="description" content="Official Website about me" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${exo2.variable} font-exo2 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        <header className="w-full bg-white dark:bg-gray-800 shadow-md p-4 sticky top-0 z-999">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              PACE{' '}
              <span className="bg-rose-500 text-white px-1 rounded-full">
                11
              </span>
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md focus:outline-none"
            >
              {isOpen ? '✖' : '☰'}
            </button>

            {/* Menu Desktop */}
            <ul className="hidden lg:flex justify-center space-x-8">
              {['About', 'Work History', 'Projects'].map((item) => (
                <li key={item} className="relative group cursor-pointer">
                  <a
                    href="#"
                    className="text-lg font-medium group-hover:text-rose-500"
                  >
                    {item}
                  </a>
                  <span
                    className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-rose-500 
                          transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-xl"
                  ></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Mobile dengan Animasi */}
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="lg:hidden mt-4 space-y-2 bg-gray-200 dark:bg-gray-700 p-4 rounded-lg"
              >
                {['About', 'Work History', 'Projects'].map((item) => (
                  <li key={item} className="relative group cursor-pointer">
                    <a href="#" className="text-lg font-medium block">
                      {item}
                    </a>
                    <span
                      className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-rose-500 
                            transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-xl"
                    ></span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </header>

        <main className="w-full">{children}</main>
      </div>
    </>
  )
}
