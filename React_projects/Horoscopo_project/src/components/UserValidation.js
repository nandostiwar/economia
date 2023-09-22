import usuarios from '../data/users'
export function userValidation (prUser,prPass){
    const usuarioEncontrado = usuarios.find((u) => u.user === prUser && u.password === prPass);

  if (usuarioEncontrado) {
    console.log(`Acceso concedido para ${prUser}`);
    return true
  } else {
    console.log('Credenciales incorrectas');
    return false
  }
}

export default userValidation