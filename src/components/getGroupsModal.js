import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../App";

var base64 = require('base-64');


export default function GetGroupsModal(props){

    const [groups, setGroups] = useState([]);
    const [start, setStart] = useState(0);

    // eslint-disable-next-line
    const {auth, setAuth} = useContext(AuthContext);

    // const [limit, setLimit] = useState(20);
    const limit = 20;

    useEffect(() => {
        const getGroups = async () => {
            if(auth != null){
                const data = await (
                    await fetch(`${auth.url}/groups/?start=${start}&limit=${limit}`, {
                        headers: new Headers({
                            "Authorization": `Basic ${base64.encode(`${auth.username}:${auth.password}`)}`
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
                setGroups(data.groups);
            } else {
                setGroups([])
            }
        }

        getGroups();
    }, [start, limit, auth]);

    return (
        <div>
            {props.is_active && <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-card" style={{width: "75%"}}>
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
                                    <th>Group Name</th>
                                    <th>Params</th>
                                </tr>
                            </thead>
                            <tbody>
                                { groups.map((group, i) =>
                                    <tr key={i}>
                                        <td>{group.groupname}</td>
                                        <td><p>TBD</p></td>
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
                    {/* <footer className="modal-card-foot">
                    </footer> */}
                </div>
            </div> }
        </div>
    )
}
