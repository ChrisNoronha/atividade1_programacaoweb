// src/controllers/calculadoraController.js
exports.calcular = (req, res) => {
    const { num1, num2, operation } = req.body;
  
    let result;
    switch (operation) {
      case 'add':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case 'subtract':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case 'multiply':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case 'divide':
        if (parseFloat(num2) === 0) {
          return res.status(400).send('Cannot divide by zero');
        }
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        return res.status(400).send('Invalid operation');
    }
  
    res.send(`Result: ${result}`);
  };
  