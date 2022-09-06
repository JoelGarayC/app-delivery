import React from 'react'

const Register = () => {
  return (

    <form>
      <div>
        <label htmlFor="email">email</label>
        <imput type="text" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Contraseña</label>
        <imput type="text" name="password" id="password" />
      </div>
    </form>
  )
}

export default Register