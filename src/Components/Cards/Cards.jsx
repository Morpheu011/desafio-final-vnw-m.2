import * as S from "./Cards_Style"

export default function Cards({src, date, title}){
    return(
<S.Div>
    <img src={src} alt={title} />
    <h3>{title}</h3>
    <h4>{date}</h4>
</S.Div>
    )
}