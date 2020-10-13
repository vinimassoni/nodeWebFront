import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import api from "../api/api";
import { getToken } from "../api/auth";
import  Divnovo from './Styled';
import Navbar from '../components/NavBar';

function Vendedor() {
    const [listaVendedor, setListaVendedor] = useState(undefined);
    const history = useHistory();

    function getVendedor(){
        api.get("Vendedors", {headers: {"token": getToken()}}).then(result => setListaVendedor(result.data));
    }

    useEffect(() => {
        getVendedor();
        return () => { };
    }, []);


    function ExcluirVendedor(id){
        api.delete(`vendedors/${id}`, {headers: {"token": getToken()}})
            .then(result => {
                alert(result.data);
                getVendedor();
            })
            .catch(error => alert(error.response.data));
    }

    function EditarVendedor(id){        
        history.push(`/editarvendedor/${id}`);
    }
    return(    
        <>
            <Navbar />
            <Divnovo>
                <a className="btn btn-primary" href="/novovendedor">Novo Vendedor</a>
            </Divnovo>    
            {listaVendedor && listaVendedor.map((vendedor) => (
                <div key={vendedor._id} className="card mt-2">                    
                    <div className="card-body">
                        <h5 className="card-title">{vendedor.nome}</h5>
                        <p className="card-text">{vendedor.cpf}</p>
                        <p className="card-text">{vendedor.endereco}</p>
                        <div className=" d-flex justify-content-end">
                            <button type="button" 
                            className="btn btn-primary btn-sm" 
                            onClick={() => EditarVendedor(vendedor._id)}>Alterar</button>
                            <button type="button" 
                            className="btn btn-danger btn-sm ml-2" 
                            onClick={() => ExcluirVendedor(vendedor._id)}>Excluir</button>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li key="1" className="list-group-item">{vendedor.tipo1}</li>
                        <li key="2" className={vendedor.tipo2 ? "list-group-item" : "list-group-item d-none"}>{vendedor.tipo2}</li>
                    </ul>
                </div>
            ))}   
        </>    
    )
}

export default Vendedor;