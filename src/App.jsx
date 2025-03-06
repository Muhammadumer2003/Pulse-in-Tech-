import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import BusinessWebsiteUI from './BusinessWebsite'
import WhyChooseUs from './Contact'
import RevampBanner from './Maam'
import PortfolioShowcase from './Profile'
import WebsiteOptimizationChecklist from './WOC'
import FAQSection from './Faqs'
import PulseBanner from './Pulse'
import PulseInTechBanner from './Footer'

import Impulse from './Impulse'
import PulseInTechLanding from './Contack'

function App() {
  

  return (
    <>
  <div className='w-full h-full bg-yellow-100'>
      <PulseInTechLanding />
       <BusinessWebsiteUI/> 
        <WhyChooseUs/>
        <RevampBanner/>
        {/* <SOLUTION/> */}
        <Impulse/>
        <PortfolioShowcase/>
        <WebsiteOptimizationChecklist/>
        <FAQSection/>
        <PulseBanner/>
        <PulseInTechBanner/> 

        </div>
       
       
    </>
  )
}

export default App
