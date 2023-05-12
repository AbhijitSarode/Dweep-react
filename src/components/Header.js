import '../styles/header.css'

import Form from './Form'
import image from '../assets/image.svg'

function Header(props) {

  let { heading, paragraph, subHeading } = props

  return (
    <main>
        <div className="left">
            <h1>{heading}</h1>
            <p>{paragraph}</p>
            <h3>{subHeading}</h3>
            <Form />
            <p className='noSpam'>Free - No Spam - No Data Sharing</p>
        </div>
        <div className="right">
            <img src={image} alt="" />
        </div>
    </main>
  )
}

export default Header