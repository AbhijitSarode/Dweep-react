import React, { useState } from 'react'


function Form() {
    const [registered, setRegister] = useState(false)
    
    let thanks = <h1>Thank you for registering</h1>
  return (
   registered ? thanks : <form>
   <input type="text" placeholder="Your email address" required/>
   <input type='submit' value={"Register Now"} onClick={() => setRegister(true)} />
</form>

  )
}

export default Form