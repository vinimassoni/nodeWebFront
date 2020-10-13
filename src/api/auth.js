export const TOKEN_KEY = "token";
export const LS_USUARIO_ID = "usuario";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = token =>  localStorage.setItem(TOKEN_KEY, token);
export const getUsuarioId = () => localStorage.getItem(LS_USUARIO_ID);
export const setUsuarioId = usuario => localStorage.setItem(LS_USUARIO_ID, usuario);

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(LS_USUARIO_ID);
}