import React, { useState } from 'react';
import api from "../api/api";
import { setToken, setUsuarioId } from "../api/auth";

function Acesso( { history } ){
    const [login, setLogin] = useState({
        email: "",
        senha: "",
    });    

    function submitForm(event){
        event.preventDefault();

        api.post(`usuarios/login`, login)
        .then(result => {                     
            setToken(result.data.token);            
            setUsuarioId(result.data.usuario._id);
            console.log(result.data);           
            history.push("/home");   
                    
        })
        .catch(error => alert(error.response.data));
    }

    function loginHandler(event){
        setLogin({...login, [event.target.name]: event.target.value})
    }
    return(
        <>
            <h4>Faça seu Login</h4>
            <form >
                <div className="form-group" onSubmit={submitForm} >
                    <label htmlFor="email">Email</label>
                    <input type="email" 
                    name="email"
                    className="form-control" 
                    id="email" 
                    value={login.email}
                    onChange={loginHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Senha</label>
                    <input type="password"
                    name="senha"
                    className="form-control"
                    id="password" 
                    value={login.senha}
                    onChange={loginHandler} />
                </div>                 
                 <button type="submit" className="btn btn-primary">Entrar</button>
            </form>
            <a href="/novousuario">Cadastre uma conta aqui!</a>   
        </>
    )
}
export default Acesso;