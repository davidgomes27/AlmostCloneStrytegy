import React from 'react'
import * as S from "./Styled"



export default function Header({

    blog,
    logo,
    faq,
    lang,
    enter


}) {
    return (
        <>
            
                <S.Container_Header>
                    <S.imagelogo src={logo} alt="" />
                    <S.CntButtons>
                        <S.BtnsFaqAndBlog >{blog}</S.BtnsFaqAndBlog>
                        <S.BtnsFaqAndBlog >{faq}</S.BtnsFaqAndBlog>
                        <S.Btnenter>{enter}</S.Btnenter>
                        <S.BtnLanguage>{lang}</S.BtnLanguage>
                    </S.CntButtons>
                </S.Container_Header>
            
        </>
    )
}
