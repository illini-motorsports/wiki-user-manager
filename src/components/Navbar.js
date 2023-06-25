import {FaGear} from 'react-icons/fa6';


export default function Navbar(props){
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <figure className="image">
                        <img src="/iem.png" alt="IEM"></img>
                    </figure>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Home
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="/">
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="https://wiki.motorsports.illinois.edu" target="_blank" rel="noreferrer">
                                Wiki
                            </a>
                            <hr className="navbar-divider"></hr>
                            <a className="navbar-item" href="https://github.com/illini-motorsports/wiki-user-manager/issues">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <a href='/settings' onClick={(e) => {
                            e.preventDefault();
                            props.settingsActive(true);
                        }}>
                            <span class="icon-text">
                                <span class="icon">
                                    <FaGear />
                                </span>
                                <span>Settings</span>
                            </span>
                        </a>
                        {/* <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-liifght">
                                Log in
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
        </nav>
    );
}