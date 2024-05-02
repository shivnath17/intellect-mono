type Props = {
  step: number,
  count: number
}

const Circle = ({ count, step }: Props) => {
  return (
    <div className="relative w-60 h-60">
      <svg className="w-full h-full" viewBox="0 0 100 100">

        {/* <!-- Outer circle --> */}
        <circle
          className="text-gray-200 stroke-current outer__circle"
          stroke-dasharray="4"
          cx="58"
          cy="58"
          r="48"
          fill="transparent"
        ></circle>

        {/* <!-- Inner circle --> */}
        <circle
          className="text-brand-900 stroke-current mask__circle"
          stroke-width="10"
          cx="45"
          cy="45"
          r="35"
          fill="transparent"
        ></circle>

        {/* <!-- Progress circle --> */}
        <circle
          className="text-gray-200 stroke-current ring__circle"
          stroke-width="4"
          stroke-linecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          stroke-dasharray="251.2"
          stroke-dashoffset={`calc(251.2 - (251.2 * ${count * step}) / 100)`}
        ></circle>

        {/* <!-- Center circle --> */}
        <circle
          className="bg__circle"
          cx="40"
          cy="40"
          r="30"
          fill={"#58a4b8"}
        ></circle>

        {/* <!-- Center text --> */}
        <text x="50" y="50" font-family="Verdana" font-size="12" text-anchor="middle" fill='white' alignment-baseline="middle">{count}</text>
      </svg>
    </div>
  )
}

export { Circle }
