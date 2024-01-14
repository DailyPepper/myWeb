import { Link } from 'react-router-dom';
import {CONTACTS_ROUTE, ABOUT_ROUTE, MAIN_ROUTE, PORTFOLIO_ROUTE} from "../../App/routing/config"
import { GlobalStyles } from '../../style/global-styled';

const NavbarWrapper = styled.div`
    height: 65px;
    display: flex;
    gap: 60px;
    justify-content: space-around;
    padding-top: 30px;
    margin: 20px 10px 10px 10px;
    border-radius: 25px;

`


const navbar = () => {
    return ( 
        <>
        <GlobalStyles />
            <h1 className='heading'>
                KUDINOV
            </h1>
            <NavbarWrapper>
                <Link to={MAIN_ROUTE} className=''>Главная</Link>
                <Link to={ABOUT_ROUTE} className=''>Обо мне</Link>
                <Link to={PORTFOLIO_ROUTE} className=''>Портфолио</Link>
                <Link to={CONTACTS_ROUTE} className=''>Контакты</Link>
            </NavbarWrapper>
        </>
     );
}
 
export default navbar;