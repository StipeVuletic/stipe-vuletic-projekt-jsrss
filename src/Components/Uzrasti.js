import Slika5 from './uzr.jpg';
import '../App.css';
function uzrasti()
{
return(
    <div>
        <div id="uzrasti">
        <div class="livo3">
            <h1 class="naslov3">Uzrasti</h1>
            <p class="txt4">
                U prvim hrvatskim rukometnim ligama sljedeći uzrasti se natječu: U11, U13, U15, U17 te stariji koji
                igraju za seniorsku ekipu.Na slici se nalaze igrači seniora koji su ove godine osvojili 2.HRL-Jug i
                promovirali se u prvu ligu.

            </p>
        </div>
        <div class="desno3">
            <img class="dvorana2" src={Slika5} ></img>
        </div>
    </div>
    </div>
)
}
export default uzrasti;