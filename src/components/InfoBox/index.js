import { useState } from "react";
import Plus from '../assets/plus.svg'
import CloseButton from '../assets/closeButton.svg'

import './style.css';

const InfoBox = (props) => {
  const [ visible, setVisible ] = useState(false);

  function Visible() {
    visible ? setVisible(false) : setVisible(true)    
  }  

  return (
    <div className="infoBox">
      <div className="infoBoxTitle">
        <h2>{props.title}</h2>
        
        <img onClick={ Visible } src={visible ? CloseButton : Plus} alt="Icone para abrir e fechar conteúdo"/>
      </div>

      {
        visible && 
        <div>{props.children}</div>
      }
    </div>
  );
};

export default InfoBox;
