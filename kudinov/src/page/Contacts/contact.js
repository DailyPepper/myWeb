import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Img = styled.img`
    width: 60px;
    height: 40px;
    
    &:hover.img{
        fill:white;
    }
`
const Text = styled.p`
    font-size: 20px;
    color: black;

    &hover{
        color: white;
    }
`
const ListContact = styled.li`
    display: flex;
    list-style-type: none;
    width: 450px;
    border-radius: 25px;
    height: 80px;
    border: solid 1px #ff8437;;
    align-items: center;

    &:hover{
        background-color: #ff9553e3;
        transition: 0.7s;
        border: none;
        color: white;
    }

`
const Div = styled.div`
    .link{
        text-decoration: none;
    }
`
const Contact = ({ img, link, title }) => {
    return (
        <Div>
            <Link to={link} target="_blank" rel="noopener noreferrer" className='link'>
                <ListContact>
                    <Img src={img} alt=""/>
                    <Text>{title}</Text> 
                </ListContact>
            </Link>   
        </Div>
    );
};

export { Contact };
