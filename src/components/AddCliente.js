import React, { useState } from "react";
import api from "../api/api";
import { getToken } from "../api/auth";

function AdicionarCliente() {
    const [cliente, setCliente] = useState({
        nome: "",
        cpf: "",
        telefone: "",
        endereco: "",
    });

    function limparForm() {
        setCliente({
            nome: "",
            cpf: "",
            telefone: "",
            endereco: "",
        })
    }

    function submitForm(event) {
        event.preventDefault();
        api.post("clientes", cliente, {headers: {"token": getToken()}})
            .then(result => {
                console.log(result);
                alert(result);
                limparForm();
            })
            .catch(error => alert(error));
    }

    function clienteHandler(event) {
        setCliente({ ...cliente, [event.target.name]: event.target.value });
    }

    return(       
            <form className="form" onSubmit={submitForm} >
            <div className="form-group">
                <label htmlFor="Nome">Nome:</label>
                <input name="nome"                
                    className="form-control"
                    id="Nome" 
                    value={cliente.nome}
                    onChange={clienteHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="cpf">CPF/CNPJ:</label>
                <input className="form-control"                
                    name="cpf"
                    value={cliente.cpf}
                    onChange={clienteHandler} />
            </div>
            <div className="form-group">
                <label htmlFor="telefone">Telefone:</label>
                <input name="telefone"               
                    className="form-control"
                    id="Telefone"
                    value={cliente.telefone}
                    onChange={clienteHandler} />
            
            </div>
            <div className="form-group">
                <label htmlFor="Endereco">Endereço:</label>
                <textarea className="form-control"
                    id="endereco"
                    name="endereco"
                    value={cliente.endereco}
                    onChange={clienteHandler}
                />
            
            </div>
            <a className="btn btn-secondary mr-2" href="/clientes">Voltar</a>
            <button type="submit" className="btn btn-primary">Salvar</button>
        </form>
    )
}
export default AdicionarCliente;
