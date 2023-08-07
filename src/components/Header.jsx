//import style from './Home.module.css';

export function Header() {
    const userLoggedIn = true;

    const publicMenu = (
            <div className="col-md-3 text-end">
                <button type="button" className="btn btn-outline-primary me-2">Login</button>
                <button type="button" className="btn btn-primary">Sign-up</button>
            </div>
    );

    const userMenu = (
        <div className="dropdown text-end">
          <a href="/" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="/">New project...</a></li>
            <li><a className="dropdown-item" href="/">Settings</a></li>
            <li><a className="dropdown-item" href="/">Profile</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Sign out</a></li>
          </ul>
        </div>
    )

    return (
    <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
            <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                logo
            </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="/" class="nav-link px-2 link-secondary">Home</a></li>
            <li><a href="/" class="nav-link px-2">Features</a></li>
            <li><a href="/" class="nav-link px-2">Pricing</a></li>
            <li><a href="/" class="nav-link px-2">FAQs</a></li>
            <li><a href="/" class="nav-link px-2">About</a></li>
        </ul>
        
        {userLoggedIn ? userMenu : publicMenu}
        </header>
    </div>
    )
}