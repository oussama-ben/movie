import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieApp from './MovieApp'; 

const App = () => (
  <div>
    <MovieApp />
  </div>
);

render(<App />, document.getElementById("root"));
