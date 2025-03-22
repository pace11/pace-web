import dynamic from 'next/dynamic'

const LottieHome = dynamic(() => import('@/components/LottieHome'), {
  ssr: false,
})

const TypingText = dynamic(() => import('@/components/TypingText'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500/50 to-green-500/50">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <TypingText />
          <LottieHome />
        </div>
      </section>
      <section className="container mx-auto py-4"></section>
    </>
  )
}
