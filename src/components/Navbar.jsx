import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); 

  return (
    <div className='flex p-4 justify-between np sm:h-[15vh] h-[20vh] cursor-p'>
      <h1 className='text-[25px] font-primary sm:text-[35px] text-primary'>
        QuickFeasts
      </h1>

      <div>
        {location.pathname === '/recipes' && (
          <>
          <button aria-label="Home">
            <Link className='sm:hidden' to="/"><FontAwesomeIcon icon={faHome} size="2x" /></Link>
           <Link to="/">
           
           <h1 className=' invisible sm:visible   text-[25px] font-primary sm:text-[35px] text-blue-600'>
           Home
         </h1>
           </Link>
          </button>
          </>
        )}
        {location.pathname === '/' && (
          <>
          <button aria-label="Saved Recipes">
            <Link className='sm:hidden ml-10' to="/recipes"><FontAwesomeIcon icon={faUtensils} size="2x" /></Link>
         <Link to="/recipes">
          <h1 className=' invisible sm:visible   sm:block text-[25px] font-primary sm:text-[35px] text-blue-600'>
           Your Recipes   
         </h1>
         </Link> 
         
          </button>
         </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
