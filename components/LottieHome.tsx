import Lottie from 'lottie-react'
import HomeAnimation from '@/public/animation/home.json'

export default function LottieHome() {
  return (
    <div className="w-500 z-0">
      <Lottie autoplay loop animationData={HomeAnimation} className="w-full" />
    </div>
  )
}
