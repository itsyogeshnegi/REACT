import React from 'react'

const CalcBtn = ({Value,sign}) => {
  return (
    <div className='h-16 w-16 rounded-xl bg-slate-200 cursor-pointer shadow-lg flex justify-center items-center flex-col'>
        <h1 className='font-bold text-lg flex'>{Value}</h1>
        <p className='font-bold text-xl flex'>{sign}</p>
    </div>
  )
}

export default CalcBtn