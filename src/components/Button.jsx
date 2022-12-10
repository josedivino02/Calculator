//importar biblioteca React (import library React )
import React from "react";
// importar css (import css)
import './Button.css'

//componente sem estado (stateless component )
export default props => {
    //recebe o props com as labels (botões da calculadora) (receive the props with the labels (calculator from button))
    let classes = 'button '
    classes += props.operation ? 'operation' : ''
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''

    return (
        <button className={classes} onClick={e => props.click && props.click(props.label)}>{ props.label }</button>
    )
}
