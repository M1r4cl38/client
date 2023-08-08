import style from './Login.module.css';
import { Link } from 'react-router-dom';

export function Login() {
    return (
<div className={`form-signin w-100 m-auto ${style.formSignin}`}>
    <form>
        <h1 className="hą mb-3 fw-normal">Please log in</h1>
        <div className="form-floating mb-3">
            <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
            <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
            <input type="password" class="form-control" id="password" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
        </div>
        <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
            Agree to <Link to='/'>Terms of Service</Link>
        </label>
        </div>
        <Link to='/' className="btn btn-primary w-100 py-2 mb-3" type="submit">Sign in</Link>
        <Link to='/register' className="btn btn-outline-primary w-100 py-2" type="submit">Sign up</Link>
        <p className="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
    </form>
</div>
    );
}