import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import TextField from './components/TextField'
import SelectField from './components/SelectField'
import MultiSelectField from './components/MultiSelectField'
// import DateField from './components/DateField'
// import Footer from './components/Footer'
import SwipeableTemporaryDrawer from './components/SideDrawer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <TextField label='Search'/>
      <SelectField /> 
      <MultiSelectField />
      <SwipeableTemporaryDrawer />
      {/* <DateField /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
