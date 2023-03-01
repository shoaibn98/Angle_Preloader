var angle_preloader_element = document.getElementById("Angle_Preloader");

class Angle_Preloader {

    constructor(typeOfPreloader, title) {
        if (!title) title = "";
        this.preloader_mode = typeOfPreloader;
        angle_preloader_element = document.getElementById("Angle_Preloader");
        angle_preloader_element.style = "width: 100%;height: 100%;background-color: #fff;position: fixed;z-index: 99;";


        this.spans = [];
        this.mainDiv = document.createElement("div");
        this.mainDiv.style = "position: relative;width:50%;height:50%;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 100";

        this.insideDiv1 = document.createElement("div");
        this.insideDiv1.style = "position: relative;top: 50%;left: 50%;transform: translate(-50%, -50%)";

        this.loadingMessage = document.createElement("h4");
        this.loadingMessage.innerText = title;
        this.loadingMessage.style = "position:relative;transform:translateY(-50%);font-size:18px;font-family: 'Comic Neue', cursive;text-align: center;color:var(--text-color)";

        this.styleNode = document.createElement("style");
        this.styleNode.type = "text/css";
        var insideStyle = document.createTextNode(":root{--start-color:rgba(0,0,0,1);--middle-color:rgba(0,0,0,0.7);--text-color:rgba(0,0,0,1);--diameter:50px} @keyframes angle_preloader_fadeout {from{opacity: 1;display:block;} to{opacity: 0;display:none;z-index: -1}}");
        this.styleNode.appendChild(insideStyle);

        if (typeOfPreloader == "wave") this.wave();
        if (typeOfPreloader == "flag") this.flag();
        if (typeOfPreloader == "loading_circle") this.loading("circle");
        if (typeOfPreloader == "loading_circle_2") this.loading("circle2");
        if (typeOfPreloader == "loading_circle_3") this.loading("circle3");
        if (typeOfPreloader == "loading_circle_classic") this.loading("circle_classic");
        if (typeOfPreloader == "orbital_1") this.orbital("orbital");
        if (typeOfPreloader == "orbital_2") this.orbital2();
        if (typeOfPreloader == "radio_wave") this.radioWave();

        angle_preloader_element.appendChild(this.mainDiv);
        angle_preloader_element.appendChild(this.loadingMessage);

        document.getElementsByTagName("head")[0].appendChild(this.styleNode);

    }

    //!  OTHER FUNCTIONS ______ => TOOLS
    hide() {
        angle_preloader_element.style.animation = "angle_preloader_fadeout 1s 1 linear forwards";
    }
    setText(text) {
        this.loadingMessage.innerText = text;
    }
    setTextColor(color) {
        document.documentElement.style.setProperty("--text-color", color);
    }

    setTextFontFamily(fontName) {
        this.loadingMessage.style.fontFamily = fontName;
    }
    setTextFontSize(fontSize) {
        this.loadingMessage.style.fontSize = fontSize + "px";
    }
    setBlockColor(color) {
        document.documentElement.style.setProperty("--start-color", color);
        document.documentElement.style.setProperty("--middle-color", color);

        for (let i = 0; i < this.spans.length; i++) {
            this.spans[i].style.background = color;
        }
    }
    setBlockStartColor(color) {
        document.documentElement.style.setProperty("--start-color", color);
        for (let i = 0; i < this.spans.length; i++) {
            this.spans[i].style.background = color;
        }
    }
    setBlockEndColor(color) {
        document.documentElement.style.setProperty("--middle-color", color);
    }
    darkTheme(darkTheme) {
        //! for dark mode
        if (darkTheme) {
            this.setTextColor("#fff");
            this.setBlockStartColor("#fff");

            angle_preloader_element.style.backgroundColor = "#000";
            switch (this.preloader_mode) {
                case "wave":
                    for (let i = 0; i < 6; i++) {
                        this.secondSpans[i].style.backgroundColor = "rgba(255,255,255,0.1)";
                    }
                    break;
                default:
                    break;
            }
        }
    }
}