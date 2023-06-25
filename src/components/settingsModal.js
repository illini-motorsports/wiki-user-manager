import { useState, useContext } from "react";
import {FaUser, FaKey, FaLink} from 'react-icons/fa';
import { AuthContext } from "../App";


const SettingsForm = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [url, setUrl] = useState("");
    // eslint-disable-next-line
    const {_auth, setAuth} = useContext(AuthContext);


    return (
        <div>
            <div className="field">
                <label className="label">Confluence Admin Username</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Username" value={username} onChange={(e) => {
                        setUsername(e.target.value);
                    }}></input>
                    <span className="icon is-small is-left">
                        <FaUser />
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Confluence Admin Password</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }}></input>
                    <span className="icon is-small is-left">
                        <FaKey />
                    </span>
                </div>
            </div>

            <div className="field">
                <label className="label">Confluence Base URL</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input" type="url" placeholder="URL" value={url} onChange={(e) => {
                        setUrl(e.target.value);
                    }}></input>
                    <span className="icon is-small is-left">
                        <FaLink />
                    </span>
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control">
                    <input type="submit" className="button is-success" value={"Save"} onClick={(e) => {
                        e.preventDefault();
                        setAuth({
                            username: username,
                            password: password,
                            url: url
                        })
                        props.setActive(false);
                    }}></input>
                </div>
                <div className="control">
                    <button className="button is-link is-danger" onClick={(e) => {
                        e.preventDefault()
                        props.setActive(false);
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}


export default function SettingsModal(props){

    return (
        <div>

            { props.is_active && <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Modify Settings</p>
                        <button className="delete" aria-label="close" onClick={(e) => {
                            props.setActive(false);
                        }}></button>
                    </header>
                    <section className="modal-card-body">
                        <SettingsForm setActive={props.setActive}/>
                    </section>
                    <footer className="modal-card-foot">
                    </footer>
                </div>
            </div> }

        </div>
    )
}
