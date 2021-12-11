import styled from 'styled-components'

export const Container = styled.div`
    background-color: black;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(max-width: 700px){
        .title{
            font-size: 30px;
        }
    }
`

export const ContainerTitle = styled.h1`
    color: #fff;
    font-size: 80px;
`
export const ContainerInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border: 1px solid #fff;
    margin: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 0.5);  
    
    input {
        background-color: transparent;
        border: 0;
        outline: none;
        color: #fff;
        font-size: 20px;
        margin-right: 12px;
    }

    input::placeholder{    
        color: #afb1b4;
    }

    .buttonSearch{
        cursor: pointer;
        transition: transform 0.2s;
    }

    .buttonSearch:hover{
        transform: scale(1.2)
    }
`
export const MainArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #000;
    width: 500px;
    border-radius: 10px;
    color: #fff;

    h2 {
        margin: 15px 0;
        font-size: 40px;
    }

    p {
        margin-bottom: 16px;
        font-weight: bold; 
    }
`



