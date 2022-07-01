import React, { useEffect, useState } from 'react';
import api from "../services";
import '../App.css'

function Header() {
  const [clubes, setClubes] = useState([])
  const [pontos, setPontos] = useState([])
  const [escudos, setEscudos] = useState([])

  const serieA = { clubes, pontos, escudos }
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
      {/* {clubes.map((clube) => {
    return <p>{clube} </p>;
  })} */}
      {/* {pontos.map((ponto) => (<li>{ponto}</li>))}
  {escudos.map((escudo) => (<img src={escudo} alt='escudo'></img>))} */}
    </div><table>
        <thead>
          <tr>
            <th>Pts</th>
            <th>clubes</th>
            {/* <th>Clubes</th> */}
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>

          {clubes.map((clube) => {
            return <tr>
              <td>
                {(classificacao += 1)}
              </td>
              <td>
                {clube}
              </td>
              {/* {
              escudos.map((escudo) => {
                return <td>
                  <img src={escudo} alt='escudo'></img>
                </td>;
              })
            } */}
            </tr>;
          })}

        </tbody>
      </table>
    </>

  );
}

export default Header;