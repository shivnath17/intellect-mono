import './App.css'
import { Slider } from "@/components/ui/slider"
import { cn } from './lib/utils'
import { useState } from 'react'
import { Circle } from '@/components/ui/circle'
import { Strength } from '@/components/ui/strength'


function App() {
  const [sliderCount, setSliderCount] = useState(0)
  const [strengthCount, setStrengthCount] = useState(1)

  return (
    <div className='flex w-screen lg:h-screen items-center justify-center p-10 bg-brand-700'>
      <div className='grid h-full grid-cols-1 gap-[100px] sm:grid-cols-1 lg:grid-cols-2'>
        <div className='flex h-full justify-center items-center flex-col'>
          <Circle step={20} count={sliderCount} />
          <Slider
            defaultValue={[sliderCount]}
            onValueChange={([value]) => {
              setSliderCount(value)
            }}
            max={5}
            step={1}
            className={cn("max-w-96 pt-20")}
          />
        </div>
        <Strength max={5} value={strengthCount} onChange={(value) => setStrengthCount(value)} />
      </div>
    </div>
  )
}

export default App
