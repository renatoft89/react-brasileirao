import React, { useContext } from 'react';
import '../styles/style.header.css'
import brContext from '../context/brContext'

function Header() {
  const {serie} = useContext(brContext)
  return (
    <div className="header">
      <h1>{ `Brasileirão Série ${serie.toUpperCase()} - 2022` }</h1>
    </div>
  );
}

export default Header;