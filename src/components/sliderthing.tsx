"use client"
import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, defaultValue, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={defaultValue}
      max={80}
      step={5}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}











