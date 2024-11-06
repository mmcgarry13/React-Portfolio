import './App.css'
import * as React from 'react'

import { Outlet } from 'react-router-dom';
import Nav from './Components/nav';

function App() {
  return (
    <React.Fragment>

      <Nav />
      <main className="mx-3">
        <Outlet />
      </main>


    </React.Fragment>
  );
}

export default App;



