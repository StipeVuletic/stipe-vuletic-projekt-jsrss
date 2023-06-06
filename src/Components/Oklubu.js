import React,{Component} from "react";
import { Link } from "react-router-dom";
import '../App.css';
import Slika3 from './/maladvoranagripe.jpg';

export class Oklubu extends Component{render()
{
return(
    
    <div id="oklubu">
    <div class="livo1">
        <h1 class="naslov1">O klubu</h1>
        <p class="txt2">
            Rukometni klub Split osnovan je 1948. godine u Splitu.Trostruki prvacima,dvostruki doprvacima hrvatske i
            polufinalistima EHF europske lige se dom nalazi u Maloj Dvorani na gripama.Klub s bogatom
            povijesti,poznatim povijesnim igračima ponovno se vraća na pobjedniče staze nakon vraćanja u 1.HRL-Jug
            gdje će nastojati vratit staru slavu.Postani i ti dio ove priče i kluba podržavanjem kluba i
            učlanjivanjem.NIŠTA KONTRA SPLITA!
        </p>
    </div>
    <div class="desno1">
        <img class="dvorana" src={Slika3} ></img>
    </div>
</div>
)
}
}
export default Oklubu;