import logo from '../logo.svg';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} width="30" height="24" className="d-inline-block align-text-top" alt="logo" />
                    Navbar
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/reports">Reports</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/orders">Orders</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/users">Users</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/support">Support</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;