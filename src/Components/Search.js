import React, { useState } from 'react'

import './search.css'

export default function Search(){

    const [search,setSearch]=useState()
    const [height,setHeight]=useState([])

    
    const client_id="uLIoAeDjDctn5WIxOupuUB_oih6Ex5SnT-APou5AujE"
    const handleClick=async()=>{
        const res =await fetch("https://api.unsplash.com/photos/?client_id=uLIoAeDjDctn5WIxOupuUB_oih6Ex5SnT-APou5AujE")
        const data= await res.json()
        console.log(data)
        data.map((elem)=>{
            setHeight((curr)=>[...curr,elem])
            
        })
        console.log("height",height)
       
    }



    return(
        <>
        <h2>React Photo Search</h2>
        
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input
            placeholder='Search from high resolution images'
            name='search'
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
            />
            <button onClick={handleClick}>Search</button>

        </form>
     <div className='image-container'>
            {
                height.map((elem)=>{
                    <img src={require({elem})} /> 
                })
            }
         
     </div>
    
    
      
        </>
    )

}