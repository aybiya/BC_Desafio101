const display = document.querySelector(".display");
const button = document.querySelectorAll(".bt");

display.addEventListener("click", () => {
    const displayText = display.textContent;
    if (displayText === "0") {
        display.textContent = "0";
    } else {
        display.textContent = "0";
    }

});


button.forEach(button => {
    button.addEventListener("click", () => {
        const pressBt = button.textContent;
        const errorMessage = document.getElementById("error-message");

        if (button.id === "ac") {
            display.textContent = "0";
            return;
        }

        if (button.id === "equal") {
            try {
                const result = eval(display.textContent);
                
                if (result.toString().length > 13) {
                  throw new Error("Soporta un máximo de 13 dígitos");
                }
                display.textContent = result;
                errorMessage.textContent = ""; // Limpiar el mensaje de error
              } catch (error) {
                display.textContent = "Error";
                errorMessage.textContent = error.message; // Mostrar el mensaje de error
              }
              return;
            }


        if (display.textContent === "0" || display.textContent === "Error") {
            display.textContent = pressBt;
        } else {
            display.textContent += pressBt;
        }

        if (display.textContent.length > 13) {
            display.textContent = "Error";
            errorMessage.textContent = "Soporta un máximo de 13 dígitos";
        }
    })
})
