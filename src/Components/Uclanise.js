import '../App.css';
function uclanise()
{
return(
    <div>
         
    <div id="ucl">

<form action="/action_page.php">
    <h1 class="naslovforme">Učlani se!</h1>
    <div class="icon">
        
    </div>
    <div class="formcontainer">
        <div class="container">
            <label for="uname"><strong>Ime i Prezime</strong></label>
            <input type="text" placeholder="Upiši ime  i prezime..." name="ip" required></input>
            <label for="mail"><strong>E-mail</strong></label>
            <input type="text" placeholder="Upiši svoj E-mail..." name="mail" required></input>
            <label for="psw"><strong>Vaša šifra</strong></label>
            <input type="password" placeholder="Upiši svoju šifu..." name="psw" required></input>
        </div>
        <button class="botun2" type="submit">Učlani</button>
        <div class="container2" >
            <label >
                <input type="checkbox" checked="checked" name="remember"> Zapamti me</input>
            </label>
            <span class="psw"><a class="aa" href="#ucl">Zaboravljena šifra?</a></span>  
        </div>
        <button class="vrati"><a class="bb" href="rksplit.html">Vrati se nazad</a></button>
        </div>
      
</form>

</div>
    </div>
);
}
export default uclanise;