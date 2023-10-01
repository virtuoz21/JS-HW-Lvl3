// 1. Напишите функцию,
// которая принимает строку в качестве параметра и находит самое длинное слово в строке.

// findBiggestWord(str)

function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    return longestWord;
  }
  
// 2. написать функцию которая принимает число и возвращает перевернутое число

// function reverseNumber(number)

function reverseNumber(number) {
  const numberString = number.toString();
  const reversedString = numberString.split('').reverse().join('');
  const reversedNumber = parseInt(reversedString);
  return reversedNumber;
      }
    
  

// 3.написать функцию которая будет принимать стринг значение 
// и возвращать новое стринг значение только с уникальными символами

// function unique(str) 

function unique(str) {
  let uniqueStr = "";
  for(let i = 0; i < str.length; i++) {
    if(!uniqueStr.includes(str[i])) {
      uniqueStr +=str[i]
    }
  }
    return uniqueStr;
}

// 4.написать функцию которая принимает 3 аргумента,
// победы, ничьи и поражения и возвращает количество очков команды 
// ( победа 3 очка, ничья 1 очко, поражение 0 ) 

// function calcPoints(win, draw, loss)

function calcPoints(win, draw, loss) {
  const points = win*3 + draw + loss*0;
  return points;
}

// 5.написать функцию которая принимает массив и возвращает объект с такими свойствами :
// максимальное значение, 
// минимальное значение, 
// количество элементов,
// среднее арифметическое.

// function statisctics(arr);

function statistics(arr) {
  let sum = 0;
  for(let i = 0; i <arr.length; i++) {
    sum += arr[i];
  }
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
    sum: arr.length,
    avarage: sum / arr.length
  } 
}


// 6.Написать функцию которая принимает массив работников компании 

// const workers = [
//   { name: "Jimm", salary: 40000, department: "IT" },
//   { name: "Bob", salary: 60300, department: "HR" },
//   { name: "Stacy", salary: 15000, department: "IT" },
//   { name: "Tom", salary: 55200, department: "DEVOPS" },
//   { name: "Kate", salary: 25000, department: "IT" },
//   { name: "John", salary: 40000, department: "HR" },
//   { name: "Billy", salary: 60000, department: "DEVOPS" },
// ];

// Функция должна вернуть объект 
// {department: ‘Some department’, avarage: ‘some avarage value’}. 
// В этом объекте будет department с самой большой стредней зарплатой из всех departments. 

const workers = [
      { name: "Jimm", salary: 40000, department: "IT" },
      { name: "Bob", salary: 60300, department: "HR" },
      { name: "Stacy", salary: 15000, department: "IT" },
      { name: "Tom", salary: 55200, department: "DEVOPS" },
      { name: "Kate", salary: 25000, department: "IT" },
      { name: "John", salary: 40000, department: "HR" },
      { name: "Billy", salary: 60000, department: "DEVOPS" },
    ];

    function findDepartmentHighAverage(workers) {
      const SalDep = workers.reduce((acc, curr) => {
          const {salary, department} = curr;
              if (!acc[department]) {
                  acc[department] = {sumSal: 0, employees: 0};   
              }
              acc[department].sumSal += salary;
              acc[department].employees ++;
              return acc; 
  }, {});
      let maxAvg = 0;
      let maxDep= "";
      for (const department in SalDep) {
          const {sumSal, employees} = SalDep[department]
          const avgSal = sumSal / employees;
          if (avgSal > maxAvg) {
              maxAvg = avgSal;
              maxDep = department;
          }
      }
      if (maxDep !== "") {
          return {
              department: maxDep,
              average: maxAvg
          }
      } else {
          return "";
      }
  }
  console.log(findDepartmentHighAverage(workers))


