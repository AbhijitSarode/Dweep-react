import Form from './Form'

import image from '../assets/image.svg'

function Header(props) {

  let { heading, paragraph, subHeading } = props

  return (
    <>
        <div className="left">
            <h1>{heading}</h1>
            <p>{paragraph}</p>
            <h3>{subHeading}</h3>
            <Form />
        </div>
        <div className="right">
            <img src={image} alt="" />
        </div>
    </>
  )
}

export default Header