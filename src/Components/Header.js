import { Link } from 'react-router-dom';
import '../App.css';
import Slika1 from './logo.jpg';
import Slika2 from './slika1.png'
function Header(){
    return(
        <div>
            <div class="header">
        <div class="logo">
            <a target="_blank" href="http://www.rk-split.hr/"><img class="" src={Slika1}></img> </a>
        </div>
        <div class="navbar">
            <ul>
                <li><a><Link to={'/'}>O klubu</Link></a></li>
                <li><a><Link to={'/druga'}>Povijest</Link></a></li>
                <li><a><Link to={'/treca'}>Uzrasti</Link></a></li>
                <li><a><Link to={'/cetvrta'}>Natjecanja</Link></a></li>
                <li><a><Link to={'/peta'}>Ehf Lp</Link></a></li>
                <li><a><Link to={'/sesta'}>Učlani se</Link></a></li>
            </ul>
        </div>
    </div>
    <div class="početno">
        <div class="contentlivi">
            <h1 class="glnasl">
                Rukometni klub Split
            </h1>
            <p class="txt1">
                Najveći rukometni klub u Splitu,i jedan od najvećih u Hrvatskoj!
            </p>

        </div>
        <div class="contentdesni">
            <img src={Slika2}></img>
        </div>
    </div>

        </div>
    );
}
export default Header;