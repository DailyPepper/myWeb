import git from '../../icon/git.svg'
import { socialList } from '../../helpers/socialList';
import styled from 'styled-components';

const liLink = styled.li`
    width: 50px;
    height: 30px;
` 
const Img = styled.img`
    width: 50px;
    height: 30px;
`


const Social = ({img}) => {
    return (
            <liLink>
                <Img src={img} alt="" />
            </liLink>
    )
}

export {Social}