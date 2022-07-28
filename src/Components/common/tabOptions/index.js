import React from 'react'

const Taboptions = ({activetab, setActivetab}) => {
  return (
    <div>
        <button onClick={()=> setActivetab("Nightlife")}>
            Onclick
        </button>

    </div>
  )
}

export default Taboptions