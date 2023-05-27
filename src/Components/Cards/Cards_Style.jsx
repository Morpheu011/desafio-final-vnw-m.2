import styled from "styled-components"

export const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
transition: 0.5s ease-in-out;
&:hover{
    scale: 1.1;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    
}
img{
    width: 11rem;
    height: 15rem;
}
h3{
    font-size: 0.95rem;
    font-weight: 700;
}
h4{
    font-weight: 300;
    font-size: 0.75rem;
}
`