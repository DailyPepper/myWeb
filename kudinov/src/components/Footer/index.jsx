// Footer.js
import React from 'react';
import styled from 'styled-components';
import { socialList } from '../../helpers/socialList';
import { Social } from './social';

const Hr = styled.hr`
    width: 1100px;
    opacity: 0.5;
    border: 0.1rem solid #ff8437;
`

const FooterWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: 0px 220px;
`
const UlList = styled.ul`
    display: flex;
    list-style-type: none;
`
const Name = styled.p`
    color: grey;
    font-size: 15px;
`
const Footer = () => {
    return (
        <>
            <Hr />
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
        </>
    );
}

export default Footer;
