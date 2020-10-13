import React from 'react';
import { Route } from "react-router-dom";
import Login from '../src/pages/Login';
import BemVindo from '../src/components/BemVindo';
import Cliente from '../src/components/Cliente';
import AddCliente from '../src/components/AddCliente';
import EditarCliente from '../src/components/EditarCliente';
import Vendedor from '../src/components/Vendedor';
import AddVendedor from '../src/components/AddVendedor';
import EditarVendedor from '../src/components/EditarVendedor';
import EditarUsuario from '../src/components/EditarUsuario';

function App() {
  return (
    <>     
    <div className="container">
        <Route path="/" exact component={Login}></Route>   
        <Route path="/Home" exact component={BemVindo}></Route> 
        <Route path="/clientes" exact component={Cliente}></Route>        
        <Route path="/novocliente" exact component={AddCliente}></Route>  
        <Route path="/editarcliente/:id" component={EditarCliente}></Route>   
        <Route path="/vendedores" exact component={Vendedor}></Route>     
        <Route path="/novovendedor" exact component={AddVendedor}></Route> 
        <Route path="/editarvendedor/:id" component={EditarVendedor}></Route>        
        <Route path="/editarusuario/" component={EditarUsuario}></Route>
      </div>
    </>
  );
}

export default App;
