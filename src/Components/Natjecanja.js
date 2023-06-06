import Slika6 from './1.hrl jug.jpg';
import '../App.css';
function natjecanja()
{
return(
    <div>
         <div id="naticanja">
        <div class="livo4">
            <h1 class="naslov5">Natjecanja</h1>
            <p class="txt5">
                Trenutno seniori našeg kluba osvojili su prvo mjesto 2.HRL-Jug lige bez poraza te od iduće sezone će se
                natjecati u sklopu 1.HRL-Jug lige.Također se klub natjecao u hrvatskoj Premijer ligi i EHF Europskoj
                ligi.
            </p>
        </div>
        <div class="desno4">
            <img class="dvorana3" src={Slika6} alt=""></img>
        </div>
    </div>
    </div>
)
}
export default natjecanja;
