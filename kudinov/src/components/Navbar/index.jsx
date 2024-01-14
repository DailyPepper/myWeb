import { Link } from 'react-router-dom';
import {CONTACTS_ROUTE, ABOUT_ROUTE, MAIN_ROUTE, PORTFOLIO_ROUTE} from "../../App/routing/config"


const navbar = () => {
    return ( 
        <>
            <Link to={MAIN_ROUTE} className=''>Главная</Link>
            <Link to={ABOUT_ROUTE} className=''>Обо мне</Link>
            <Link to={PORTFOLIO_ROUTE} className=''>Портфолио</Link>
            <Link to={CONTACTS_ROUTE} className=''>Контакты</Link>
        </>
     );
}
 
export default navbar;