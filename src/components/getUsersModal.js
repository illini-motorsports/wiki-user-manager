import { useState, useEffect } from "react";

var base64 = require('base-64');
const login = "cmmeyer3"
const password = "Jkmc15002555"


export default function GetUsersModal(props){

    const [users, setUsers] = useState([]);
    const [start, setStart] = useState(0);
    // const [limit, setLimit] = useState(10);
    const limit = 20;

    useEffect(() => {
        const getUsers = async () => {
            const data = await (
                await fetch(`http://127.0.0.1:8000/users/?start=${start}&limit=${limit}`, {
                    headers: new Headers({
                        "Authorization": `Basic ${base64.encode(`${login}:${password}`)}`
                    })
                }).then(response => {
                    if (!response.ok){
                        throw new Error(response.status);
                    }
                    else{
                        return response.json();
                    }
                }).catch(error => {
                    console.log(error)
                })
            )
            setUsers(data.users);
        }

        getUsers();
    }, [start, limit]);

    return (
        <div>
            {props.is_active && <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card" style={{width: 1250}}>
                    <header className="modal-card-head">
                        <p className="modal-card-title">IEM Wiki Users</p>
                        <button className="delete" aria-label="close" onClick={(event) => {
                            event.preventDefault()
                            props.setActive(false);
                        }}></button>
                    </header>
                    <section className="modal-card-body">
                        <table className="table is-striped is-hoverable is-fullwidth">
                            <thead>
                                <tr>
                                    <th>Fullname</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                { users.map((user, i) =>
                                    <tr key={i}>
                                        <td>{user.displayname}</td>
                                        <td>{user.username}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <hr></hr>
                        <nav className="level">
                            <div className="level-left">
                                <p className="level-item">
                                    Showing Results {start}-{start+limit}
                                </p>
                            </div>
                            <div className="level-right">
                                <p className="level-item">
                                    <button className="button is-link" href='/set_depth' onClick={(e) => {
                                        e.preventDefault()
                                        setStart(start + limit);
                                    }}>Next</button>
                                </p>
                            </div>
                        </nav>
                    </section>
                    <footer className="modal-card-foot">
                    </footer>
                </div>
            </div> }
        </div>
    )
}
