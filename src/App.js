import { useState, createContext } from 'react';
import 'bulma/css/bulma.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import GetUsersModal from './components/getUsersModal';
import GetGroupsModal from './components/getGroupsModal';
import AddUserModal from './components/addUserModal';
import SettingsModal from './components/settingsModal';

// import {FaArrowRightToBracket} from 'react-icons/fa6'

export const AuthContext = createContext(null);



function App() {
  const [getUsersActive, setGetUsersActive] = useState(false);
  const [getGroupsActive, setGetGroupsActive] = useState(false);
  const [addUsersActive, setAddUsersActive] = useState(false);
  const [settingsActive, setSettingsActive] = useState(false);
  const [auth, setAuth] = useState(null);


  return (
    <div>
      <AuthContext.Provider value={{auth: auth, setAuth: setAuth}}>
        <GetUsersModal is_active={getUsersActive} setActive={setGetUsersActive}/>
        <GetGroupsModal is_active={getGroupsActive} setActive={setGetGroupsActive} />
        <AddUserModal is_active={addUsersActive} setActive={setAddUsersActive}/>
        <SettingsModal is_active={settingsActive} setActive={setSettingsActive}/>
        <Navbar settingsActive={setSettingsActive}/>
      </AuthContext.Provider>
      <div className="App">
        <section className="hero" style={{backgroundColor: "#13294B"}}>
          <div className="hero-body">
            <p className="title has-text-white">
              Illini Electric Motorsports Confluence User Manager
            </p>
          </div>
        </section>
        <div className='columns mt-4'>

          <div className='column is-2'></div>

          <div className='column is-4 mr-4'>
            <a className='box' href='/users' onClick={(event) => {
                event.preventDefault()
                setGetUsersActive(true);
            }}>
              <div className='title has-text-centered'>
                  Find Users
              </div>
              <hr></hr>
              <div className='has-text-centered'>
                <figure className="image is-128x128 is-inline-block">
                  <img className="is-rounded" src="/user_find.webp" alt='Person In Magnifying Glass'/>
                </figure>
              </div>
            </a>
            <a className='mt-4 box' href='/add_users' onClick={(e) => {
              e.preventDefault();
              setAddUsersActive(true);
            }}>
              <div className='title has-text-centered'>
                  Add Users
              </div>
              <hr></hr>
              <div className='has-text-centered'>
                <figure className="image is-128x128 is-inline-block">
                  <img className="is-rounded" src="/user_icon.png" alt='Person'/>
                </figure>
              </div>
            </a>
          </div>

          <div className='column is-4 ml-4'>
            <a className='box' href='/get_groups' onClick={(e) => {
              e.preventDefault();
              setGetGroupsActive(true);
            }}>
                <div className='title has-text-centered'>
                    Find Groups
                </div>
                <hr></hr>
                <div className='has-text-centered'>
                  <figure className="image is-128x128 is-inline-block">
                    <img className="is-rounded" src="/group_find.png" alt='Group In Magnifying Glass'/>
                  </figure>
                </div>
              </a>
              <a className='box' href='/add_groups'>
                <div className='title has-text-centered'>
                    Add Groups
                </div>
                <hr></hr>
                <div className='has-text-centered'>
                  <figure className="image is-128x128 is-inline-block">
                    <img className="" src="/group.png" alt='Group'/>
                  </figure>
                </div>
              </a>
            </div>
          <a className='column is-2 box ml-4 mt-4 mb-4' href='/others' onClick={(e) => {
            e.preventDefault();
          }}>
            <div className='title'>
              Other<br></br>
              Functions<br></br>
              {/* <FaArrowRightToBracket /> */}
            </div>
            <hr></hr>
            <figure className="image is-128x128">
                <img className="" src="/box_arrow_in_right.png" alt='Group'/>
            </figure>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
