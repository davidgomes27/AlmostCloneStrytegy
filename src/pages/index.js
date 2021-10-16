import React from "react"
import { createGlobalStyle } from "styled-components";
import {graphql} from 'gatsby'
import Header from "../Components/Header/Index"
import Main from "../components/Main/Index"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const query = graphql`

query{
  alldata{
    projects { 

      
      button
      buttonen
      buttonenter
      buttonfa
      buttonlog
      tittle
      subtitle
      btnfooter
      divparagraphsubtitle
      divparagraph
      imagelogo {
        url
      }
      bigimagemain {
        url
      }
      favconstrytegy {
        url
      }
      gifbackgroundblue {
        url
      }
      img2Main {
        url
      }
      img3Main {
        url
      }
      img4Main {
        url
      }
      subtitle1backgroundwhite2
      subtitle2backgroundwhite2
      subtitle3backgroundwhite2
      subtitlebackgroundblue
      subtitlebackgroundblue2
      subtitlebackgroundwhite
      titlesocial
      titlehealp
      titlefooterbackgroundlilas
      titlefooterbackgroundblue
      titlefooteraboutus
      titlebackgroundwhite2
      titlebackgroundwhite
      titlebackgroundblue2
      titlebackgroundblue
      subtitlefooterbackgroundlilas
      ttlFAQ
      ttlblog
      ttlfacebook
      ttlinstagran
      ttllinkedin
      ttlprivacypolicy
      ttlsupport
      ttltermsofuse
      paragraphcredtis1
      paragraphcredtis2
      paragraphcredtis3

      titlenamerenan
      titleboxcriators
      subtitlenamerenan
      subtitleboxcriators
      imgRenan {
        url
      }
    
    }
  }
}

`

function IndexPage({data}){

  const dataMain = data.alldata.projects[0]

  return(
    <div>
      <GlobalStyle/>
      {console.log(data)}
      <Header
        logo = {dataMain.imagelogo.url}
        blog = {dataMain.buttonlog}
        faq ={dataMain.buttonfa}
        enter = {dataMain.buttonenter}
        lang = {dataMain.buttonen}
      />
      <Main 
          title = {dataMain.tittle}
          subtitle = {dataMain.subtitle}
          btnstart = {dataMain.button}
          firstimagmain = {dataMain.bigimagemain.url}
          titlestrytegy = {dataMain.divparagraph}
          subtitledevelop = {dataMain.divparagraphsubtitle}
          gif = {dataMain.gifbackgroundblue.url}
          giftitle = {dataMain.titlebackgroundblue}
          gifsubtitle = {dataMain.subtitlebackgroundblue}
          imghand = {dataMain.img2Main.url}
          titlehand = {dataMain.titlebackgroundwhite}
          subtitlehand = {dataMain.subtitlebackgroundwhite}
          titlesectiontext = {dataMain.titlebackgroundblue2}
          subtitlesectiontext = {dataMain.subtitlebackgroundblue2}
          titleboxparceiros = {dataMain.titlebackgroundwhite2}
          imgparceiros = {dataMain.img4Main.url}
          subtitleparceiros1 = {dataMain.subtitle1backgroundwhite2}
          subtitleparceiros2 = {dataMain.subtitle2backgroundwhite2}
          subtitleparceiros3 = {dataMain.subtitle3backgroundwhite2}
          titlecriadores = {dataMain.titleboxcriators}
          subtitlecriadores = {dataMain.subtitleboxcriators}
          imgRenan = {dataMain. imgRenan.url}
          titleRenan = {dataMain.titlenamerenan}
          subtitleRenan = {dataMain.subtitlenamerenan}
      />
    </div>
  )
}

export default IndexPage
