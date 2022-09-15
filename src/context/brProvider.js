
import React, { useState } from 'react';
import AppContext from './brContext';

function Provider({ children }) {
  const [clubes, setClubes] = useState([]);
  const [pontos, setPontos] = useState([]);
  const [escudos, setEscudos] = useState([]);
  const [jogos, setJogos] = useState([]);
  const [vitorias, setVitorias] = useState([]);
  const [empates, setEmpates] = useState([]);
  const [derrotas, setDerrotas] = useState([]);
  const [serie, setSerie] = useState('a');

  const contextValue = {
    clubes,
    setClubes,
    pontos,
    setPontos,
    escudos,
    setEscudos,
    jogos,
    setJogos,
    vitorias,
    setVitorias,
    empates,
    setEmpates,
    derrotas,
    setDerrotas,
    serie,
    setSerie
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;