let expression = "";
btns = document.getElementsByClassName("btn");
result = document.querySelector(".result-content");
btnResult = document.querySelector(".res");
let error = false;

const handelClick = (btn) => {
  if (error) {
    result.innerHTML = "";
    error = false;
  }
  switch (btn.innerHTML) {
    case "C":
      result.innerHTML = "";
      break;
    case "del":
      let arr = result.innerHTML.split("");
      arr.pop();
      result.innerHTML = arr.join("");
      break;
    case "mod":
      result.innerHTML += "%";
      break;
    default:
      result.innerHTML += btn.innerHTML;
      break;
  }
};

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    handelClick(btns[i]);
  });
}

btnResult.addEventListener("click", () => {
  try {
    result.innerHTML = eval(result.innerHTML);
  } catch (err) {
    result.innerHTML = err.message;
    error = true;
  }
});
