import { useState } from "react";
import {FaUser, FaEnvelope, FaKey} from 'react-icons/fa';


var base64 = require('base-64');
const auth_login = "cmmeyer3"
const auth_password = "Jkmc15002555"


const AddUserForm = (props) => {

    const callCreateUserAPI = (event) => {
        event.preventDefault();
        var createUser = {
            "fullname": first + ' ' + last,
            "username": username,
            "email": email,
            "notify": notify
        }

        if(!noPass){
            createUser.password = password;
        }

        console.log(JSON.stringify(createUser))

        fetch("http://127.0.0.1:8000/users/", {
            method: "POST",
            headers: new Headers({
                "Authorization": `Basic ${base64.encode(`${auth_login}:${auth_password}`)}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(createUser)
        })
            .then((response) => response.json())
            .then((data) => {
                if('detail' in data){
                    setFailureText(data.detail)
                    setFailure(true);
                } else {
                    setFailure(false);
                    console.log(data);
                }
            })
            .catch(error => {
                setFailure(true);
                setFailureText("An Error Has Occured")
                console.log(error)
            })
    }

    const [noPass, setNoPass] = useState(false);

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notify, setNotify] = useState(false);
    const [failure, setFailure] = useState(false);
    const [failureText, setFailureText] = useState('');

    return (
        <div>
            {failure && <div className="box has-background-danger">
                <p className="title has-text-white">
                    Creation Failed!
                </p>
                <p className="subtitle has-text-white">
                    {failureText}
                </p>
            </div> }
            {!failure && <div className="box has-background-success">
                <p className="title has-text-white has-text-centered">
                    Creation Succeeded!
                </p>
            </div> }
            <form action="/users/" method="POST" onSubmit={callCreateUserAPI}>
                <div className="columns">
                    <div className="column">
                        <div className="field">
                            <label className="label">First Name</label>
                            <div className="control">
                                <input className="input" type="text" value={first} onChange={(e) => {
                                    setFirst(e.target.value);
                                }}></input>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="field is-fullwidth">
                            <label className="label">Last Name</label>
                            <div className="control">
                                <input className="input" type="text" value={last} onChange={(e) => {
                                    setLast(e.target.value);
                                }}></input>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Username" value={username} onChange={(e) => {
                            setUsername(e.target.value);
                        }}></input>
                        <span className="icon is-small is-left">
                            <FaUser />
                        </span>
                        {/* <span className="icon is-small is-right">
                            <FaCheck />
                        </span> */}
                    </div>
                    {/* <p className="help is-success">This username is available</p> */}
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="email" placeholder="User Email Address" value={email} onChange={(e) => {
                            setEmail(e.target.value);
                        }}></input>
                        <span className="icon is-small is-left">
                            <FaEnvelope />
                        </span>
                        {/* <span className="icon is-small is-right">
                            <FaCircleExclamation />
                        </span> */}
                    </div>
                    {/* <p className="help is-danger">This email is invalid</p> */}
                </div>

                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input type="checkbox" className='mr-1' checked={noPass} onChange={() => {
                                setNoPass(!noPass);
                            }}></input>
                            Do Not Set Password
                        </label>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="password" placeholder="Password" disabled={noPass} value={password} onChange={(e) => {
                                    setPassword(e.target.value);
                                }}></input>
                        <span className="icon is-small is-left">
                            <FaKey />
                        </span> 
                    </div>
                    {/* <p className="help is-danger">This email is invalid</p> */}
                </div>

                <div className="field">
                    <div className="control">
                        <label className="checkbox">
                            <input type="checkbox" className='mr-1' value={notify} onChange={() => {
                                setNotify(!notify)
                            }}></input>
                            Email User to Notify of Account Creation
                        </label>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <input type="submit" className="button is-link"></input>
                    </div>
                    <div className="control">
                        <button className="button is-link is-light" onClick={(e) => {
                            e.preventDefault()
                            props.setActive(false);
                        }}>Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default function AddUserModal(props){

    return (
        <div>

            { props.is_active && <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Create New User</p>
                        <button className="delete" aria-label="close" onClick={(e) => {
                            props.setActive(false);
                        }}></button>
                    </header>
                    <section className="modal-card-body">
                        <AddUserForm setActive={props.setActive}/>
                    </section>
                    <footer className="modal-card-foot">
                    </footer>
                </div>
            </div> }

        </div>
    )
}
