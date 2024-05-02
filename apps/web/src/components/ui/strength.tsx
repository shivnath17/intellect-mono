import { Constants, mockArray } from 'utils'

type Props = {
  max: number,
  value: number,
  onChange: (value: number) => void
}

const Strength = (props: Props) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className='text-xl text-gray-200'>{Constants.STRENGTH_BAR_CONFIG[props.value].title}</p>
        {(mockArray(props.max).reverse()).map((num: number) => {
          const w = Constants.STRENGTH_BAR_CONFIG[num].width + 'px'
          return (
            <>
              <div style={{ width: w, backgroundColor: num <= props.value ? '#58a4b8' : '#bcdee5' }} onClick={() => props.onChange(num)} className={`h-10 cursor-pointer mt-4 rounded-2xl`} />
            </>
          )
        })}
      </div>
    </>
  )
}

export { Strength }