import * as S from "./Pages_Style"

export default function PagesCount() {
    return (
        <S.Div>
            <S.Ul>
                <S.Li>1</S.Li>
                <S.Li>2</S.Li>
                <S.Li>3</S.Li>
                <S.Li>4</S.Li>
                <S.Ellipsis>...</S.Ellipsis>
                <S.Li>322</S.Li>
                <li>Último</li>
            </S.Ul>
        </S.Div>
    )
}