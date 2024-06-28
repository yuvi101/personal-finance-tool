'use client';
import CountUp from 'react-countup';

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp 
        end={amount} 
        decimal="." 
        decimals={2}
        prefix = "₪"
        duracion={2.75}
        />
    </div>
  )
}

export default AnimatedCounter