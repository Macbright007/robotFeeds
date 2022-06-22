import styled from "styled-components"

export const SideContainer = styled.div`
    width: 5%;  
    height: 100vh;
    position: fixed;
    border-top-right-radius: 17px;
    background: rgba(2, 2, 70, 0.8);
`

export const Logo = styled.div`
    background: rgb(151, 87, 206);
    color: #fff;
    border-bottom-right-radius: 17px;
    border-top-right-radius: 17px;
    padding: 7px;
`
export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    font-family: cursive;
`

export const FeedContainer = styled.div`
    width: 95%;
    max-width: 600px;
    // position: fixed;
    z-index: 1;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    font-family: cursive;
`
export const InnerCont = styled.div`
    h1{
        font-size: 30px;
        letter-spacing: -1.5px;
    }

    p{
        font-size: 13px;
        margin-top: -20px;
    }
`

export const LeftCont = styled.button`
    border: none;
    border-radius: 25px;
    padding: 20px;
    height: 20px;
    margin-top: 20px;
    background: rgb(151, 87, 206);
    display: flex;
    margin-top: 30px;

    h4{
        margin-top: -5px;
        margin-left: 10px;
        color: #fff;
        font-size: 15px;
    }
`
export const Card = styled.div`
    background: rgba(2, 2, 70, 0.359);
    width: 100%;
    max-width: 500px;
    margin: 30px auto;
    border: 3px solid black;
    border-left: 0;
    border-right: 0;
    border-radius: 15px;
    padding: 10px; 
`;

export const Heading = styled.h4`
    font-family: 'Handlee', cursive;
    font-size: 17px;
    font-style: italic;
    font-weight: 800;
    display: flex;
    justify-content: space-between;
 `;

export const Paragraph = styled.p`
    font-family: 'Handlee', cursive;
    font-size: 17px;
 `;