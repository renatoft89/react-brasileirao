import React, { useEffect, useState } from 'react';
import api from "../services";
import '../styles/style.table.css'
import Table from 'react-bootstrap/Table';

function Classification() {
  const [clubes, setClubes] = useState([]);
  const [pontos, setPontos] = useState([]);
  const [escudos, setEscudos] = useState([]);
  const [jogos, setJogos] = useState([]);
  const [vitorias, setVitorias] = useState([]);
  const [empates, setEmpates] = useState([]);
  const [derrotas, setDerrotas] = useState([]);

  let classificacao = 0;

  useEffect(() => {
    api
      .get("/brasileirao")
      .then((response) =>
      (
        (setClubes(response.data.clubes),
          setPontos(response.data.pontos),
          setEscudos(response.data.escudos),
          setJogos(response.data.jogos),
          setVitorias(response.data.vitorias),
          setEmpates(response.data.empates),
          setDerrotas(response.data.derrotas)
        )))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return (
    <div className='container-table'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Classificação</th>
            <th>Pts</th>
            <th>Jogos</th>
            <th>Vitórias</th>
            <th>Empates</th>
            <th>Derrotas</th>
            <th>Aproveitamento</th>
          </tr>
        </thead>
        <tbody>
          {
            clubes.map((clube, index) => (
              <tr key={index}>
                <td className='posicao'>
                  {(`${classificacao += 1}º`)}
                </td>
                <td className='classificacaos'>
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
                  {((pontos[index] / (jogos[index]*3)) * 100).toFixed(2)} %
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Classification;