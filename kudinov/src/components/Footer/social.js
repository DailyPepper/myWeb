import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Img = styled.img`
    width: 50px;
    height: 30px;
    filter: grayscale(0%) brightness(100%);
    transition: filter 0.3s ease;

    &:hover {
        color: red;
        // добавить цвет 
    }

`;

const Social = ({ img, link }) => {
    return (

        <Link to={link} target="_blank" rel="noopener noreferrer">
            <Img src={img} alt="" />
        </Link>
    );
};

export { Social };
