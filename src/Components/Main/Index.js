import React from 'react'
import * as S from "./Styled"

export default function Main({

    title,
    subtitle,
    btnstart,
    firstimagmain,
    titlestrytegy,
    subtitledevelop,
    gif,
    giftitle,
    gifsubtitle,
    imghand,
    titlehand,
    subtitlehand,
    titlesectiontext,
    subtitlesectiontext,
    titleboxparceiros,
    imgparceiros,
    subtitleparceiros1,
    subtitleparceiros2,
    subtitleparceiros3,
    titlecriadores,
    subtitlecriadores,
    imgRenan,
    titleRenan,
    subtitleRenan



}) {
    return (
        <>
            <S.Container_Main>
                <S.BoxSection>
                    <S.Boxtransform>
                        <div className="BoxText">
                            <h1>{title}</h1>
                            <spam>{subtitle}</spam>
                            <button>{btnstart}</button>
                        </div>
                        <div className="BoxImg">
                            <img style={{ width: '100%' }} src={firstimagmain} alt="" />
                        </div>
                    </S.Boxtransform>
                    <S.BoxStrytegyText>
                        <div>
                            <h2>{titlestrytegy}</h2>
                            <spam>{subtitledevelop}</spam>
                        </div>
                    </S.BoxStrytegyText>
                </S.BoxSection>
                <S.SectionGif>
                    <div className="Box">
                        <div className="Box_Gif">
                            <img src={gif} alt="gif" />
                        </div>
                        <div className="Box_Gif_Text">
                            <h2>{giftitle}</h2>
                            <p>{gifsubtitle}</p>
                        </div>
                    </div>
                </S.SectionGif>
                <S.Sectionhand>
                    <S.BoxHand>
                        <div className="BoxImgHand">
                            <img src={imghand} alt="imag de uma mão"/>
                        </div>
                        <div className="BoxTextHand">
                            <h2>{titlehand}</h2>
                            <h3>{subtitlehand}</h3>
                        </div>
                    </S.BoxHand>
                </S.Sectionhand>
                <S.SectionText>
                    <div className="Box_Section_text">
                        <h2>{titlesectiontext}</h2>
                        <h3>{subtitlesectiontext}</h3>
                    </div>
                </S.SectionText>
                <S.SectionParceiros>
                    <div className="Box_Parceiros">
                        <h2>{titleboxparceiros}</h2>
                        <div className="BoxImgParceiros">
                            <img src={imgparceiros} alt="patrocinadores e parceiros"/>
                        </div>
                        <div className="BoxUlParceiros">
                            <ul>
                                <li>{subtitleparceiros1}</li>
                                <li>{subtitleparceiros2}</li>
                                <li>{subtitleparceiros3}</li>
                            </ul>
                        </div>
                    </div>
                </S.SectionParceiros>
                <S.SectionCriadores>
                    <div className="BoxText">
                        <h2>{titlecriadores}</h2>
                        <h3>{subtitlecriadores}</h3>
                    </div>
                    <div className="ContainerImg">
                        <div className="BoxImg">
                            <img src={imgRenan}/>
                        </div>
                        <div className="BoxName">
                            <h2>{titleRenan}</h2>
                            <h3>{subtitleRenan}</h3>
                        </div>
                    </div>
                </S.SectionCriadores>
            </S.Container_Main>
        </>
    )
}
