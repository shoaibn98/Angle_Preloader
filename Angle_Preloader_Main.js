var angle_preloader_element = document.getElementById("Angle_Preloader");

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

    wave(option) {
        // Set spans Count
        var spanCount = this.getOptionValue(this.option.spanCount, 6)

        // Set default Style
        this.mainDiv.style.width = (spanCount * 30) + "px";
        this.loadingMessage.style.top = "5%";

        // Create new Element to showing Shadow
        this.insideDiv2 = new createElement("div", "position: relative;top: 50%;left: 50%;transform: translate(-50%, -50%)")

        // array of spans for balls
        this.firstSpans = [];
        this.secondSpans = [];


        // set Default Color
        this.setFirstColor("rgb(33, 158, 188)");
        this.setSecondColor("rgb(64, 145, 108)");


        // Create Spans
        for (let i = 0; i < spanCount; i++) {
            this.firstSpans.push(new createElement("span", "bottom: 0;height: 30px;width: 30px;border-radius: 50%;position: absolute;background: var(--first-color);display: block;animation: angle_Preloader001I 1s infinite  ease-in-out;left: " + (30 * i) + "px;animation-delay:" + (0.2 * i) + "s;"));
            this.insideDiv1.appendChild(this.firstSpans[i]);

            this.secondSpans.push(new createElement("span", "bottom: 0;height: 30px;width: 30px;border-radius: 50%;position: absolute;background:  rgba(155,155,155,0.8);display: block;animation: angle_Preloader001II 1s infinite  ease-in-out;left: " + (30 * i) + "px;animation-delay:" + (0.2 * i) + "s;"));
            this.insideDiv2.appendChild(this.secondSpans[i]);
        }


        // Set Settings
        this.setSettings();
        // append Spans
        this.mainDiv.appendChild(this.insideDiv1);
        this.mainDiv.appendChild(this.insideDiv2);

        // append KeyFrames
        var insideStyle = document.createTextNode(" @keyframes angle_Preloader001I 	{0%{transform: translateY(0px);}	50%{transform: translateY(-20px); background: var(--second-color);}	80%{transform: translateY(0px);}	100%{transform: translateY(0px);}}" +
            "  @keyframes angle_Preloader001II  {0%{transform: translateY(0px);opacity: 0;}	50%{transform: translateY(20px);opacity: 1; background: rgba(200,200,200,0.5);}		80%{transform: translateY(0px);opacity: 0;}	100%{transform: translateY(0px);opacity: 0;}}" +
            "@keyframes angle_preloader_fadeout 	{from{opacity: 1;display:block;}	to{opacity: 0;display:none;z-index: -1}}");
        this.styleNode.appendChild(insideStyle);

    }

    flag(option) {
        // Set spans Count
        var rowCount = this.getOptionValue(this.option.rowCount, 4);


        this.insideDiv1.style.width = (44 * rowCount) + "px";
        this.insideDiv1.style.height = (44 * rowCount) + "px";
        this.loadingMessage.style.top = "18%";
        this.spans = [];
        let x = 0;
        let y = 0;
        let time = 0;



        // Create Matrix to save spans
        var m = new Array(rowCount);
        for (let i = 0; i < m.length; i++) {
            m[i] = new Array(rowCount);
            var count = i;
            for (let j = 0; j < m[i].length; j++) {
                m[i][j] = count;
                count++;

                this.spans.push(new createElement("span", "display:block; width:40px; height:40px;  position:absolute;  padding:0;  margin:5px;  background:#000;  animation: zoomAnimation 1s infinite ease-in-out;left:" + (j * 44) + "px;top:" + (i * 44) + "px; animation-delay:" + (0.2 * m[i][j]) + "s;"));
                this.insideDiv1.appendChild(this.spans[(rowCount * i) + j]);
            }

        }
        // Set Settings
        this.setSettings();
        // appends Element
        this.mainDiv.appendChild(this.insideDiv1);
        // append Keyframes
        var insideStyle = document.createTextNode("@keyframes zoomAnimation{ 0%{width:40px;height:40px;background-color:var(--first-color)} 50%{width:44px;height:44px;background-color:var(--second-color);opacity:0.75;} 100%{width:40px;height:40px;background-color:var(--first-color)}}" +
            "@keyframes angle_preloader_fadeout {from{opacity: 1;display:block;} to{opacity: 0;display:none;z-index: -1}}");
        this.styleNode.appendChild(insideStyle);

    }
    loading(option) {
        // set type of Loading 
        var type = option.model;
        // set Diameters
        var diameter = this.getOptionValue(this.option.diameter, 50);


        // set Style
        this.spans = [];
        this.insideDiv1.style.width = diameter * 2 + "px";
        this.insideDiv1.style.height = diameter * 2 + "px";
        this.loadingMessage.style.top = (diameter + 30) + "px";


        // Create elements
        var x = 0;
        var y = 0;
        var deg = 90;
        for (let i = 0; i < 12; i++) {
            this.spans.push(document.createElement("span"));
            if (type == "circle")
                this.spans[i].style = "display:block; width:0px; height:0px;border-radius:50%; transform: translate(-50%, -50%); position:absolute; background:var(--first-color);  animation: loadingAnimation1 1s infinite ease-in-out;left:" + (((Math.sin(deg * (Math.PI / 180))) * diameter) + diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * diameter) + diameter) + "px; animation-delay:" + (i * 0.1) + "s;";
            if (type == "circle_2")
                this.spans[i].style = "display:block; width:7px; height:25px;border-radius:10px; transform: translate(-50%, -50%);transform:rotate(" + (i * 30) + "deg); position:absolute; background:var(--first-color);  animation: loadingAnimation2 1s infinite linear;left:" + (((Math.sin(deg * (Math.PI / 180))) * diameter) + diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * diameter) + diameter) + "px; animation-delay:" + (i * 0.1) + "s;";
            if (type == "circle_3")
                this.spans[i].style = "display:block; width:7px; height:25px;border-radius:10px; transform: translate(-50%, -50%);transform:rotate(" + (i * 30 + 60) + "deg); position:absolute; background:var(--first-color);  animation: loadingAnimation2 1s infinite ease-in-out;left:" + (((Math.sin(deg * (Math.PI / 180))) * diameter) + diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * diameter) + diameter) + "px; animation-delay:" + (i * 0.1) + "s;";
            if (type == "circle_classic")
                this.spans[i].style = "display:block; width:7px; height:25px;border-radius:10px; transform: translate(-50%, -50%);transform:rotate(" + (i * 30 + 90) + "deg); position:absolute; background:var(--first-color);  animation: loadingAnimation2 1s infinite ease-in-out;left:" + (((Math.sin(deg * (Math.PI / 180))) * diameter) + diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * diameter) + diameter) + "px; animation-delay:" + (i * 0.1) + "s;";

            this.insideDiv1.appendChild(this.spans[i]);
            deg -= 30;
        }

        // Set Settings
        this.setSettings();
        // append elements
        this.mainDiv.appendChild(this.insideDiv1);
        var insideStyle = document.createTextNode("@keyframes loadingAnimation1{ 0%{width:0px;height:0px;opacity:0} 50%{width:15px;height:15px;opacity:1} 100%{width:0px;height:0px;opacity:0}}" +
            "@keyframes loadingAnimation2{ 0%{opacity:0} 50%{opacity:1} 100%{opacity:0}}");
        this.styleNode.appendChild(insideStyle);
    }

    orbital(option) {
        // set Diameter
        var diameter = this.getOptionValue(this.option.diameter, 50);

        document.documentElement.style.setProperty("--diameter", diameter / 2 + "px")

        // set Style 
        this.loadingMessage.style.top = "0";
        this.loadingMessage.style.textShadow = "1px 1px 1px var(--text-color)";
        this.insideDiv1.style = "position:relative;top:50%;left:50%; justify-content: center;transform: translate(-50%, -50%);width:" + diameter * 2 + "px;height: " + diameter * 2 + "px;" +
            " border-radius:50%;border-top: 2px solid var(--first-color);border-right: 2px solid var(--first-color);border-bottom: 2px solid var(--first-color); animation : orbitalAnimation 1s infinite linear;box-shadow:1px 1px 1px 1px var(--first-color);margin-left:0px !important;over-flow:hidden ";
        this.mainDiv.appendChild(this.insideDiv1);

        var div = new createElement("div", "width:8px;height:8px;border-radius:50%;background:var(--first-color);position:relative;top:" + (diameter) + "px;transform:translate(-50%,-50%)")


        // Set Settings
        this.setSettings();

        // append elements 

        this.insideDiv1.appendChild(div);
        var insideStyle = document.createTextNode("@keyframes orbitalAnimation {from{transform:translate(-50%, -50%)rotate(0deg) }to{transform: translate(-50%, -50%)rotate(360deg)}}");
        this.styleNode.appendChild(insideStyle);
    }
    radioWave(option) {
        // Set spans Count
        var spanCount = this.getOptionValue(this.option.spanCount, 10);


        // set Min and Max height
        var minHeight = this.getOptionValue(this.option.minHeight, 2),
            maxHeight = this.getOptionValue(this.option.maxHeight, 60);

        // Create elements and set Styles
        this.spans = [];
        this.insideDiv1.style.width = (24 * spanCount) + "px";
        this.setFirstColor("rgb(33, 158, 188)");
        this.setSecondColor("rgb(64, 145, 108)");
        this.loadingMessage.style.top = "50px";
        for (let i = 0; i < spanCount; i++) {
            this.spans.push(new createElement("span", "display:block;width:20px;height:" + minHeight + "px;background-color:var(--first-color);position:absolute;top:0%;left:" + (i * 25) + "px;transform:translate(0%,-50%);animation: radioWaveAnimation 1s infinite ease-in-out  " + (0.1 * i) + "s ;"));
            this.insideDiv1.appendChild(this.spans[i]);
        }
        // Set Settings
        this.setSettings();

        this.mainDiv.appendChild(this.insideDiv1);
        var insideStyle = document.createTextNode("@keyframes radioWaveAnimation {0%{height:" + minHeight + "px;background-color:var(--first-color) }50%{height:" + maxHeight + "px;background-color:var(--second-color)}100%{height:" + minHeight + "px;background-color:var(--first-color) }}");
        this.styleNode.appendChild(insideStyle);
    }

    orbital2(option) {
        this.loadingMessage.style.zIndex = 101;
        this.insideDiv1.style = "display:block;width:150px;height:150px;border-radius:50%;background-color:var(--first-color);position: relative;top: 50%;left: 50%;transform: translate(-50%, -50%);animation:orbitalAnimationCenter 2s infinite linear";
        this.setFirstColor("rgb(33, 150, 188)");
        this.setSecondColor("rgb(33, 255, 50)");

        // Set Settings
        this.setSettings();

        this.mainDiv.appendChild(this.insideDiv1);
        var insideStyle = document.createTextNode("#Angle_Preloader div div::before {display:block;width:170px;height:170px;border-radius:50%;border-top:10px solid var(--first-color);border-left:10px solid transparent;border-bottom:10px solid var(--first-color);border-right:10px solid transparent;content:'';position:relative;top: 50%;left: 50%;transform: translate(-50%, -50%); animation: orbitalAnimation1 2s infinite ease-in-out}" +
            "#Angle_Preloader div div::after {display:block;width:200px;height:200px;border-radius:50%;border-right:10px solid var(--first-color);border-top:10px solid transparent;border-left:10px solid var(--first-color);border-bottom:10px solid transparent;content:'';position:absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);animation:orbitalAnimation2 2s infinite ease-in-out;}" +
            "@keyframes orbitalAnimation1 {0%{ transform:translate(-50%,-50%) rotate(0deg); border-top-color:var(--first-color) ; border-bottom-color:var(--first-color) }50%{ transform:translate(-50%,-50%) rotate(180deg); border-top-color:var(--second-color); border-bottom-color:var(--second-color)}100%{  transform:translate(-50%,-50%) rotate(360deg); border-top-color:var(--first-color); border-bottom-color:var(--first-color)}}" +
            "@keyframes orbitalAnimation2 {0%{   transform:translate(-50%,-50%) rotate(0deg); border-right-color:var(--second-color);border-left-color:var(--second-color) }50%{ transform:translate(-50%,-50%) rotate(-180deg);border-right-color:var(--first-color);border-left-color:var(--first-color)}100%{ transform:translate(-50%,-50%) rotate(-360deg);border-right-color:var(--second-color);border-left-color:var(--second-color) }}" +
            "@keyframes orbitalAnimationCenter {0%{background-color:var(--second-color)}50%{background-color:var(--first-color)}100%{background-color:var(--second-color)}}");
        this.styleNode.appendChild(insideStyle);
    }

    balls(option) {
        this.setFirstColor("rgb(33, 150, 188)");
        this.insideDiv1.style = "display:block;width:50px;height:50px;background-color:var(--first-color);position:absolute;top:50%;left:0%;transform:translate(-50%,-50%);animation:ballsAnimation1 1.2s infinite alternate-reverse ease-in";
        this.insideDiv2 = new createElement("div", "display:block;width:50px;height:50px;background-color:var(--first-color);position:absolute;top:50%;left:100%;transform:translate(-50%,-50%);animation:ballsAnimation2 1.2s infinite alternate-reverse ease-in");

        // Set Settings
        this.setSettings();

        this.mainDiv.appendChild(this.insideDiv1);
        this.mainDiv.appendChild(this.insideDiv2);

        var insideStyle = document.createTextNode("@keyframes ballsAnimation1 {0%{background-color:var(--first-color);transform:translate(-50%,-50%) rotate(0deg);left:45%;border-radius:50%;width:40px;height:40px}100%{background-color:var(--second-color);transform:translate(-50%,-50%) rotate(360deg);left:100%;border-radius:0px}}" +
            "@keyframes ballsAnimation2 {0%{background-color:var(--first-color);transform:translate(-50%,-50%) rotate(0deg);left:55%;border-radius:50%;width:40px;height:40px}100%{background-color:var(--second-color);transform:translate(-50%,-50%) rotate(360deg);left:0%;border-radius:0px;}}")
        this.styleNode.appendChild(insideStyle);
    }
    diamond(option) {
        // Set row Count
        var rowCount = this.getOptionValue(this.option.rowCount, 2);

        this.setFirstColor("rgb(6, 152, 254)");
        this.setSecondColor("rgb(42, 219, 38)");
        this.insideDiv1.style = "display:block;width:" + (50 * rowCount) + "px;height:" + (50 * rowCount) + "px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);animation:rotateDiamond 5s infinite linear";



        this.spans = [];
        var m = new Array(rowCount);
        for (let i = 0; i < m.length; i++) {
            m[i] = new Array(rowCount);
            var count = 0;
            var anim = "diamond1";
            if (i % 2 == 0) {
                count = 0;
            } else {
                count = 1;
            }
            for (let j = 0; j < m[i].length; j++) {
                m[i][j] = count;
                if (count > 1) {
                    count = 0;
                }
                if (count == 0) {
                    anim = "diamond1";
                } else {
                    anim = "diamond2";
                }
                this.spans.push(new createElement("span", "display:block; width:40px; height:40px;  position:absolute;  padding:0;  background:var(--second-color);  animation: " + anim + " 1.5s infinite alternate linear;left:" + (j * 50) + "px;top:" + (i * 50) + "px;"));
                this.insideDiv1.appendChild(this.spans[(rowCount * i) + j]);
                count++;
            }

        }

        // Set Settings
        this.setSettings();

        this.mainDiv.appendChild(this.insideDiv1);

        var insideStyle = document.createTextNode(
            "@keyframes diamond1 {0%{transform:scale(1);background: var(--first-color);}" +
            "50%{transform:scale(0.5);background: var(--second-color);}" +
            "100%{transform:scale(1);background: var(--first-color);}}" +
            "@keyframes diamond2 {0%{transform:scale(0.5);background: var(--second-color);}" +
            "50%{transform:scale(1);background: var(--first-color);}" +
            "100%{transform:scale(0.5);background: var(--second-color);}}" +
            "@keyframes rotateDiamond {from{transform:translate(-50%,-50%), rotate(0deg);}" +
            "to{transform:translate(-50%,-50%) rotate(360deg);}}")
        this.styleNode.appendChild(insideStyle);
    }
    square(option) {
        // Set row Count
        var rowCount = 2;

        this.setFirstColor("rgb(6, 152, 254)");
        this.setSecondColor("rgb(42, 219, 38)");
        this.insideDiv1.style = "display:block;width:" + (50 * rowCount) + "px;height:" + (50 * rowCount) + "px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)";

        this.spans = [];
        var m = new Array(rowCount);
        for (let i = 0; i < m.length; i++) {
            m[i] = new Array(rowCount);
            var anim = "anim1";

            for (let j = 0; j < m[i].length; j++) {

                if (j == 0) {
                    anim = "anim1"
                } else {
                    anim = "anim2"
                }
                this.spans.push(new createElement("span", "display:block; width:50px; height:50px;  position:absolute;  padding:0;  background:var(--second-color);  animation: " + anim + " 1.5s infinite alternate ease-in-out;left:" + (j * 50) + "px;top:" + (i * 50) + "px;"));
                this.insideDiv1.appendChild(this.spans[(rowCount * i) + j]);
            }
        }

        // Set Settings
        this.setSettings();

        this.mainDiv.appendChild(this.insideDiv1);

        var insideStyle = document.createTextNode(
            "@keyframes anim1 {0%{}" +
            "50%{background: var(--second-color);left:-100px;top:25px;border-radius:50%;transform:rotate(180deg)}" +
            "100%{ transform:rotate(360deg);}}" +
            "@keyframes anim2 {0%{}" +
            "50%{background: var(--second-color);left:100px;top:25px;border-radius:50%;transform:rotate(-180deg)}" +
            "100%{transform:rotate(-360deg)}}")
        this.styleNode.appendChild(insideStyle);
    }

    anime_text(option) {
        // set default values
        var website = this.getOptionValue(this.option.website, "Preloader");
        var domain = this.getOptionValue(this.option.domain, "com");

        this.loadingMessage.style = "display:none"

        // create Elements and append
        this.insideDiv1.style = "display:block;opacity:0;width:180px;height:40px;direction:rtl;color:var(--first-color);font-family: 'Comic Neue', cursive;font-size:30px;font-weight: 600;position:absolute;top:50%;left:50%;transform:translate(-90%,-50%);animation:anime_text_1 0.5s 1 .4s alternate forwards ease-in, glow 0.8s infinite alternate-reverse ";
        this.insideDiv1.innerText = website;

        this.insideDiv2 = new createElement("div", "display:block;opacity:0;width:40px;height:40px;direction:ltr;color:var(--second-color);font-family: 'Comic Neue', cursive;font-size:30px;font-weight: 600;position:absolute;top:50%;left:50%;transform:translate(65%,-50%);animation:anime_text_2 0.5s 1 .4s alternate forwards ease-in, glow 0.8s infinite alternate-reverse")
        this.insideDiv2.innerText = domain;

        this.insideDiv3 = new createElement("div", "display:block;opacity:0;direction:ltr;color:var(--3th-color);font-size:70px;position:absolute;top:50%;left:50%;transform:translate(40%,-40%);animation:anime_text_3 0.5s 1 .6s alternate forwards ease-in")
        this.insideDiv3.innerText = "•"

        // Set Settings
        this.setSettings();

        this.mainDiv.appendChild(this.insideDiv1);
        this.mainDiv.appendChild(this.insideDiv2);
        this.mainDiv.appendChild(this.insideDiv3);

        var insideStyle = document.createTextNode("@keyframes anime_text_1 {from{left:0%;opacity:0} to{left:50%;opacity:1}}" +
            "@keyframes anime_text_2 {from{left:100%;opacity:0} to{left:50%;opacity:1;}}" +
            "@keyframes anime_text_3 {from{top:100%;opacity:0} to{top:50%;opacity:1;}}" +
            "@keyframes glow{from{text-shadow:1px 1px 1px rgba(255,159,64,0.5),-1px -1px 1px rgba(255,159,64,0.5)}to{text-shadow:1px 1px 5px rgba(255,159,64,1),-1px -1px 5px rgba(255,159,64,1)}}")
        this.styleNode.appendChild(insideStyle);
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

class createElement {
    constructor(tag, style) {
        this.element = document.createElement(tag);
        this.element.style = style;
        return this.element;
    }
}