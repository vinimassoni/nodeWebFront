import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import api from "../api/api";
import { getToken } from "../api/auth";
import Divnovo from './Styled';
import Navbar from '../components/NavBar';

function Cliente() {
    const [listaCliente, setListaCliente] = useState(undefined);
    const history = useHistory();

    function getCliente(){
        api.get("clientes", {headers: {"token": getToken()}}).then(result => setListaCliente(result.data));
    }

    useEffect(() => {
        getCliente();
        return () => { };
    }, []);


    function ExcluirCliente(id){
        api.delete(`clientes/${id}`, {headers: {"token": getToken()}})
            .then(result => {
                alert(result.data);
                getCliente();
            })
            .catch(error => alert(error.response.data));
    }

    function EditarCliente(id){        
        history.push(`/editarcliente/${id}`);
    }
    return(
        <>
            <Navbar />
            <Divnovo>
                <a className="btn btn-primary" href="/novocliente">Novo Cliente</a>
            </Divnovo>  
            {listaCliente && listaCliente.map((cliente) => (
                <div key={cliente._id} className="card mt-2">                    
                    <div className="card-body">
                        <h5 className="card-title">{cliente.nome}</h5>
                        <p className="card-text">{cliente.cpf}</p>
                        <p className="card-text">{cliente.telefone}</p>
                        <p className="card-text">{cliente.endereco}</p>
                        <div className=" d-flex justify-content-end">
                            <button type="button" 
                            className="btn btn-primary btn-sm" 
                            onClick={() => EditarCliente(cliente._id)}>Alterar</button>
                            <button type="button" 
                            className="btn btn-danger btn-sm ml-2" 
                            onClick={() => ExcluirCliente(cliente._id)}>Excluir</button>
                        </div>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li key="1" className="list-group-item">{cliente.tipo1}</li>
                        <li key="2" className={cliente.tipo2 ? "list-group-item" : "list-group-item d-none"}>{cliente.tipo2}</li>
                    </ul>
                </div>
            ))}   
        </> 
    )
}

export default Cliente;