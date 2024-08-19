import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); 

  return (
    <div className='flex p-4 justify-between  lg:h-[15vh] h-[15vh] cursor-p'>
      <h1 className='text-[25px] font-primary  lg:text-[35px] text-primary'>
        QuickFeasts
      </h1>

      <div>
        {location.pathname === '/recipes' && (
          <>
          <button aria-label="Home">
            <Link className='lg:hidden md:hidden' to="/"><FontAwesomeIcon icon={faHome} size="2x" /></Link>
           <Link to="/">
           
           <h1 className=' invisible lg:visible md:visible   text-[25px] font-primary lg:text-[35px] text-blue-600'>
           Home
         </h1>
           </Link>
          </button>
          </>
        )}
        {location.pathname === '/' && (
          <>
          <button aria-label="Saved Recipes">
            <Link className='lg:hidden md:hidden ml-10' to="/recipes"><FontAwesomeIcon icon={faUtensils} size="2x" /></Link>
         <Link to="/recipes">
          <h1 className=' invisible lg:visible md:visible  lg:block text-[25px] font-primary lg:text-[35px] text-blue-600'>
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
