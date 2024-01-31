import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import git from '../../icon/git.svg'

const Block = styled.div`

    .Links{
        display: flex;
        justify-content: flex-end;
    }
`

const Title = styled.h3`
    display: flex;
    justify-content: center;
`
const Text = styled.p`
    display: flex;
    justify-content: center;
`
const Icon = styled.img`
    width: 50px;
    height: 30px;
`
const Img = styled.img`
    border-radius: 18px;
    width: 310px;
    height: 165px;
`
const Project = ({ title, skills, gitHubLink, img}) => {
    return (
            <>
                <Block>
                    <Img src={img}/>
                    <Title>{title}</Title>
                    <Text>{skills}</Text>
                    <Link to={gitHubLink} target="_blank" rel="noopener noreferrer" className='Links'>
                        <Icon src={git}/>
                    </Link>
                </Block>
            </>
    );
};

export { Project };
