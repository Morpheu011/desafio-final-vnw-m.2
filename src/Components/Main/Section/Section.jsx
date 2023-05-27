import Card from "../../Cards/Cards"
import * as S from "./Section_Style"
import Harriet from "../../../images/Harriet.png"
import StarWars from "../../../images/StarWars.png"
import Bohemian from "../../../images/Bohemian.png"
import Wakanda from "../../../images/Wakanda.png"
import Jurassic from "../../../images/Jurassic.png"
import Starfox from "../../../images/Starfox.webp"
import Raya from "../../../images/Raya.png"
import Us from "../../../images/Us.png"
import Tenet from "../../../images/Tenet.jpg"
import Cima from "../../../images/Cima.png"

export default function SectionMovies() {
    return (
        <section>
            <S.Div>
                <Card src={Harriet} title={"Harriet"} date={2019}/>
                <Card src={StarWars} title={"Star Wars"} date={2016}/>
                <Card src={Bohemian} title={"Bohemian Rhapsody"} date={2020}/>
                <Card src={Wakanda} title={"Pantera Negra:Wak..."} date={2022}/>
                <Card src={Jurassic} title={"Jurassic Park"} date={2019}/>
            </S.Div>
            <S.Div>
                <Card src={Starfox} title={"Starfox"} date={2022}/>
                <Card src={Raya} title={"Raya e o Último Dragão"} date={2016}/>
                <Card src={Us} title={"Nós"} date={2016}/>
                <Card src={Tenet} title={"Tenet"} date={2020}/>
                <Card src={Cima} title={"Não Olhe para Cima"} date={2021}/>
            </S.Div>
        </section>
    )
}