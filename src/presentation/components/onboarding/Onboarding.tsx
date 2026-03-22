import { gsap, useGSAP } from '@/gsap'
import { OnboardingQueries } from '@/queries'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { SplitText } from 'gsap/SplitText'
import { useEffect, useRef } from 'react'
import styles from './Onboarding.module.css'

interface OnboardingProps {
  onComplete: () => void
}

export const Onboarding = ({ onComplete }: OnboardingProps) => {
  const splitRef = useRef<SplitText>(null)
  const tlRef = useRef<gsap.core.Tween>(null)

  const { status } = useQuery(OnboardingQueries.list())

  useGSAP(() => {
    splitRef.current = SplitText.create('.onboarding', { type: 'chars' })

    tlRef.current = gsap.from(splitRef.current.chars, {
      yPercent: 'random([-100, 100])',
      rotation: 'random(-30, 30)',
      ease: 'back.out',
      autoAlpha: 0,
      repeat: -1,
      yoyo: true,
      stagger: {
        amount: 1.0,
        from: 'center',
      },
    })

    return () => {
      tlRef.current?.kill()
      splitRef.current?.revert()
    }
  }, [])

  useEffect(() => {
    if (status !== 'pending' && tlRef.current) {
      const tl = tlRef.current

      // Gets the total duration of one full cycle of the animation
      const iterDur = tl.duration()

      // tl.time() is how many seconds have elapsed in total since the animation started. % iterDur strips away all the completed cycles and gives you how far into the current cycle you are right now
      const timeIntoIter = tl.time() % iterDur

      // How many seconds are left until the current cycle ends
      const timeToFinish = iterDur - timeIntoIter

      gsap.delayedCall(timeToFinish, () => {
        tl.yoyo(false).repeat(0)
        onComplete()
      })
    }
  }, [status])

  return (
    <div className={styles['onboarding-container']}>
      <p className={clsx('onboarding', styles['onboarding'])}>BREWING</p>
    </div>
  )
}
