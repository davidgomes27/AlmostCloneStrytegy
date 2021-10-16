import styled from "styled-components"


export const Container_Main = styled.div`
    width: 100%;
    font-family: Rois,sans-serif;
    color: rgb(34, 37, 75);;
    margin-top:10rem;

`

export const BoxSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Boxtransform = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .BoxText {
        width: 50%;
        height: 100%;
        display: flex;
        padding: 2rem;
        justify-content: space-around;
        flex-direction: column;

        h1{
          font-size : 4rem;
          margin-bottom: 2.25rem;
          font-weight: bolder;
        }

        spam{
            font-size : 1.6rem;
            width: 85%;  
            margin-bottom: 2.25rem;
        }

        button{
            justify-content: center;
            width: 13.375rem;
            height: 3.625rem;
            margin-top: 2rem;
            border: none;
            border-radius: 0.3125rem;
            background: rgb(255, 206, 6);
            font: 500 1.125rem Soleto, sans-serif;
            color: rgb(34, 37, 75);
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: all 0.3s ease 0s;
        
            &:hover{
                width: 13.385rem;
                height: 3.635rem; 
            }
        }
    }

    .BoxImg {
        width: 40%;
    }

`

export const BoxStrytegyText = styled.div`

    width: 100%;
    padding-top: 7rem;
    background-image: linear-gradient(rgb(255, 255, 255) 10%, rgb(255, 250, 228) 100%);

    div{
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        width: 75%;
        margin: 0px auto;
        max-width: 1440px;
        margin-bottom: 5rem;

        h2{
            margin-bottom: 1rem;
            color: rgb(34, 37, 75);
            text-align: center;
            font: 500 3.4375rem Paralucent, sans-serif;
            font-weight: bolder;
            opacity: 1;
            
        }

        spam{
            font-size: 1.25rem;
            width: 50%;
        }

    }

`

export const SectionGif = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 6rem 0px 6rem;
    background-color: rgb(34, 37, 75);
    min-height: 43vh;
    .Box{
        max-width: 1440px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .Box_Gif{
        width: 40%;
        display: flex;
        

        img{
            width: 100%;
        }
    }


    .Box_Gif_Text{
        

        width: 40%;
        margin-left: 10rem;
        


        h2{

            width: 50%;
            margin: 0px 0px 2rem;
            color: rgb(255, 255, 255);
            font: 600 2.5rem Paralucent, sans-serif;
        }
        p{
            width: 80%;
            color: rgb(255, 255, 255);
            font: 400 1.0625rem / 1.375rem Soleto, sans-serif;
        }
    }
`

export const Sectionhand = styled.div`
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6rem 0px 6rem;

`

export const BoxHand = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    


    .BoxImgHand{
        width: 40%;
        


        img{
            width: 100%;
        }
    }

    .BoxTextHand{
        width: 50%;


        h2{
            margin-bottom: 1rem;
            color: rgb(34, 37, 75);
            font: 500 3.4375rem Paralucent, sans-serif;
            font-weight: bolder;
        }

        h3{
            max-width: 81rem;
            margin: 0px 0px 2.375rem;
            color: rgb(34, 37, 75);
            font: 300 1.375rem / 1.875rem Soleto, sans-serif;
            letter-spacing: 0.33px;
            

        }
    }

`


export const SectionText =styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 2rem;
    background: rgb(34, 37, 75);



    .Box_Section_text{
        color: white;
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        width: 55%;
        margin: 0px auto;
        max-width: 1440px;
        padding-top: 5rem;


        h2{
            margin: 0px 0px 1.125rem;
            color: rgb(255, 255, 255);
            font: 500 3.4375rem Paralucent, sans-serif;
            text-align: center;
        }

        h3{
            margin: 0px 0px 2.375rem;
        color: rgb(255, 255, 255);
        font: 300 1.375rem / 1.875rem Soleto, sans-serif;
        letter-spacing: 0.33px;
        text-align: center;
        }
    }

`

export const SectionParceiros = styled.div`
    width: 100%;
    padding: 0px;
    margin-top: 7rem;



    .Box_Parceiros{
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: justify;
        justify-content: space-between;
        width: 80%;
        margin: 0px auto;
        padding: 0px 0px 7rem;
        max-width: 1440px;

        h2{
            margin-bottom: 1rem;
            color: rgb(34, 37, 75);
            font: 500 3.4375rem Paralucent, sans-serif;
            font-weight: bolder;
        }
    }

    .BoxImgParceiros{
        width: 70%;
        margin: 3rem 0px;

        img{
            width: 100%;
        }
    }


    .BoxUlParceiros{

        width: 100%;
        display: flex;
        justify-content: center;

        ul{

            display: flex;
            flex-direction: column;
            -webkit-box-align: center;
            align-items: center;
            width: 80%;
            margin: 1.5rem 0px 0.5rem;
            
            display: flex;
            justify-content: center;
            align-items: center;

            li{
                font: 300 1.375rem / 1.875rem Soleto, sans-serif;
                color: rgb(34, 37, 75);
                text-align: center;
                margin: 2rem 0 2rem 0;


            }
        }
    }
`

export const SectionCriadores = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0px;
    margin-bottom: 0rem;
    background: rgb(34, 37, 75);
    box-shadow: rgb(0 0 0 / 5%) 10px 3px 30px;
    color: #fff;
    padding: 5rem;
    

    .BoxText{
        text-align: center;
        width: 50%;
    }

    .ContainerImg{


        .BoxImg{
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            -webkit-box-pack: center;
            justify-content: center;
            margin: 5rem 0 5rem 0;

            img{
                width: 3.5rem;
                height: 3.5rem;
                border-radius: 50%;
            }
        }

        .BoxName{
            text-align: center;
        }
    }

`



