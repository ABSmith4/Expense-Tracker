/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components'

function Button({name, icon, onClick, bg, bPad, color, bRad}) {
    return (
        <ButtonStyled style={{
            background: bg,
            padding: bPad,
            borderRadius: bRad,
            color: color,
        }} onClick={onClick}>
            {icon}
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    display: flex;
    align-items: center;
    gap: .5rem;
    cursor: pointer;
    transition: all .4s ease-in-out;
`;

Button.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    bg: PropTypes.string.isRequired,
    bPad: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    bRad: PropTypes.string.isRequired,
};

export default Button;