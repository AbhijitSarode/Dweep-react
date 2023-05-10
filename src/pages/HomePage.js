import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function HomePage() {
    const content = {
        heading: "An inspiring design delivered to your inbox every morning",
        paragraph: "Our team scouts the internet for the best designs, illustrations and art and delivers a truly inspiring one every day to your inbox",
        subHeading: "Show me how it looks",
        links : {
            left: ["Prompt Generator", "Dweep Daily", "All Contributors", "Your data on Dweep.io", "Contribute to Dweep."],
            right: [" Dweep.io", "Made with love in India", "hello@dweep.io"]
        }
    }

  return (
    <>
        <Header heading={content.heading} paragraph={content.paragraph} subHeading={content.subHeading} />
        <Footer leftLinks={content.links.left} rightLinks={content.links.right}/> 
    </>
  )
}

export default HomePage