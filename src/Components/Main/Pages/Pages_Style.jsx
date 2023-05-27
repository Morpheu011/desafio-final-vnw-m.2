import styled from "styled-components"

export const Div = styled.div`
margin-top: 5rem;
height: 10rem;`

export const Ul = styled.ul`
display: flex;
justify-content: center;
list-style: none;
gap:0.5rem;
li:last-child{
    border: solid #f6f6f6 1px;
    border-radius:0.5rem;
    width: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
li:hover{
    cursor: pointer;
    background-color: #FFFFFF;
    color:#000000;
}`

export const Li = styled.li`
        border: solid #f6f6f6 1px;
        border-radius: 2rem;
        width: 2.5rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;`

export const Ellipsis = styled.li`
display: flex;
align-items: flex-end;
background:none !important;
color: inherit !important;`