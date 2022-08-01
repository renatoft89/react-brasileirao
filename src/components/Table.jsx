import React, { useEffect, useState } from 'react';
import api from "../services";

function Header() {
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
    <><div className='Table'>
    </div><table>
        <thead>
          <tr>
            <th>Clubes</th>
            <th>POS</th>
            <th>clubes</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {
            clubes.map((clube, index) => (
              <tr>
                <td>
                  {<img src={escudos[index]} alt={clube}></img>}
                </td>
                <td>
                  {(classificacao += 1)}
                </td>
                {clube}
                <td>
                  {pontos[index]}
                </td>
              </tr>))
          }
        </tbody>
      </table>
    </>

  );
}

export default Header;