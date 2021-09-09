import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h1`
    color: darkblue;
    font-family: 'Times New Roman', serif;
`;

export default function Header(props) {
    return (
        <StyledHeader>Nasa Picture of the Day</StyledHeader>
    );
}