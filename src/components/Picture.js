import React from 'react';
import styled from 'styled-components';

const StyledPicture = styled.img`
    border-radius: 5%;
    border-width: 5px;
    border-color: yellow;
    border-style: solid;
`;

export default function Picture(props) {
    return (
        <StyledPicture src={props.src} alt="" />
    )
}