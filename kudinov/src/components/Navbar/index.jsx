import { Link, useNavigate} from 'react-router-dom';
import {CONTACTS_ROUTE, MAIN_ROUTE, PORTFOLIO_ROUTE} from "../../App/routing/config"
import { GlobalStyles } from '../../style/global-styled';
import styled from 'styled-components';


const NavbarWrapper = styled.div`
    height: 85px;
    display: flex;
    gap: 40px;
    justify-content: space-around;
    padding-top: 5px;
    margin: 0px 10px 10px 10px;
    

    .heading{
        font-size: 55px;
        padding: 0px 10px 0px 0px;
    }
`
const Navbarblock = styled.div`
    display: flex;
    gap: 90px;
    align-items: center;
    font-size: 24px;
    padding: 65px 10px 0px 20px;
    
    .navbarLink{
        font-family: 'Public Sans';
        text-decoration: none;
        color: #403e3ed7;
    }
    .navbarLink:hover{
        color: black;
        transition: 0.5s;
    }
`


const Navbar = () => {
    const navigate = useNavigate();
    const handleMainClick = () =>{
        navigate('/main')
    }
    return ( 
        <>
            <GlobalStyles />
                <NavbarWrapper>     
                <h1 className='heading'>
                    KUDINOV
                </h1>
                <Navbarblock>
                    <Link to={MAIN_ROUTE} className='navbarLink'>Главная</Link>
                    {/* <Link to={ABOUT_ROUTE} className='navbarLink'>Обо мне</Link> */}
                    <Link to={PORTFOLIO_ROUTE} className='navbarLink' onClick={handleMainClick}>Портфолио</Link>
                    <Link to={CONTACTS_ROUTE} className='navbarLink'>Контакты</Link>
                </Navbarblock>    
                </NavbarWrapper>
        </>
     );
}
 
export default Navbar;