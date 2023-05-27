import * as S from "./Main_Style"
import Lupa from "../../images/Icon_Lupa.svg"
import Carousel from "./Carousel/Carousel.jsx"
import SectionMovies from "./Section/Section"
import PagesCount from "./Pages/pages"

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
            <Carousel />
            <S.H2>Em Alta</S.H2>
            <SectionMovies/>
            <PagesCount />
        </S.Main>
    )
}

