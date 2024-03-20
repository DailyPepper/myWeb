// Footer.js
import React from 'react';
import styled from 'styled-components';
import { socialList } from '../../helpers/socialList';
import { Social } from './social';

// const Hr = styled.hr`
//     width: 1100px;
//     opacity: 0.5;
//     border: 0.1rem solid #ff8437;
//     @media(max-width: 770px){
//         display: none;
//     }
// `

const FooterWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0px 220px;

    @media(max-width: 770px){
        padding: 10px 99px 10px 235px;
        gap: 45px;
    }
`
const UlList = styled.ul`
    display: flex;
    list-style-type: none;
    @media(max-width: 770px){
        display: flex;
    }
`
const Name = styled.p`
    color: black;
    font-size: 15px;
    @media(max-width: 770px){
        display: flex;
    }
`
const FooterBlock = styled.footer`
    background-color: #ff8437;
    position: absolute;
    left: 0;
    width: 100%;
    padding-top: 20px; /* Пространство между содержимым и верхним краем */
    padding-bottom: 20px; /* Пространство между содержимым и нижним краем */
    @media(max-width: 770px){
        position: fixed;
        bottom: 0px;
    }
`
const Footer = () => {
    return (
        <FooterBlock>
            {/*<Hr />*/}
            <FooterWrapper>
                <Name> @DanielKudinov</Name>
                <UlList>
                    {socialList.map((social, index) => (
                        <li key={index}>
                            <Social img={social.img} link={social.link} />
                        </li>
                    ))}
                </UlList>
            </FooterWrapper>
        </FooterBlock>
    );
}

export default Footer;
