import './SectionTwo.css';
import boots1 from './CardImages/images.jpg';
import boots2 from './CardImages/57392048-2A54-44A8-AC61-744106158C34.png';
import boots3 from './CardImages/adff9c_b4c64112b049493a99895b63580ae057~mv2.png';
import boots4 from './CardImages/ana_newq2trail-side.jpg';
import boots5 from './CardImages/download (1).jpg';
import boots6 from './CardImages/download.jpg';
import boots7 from './CardImages/images (1).jpg';
import boots8 from './CardImages/REI Co-op Flash hiking boots (standing on log - m).jpg';
import boots9 from './CardImages/shop-hiking-boots-1.png';





export default function SectionTwo() {
    
    
    
    
    return (
        <>
        <div className='section-two-main-div'>
            <div className='marketplace-cards'>
                <div className='cards' id='card-1'>
                    <img src={boots1} alt='boots'></img>
                    <h3>Hiking boots 1</h3>
                    <p>$120</p>
                </div>
                <div className='cards' id='card-2'>
                    <img src={boots2}alt='boots'></img>
                    <h3>Hiking boots 2</h3>
                    <p>$80</p>
                    </div>
                <div className='cards' id='card-3'>
                <img src={boots3}alt='boots'></img>
                <h3>Hiking boots 3</h3>
                    <p>$140</p>
                </div>
                <div className='cards' id='card-4'>
                <img src={boots4}alt='boots'></img>
                <h3>Hiking boots 4</h3>
                    <p>$110</p>
                </div>
                <div className='cards' id='card-5'>
                <img src={boots5}alt='boots'></img>
                <h3>Hiking boots 5</h3>
                    <p>$120</p>
                </div>
                <div className='cards' id='card-6'>
                <img src={boots6}alt='boots'></img>
                <h3>Hiking boots 6</h3>
                    <p>$100</p>
                </div>
                <div className='cards' id='card-7'>
                <img src={boots7}alt='boots'></img>
                <h3>Hiking boots 7</h3>
                    <p>$90</p>
                </div>
                <div className='cards' id='card-8'>
                <img src={boots8}alt='boots'></img>
                <h3>Hiking boots 8</h3>
                    <p>$130</p>
                </div>
                <div className='cards' id='card-9'>
                <img src={boots9}alt='boots'></img>
                <h3>Hiking boots 9</h3>
                    <p>$2500</p>
                </div>
            </div>
            </div>
        
        
        
        </>
    )
}

