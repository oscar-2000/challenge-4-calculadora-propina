import React from "react";

export default function SelectTrip({children,active,...props}) {
    return(
        <button {...props} className={`cursor-pointer p-3 text-center text-3xl font-semibold duration-300 rounded-md w-full ${!active ? 'bg-[#01454b] hover:bg-[#9ee8df] hover:text-[#01454b] text-white' : 'bg-[#9ee8df] text-[#01454b]'}`}>
        {children}
        </button>
    )
}