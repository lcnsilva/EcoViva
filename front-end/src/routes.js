import {BrowserRouter,Routes,Route} from 'react-router-dom';
import TelaInicial from "./Pages/TelaInicial";
import PostEventos from "./Pages/PostEventos";
import PostDicas from "./Pages/PostDicas";

function RoutesApp(){

    return (
       <BrowserRouter>
       <Routes>
           <Route path='/' element = {<TelaInicial/>}/>
           <Route path='PostEventos' element = {<PostEventos/>}/>
           <Route path='PostDicas' element = {<PostDicas/>}/>
         </Routes>
       </BrowserRouter>
    );
   }
   
   export default RoutesApp;

