import React, { useEffect, useState } from 'react'

function AboutUs({name}) {
    const [newName, setNewName] = useState('')

    useEffect(()=>{
        if(name){
            setNewName(name)
        }
    },[name])

    return (
        <p>{newName}</p>
    )
}

export default AboutUs
