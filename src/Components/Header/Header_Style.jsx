import styled from "styled-components"
import Background from "../../images/background.png"

export const Header = styled.header`
background-color: rgba(000, 000, 000, 0.3);
backdrop-filter: blur(9px);
display: flex;
align-items: center;
justify-content: space-between;
height: 3.875rem;
width: 100%;
position: fixed;
z-index: 1;
#Logo{
    margin-left: 1rem;
}`

export const ContainerNavButtons = styled.nav`
display: flex;
justify-content: space-between;
width: 15rem;
button{
    color: #FFFFFF;
    background: none;
    border: none;
    width: 8rem;
    height: 2.5rem;
    cursor: pointer;
}
button:nth-child(2){
    border-radius: 2rem;
    box-shadow: 0rem 0.188rem 0.375rem #0000005C;
    background: #747474;
}
`
export const ContainerNavButtonUl = styled.nav`
display: flex;
button{
    padding-top: 0.625rem;
    border: none;
    background: transparent;
    cursor: pointer;
}
ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10rem;
    margin-right: 2rem;
    list-style: none;
    li{
        cursor: pointer;
    }
}`


export const Section = styled.section`
background-image: url(${Background});
background-size: 100% 100%;
height: 90vh;
display: flex;
flex-direction: column;
justify-content: flex-end;
text-align: left;
`


export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 16rem;
    width: 37rem;
    margin-left: 5rem;
    margin-bottom: 1rem;

h1{ 
    font-size: 1.688rem;
}
p{
    letter-spacing: 0.17px;
    width: 36rem;
    font-weight: 300;
}
`
export const Box = styled.span`
font-size: 0.8rem;
letter-spacing: 0.008rem;
font-weight: 300;
span{
font-weight: 400;
}`

export const BoxNoteIMDB = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
width: 10rem;
img{
    height: 1.5rem;
}
span:nth-child(1){
    font-weight: 300;
    font-size:0.625rem;
    letter-spacing: 0.12px;
}
span:nth-child(2){
    letter-spacing: normal;
    font-weight:400;
    font-size: 1.313rem;
}`

export const BoxButtons = styled.span`
display: flex;
justify-content: space-between;
width: 25rem;
img{
  height:1rem;
}

button{
    color: #FFFFFF;
    font-weight: 500;
    border: none;
    border-radius: 2rem;
    width: 45%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: 0.5s;
}

button:hover{
    scale:1.1;
    transition: 0.5s ease-in-out;
}  

button:nth-child(1){
    background-color: #D53A00;
}
button:nth-child(2){
    background-color: #717171;
}`

export const BoxShadow = styled.span`
background: transparent linear-gradient(180deg, #00000000 0%, #000000 100%) 0% 0% no-repeat padding-box;
`