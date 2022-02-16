import React from 'react'

export default function FlashCardContainer({children: flashcards}) {
  return (
    <div className='border p-2 justify-center items-center flex flex-row flex-wrap '>{flashcards}</div>
  )
}
