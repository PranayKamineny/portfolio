import React from 'react'

function Socials() {
  return (
    <div className='py-5'>
        <div className='flex gap-5 items-center justify-center'>
            <a href='https://www.linkedin.com/in/pranay-kamineny-586571204/' target="_blank" rel="noopener noreferrer">
                <i class="ri-linkedin-box-fill text-gray-500 text-3xl cursor-pointer hover:text-blue-600"></i>
            </a>
            <a href='https://github.com/PranayKamineny' target="_blank" rel="noopener noreferrer">
                <i class="ri-github-fill text-gray-500 text-3xl cursor-pointer hover:text-black"></i>
            </a>
            <a href='mailto:pranay.kamineny@gmail.com' target="_blank" rel="noopener noreferrer">
                <i class="ri-mail-fill text-gray-500 text-3xl cursor-pointer hover:text-red-500"></i>
            </a>
            <a href='https://www.instagram.com/pranaykamineny/' target="_blank" rel="noopener noreferrer">
                <i class="ri-instagram-line text-gray-500 text-3xl cursor-pointer hover:text-pink-500"></i>
            </a>
        </div>
    </div>
  )
}

export default Socials;