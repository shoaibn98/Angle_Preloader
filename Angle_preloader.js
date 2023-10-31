var angle_preloader_element = document.getElementById("Angle_Preloader");


class createElement {
    constructor(tag, style) {
        this.element = document.createElement(tag);
        this.element.style = style;
        return this.element;
    }
}


class Angle_Preloader {

    constructor(option) {
        // get Element Id
        angle_preloader_element = document.getElementById("Angle_Preloader");

        // set Option in Class
        this.option = option;


        // set default window mode ____ If not set
        var window = this.getOptionValue(this.option.window, "body");

        // Set window mode
        if (window == "body") angle_preloader_element.style = "width: 100%;height: 100%;background-color: #fff;position: fixed;z-index: 99;";
        if (window == "element") angle_preloader_element.style = "width: 100%;height: 100%;background-color: #fff;z-index: 1;";


        // Set Default Message ___ If not set
        var message = this.getOptionValue(this.option.message, "");


        // Create Elements
        this.spans = [];
        this.mainDiv = new createElement("div", "position: relative;width:50%;height:50%;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 100");
        this.insideDiv1 = new createElement("div", "position: relative;top: 50%;left: 50%;transform: translate(-50%, -50%)");
        this.loadingMessage = new createElement("h4", "position:relative;transform:translateY(-50%);font-size:18px;font-family: 'Comic Neue', cursive;text-align: center;color:var(--text-color)");
        this.loadingMessage.innerText = message;

        // Create Style Node
        this.styleNode = document.createElement("style");
        this.styleNode.type = "text/css";
        var insideStyle = document.createTextNode(":root{--first-color:rgba(0,0,0,1);--second-color:rgba(0,0,0,0.7);--3th-color:rgba(0,0,0,0.7);--text-color:rgba(0,0,0,1);--diameter:50px} *{padding:0px;margin:0px;box-sizing: border-box;} @keyframes angle_preloader_fadeout {from{opacity: 1;display:block;} to{opacity: 0;display:none;z-index: -1}}");
        this.styleNode.appendChild(insideStyle);

        // Run Preloader
        if (option.type == "wave") this.wave(option);
        if (option.type == "flag") this.flag(option);
        if (option.type == "loading") this.loading(option);
        if (option.type == "orbital_1") this.orbital(option);
        if (option.type == "orbital_2") this.orbital2(option);
        if (option.type == "radio_wave") this.radioWave(option);
        if (option.type == "balls") this.balls(option);
        if (option.type == "anime_text") this.anime_text(option);
        if (option.type == "diamond") this.diamond(option);
        if (option.type == "square") this.square(option);

        // Append elements to main Element
        angle_preloader_element.appendChild(this.mainDiv);
        angle_preloader_element.appendChild(this.loadingMessage);

        // append style Node
        document.getElementsByTagName("head")[0].appendChild(this.styleNode);
    }
    setSettings() {
        if (this.option.darkTheme == true) {
            this.darkTheme(true);
        }
        if (this.option.color1 != undefined && this.option.color1 != "") {
            this.setFirstColor(this.option.color1);
        }
        if (this.option.color2 != undefined && this.option.color2 != "") {
            this.setSecondColor(this.option.color2);
        }
        if (this.option.color3 != undefined && this.option.color3 != "") {
            this.set3thColor(this.option.color3);
        }
        if (this.option.messageColor != undefined && this.option.messageColor != "") {
            this.setTextColor(this.option.messageColor);
        }
        if (this.option.websiteColor != undefined && this.option.websiteColor != "") {
            this.siteColor(this.option.websiteColor);
        }
        if (this.option.domainColor != undefined && this.option.domainColor != "") {
            this.domainColor(this.option.domainColor);
        }
        if (this.option.dotColor != undefined && this.option.dotColor != "") {
            this.dotColor(this.option.dotColor);
        }

    }
    getOptionValue(option, defaultVal) {
        if (option == undefined || option == "") {
            return defaultVal;
        } else {
            return option;
        }
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
        document.documentElement.style.setProperty("--first-color", color);
        document.documentElement.style.setProperty("--second-color", color);

        for (let i = 0; i < this.spans.length; i++) {
            this.spans[i].style.background = color;
        }
    }
    setFirstColor(color) {
        document.documentElement.style.setProperty("--first-color", color);
        for (let i = 0; i < this.spans.length; i++) {
            this.spans[i].style.background = color;
        }
    }
    setSecondColor(color) {
        document.documentElement.style.setProperty("--second-color", color);
    }
    set3thColor(color) {
        document.documentElement.style.setProperty("--3th-color", color);
    }
    darkTheme(darkTheme) {
        //! for dark mode
        if (darkTheme) {
            this.setTextColor("#fff");
            this.setFirstColor("#fff");

            angle_preloader_element.style.backgroundColor = "#000";
            switch (this.option.type) {
                case "wave":
                    var spanCount = this.getOptionValue(this.option.spanCount, 6)
                    for (let i = 0; i < spanCount; i++) {
                        this.secondSpans[i].style.backgroundColor = "rgba(255,255,255,0.1)";
                    }
                    break;

                default:
                    break;
            }
        }
    }
    siteColor(color) {
        this.insideDiv1.style.color = color;
    }
    domainColor(color) {
        this.insideDiv2.style.color = color;
    }
    dotColor(color) {
        this.insideDiv3.style.color = color;
    }
}