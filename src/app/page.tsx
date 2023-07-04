"use client"


import HeroSection from "./components/heroSection";
import Navbar from "./components/navbar";

const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
 return (
   <div>
<Navbar/>
    <HeroSection/>
    
   </div>
 );
}
