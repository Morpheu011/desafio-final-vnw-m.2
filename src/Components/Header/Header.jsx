import * as S from "./Header_Style"
import Logo from "../../images/logo.png"
import Lupa from "../../images/Icon_Lupa.svg"
import Icon_Star from "../../images/Icon_Star.svg"
import IMDB_Logo from "../../images/IMDB_Logo.svg"

export default function Header() {
    return (
        <>
            <S.Header>
                <img id="Logo" src={Logo} alt="Logo Dell Movies" />
                <S.ContainerNavButtons>
                    <button>Séries</button>
                    <button>Filmes</button>
                </S.ContainerNavButtons>
                <S.ContainerNavButtonUl>
                    <ul>
                        <button>
                            <img src={Lupa} alt="Lupa de pesquisa" />
                        </button>
                        <li>Filtro</li>
                        <li>Login</li>
                    </ul>
                </S.ContainerNavButtonUl>
            </S.Header>
            <S.Section>
                <S.BoxShadow>
                <S.Div>
                    <h1>Avatar: o Caminho da Água</h1>
                    <S.Box>3hr 23 min <span>| Fantasia, Família |</span> 2023</S.Box>
                    <S.BoxNoteIMDB>
                        <img src={Icon_Star} alt="icone de estrela" />
                        <span>9,9
                            <span>/10</span>
                        </span>
                        <img src={IMDB_Logo} alt="Logo IMDB" />
                    </S.BoxNoteIMDB>
                    <p>Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.</p>
                    <S.BoxButtons>
                        <button>
                            <img src="data:image/png;base64,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" alt="icone de play" />
                            Assistir agora
                            </button>
                        <button>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACAEAQAAAA5p3UDAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAAAd0SU1FB+cFDxQ3GM9SLXIAAAMUSURBVHja7d09TuNAHIbx/4Q9AilAcADiAnyPiAa5BipQzgASdwAhKHICRIO4Bh9BAg5gunAGzxZbz6C1M0yc9/lJWzkOcfRoI3hBdhbhfV2bbW0Zeuzry7nt7dDRQe6Xh7wIQBwBiCMAcQQgjgDE/Wl9pn95MffwEH7AcGg2mYTPv7sz9/GR+w1YCn40MldV4QdcX5vN5+Hz9/fNleXiX5evax/STKfxc4vCxzSxC9bim6qKvle+KOLnT6fhc+s6di4fAeIIQBwBiCMAcQQgjgDEtf85gDs+9v7oKPcFaHh78z523Lm2z9w+AHOuyxfG/xgk+5+ajwBxBCCOAMQRgDgCENdhDn59Nff4GH7A+rrZ6WnuC1wNNzdm39/Bw348Nre31+aZO3wb+Pzs3Pl58DX5oiCARbm6cu79PXTUN5ubZu0C4CNAHAGIIwBxBCCOAMQRgDjm4F5gDhbHHIxECEAcAYgjAHEEII45uBeYg8UxByMRAhBHAOIIQBwBiCMAcczBvcAcLI45GIkQgDgCEEcA4ghAHHNwLzAHi2MORiIEII4AxBGAOAIQRwDiomte/N7B3v/7FxNbsZom98Uvly7vVWyZjd87OOMcnG7iXD3MwUiEAMQRgDgCEEcA4jLOwff3Zp+fud+A5bCzY3ZwED6ebg6O4t7Bv4N7ByMbAhBHAOIIQBwBiCMAcR3/OvjwMPcFaJjN4sN7+7Ww4xy8tpbvTVGS7n3mI0AcAYgjAHEEII4AxHX4LmA2M/tpDj45yX2Bq+H2NjoH23hstrvb5pk7/D7A05MbnJ0FD/uiIIBFubyM/3Xwxoa5dgHwESCOAMQRgDgCEEcA4ghAHHNwLzAHi2MORiIEII4AxBGAOAIQxxzcC8zB4piDkQgBiCMAcQQgjgDEEYA45uBeYA4WxxyMRAhAHAGIIwBxBCCOObgXmIPFMQcjEQIQRwDiCEAcAYgjAHEdfg5Qlt5fXISPD4fx86vqp3vhyPCjUfwBk4n383n4/LJs+6U73Dwa/RC/eTQfAeIIQBwBiCMAcQQgjgDE/QXXAOz4edWCIQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMy0wNS0xNVQyMDo1NToyNCswMDowMDbr0JgAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjMtMDUtMTVUMjA6NTU6MjQrMDA6MDBHtmgkAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTA1LTE1VDIwOjU1OjI0KzAwOjAwEKNJ+wAAAABJRU5ErkJggg==" alt="icone de rolo de câmera" />
                            Trailer
                            </button>
                    </S.BoxButtons>
                </S.Div>
                </S.BoxShadow>
            </S.Section>
        </>
    )
}