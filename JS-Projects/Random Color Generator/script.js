        let colorBox = document.getElementById("colorBox");
        let colorCode = document.getElementById("colorCode");
        let generateBtn = document.getElementById("generateBtn");

        function getRandomColor() {
            let color = Math.floor(Math.random() * 16777215).toString(16);
            return "#" + color.padStart(6, "0");
        }

        generateBtn.addEventListener("click" , () => {
            let randomColor = getRandomColor();
            // Box Color Change
            colorBox.style.backgroundColor = randomColor;

            // body Color
            document.body.style.backgroundColor = randomColor + "33"; // light Shade

            // Button Color Chnage
            generateBtn.style.backgroundColor = randomColor;
            copyBtn.style.backgroundColor = randomColor;

            // Show hex code in screen
            colorCode.innerText = "Color: "+ randomColor;
        });
        
        let copyBtn = document.getElementById("copyBtn");
        copyBtn.addEventListener("click", () => {
            let hex = colorCode.innerText.replace("Color: ", "");

            navigator.clipboard.writeText(hex);
            copyBtn.innerText = "Copied!";
            setTimeout(() => {
                copyBtn.innerText = "Copy Color";
            },1500);
        });

