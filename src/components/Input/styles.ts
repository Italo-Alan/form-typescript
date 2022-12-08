import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #fff;

    border: 1px solid #81259D;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;

    & input{
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
    }

    & p{
        color: red;
    }
`

export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    position: relative;
    margin-left: 10px;
    top: 2px;
    font-family: 'Nunito', sans-serif;
`

