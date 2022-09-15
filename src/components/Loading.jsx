import React from 'react';
import "../styles/style.loading.css";

function Loading(props) {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
      <span>Carregando Tabela...</span>
    </div>
  );
}

export default Loading;