import React, { useState } from 'react'


function Form() {
    const [registered, setRegister] = useState(false)
    
    let thanks = <h1>Thank you for registering</h1>

    const handleSubmit = (event) => {
        event.preventDefault()
        setRegister(true)
    }

  return (
   registered ? thanks : <form onSubmit={handleSubmit} >
   <input type="text" placeholder="Your email address" required/>
   <input type='submit' value={"Register Now"}/>
</form>

  )
}

export default Form