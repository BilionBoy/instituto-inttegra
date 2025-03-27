"use client"

import type * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  children: React.ReactNode
}

export const Marquee = ({ className, reverse, pauseOnHover = false, children }: MarqueeProps) => {
  return (
    <div className={cn("flex w-full overflow-hidden [--duration:40s] [--gap:1rem]", className)}>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] [animation-play-state:running]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] [animation-play-state:running]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  )
}

