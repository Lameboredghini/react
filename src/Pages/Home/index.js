import React, { useState } from 'react'
import Footer from '../../Components/common/footer'
import Header from '../../Components/common/header'
import Taboptions from '../../Components/common/tabOptions'
import Delivery from '../../Components/Delivery'
import DiningOut from '../../Components/DiningOut'
import Nightlife from '../../Components/Nightlife'

const Homepage = () => {

    const [activetab, setActivetab] = useState("Delivery");
  return (
    <div>
        <Header/>
        <Taboptions activetab={activetab} setActivetab= {setActivetab}/>
        {getcorrectscreen(activetab)}
        {/* Diff screen */}
        <Footer/>
    </div>
  )


}
const getcorrectscreen = (tab) => {
    switch(tab){
        case "Delivery":
        return <Delivery/>
        case "Diningout":
            return <DiningOut/>
        case "Nightlife":
            return <Nightlife/>
        default:
            return <Delivery/>

    }
  }
export default Homepage