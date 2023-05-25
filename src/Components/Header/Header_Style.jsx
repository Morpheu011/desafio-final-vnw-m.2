import styled from "styled-components"

export const Header = styled.header`
background-color: rgba(000, 000, 000, 0.5);
backdrop-filter: blur(9px);
display: flex;
align-items: center;
justify-content: space-between;`

export const ContainerNavButtons = styled.nav`
display: flex;
justify-content: space-between;
width: 10rem;
button{
    color: #FFFFFF;
    border: none;
    background: none;
    cursor: pointer;
}
button:active{
    border: solid red;
    background: black;
}
`
export const ContainerNavButtonUl = styled.nav`
display: flex;
align-items: center;
button{
    border: none;
    background: transparent;
    cursor: pointer;
}
ul{
    display: flex;
    list-style: none;
    color: #F6F6F6;
    cursor: pointer;
}
`
