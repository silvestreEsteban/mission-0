import './Main.css';
import Navbar from './Functions/Navbar';
import MainSection from './Functions/MainSection';
import SectionTwo from './Functions/SectionTwo';
import Footer from './Functions/Footer';

export default function Main() {
    return (
        <>
        <div className='main-div'>
            <Navbar />
            <MainSection />
            <SectionTwo />
            <Footer />
            
            
        </div>
        </>
)
}