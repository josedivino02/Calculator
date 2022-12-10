//importar biblioteca React (import library React )
import React from "react";
// importar css (import css)
import './Display.css'

//componente sem estado (funcional) (stateless component (functional))
export default props => 
    <div className="display">{ props.value }</div>