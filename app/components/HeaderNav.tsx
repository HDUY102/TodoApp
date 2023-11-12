import Link from 'next/link'
import React from 'react'

const HeaderNav = () => {
  return (
    <div>
        {/* Page Header BEGIN */}
        <ul className='menu menu-horizontal bg-stone-900 rounded-box mt-6 flex font-sans p-3 justify-evenly font-bold text-white'>
            <li className='hover:bg-white rounded-box'>
                <Link href={'/'}>HOME</Link>
            </li>
            <li className='hover:bg-white rounded-box'>
                <Link href={'/Categories'}>CATEGORIES</Link></li>
            <li className='hover:bg-white rounded-box'>
                <Link href={'/About'}>ABOUT</Link>
            </li>
            <li className='hover:bg-white rounded-box'>
                <Link href={'/Contact'}>CONTACT</Link>
            </li>
        </ul>
        {/* Page Header END */}
    </div>
  )
}

export default HeaderNav