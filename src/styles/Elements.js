import styled from "styled-components";

export const H3 = styled.h3`
padding-top: 10px;
`;
export const Input = styled.input`
border-left: 0px; 
border-right: 0px; 
border-top:0px; 
background: none;
border-bottom: 2px solid #092230da; 
margin-bottom: 5px;
margin-top: 5px;
padding-left: 10px;
color: #fff;
&:focus{
    background:#3c5562;
}
`
export const Select = styled.select`
background: #3d4f58;
margin-bottom: 5px;
margin-top: 5px;
padding-left: 10px;
`
export const Textarea = styled.textarea`
background: #3d4f58;
margin-bottom: 5px;
margin-top: 5px;
padding-left: 10px;
`
export const Button = styled.button`
background: #3d4f58;
padding: 10px 0px;
font-size: 18px;
margin-bottom: 5px;
margin-top: 5px;
animation-duration: 7s;
animation-delay: 2s;
transition: 2s ease-out;
&:hover{
    transform:scaleX(2)

}
`
