'use client';

import CountUp from 'react-countup'

const AnimatedCounter = ({amount }: {amount:number}) => {
  return (
    <div className='w-full'>
        <CountUp 
            decimal='.'
            prefix='$'
            end={amount}
            duration={2.75}
            decimals={2}
        />
    </div>
  )
}

export default AnimatedCounter