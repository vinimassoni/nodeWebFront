import React, { useState } from 'react';
import api from "../api/api";
import { getToken } from "../api/auth";

function AdicionarVendedor() {
    const [vendedor, setVendedor] = useState({
        nome: "",
        cpf: "",
        endereco: "",
    });

    function limparForm() {
        setVendedor({
            nome: "",
            cpf: "",
            endereco: "",
        })
    }

    function submitForm(event) {
        event.preventDefault();
        api.post("vendedores", vendedor, {headers: {"token": getToken()}} )
            .then(result => {
                alert.success(result.data, { position: "top-right" });
                limparForm();
            })
            .catch(error => alert.error(error.response.data, { position: "top-right" }));
    }

    function vendedorHandler(event) {
        setVendedor({ ...vendedor, [event.target.name]: event.target.value });
    }

    return (
        <form className="form" onSubmit={submitForm} >
            <div className="form-group">
                <label htmlFor="Nome">Nome:</label>
                <input name="nome"                
                    className="form-control"
                    id="Nome"
                    value={vendedor.nome}
                    onChange={vendedorHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="cpf">CPF:</label>
                <input className="form-control"                
                    name="cpf"
                    value={vendedor.cpf}
                    onChange={vendedorHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="endereco">Endereço:</label>
                <textarea name="endereco"               
                className="form-control"
                value={vendedor.nome}
                onChange={vendedorHandler}/>            
            </div>     
            <a className="btn btn-secondary mr-2" href="/clientes">Voltar</a>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>   
    )
}

export default AdicionarVendedor;