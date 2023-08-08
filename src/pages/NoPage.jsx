import style from './NoPage.module.css';

export function NoPage() {
    return (
    <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
            <h1 className="text-body-emphasis">404</h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted">Page not found</p>
            <div className="d-inline-flex gap-2 mb-5">
            <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                Call to action
            </button>
            <button className="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                Secondary link
            </button>
            </div>
        </div>
    </div>
    );
}