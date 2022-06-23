import styled from "styled-components"

// sidebar styling
export const SideContainer = styled.div`
    width: 5%;  
    height: 100vh;
    position: fixed;
    border-top-right-radius: 17px;
    background: rgba(2, 2, 70, 0.8);
`

// logo styling
export const Logo = styled.div`
    background: rgb(151, 87, 206);
    color: #fff;
    border-bottom-right-radius: 17px;
    border-top-right-radius: 17px;
    padding: 7px;
`

// styling for feeds
export const Container = styled.div`
    width: 100%;
    max-width: 400px;
    margin: 100px 250px;
    font-family: cursive;
`

// styling for feedNav
export const FeedContainer = styled.div`
    // border: 2px solid red;
    width: 100%;
    height: 20vh;
    max-width: 600px;
    margin: 0px 200px;
    position: fixed;
    z-index: -1;
    display: flex;
    justify-content: space-between;
    font-family: cursive;
`
export const InnerCont = styled.div`
    h1{
        font-size: 28px;
        letter-spacing: -1.5px;
    }

    p{
        font-size: 10px;
        margin-top: -20px;
    }
`

export const LeftCont = styled.button`
    border: none;
    border-radius: 20px;
    padding: 17px;
    height: 20px;
    background: rgb(151, 87, 206);
    display: flex;
    margin-top: 25px;
    cursor: pointer;

    h4{
        margin-top: -7px;
        margin-left: 10px;
        color: #fff;
        font-size: 15px;
    }
`
// styling for card component
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
    text-transform: uppercase;
 `;

export const Paragraph = styled.p`
    font-family: 'Handlee', cursive;
    font-size: 17px;
    // text-transform: italics;
 `;

 export const Form = styled.form`
    border: 2px solid rgba(2, 2, 70, 0.8);
    border-left: 0;
    border-right: 0;
    border-radius: 25px;
    position: fixed;
    right: 20px;
    width: 100%;
    max-width: 300px;
    height: 70vh;
    padding: 20px;
    margin-top: 30px;


    button{
        width:100%;
        max-width: 250px;
        margin: 15px 40px;
        padding: 10px;
        background: rgba(2, 2, 70, 0.8);
        color: white;
        font-weight: 700;
        border: none;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
    }
    button:hover{
        cursor: pointer;
        background: rgb(151, 87, 206);
    }
`

export const InnerForm = styled.div`
    padding: 10px;

    label{
        color: rgba(2, 2, 70, 0.8);
        font-weight: 700;
    }
    input{
        border-radius: 7px;
        border: 2px solid rgba(2, 2, 70, 0.8);
        padding: 10px;
        width: 100%;
        margin-top: 10px;
    }
    input:focus{
        outline: none;
    }

    textarea{
            border-radius: 7px;
            border: 2px solid rgba(2, 2, 70, 0.8);
            padding: 10px;
            width: 100%;
            margin-top: 10px;
    }
    textarea:focus{
        outline: none;  
    }
`