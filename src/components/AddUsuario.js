import React from 'react';

function AdicionarUsuario() {
    return(
        <>
        <form className="form" >
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
        <button type="submit" className="btn btn-primary">Cadastrar</button>
    </form>
    </>
    )

}    
   
export default AdicionarUsuario;