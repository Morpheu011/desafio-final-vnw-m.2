import * as S from "./Main_Style"
import Lupa from "../../images/Icon_Lupa.svg"
/* import left from "../../images/left.svg"
import right from "../../images/right.svg" */
import Carousel from 'react-elastic-carousel'
import Card from "../Cards/Cards.jsx"
import Zelda from "../../images/Zelda.png"
import Moonlight from "../../images/Moonlight.jpeg"
import Mario from "../../images/Mario.jpg"
import Duna from "../../images/Duna.png"
import Batman from "../../images/Batman.png"

export default function Main() {
    return (
        <S.Main>
            <nav>
                <S.Ul>
                    <li>Popular</li>
                    <li>Drama</li>
                    <li>Ação</li>
                    <li>Aventura</li>
                    <li>Comédia</li>
                    <li>Crime</li>
                    <li>Fantasia</li>
                    <li>Família</li>
                    <img src={Lupa} alt="icone de Lupa" />
                </S.Ul>
            </nav>
            <S.H2>Últimos lançamentos</S.H2>
            <Carousel itemsToShow={5} pagination={false}>
                <Card src={Zelda} title={"A Lenda de Zelda"} date={2024} />
                <Card src={Moonlight} title={"Moonlight"} date={2022} />
                <Card src={Mario} title={"Super Mario Bros"} date={2023} />
                <Card src={Duna} title={"Duna"} date={2021} />
                <Card src={Batman} title={"Homem Morcego"} date={2022} />
            </Carousel>
        </S.Main>
    )
}

