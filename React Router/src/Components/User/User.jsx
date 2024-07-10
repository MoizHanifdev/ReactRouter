import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <>
      <div className='flex text-5xl font-semibold bg-slate-600 h-[500px] justify-center items-center'>
        <div>User : {userid}</div>
      </div>
    </>
  )
}

export default User
