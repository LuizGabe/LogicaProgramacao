// document.querySelector('#salario').value
function Calcular() {
    let salarioBruto = parseFloat(prompt("Digite o salário: "))
    // Define a função para arredondar e transformar um valor em reais
    function mostrarMoedaBRL(valor) {
        let resultado = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)
        return resultado
    }

    // Calcular o INSS referente ao salário informado
    if(salarioBruto <= 1212) {
        // Salário abaixo de 1212 será taxado 7% - 0.00
        var INSS = ((salarioBruto*7.5)/100) - 0.00

    } else if (salarioBruto >= 1212.01 && salarioBruto <= 2427.35) {
        // Salário entre 1212.01 e 2427.35 será taxado 9% - 18.18
        var INSS = ((salarioBruto*09.0)/100) - 18.18

    } else if (salarioBruto >= 2427.36 && salarioBruto <= 3641.03) {
        // Salário entre 2427.36 e 3641.03 será taxado 12% - 91.01
        var INSS = ((salarioBruto*12.0)/100) - 91.01

    } else if (salarioBruto >= 3641.04) {
        // Salário acima de 3641.04 será taxado 14% - 163
        var INSS = ((salarioBruto*14.0)/100) - 163
    }

    // Calcular o IR referente ao salário informado
    if(salarioBruto <= 1903.98) {
        // Salário abaixo de 1903.98 está isento de IR
        var IR = 0

    } else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
        // Salário entre 1903.99 e 2826.65 será taxado 7.5% - 142.80
        var IR = ((salarioBruto*7.5)/100) - 142.80

    } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        // Salário entre 2826.66 e 3751.05 será taxado 15% - 354.80
        var IR = ((salarioBruto*15.0)/100) - 354.80

    } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        // Salário entre 3751.06 e 4664.68 será taxado 22.5% - 636.13
        var IR = ((salarioBruto*22.5)/100) - 636.13

    } else if (salarioBruto >= 4664.69) {
        // Salário acima de 4664.69 será taxado 27.5% - 869.36
        var IR = ((salarioBruto*27.5)/100) - 869.36
    }

    let total = salarioBruto - INSS - IR

    console.log(`Valor do salário: ${mostrarMoedaBRL(salarioBruto)}`)
    console.log("")
    console.log(`INSS: ${mostrarMoedaBRL(INSS)}`)
    console.log(`IR: ${mostrarMoedaBRL(IR)}`)
    console.log(`Desconto: ${mostrarMoedaBRL(INSS+IR)}`)
    console.log("")
    console.log(`Total: ${mostrarMoedaBRL(total)}`)
    console.log("")
    console.log("")
    document.querySelector("#salarioBruto").innerHTML = `${mostrarMoedaBRL(salarioBruto)}`
    document.querySelector("#inss").innerHTML = `${mostrarMoedaBRL(INSS)}`
    document.querySelector("#ir").innerHTML = `${mostrarMoedaBRL(IR)}`
    document.querySelector("#descontos").innerHTML = `${mostrarMoedaBRL(INSS+IR)}`
    document.querySelector("#salarioLiquido").innerHTML = `${mostrarMoedaBRL(total)}`
}
