function startGameOne() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guessedCorrectly = false;

    alert("Привет! Начинаем игру 'Угадай Число'.\nЯ загадал число от 1 до 100.");

    while (!guessedCorrectly) {
        let userInput = prompt("Введи свое предположение (число от 1 до 100). Если хочешь сдаться, нажми 'Отмена'.");
         if (userInput === null) {
            alert('Игра окончена.');
            return;
        }

         const userGuess = parseInt(userInput);

         if (isNaN(userGuess)) {
            alert('Ошибка! Введи целое число.');
            continue;
        }

        if (userGuess < 1 || userGuess > 100) {
            alert("Число должно быть в диапазоне от 1 до 100. Попробуй еще раз.");
            continue;
        }

        if (userGuess < randomNumber) {
            alert(`Загаданное число БОЛЬШЕ, чем ${userGuess}. Попробуй еще!`);
        } else if (userGuess > randomNumber) {
            alert(`Загаданное число МЕНЬШЕ, чем ${userGuess}. Попробуй еще!`);
        } else {
                  guessedCorrectly = true;
        alert(`🎉 Поздравляю! Ты угадал! Загаданное число было ${randomNumber}.`);
        }
      }
    }

function startMathGame() {
  let num1, num2, operation, question, correctAnswer;

  let operations = ["+", "-", "*", "/"];
  operation = operations[Math.floor(Math.random() * operations.length)];

  if (operation === "/") {
    num2 = Math.floor(Math.random() * 19) + 1;
    correctAnswer = Math.floor(Math.random() * 10) + 1;
    num1 = num2 * correctAnswer;
  } else {
    num1 = Math.floor(Math.random() * 20) + 1;
    num2 = Math.floor(Math.random() * 20) + 1;
    switch (operation) {
      case "+":
        correctAnswer = num1 + num2;
        break;
      case "-":
        correctAnswer = num1 - num2;
        break;
      case "*":
        correctAnswer = num1 * num2;
        break;
    }
  }

  question = `${num1} ${operation} ${num2}`;


  let userAnswer = prompt(`Реши пример: ${question}`);

  if (Number(userAnswer) === correctAnswer) {
    alert("Верно!");
  } else {
    alert(`Ошибка! Правильный ответ: ${correctAnswer}`);
  }
}



    
    // Игра "Камень, ножницы, бумага"
    const playGameRockPaperScissors = () => {
      const choices = ["камень", "ножницы", "бумага"];
      
      let userChoice = prompt("Выберите: камень, ножницы или бумага");
      
      if (userChoice === null) {
          alert("Игра отменена");
          return;
      }
      
      userChoice = userChoice.toLowerCase().trim();
      
      if (!choices.includes(userChoice)) {
          alert("Некорректный выбор! Попробуйте еще раз.");
          return;
      }
      
      const randomIndex = Math.floor(Math.random() * choices.length);
      const computerChoice = choices[randomIndex];
      
      let result;
      
      if (userChoice === computerChoice) {
          result = "Ничья!";
      } else if (
          (userChoice === "камень" && computerChoice === "ножницы") ||
          (userChoice === "ножницы" && computerChoice === "бумага") ||
          (userChoice === "бумага" && computerChoice === "камень")
      ) {
          result = "Вы выиграли!";
      } else {
          result = "Вы проиграли!";
      }
      
      alert(`Ваш выбор: ${userChoice}\nВыбор компьютера: ${computerChoice}\nРезультат: ${result}`);
  };
  
  function startReverseTextGame() {
  let userText = prompt("Введите текст, который нужно перевернуть:");

  if (userText !== null) {
    let reversed = userText.split("").reverse().join("");

    alert("Перевернутый текст: " + reversed);
  }
}


function startQuizGame() {
  const quiz = [
    {
      question: "Какой цвет небо?",
      options: ["1. Красный", "2. Синий", "3. Зеленый"],
      correctAnswer: 2
    },
    {
      question: "Сколько дней в неделе?",
      options: ["1. Шесть", "2. Семь", "3. Восемь"],
      correctAnswer: 2
    },
    {
      question: "Сколько у человека пальцев на одной руке?",
      options: ["1. Четыре", "2. Пять", "3. Шесть"],
      correctAnswer: 2
    }
  ];

  let score = 0;

  for (let i = 0; i < quiz.length; i++) {
    let q = quiz[i];
    let userAnswer = prompt(q.question + "\n" + q.options.join("\n"));

    if (Number(userAnswer) === q.correctAnswer) {
      score++;
    }
  }

  alert("Вы ответили правильно на " + score + " из " + quiz.length + " вопросов!");
}

function playRockPaperScissors() {
  const options = ["камень", "ножницы", "бумага"];

  let userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

  if (!options.includes(userChoice)) {
    alert("Ошибка! Нужно ввести: камень, ножницы или бумага.");
    return;
  }

  let computerChoice = options[Math.floor(Math.random() * options.length)];

  let result = "";

  if (userChoice === computerChoice) {
    result = "Ничья!";
  } else if (
    (userChoice === "камень" && computerChoice === "ножницы") ||
    (userChoice === "ножницы" && computerChoice === "бумага") ||
    (userChoice === "бумага" && computerChoice === "камень")
  ) {
    result = "Вы выиграли! 🎉";
  } else {
    result = "Вы проиграли 😢";
  }

  alert(
    "Ваш выбор: " + userChoice +
    "\nВыбор компьютера: " + computerChoice +
    "\nРезультат: " + result
  );
}


function startRandomColorGame() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  const sections = document.querySelectorAll(".about-games, .mini-games");
  sections.forEach(section => {
    section.style.backgroundColor = color;
  });

  alert("Новый случайный цвет: " + color);
}

