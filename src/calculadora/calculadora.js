exports.calcular = (num1, num2, operacao) => {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Erro: Divisão por zero';
            }
            return num1 / num2;
        default:
            return 'Operação inválida';
    }
};
