import styled from 'styled-components';
import { socialList } from '../../helpers/socialList';
import { Social } from './social';

const Hr = styled.hr`
    width: 1100px;
    opacity: .5;
    border: 0.1rem solid #ff8437;;
`
const FooterWrapper = styled.nav`
    display: flex;

`

const Footer = () => {
    return ( 
        <>
            <Hr/>
            <FooterWrapper>
                <ul>
                    {socialList.map((social) => {
                        return <Social img={social.img} />
                    })} 
                </ul>

               
{/* 
                <socialList/> */}
            </FooterWrapper>
        </>
     );
}
 
export default Footer;