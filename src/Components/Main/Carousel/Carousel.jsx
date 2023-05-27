import Carousel from 'react-elastic-carousel'
import Card from "../../Cards/Cards"
import Zelda from "../../../images/Zelda.png"
import Moonlight from "../../../images/Moonlight.jpeg"
import Mario from "../../../images/Mario.jpg"
import Duna from "../../../images/Duna.png"
import Batman from "../../../images/Batman.png"

export default function Carrossel(){
    return(
<Carousel itemsToShow={5} pagination={false}>
<Card src={Zelda} title={"A Lenda de Zelda"} date={2024} />
<Card src={Moonlight} title={"Moonlight"} date={2022} />
<Card src={Mario} title={"Super Mario Bros"} date={2023} />
<Card src={Duna} title={"Duna"} date={2021} />
<Card src={Batman} title={"Homem Morcego"} date={2022} />
</Carousel>
    )
}

