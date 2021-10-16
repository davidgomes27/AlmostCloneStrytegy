import styled from "styled-components"




export const Container_Header = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-box-shadow: 0px 3px 8px 1px rgba(140, 140, 140, 0.75);
    -moz-box-shadow:    0px 3px 8px 1px rgba(140, 140, 140, 0.75);
    box-shadow:         0px 3px 8px 1px rgba(140, 140, 140, 0.75);
    position: fixed;
    z-index: 99999;
    top: 0px;
    background-color: #fff;
    font-family: Rois,sans-serif;
    padding-left: 10rem;
    padding-right: 2rem;
   
`

export const imagelogo = styled.img`

   width: 150px ;
    height: 40px;
`
export const CntButtons = styled.div`
    width:30%;
    height:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const BtnsFaqAndBlog = styled.button`
    cursor: pointer;
    background: transparent;
    border-top: transparent;
    border-left: transparent;
    border-right: transparent;
    border-bottom: transparent;
    transition: 500ms;
    font-size: 1.3em;
    &:hover{
        border-bottom: 0.5px black solid;
    }
`

export const Btnenter = styled.button`
    font-size:15px;
    width:11.25rem;
    height:3rem;
    color:#000;
    border: transparent;
    border-radius: 5px;
    background:rgb(255, 235, 151);
    cursor: pointer;
    transition: 500ms;
    &:hover{
        opacity: 0.5 ;
        

    }
`

export const BtnLanguage = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 100px;
    background: transparent;
    cursor: pointer;


`
