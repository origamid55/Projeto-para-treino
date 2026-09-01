import React, { useState } from 'react'
const Itemtarefa = ({texto}) => {
  const [checado, setchecado] = useState(false);
  
    return (
        <label>
        
        <input type='checkbox' checked={checado} onChange={(e) => setchecado(!checado)}/>
        
        <span style={{textDecoration: checado ? 'line-through' : 'none'}}>
        {texto}
        </span>
        </label>
  )
}
export default Itemtarefa
