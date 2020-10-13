import React, { useEffect } from "react";
import api from "../api/api";
import { getToken, getUsuarioId } from "../api/auth";

function NovoUsuario() {
    const [usuario, setUsuario] = React.useState({
        nome: "",
        email: "",
        senha: ""       
    });

    useEffect(() => {        
        api.get(`usuarios/${getUsuarioId()}`, {headers: {"token": getToken()}})
        .then(result => {
            setUsuario(result.data);
        });
        return () => {};
    }, []);
    

    function submitForm(event) {
        event.preventDefault();
        api.put(`usuarios/${getUsuarioId()}`, usuario, {headers: {"token": getToken()}})
            .then(result => {
                alert(result.data)     
            })
            .catch(error => alert(error.response.data));        
    }

    function usuarioHandler(event) {
        setUsuario({ ...usuario, [event.target.name]: event.target.value });
    }

    return (
        <>
            <form className="form" onSubmit={submitForm} style={{ width: "50%" }}>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                    <input name="nome"
                        className="form-control"
                        value={usuario.nome}
                        onChange={usuarioHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name="email"
                        className="form-control"
                        value={usuario.email}
                        onChange={usuarioHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password"
                        className="form-control"
                        name="senha"
                        value={usuario.senha}
                        onChange={usuarioHandler}
                    />
                </div>
                <a className="btn btn-danger mr-2" href="/home">Voltar</a>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>            
        </>
    )
}

export default NovoUsuario;