import React, {useRef} from 'react';
import Header from '../../header/header';
import {useDispatch} from 'react-redux';
import {login} from '../../../store/api-actions';
import {saveLogin} from '../../../store/action';
import {Link} from 'react-router-dom';

function AuthPage() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const submitLogin = (authData) => {
    dispatch(login(authData));
    dispatch(saveLogin(authData.login));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    submitLogin({
      login: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email" name="email"
                  placeholder="Email"
                  required=""
                  ref={emailRef}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""
                  ref={passwordRef}
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AuthPage;
