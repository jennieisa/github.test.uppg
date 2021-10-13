//Genomgång av övningsuppgifter 

//Övningsuppgift 1, 1A, 1B och extra:
let addTodoButton = document.querySelector("#addTodo");
let todoList = document.querySelector("#todoList");
let textInput = document.querySelector("#todo"); //Hämtar ett attribute. I det här fallet "name" (egenskapen) med värdet "todo". 

let myTodos = []; //Skapar tom array 

addTodoButton.addEventListener("click", () => {
     if (textInput.value === "") {
          alert("Du har inte skrivit något. Skriv in en todo först.");
     }
     else if (myTodos.length >= 5){
          alert("Du har för många todos. Gör klart något innan du kan lägga till något nytt.");
     }
     else if (myTodos.includes(textInput.value.toLowerCase())){
          alert("Todo finns redan!");
     }
     else {
          myTodos.push(textInput.value.toLowerCase());
          let listItem = document.createElement("li"); //SKapar li tagg 
          let listText = document.createElement("span");
          listText.innerText = textInput.value;//Sparar värdet av användarens inmatning.
          todoList.appendChild(listItem);
          listItem.appendChild(listText);
          let doneButton = document.createElement("button");
          doneButton.innerText = "Klar";
          listItem.appendChild(doneButton);

          doneButton.addEventListener("click", (e) => {
               let listItemValue = e.target.previousElementSibling.innerText;
               myTodos.forEach((todo, i) => {
                    if (todo === listItemValue.toLowerCase()) {
                         myTodos.splice(i, 1);
                         console.log(i);
                         console.log(myTodos);
                    }

                    let liParent = e.target.parentElement;
                    liParent.remove(); 
               })
          })

          textInput.value = "";
          console.log(myTodos);
     }

});



//Uppgift 2: 
let result = document.querySelector("#result");
let inputNumber1 = document.querySelector("#tal-1");
let inputNumber2 = document.querySelector("#tal-2");
let addButton = document.querySelector("#additionButton");

addButton.addEventListener("click", () => {
    let number1 = parseInt(inputNumber1.value);
    let number2 = parseInt(inputNumber2.value);

    let sum = number1+number2;
    result.innerText = sum;

    inputNumber1.value = "";
    inputNumber2.value= "";
});

//2A
let multiButton = document.querySelector("#multiButton");

multiButton.addEventListener("click", () => {
    let number1 = parseInt(inputNumber1.value); //parseFloat kan göra om decimaltal 
    let number2 = parseInt(inputNumber2.value);

    let product= number1*number2;
    result.innerText = product;
    
    inputNumber1.value = "";
    inputNumber2.value= "";
});

//2B
let subtractButton = document.querySelector("#subtractionButton");

subtractButton.addEventListener("click", () => {
    let number1 = parseInt(inputNumber1.value); //parseFloat kan göra om decimaltal 
    let number2 = parseInt(inputNumber2.value);

    let difference = number1-number2;
 
    if(difference < 0) {
         alert("Vänligen ange ett högre tal då differensen inte kan bli minus.");
    }

    else {
          result.innerText = difference;
    }

    inputNumber1.value = "";
    inputNumber2.value= "";
});

//3
let inputNumber = document.querySelector("#inputNumber");
inputNumber.addEventListener("keyup", () => {
     let userValue = inputNumber.value;
     if (userValue < 4) {
          inputNumber.style.color = "red";
     }
     else if (userValue >= 4 && userValue <= 7) {
          inputNumber.style.color = "yellow";
     }
     else if (userValue > 7 && userValue < 11) {
          inputNumber.style.color = "green";
     }

     else if (userValue > 10) {
          alert("Du kan endast ange tal mellan 0-10.");
     }

})

