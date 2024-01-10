import React from 'react'

const Searchbar = () => {
  return (
    <div
    className="rounded bg-[#F2F2F2] box-border flex flex-row items-center justify-start py-2.5 px-4 gap-[8px] text-left text-sm text-black-60 font-body-2-medium flex-1 border-[1px] border-solid border-black-85"
    
  >
 
      <img
        className="relative w-3.5 h-3.5 overflow-hidden shrink-0 object-cover"
        alt=""
        src="/search.png"
      />
  
    <div className="flex-1 relative leading-[20px]">
   
    Search features, tutorials, etc.

    </div>
    
      <img
        className="relative w-4 h-4 overflow-hidden shrink-0 object-cover hidden"
        alt=""
       
      />

  </div>
  )
}

export default Searchbar