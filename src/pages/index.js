import HeroSection from "../components/heroSection";
import Navbar from "../components/navbar";
import MainModal from '../components/MainModal';
import 'tailwindcss/tailwind.css';
import BarChart from "../components/BarChart";
import Overall from "../components/Overall";


const HomePage = () => {
  return (
    <div className="absolute w-screen h-screen bg-gradient-to-b from-transparent to-blue-500">
      <Navbar/>
      <HeroSection/>
      <BarChart/>
      <Overall/>
      
    </div>
  );
};

export default HomePage;
