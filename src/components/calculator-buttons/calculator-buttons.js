import React from "react";
import Styled from "styled-components";
import Button from "@material-ui/core/Button";

const ButtonsContainer = Styled.ul`
    width: 400px;
    list-style-type: none;
    padding-inline-start: 0;
    margin-block-start: 0;
`;

const ButtonTile = Styled.li`
    float: left;
`;

const CalculatorButton = Styled(Button)`
    height: 75px;
    width: ${props => (100 * props.width)}px;
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    border: 0;
    border-radius: 0 !important;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
    color: white !important;
    font-size: 24px !important;
    height: 48;
    padding: '0 30px';
`;

export const CalculatorButtons = ({
        buttons,
        onClick,
    }) => (
    <ButtonsContainer>
        {buttons.map(button =>
            <ButtonTile key={button.id || button.name} >
                <CalculatorButton
                    id={`id${button.id || button.name}`}
                    width={button.width || 1}
                    onClick={onClick(button)}
                >
                    {button.name}
                </CalculatorButton>
            </ButtonTile>
        )}
    </ButtonsContainer>
);