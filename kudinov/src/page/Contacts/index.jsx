import styled from 'styled-components'
import {Contact} from './contact'
import {socialList} from '../../helpers/socialList'

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    padding: 75px;
    @media(max-width: 770px){
        display: flex;
        flex-direction: column;
        padding: 50px 29px 0px 165px;
    }
`
const UlList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const contacts = () => {
    return ( 
        <>
        <Wrapper>
            <UlList>
                {socialList.map((contact) => (
                            <Contact title={contact.title} img={contact.img} link={contact.link} />
                        ))}
            </UlList>
        </Wrapper>
        </>
     );
}
 
export default contacts;