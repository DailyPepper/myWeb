import { Link, useNavigate } from 'react-router-dom';
import { CONTACTS_ROUTE, MAIN_ROUTE, PORTFOLIO_ROUTE } from '../../App/routing/config';
import { GlobalStyles } from '../../style/global-styled';
import styled from 'styled-components';
import sun from '../../img/sun.svg';
import moon from '../../img/moon.svg';
import React, { useState, useEffect } from 'react';

const NavbarWrapper = styled.div`
  height: 85px;
  display: flex;
  gap: 40px;
  justify-content: space-around;
  padding-top: 5px;
  margin: 0px 10px 10px 10px;

  .head{
    text-decoration: none;
    color: #ff8437;
  }
`;
const Heading = styled.h1`
    font-size: 55px;
    padding: 0px 10px 0px 0px;
`
const Navbarblock = styled.div`
  display: flex;
  gap: 90px;
  align-items: center;
  font-size: 24px;
  padding: 65px 10px 0px 20px;

  .navbarLink {
    font-family: 'Public Sans';
    text-decoration: none;
    color: #1a1515d9;
  }
  .navbarLink:hover {
    color: #ff8437;
    transition: 0.5s;
  }
  
`
const SwitchThemeStyled = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background: none;
  border-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${(props) => (props.theme === 'light' ? sun : moon)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 0.5s;
  &:hover {
    filter: grayscale(80%) sepia(20%);
  }
`

// const SwitchTheme = () => {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light');

//   const handleClick = () => {
//     setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
//   };

//   useEffect(() => {

//     document.documentElement.setAttribute('data-theme', theme);
//   }, []);

//   return (
//     <SwitchThemeStyled onClick={handleClick} theme={theme}>
//       {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
//     </SwitchThemeStyled>
//   );
// };


const Navbar = () => {
  const navigate = useNavigate();
  const handleMainClick = () => {
    navigate('/main');
  };

  return (
    <div>
      <GlobalStyles />
      <NavbarWrapper>
        <Link to={MAIN_ROUTE} className='head'>
          <Heading>KUDINOV</Heading>
        </Link>
        <Navbarblock>
          <Link to={MAIN_ROUTE} className='navbarLink'>
            Главная
          </Link>
          <Link to={PORTFOLIO_ROUTE} className='navbarLink' onClick={handleMainClick}>
            Портфолио
          </Link>
          <Link to={CONTACTS_ROUTE} className='navbarLink'>
            Контакты
          </Link>
          {/* <SwitchTheme /> */}
        </Navbarblock>
      </NavbarWrapper>
    </div>
  );
};

export default Navbar;
