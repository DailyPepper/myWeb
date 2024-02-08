import styled from 'styled-components';
import img4 from '../../img/img4.png';
import { Project } from './project';
import {projects} from '../../helpers/projectList'

const PortfolioWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    @media(min-width: 770px){
        display: flex;
        flex-direction: column;
        padding: 50px 29px 0px 165px;
    }
    @media(max-width: 770px){
        display: flex;
        flex-direction: column;
        padding: 50px 29px 0px 465px;
    }
`
const Img = styled.img`
    width: 205px;
    height: 180px;
`
const UlList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    padding: 50px 130px;
`
const List = styled.li`
    width: 310px;
    height: 300px;
    background: white;
    border-radius: 20px;
    border: 1px solid #ff8437;;
    list-style-type: none;
`
const Portfolio = () => {
    return ( 
        <>
            <PortfolioWrapper>
                <Img src={img4} alt="" />    
                <UlList>
                    {projects.map((project, index) => (
                        <List key={index}>
                            <Project img={project.img} title={project.title} skills={project.skills} gitHubLink={project.gitHubLink} />
                        </List>
                    ))}
                </UlList>
            </PortfolioWrapper>
        </>
     );
}
 
export default Portfolio;
