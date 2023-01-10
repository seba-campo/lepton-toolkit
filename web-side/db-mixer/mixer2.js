function createInput(el, className) {
  const newInput = document.createElement("input");
  newInput.setAttribute("class", className);

  el.appendChild(newInput);
}

function concadenate(mat, p, s) {
  // recibe los prefijos en p :string
  // recibe los sufijos  en s :string[]
  // recibe los materiales en mat :sring[]

  const arrayResult = [];

  for (let m in mat) {
    const matEl = mat[m];
    // console.log(matEl);
    for (let sx in s) {
      const sufEl = s[sx];
      // console.log(sufEl);
      const result = p + " " + matEl + " " + sufEl + "\n";
      arrayResult.push(result);
    }
  }

  return arrayResult;
}

function mixerComponent() {
  const form = document.querySelector(".mixer__form");

  const buttonGenerate = document.querySelector(".form__generate");
  const addMatButton = document.querySelector(".addMat");
  const addSufijoButton = document.querySelector(".addSufijo");

  addMatButton.addEventListener("click", () => {
    const matDiv = document.querySelector("#mat__div");
    createInput(matDiv, "fMat-input");
  });

  addSufijoButton.addEventListener("click", () => {
    const sufDiv = document.querySelector("#suf__div");
    createInput(sufDiv, "fSufijo-input");
  });

  buttonGenerate.addEventListener("click", () => {
    const prefijosEl = document.querySelector(".fPrefijo-input");
    const matsEl = document.querySelectorAll(".fMat-input");
    const sufijosEl = document.querySelectorAll(".fSufijo-input");

    const matArray = [];

    for (let m of matsEl) {
      if (m.value != undefined) {
        matArray.push(m.value);
      }
    }

    const sufijoArray = [];

    for (let s of sufijosEl) {
      if (s.value.length != 0) {
        sufijoArray.push(s.value);
      }
    }

    const prefijoValue = prefijosEl.value;

    console.log(matArray);
    console.log(sufijoArray);
    console.log(prefijoValue);

    returnArray = concadenate(matArray, prefijoValue, sufijoArray);
    console.log(concadenate(matArray, prefijoValue, sufijoArray));
    resultComponent(returnArray);
    // console.log(matsEl);
  });
}

function resultComponent(arrRes) {
  const textArea = document.querySelector(".textareacontent");
  stringArray = arrRes.toString();
  console.log(stringArray);
  const stringReemplazado = stringArray.replaceAll(",", "");
  console.log(stringReemplazado);

  if (textArea.textContent != undefined) {
    textArea.textContent = "";
    textArea.textContent = stringReemplazado;
  }
}

mixerComponent();
