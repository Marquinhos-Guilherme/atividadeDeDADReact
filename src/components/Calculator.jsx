const Calculator = () => {
    const calculate = (operacao) => {
        const a = parseFloat(document.getElementById("num1").value);
        const b = parseFloat(document.getElementById("num2").value);
        let result;
    
        if (operacao === "sum") result = a + b;
        if (operacao === "sub") result = a - b;
        if (operacao === "mul") result = a * b;
        if (operacao === "div") result = b !== 0 ? a / b : "Erro: divisão por zero";
      
    
        document.getElementById("result").innerText = "Resultado: " + result;
      }
    
      return (
        <div>
          <input type="number" id="num1" />
          <input type="number" id="num2" />
    
          <div>
            <button onClick={() => calculate("sum")}>mais</button>
            <button onClick={() => calculate("sub")}>menos</button>
            <button onClick={() => calculate("mul")}>multiplicacao</button>
            <button onClick={() => calculate("div")}>divsao</button>
          </div>
    
          <p id="result">resultado: </p>
        </div>
      )
    
}
export default Calculator