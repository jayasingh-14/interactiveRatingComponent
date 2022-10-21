const form = document.querySelector("#form");

const converter = (event) => {
  event.preventDefault();
  let inputNumber = document.querySelector("#input-number").value;
  let showResult = document.querySelector("#show-result");

  if (inputNumber === "") {
    alert("Please Provide A Decimal Number");
  } else if (Number.parseInt(inputNumber) <= 0) {
    alert("Please Provide A Positive Number and Number should be greater than Zero!");
  } else {
    let num = Number.parseInt(inputNumber);
    let binaryNum = num.toString(2);
    showResult.innerHTML = binaryNum;
  }
};

form.addEventListener("submit", converter);
