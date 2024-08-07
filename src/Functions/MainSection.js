import './MainSection.css';
import searchImage from './MainSectionImg/search.png'
export default function MainSection() {
 return (
    <>
    <div className="main-section">
        <div className='search-bar-div'>
            <div className='container-for-search-bar'>
            <input id='search-bar' type='search' name='search' placeholder='Search our extensive marketplace...' />
            <input type='image' id='search-image' src={searchImage} alt='search'></input>
            
            </div>
        </div>
        
        
        </div>
    
    
    
    </>
 )


 }

 