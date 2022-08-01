import React, { useEffect, useState } from 'react';
import api from "../services";
import '../styles/style.table.css'
import Table from 'react-bootstrap/Table';

function Classification() {
  const [clubes, setClubes] = useState([])
  const [pontos, setPontos] = useState([])
  const [escudos, setEscudos] = useState([])

  let classificacao = 0;

  useEffect(() => {
    api
      .get("/brasileirao")
      .then((response) =>
      (
        (setClubes(response.data.clubes),
          setPontos(response.data.pontos),
          setEscudos(response.data.escudos)
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
          </tr>
        </thead>
        <tbody>
          {
            clubes.map((clube, index) => (
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
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Classification;