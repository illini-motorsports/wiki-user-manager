import 'bulma/css/bulma.css'
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <header className="App-header">
        </header>
        <div className='columns'>
          <div className='column is-2'></div>
          <div className='column is-4 box'>
            <p className="box is-narrow" id="p1" draggable="true">This element is draggable.</p>
          </div>
          <div className='column is-4 box'>
            <p className="box is-narrow" id="p1" draggable="true">This element is draggable.</p>
          </div>
          <div className='column is-2'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
