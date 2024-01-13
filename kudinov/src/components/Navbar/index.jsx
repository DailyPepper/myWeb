import { Link } from 'react-router-dom';
import {CONTACTS_ROUTE, ABOUT_ROUTE, MAIN_ROUTE, PORTFOLIO_ROUTE} from "../../App/routing/config"
const navbar = () => {
    return ( 
        <>
            <Link to={CONTACTS_ROUTE} className=''>Каталог товаров</Link>
            <Link to={ABOUT_ROUTE} className=''>Новости</Link>
            <Link to={MAIN_ROUTE} className=''>Контакты</Link>
            <Link to={PORTFOLIO_ROUTE} className=''>Аккаунт</Link>
        </>
     );
}
 
export default navbar;