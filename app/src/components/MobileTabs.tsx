function MobileTabs() {
    return (
        <div className="container-fluid bg-body-tertiary fixed-bottom pt-4 pb-4 mobile-tabs">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a className="icon-link" href="/scanin">
                        <i className="bi bi-plus-square-fill"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="icon-link" href="/scanout">
                        <i className="bi bi-dash-square-fill"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="icon-link" href="/support">
                        <i className="bi bi-question-square"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default MobileTabs;