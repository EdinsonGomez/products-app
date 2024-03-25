import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginUser } from '../store/authSlice';
import FormControl from "./base/form/FormControl";
import FormLabel from "./base/form/FormLabel";
import InputText from "./base/form/InputText";
import Button from './base/Button';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status: fetchStatus, error } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const onChange = (field) => ({ target }) => {
    const updatedLoginData = {
      ...loginData,
      [field]: target.value
    };

    setLoginData(updatedLoginData);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('onSubmit');
    dispatch(fetchLoginUser(loginData));
  }

  useEffect(() => {
    if (loginData && fetchStatus === 'succeeded') {
      navigate('/app/products');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchStatus]);

  return (
    <form
      className="flex flex-col gap-y-4"
      onSubmit={onSubmit}
    >
      <FormControl>
        <FormLabel htmlFor="username">
          Correo electrónico
        </FormLabel>
        <InputText
          value={loginData.username}
          onChange={onChange('username')}
          type="email"
          placeholder="Escribe tu correo electrónico"
          id="username"
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">
          Contraseña
        </FormLabel>
        <div className="flex items-center w-full border-2 rounded-md pr-2">
          <InputText
            className="border-0 grow"
            value={loginData.password}
            onChange={onChange('password')}
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Contraseña"
            required
          />
          <div className="hover:cursor-pointer">
            {showPassword ? (
              <span className="material-symbols-outlined" onClick={() => setShowPassword(false)}>visibility_off</span>
            ) : (
              <span className="material-symbols-outlined" onClick={() => setShowPassword(true)}>visibility</span>
            )}
          </div>
        </div>
      </FormControl>
      {fetchStatus === 'failed' && !!error ? (
        <p className="text-rose-500 text-center">{error}</p>
      ) : null}
      <Button
        type="submit"
        disabled={fetchStatus === 'loading'}
      >
        Ingresar
      </Button>
    </form>
  )
}

export default LoginForm