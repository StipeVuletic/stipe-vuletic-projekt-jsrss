
import './App.css';
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom';
import Oklubu from './Components/Oklubu';
import Povijest from './Components/Povijest';
import Uzrasti from './Components/Uzrasti';
import Natjecanja from'./Components/Natjecanja';
import Ehflp from './Components/Ehflp';
import Uclanise from './Components/Uclanise';
import Futer from './Components/Futer';
import Header from'./Components/Header';
function App() {
  return (
    <div class="App">
       <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Oklubu/>}></Route>
          <Route path='/druga' element={<Povijest/>}></Route>
          <Route path='/treca'element={<Uzrasti/>}></Route>
          <Route path='/cetvrta'element={<Natjecanja/>}></Route>
          <Route path='/peta' element={<Ehflp/>}></Route>
          <Route path='/sesta' element={<Uclanise/>}></Route>
        </Routes>
        <Futer></Futer>
       </Router>
    </div>
     )
    }
      
  
export default App;
