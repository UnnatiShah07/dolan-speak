var btnTranslate = document.querySelector("#translate-button");
var txtInput = document.querySelector("#translate-input");
var output = document.querySelector("#translate-output");

const serverURL = "https://api.funtranslations.com/translate/dolan.json";

function generateURL(text) {
    return serverURL + "?text=" + text;
}

function errorHandler(error) {
    console.log(error);
    alert("Somthing wrong with server. Please try again after somtime.");
}

function clickEventHandler() {
    var inputText = txtInput.value;

    fetch(generateURL(inputText))
        .then((response) => response.json())
        .then((json) => {
            var translatedText = json.contents.translated;
            output.innerHTML = translatedText;
        })
        .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
