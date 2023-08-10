import style from './Register.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Register() {

    const [username, setUsername] = useState('');
    const [usernameErr, setUsernameErr] = useState('false');
    const [usernameValid, setUsernameValid] = useState(false);

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('false');
    const [emailValid, setEmailValid] = useState(false);

    const [pass, setPass] = useState('');
    const [passErr, setPassErr] = useState('false');
    const [passValid, setPassValid] = useState(false);

    const [repass, setRepass] = useState('');
    const [repassErr, setRepassErr] = useState('false');
    const [repassValid, setRepassValid] = useState(false);

    function updateUsername(e) {
        setUsername(e.target.value);
    }

    function updateEmail(e) {
    setEmail(e.target.value);
    }

    function updatePass(e) {
    setPass(e.target.value);
    }

    function updateRepass(e) {
    setRepass(e.target.value);
    }

    function isValidUsername() {
        const minUsernameSize = 2;

        if (username.length < minUsernameSize) {
            setUsernameErr(true);
            setUsernameValid(false);
        } else {
            setUsernameErr(false);
            setUsernameValid(true);
        }
    }

    function isValidEmail() {
         const minEmailSize = 6;

         if (email.length < minEmailSize) {
            setEmailErr(true);
            setEmailValid(false);
        } else {
            setEmailErr(false);
            setEmailValid(true);
        }
    }

    function isValidPassword() {
         const minPassSize = 6;

         if (pass.length < minPassSize) {
            setPassErr(true);
            setPassValid(false);
        } else {
            setPassErr(false);
            setPassValid(true);
        }
    }

    function isValidRepeatPassword() {
        if (pass !== repass) {
            setRepassErr(true);
            setRepassValid(false);
        } else {
            setRepassErr(false);
            setRepassValid(true);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!usernameErr && !emailErr && !passErr && !repassErr) {
            console.log('siunciam i serveri...');
        }
    }

    return (
<div className={`form-signin w-100 m-auto ${style.formSignin}`}>
    <form onSubmit={handleSubmit}>
        <h1 className="h1 mb-3 fw-normal">Please sign up</h1>

        <div className="form-floating mb-3">
            <input onChange={updateUsername} onBlur={isValidUsername} type="text" id="username"
            className={`form-control ${usernameErr ? 'is-invalid' : ''} ${usernameValid ? 'is-valid' : ''}`} />
            <label htmlFor="floatingInput">Username</label>
            <div className="valid-feedback">
                Looks good!
            </div>
            <div className="invalid-feedback">
                Please choose username.
            </div>
        </div>
        
        <div className="form-floating mb-3">
            <input onChange={updateEmail} onBlur={isValidEmail} type="email" id="email"
            className={`form-control ${emailErr ? 'is-invalid' : ''} ${emailValid ? 'is-valid' : ''}`} />
            <label htmlFor="floatingInput">Email address</label>
            <div className="valid-feedback">
                Looks good!
            </div>
            <div className="invalid-feedback">
                Please write email.
            </div>
        </div>

        <div className="form-floating mb-3">
            <input onChange={updatePass} onBlur={isValidPassword} type="password" id="password"
            className={`form-control ${passErr ? 'is-invalid' : ''} ${passValid ? 'is-valid' : ''}`} />
            <label htmlFor="floatingPassword">Password</label>
            <div className="valid-feedback">
                Looks good!
            </div>
            <div className="invalid-feedback">
                Please create password.
            </div>
        </div>

        <div className="form-floating mb-3">
            <input onChange={updateRepass} onBlur={isValidRepeatPassword} type="password" id="repass"
            className={`form-control ${repassErr ? 'is-invalid' : ''} ${repassValid ? 'is-valid' : ''}`} />
            <label htmlFor="floatingPassword">Repeat password</label>
            <div className="valid-feedback">
                Looks good!
            </div>
            <div className="invalid-feedback">
                Please repeat same password.
            </div>
        </div>

        <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
            <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
        </label>
        </div>
        <button className="btn btn-primary w-100 py-2 mb-3" type="submit">Sign up</button>
        <Link to='/login' className="btn btn-outline-primary w-100 py-2">Sign in</Link>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
</div>
    );
}