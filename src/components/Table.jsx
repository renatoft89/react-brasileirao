import React, { useEffect } from 'react';
import api from "../services";
import '../styles/style.table.css'
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import brContext from '../context/brContext';
import { useState } from 'react';
import Loading from './Loading';

function Classification() {
  const {
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
  } = useContext(brContext)

  const [loading, setLoading] = useState(true);

  const defineSerie = (serie) => {
    if (serie === 'a') {
      setLoading(true)
      return setSerie('b')
    }
    setLoading(true)
    setSerie('a');
  }

  let classificacao = 0;

  useEffect(() => {
    api
      .get(`/brasileirao/?serie=${serie}`)
      .then((response) =>
      (
        (setClubes(response.data.clubes),
          setPontos(response.data.pontos),
          setEscudos(response.data.escudos),
          setJogos(response.data.jogos),
          setVitorias(response.data.vitorias),
          setEmpates(response.data.empates),
          setDerrotas(response.data.derrotas),
          setLoading(false)
        )))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [serie, setClubes, setDerrotas, setEmpates, setEscudos, setJogos, setPontos, setVitorias]);

  if (loading) {
    return <div>
      <Loading />
    </div>
  }

  return (
      <><button
      type='button'
      onClick={() => defineSerie(serie)}
    >
      {`Série ${serie.toUpperCase()}`}
    </button><div className='container-table'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Pos</th>
              <th>Classificação</th>
              <th>Pts</th>
              <th>Jog</th>
              <th>Vit</th>
              <th>Emp</th>
              <th>Der</th>
              <th>Apr</th>
            </tr>
          </thead>
          <tbody>
            {clubes.map((clube, index) => (
              <tr key={index}>
                <td className='posicao'>
                  {(`${classificacao += 1}º`)}
                </td>
                <td className='classificacao'>
                  {<img src={escudos[index]} alt={clube}></img>}
                  <span>
                    {clube}
                  </span>
                </td>
                <td className='pontos'>
                  {pontos[index]}
                </td>
                <td>
                  {jogos[index]}
                </td>
                <td>
                  {vitorias[index]}
                </td>
                <td>
                  {empates[index]}
                </td>
                <td>
                  {derrotas[index]}
                </td>
                <td>
                  {((pontos[index] / (jogos[index] * 3)) * 100).toFixed(2)} %
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div></>
  );
}

export default Classification;