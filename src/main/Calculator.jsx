//importar biblioteca React e Componentes (import library React and Components)
import React, { Component } from "react";
// importar css (import css)
import './Calculator.css'
//importar Botão (import button)
import Button from "../components/Button";
//importar display (import display)
import Display from "../components/Display";

// estado inicial da calculadora (inicial state of calculator )
const inicialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

//classe de calculadora (class from calculator)
class Calculator extends Component 
{
    state = { ...inicialState }

    constructor(props) {
        super(props)

        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    //funçao para limpar os dados da calculadora (function for cleaner of calculator data)
    clearMemory() {
        //quando acionada, volta ao estado inicial (when activated, it returns to the initial state)
        this.setState({ ...inicialState })
    }
    //escolhendo as operações (choose the operations)
    setOperation(operation) {
        //se o valor current for 0 e acionar a operação, mude para 1 (if current value is zero, and trigger the operation, change it to one)
        if (this.state.current === 0) {
            console.log(operation)
            //limpa, current para 1 e a operação selecionada (clean, current for one and selected operation)
            this.setState({ operation, current: 1, clearDisplay: true})
        }else {
            //operação finalizada (finish operation)
            const finish = operation === '='
            //operação atual (primeira) (current operation (first))
            const currentOperation = this.state.operation
            //duplicar valores (clone values)
            const values = [ ...this.state.values ]
            //setando o valor realizado na primeira posição do array (setting the finish value in first position of the array)
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch (e) {
                values[0] = this.state.values[0]
            }
            //indice 1 zerado (index one is reset)
            values[1] = 0

            this.setState({ 
                displayValue: values[0],
                operation: finish ? null : operation,
                current: finish ? 0 : 1,
                clearDisplay: !finish,
                values
            })
        }
    }
    //adicionar digito (add digit)
    addDigit(n) {
        //se contém ponto, não adicionar mais nenhum ponto (if contains point, not add more any point)
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }
        //quando contém o digito zero (padrao) ou quando o display clear for verdadeiro, tirando o 0 inicial (when contains the digit zero (default) or then the display clear is true) 
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        //se o display for/estar limpo (if the display is clear)
        const currentValue = clearDisplay ? '' : this.state.displayValue
        //novo valor no display, valor atual mais o n (new value in display, current value more the value 'n')
        const displayValue = currentValue + n
        //exibe o digito acionado (display the triggered digit)
        this.setState({ displayValue, clearDisplay: false })

        //armazenar os numeros digitados (store the entered numbers)
        if (!n !== '.') {
            //indice do array (index of array)
            const i = this.state.current
            //valor atual em float (current value in float)
            const newValue = parseFloat(displayValue)
            //duplicar o array (clone the array)
            const values = [ ...this.state.values ]
            //armazenando no indice (store at the index)
            values[i] = newValue
            //altera o estado (alter state)
            this.setState({ values })
        }
    }

    //função render é obrigatória (function render is required)
    render() {

        return (
            <div className="calculator">
                <Display value={this.state.displayValue}></Display>
                {/* botões da calculadora (calculator button) */}
                <Button label="C" click={this.clearMemory} ></Button>
                <Button label="CE" click={this.clearMemory} ></Button>
                <Button label="<" click={this.clearMemory} ></Button>
                <Button label="/" click={this.setOperation} operation></Button>
                <Button label="7" click={this.addDigit}></Button>
                <Button label="8" click={this.addDigit}></Button>
                <Button label="9" click={this.addDigit}></Button>
                <Button label="*" click={this.setOperation} operation></Button>
                <Button label="4" click={this.addDigit}></Button>
                <Button label="5" click={this.addDigit}></Button>
                <Button label="6" click={this.addDigit}></Button>
                <Button label="-" click={this.setOperation} operation></Button>
                <Button label="1" click={this.addDigit}></Button>
                <Button label="2" click={this.addDigit}></Button>
                <Button label="3" click={this.addDigit}></Button>
                <Button label="+" click={this.setOperation} operation></Button>
                <Button label="0" click={this.addDigit} double></Button>
                <Button label="." click={this.addDigit}></Button>
                <Button label="=" click={this.setOperation} operation></Button>
            </div>
        )
    }
}

export default Calculator
