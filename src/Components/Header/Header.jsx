import * as S from "./Header_Style"
import Logo from "../../images/logo.png"
import Lupa from "../../images/Icon_Lupa.svg"

export default function Header() {
    return (
        <>
            <S.Header>
                <img src={Logo} alt="Logo Dell Movies" />
                <S.ContainerNavButtons>
                    <button>Séries</button>
                    <button>Filmes</button>
                </S.ContainerNavButtons>
                <S.ContainerNavButtonUl>
                    <ul>
                        <button>
                            <img src={Lupa} alt="" />
                        </button>
                        <li>Filtro</li>
                        <li>Login</li>
                    </ul>
                </S.ContainerNavButtonUl>
            </S.Header>
        </>
    )
}