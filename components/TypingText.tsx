import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react'

const texts = ['Halo', '你好', 'Hola', 'こんにちは', 'Namaste', '안녕하세요']

export default function TypingText() {
  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[textIndex]
    const typingSpeed = isDeleting ? 50 : 100

    const handleTyping = () => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentText.slice(0, prev.length + 1),
      )

      if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % texts.length)
      }
    }

    const typingInterval = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(typingInterval)
  }, [displayText, isDeleting, textIndex])

  return (
    <div className="w-500 flex justify-center flex-col items-start h-screen gap-6">
      <div className="flex">
        <motion.h1
          className="text-4xl font-bold relative w-fit border-r-2 border-gray-300 pr-2 h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {displayText}
        </motion.h1>
        <h1 className="text-4xl">👋</h1>
      </div>
      <div>
        <h1 className="text-4xl">I am Muhammad Iriansyah</h1>
        <h1 className="text-2xl">Software Engineer, Frontend 💻🎧</h1>
      </div>
      <div className="flex gap-2">
        <a
          href="https://www.linkedin.com/in/muhammad-iriansyah-putra-pratama-a0120514b/"
          target="_blank"
          title="Muhammad Iriansyah"
          className="border-2 border-[#0077B5] rounded-full p-2 group hover:cursor-pointer hover:bg-[#0077B5] transition-colors duration-500 ease-in-out"
        >
          <Linkedin className="text-[#0077B5] group-hover:text-white transition-colors duration-500 ease-in-out" />
        </a>
        <a
          href="https://github.com/pace11"
          target="_blank"
          title="@pace11"
          className="border-2 border-black rounded-full p-2 group hover:cursor-pointer hover:bg-black transition-colors duration-500 ease-in-out"
        >
          <Github className="text-black group-hover:text-white transition-colors duration-500 ease-in-out" />
        </a>
        <a
          href="https://www.instagram.com/ryanpace11/"
          target="_blank"
          title="@ryanpace11"
          className="border-2 border-[#E1306C] rounded-full p-2 group hover:cursor-pointer hover:bg-[#E1306C] transition-colors duration-500 ease-in-out"
        >
          <Instagram className="text-[#E1306C] group-hover:text-white transition-colors duration-500 ease-in-out" />
        </a>
        <a
          href="https://x.com/ryanpace"
          target="_blank"
          title="@ryanpace"
          className="border-2 border-[#1DA1F2] rounded-full p-2 group hover:cursor-pointer hover:bg-[#1DA1F2] transition-colors duration-500 ease-in-out"
        >
          <Twitter className="text-[#1DA1F2] group-hover:text-white transition-colors duration-500 ease-in-out" />
        </a>
      </div>
      {/* <p className="text-lg">
        I have a high interest in the field of web development and am currently
        active in using <strong>Next.js</strong> and <strong>TypeScript</strong>
        . Additionally, I have a solid understanding of backend technologies
        such as <strong>REST APIs</strong>, <strong>databases</strong>,{' '}
        <strong>deployment</strong>, and more. Besides working full-time as a
        software engineer, I am also a <strong>Freelance Trainer</strong>{' '}
        teaching web development topics.
      </p> */}
    </div>
  )
}
