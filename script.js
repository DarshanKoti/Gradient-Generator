let colorBtn1 = document.querySelector("#btn1");
    let colorBtn2 = document.querySelector("#btn2");
    let colorTxt = document.querySelector(".colorTxt");
    let copyTxt = document.querySelector(".copyTxt");


    // Global colors
    let color1 = "#3CA55C"
    let color2 = "#B5AC49"

    colorBtn1.addEventListener("click", changeColor1);
    colorBtn2.addEventListener("click", changeColor2);
    copyTxt.addEventListener("click", copyClipBoard);

    function getRandomColor() {
        let hex = "0123456789abcdef";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)]
        }
        return color;
    }

    function changeColor1() {
        color1 = getRandomColor();
        colorBtn1.textContent = color1;
        updateGradient();
    }

    function changeColor2() {
        color2 = getRandomColor();
        colorBtn2.textContent = color2
        updateGradient();
    }

    function updateGradient() {
        document.querySelector("body").style.background = `linear-gradient(to bottom right, ${color1},${color2})`
        colorTxt.textContent = `background-image: linear-gradient(to bottom right, ${color1}, ${color2});`
    }

    function copyClipBoard() {
        document.querySelector(".msg").style.display = "block"
        let copied = colorTxt.textContent;
        navigator.clipboard.writeText(copied);
        setInterval(() => {
            document.querySelector(".msg").style.display = "none"
        }, 1800)
    }