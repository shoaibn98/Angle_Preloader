var angle_preloader_element = document.getElementById("Angle_Preloader");

class Angle_Preloader {

    constructor(typeOfPreloader, title, domain) {
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
        var insideStyle = document.createTextNode(":root{--start-color:rgba(0,0,0,1);--middle-color:rgba(0,0,0,0.7);--text-color:rgba(0,0,0,1);--diameter:50px} *{padding:0px;margin:0px;box-sizing: border-box;} @keyframes angle_preloader_fadeout {from{opacity: 1;display:block;} to{opacity: 0;display:none;z-index: -1}}");
        this.styleNode.appendChild(insideStyle);

        if (typeOfPreloader == "wave") this.wave();
        if (typeOfPreloader == "flag") this.flag();
        if (typeOfPreloader == "loading_circle") this.loading("circle");
        if (typeOfPreloader == "loading_circle_2") this.loading("circle2");
        if (typeOfPreloader == "loading_circle_3") this.loading("circle3");
        if (typeOfPreloader == "loading_circle_classic") this.loading("circle_classic");
        if (typeOfPreloader == "orbital_1") this.orbital();
        if (typeOfPreloader == "orbital_2") this.orbital2();
        if (typeOfPreloader == "radio_wave") this.radioWave();
        if (typeOfPreloader == "balls") this.balls();
        if (typeOfPreloader == "anime_text") this.anime_text(title, domain);

        angle_preloader_element.appendChild(this.mainDiv);
        angle_preloader_element.appendChild(this.loadingMessage);

        document.getElementsByTagName("head")[0].appendChild(this.styleNode);

    }

    wave() {
        this.mainDiv.style.width = "190px";

        this.loadingMessage.style.top = "5%";
        this.insideDiv2 = document.createElement("div");
        this.insideDiv2.style = "position: relative;top: 50%;left: 50%;transform: translate(-50%, -50%)";

        this.firstSpans = [];
        this.secondSpans = [];

        this.setBlockStartColor("rgb(33, 158, 188)");
        this.setBlockEndColor("rgb(64, 145, 108)");

        for (let i = 0; i < 6; i++) {
            this.firstSpans.push(document.createElement("span"));
            this.firstSpans[i].style = "bottom: 0;height: 30px;width: 30px;border-radius: 50%;position: absolute;background: var(--start-color);display: block;animation: angle_Preloader001I 1s infinite  linear;left: " + (30 * i) + "px;animation-delay:" + (0.2 * i) + "s;";
            this.insideDiv1.appendChild(this.firstSpans[i]);

            this.secondSpans.push(document.createElement("span"));
            this.secondSpans[i].style = "bottom: 0;height: 30px;width: 30px;border-radius: 50%;position: absolute;background:  rgba(155,155,155,0.8);display: block;animation: angle_Preloader001II 1s infinite  linear;left: " + (30 * i) + "px;animation-delay:" + (0.2 * i) + "s;";
            this.insideDiv2.appendChild(this.secondSpans[i]);
        }
        this.mainDiv.appendChild(this.insideDiv1);
        this.mainDiv.appendChild(this.insideDiv2);

        var insideStyle = document.createTextNode(" @keyframes angle_Preloader001I 	{0%{transform: translateY(0px);}	50%{transform: translateY(-20px); background: var(--middle-color);}	80%{transform: translateY(0px);}	100%{transform: translateY(0px);}}" +
            "  @keyframes angle_Preloader001II  {0%{transform: translateY(0px);opacity: 0;}	50%{transform: translateY(20px);opacity: 1; background: rgba(200,200,200,0.5);}		80%{transform: translateY(0px);opacity: 0;}	100%{transform: translateY(0px);opacity: 0;}}" +
            "@keyframes angle_preloader_fadeout 	{from{opacity: 1;display:block;}	to{opacity: 0;display:none;z-index: -1}}");
        this.styleNode.appendChild(insideStyle);

    }
    flag() {
        this.insideDiv1.style.width = "176px";
        this.insideDiv1.style.height = "176px";
        this.loadingMessage.style.top = "18%";
        this.spans = [];
        let x = 0;
        let y = 0;
        let time = 0;

        for (let i = 0; i < 16; i++) {
            if (i == 1 || i == 4) time = 1;
            if (i == 2 || i == 5 || i == 8) time = 2;
            if (i == 3 || i == 6 || i == 9 || i == 12) time = 3;
            if (i == 7 || i == 10 || i == 13) time = 4;
            if (i == 11 || i == 14) time = 5;
            if (i == 15) time = 6;
            this.spans.push(document.createElement("span"));
            this.spans[i].style = "display:block; width:40px; height:40px;  position:absolute;  padding:0;  margin:5px;  background:#000;  animation: zoomAnimation 1s infinite linear;left:" + (x * 44) + "px;top:" + (y * 44) + "px; animation-delay:" + (0.2 * time) + "s;";
            this.insideDiv1.appendChild(this.spans[i]);

            x++;
            if (x > 3) {
                y++;
                x = 0;
            }

        }
        this.mainDiv.appendChild(this.insideDiv1);

        var insideStyle = document.createTextNode("@keyframes zoomAnimation{ 0%{width:40px;height:40px;background-color:var(--start-color)} 50%{width:44px;height:44px;background-color:var(--middle-color);opacity:0.75;} 100%{width:40px;height:40px;background-color:var(--start-color)}}" +
            "@keyframes angle_preloader_fadeout {from{opacity: 1;display:block;} to{opacity: 0;display:none;z-index: -1}}");
        this.styleNode.appendChild(insideStyle);

    }
    loading(type) {

        this.diameter = 50;
        this.spans = [];
        this.insideDiv1.style.width = this.diameter * 2 + "px";
        this.insideDiv1.style.height = this.diameter * 2 + "px";
        this.loadingMessage.style.top = (this.diameter + 30) + "px";

        var x = 0;
        var y = 0;
        var deg = 90;
        for (let i = 0; i < 12; i++) {
            this.spans.push(document.createElement("span"));
            if (type == "circle")
                this.spans[i].style = "display:block; width:0px; height:0px;border-radius:50%; transform: translate(-50%, -50%); position:absolute; background:var(--start-color);  animation: loadingAnimation1 1s infinite linear;left:" + (((Math.sin(deg * (Math.PI / 180))) * this.diameter) + this.diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * this.diameter) + this.diameter) + "px; animation-delay:" + (i * 0.1) + "s;";
            if (type == "circle2")
                this.spans[i].style = "display:block; width:7px; height:25px;border-radius:10px; transform: translate(-50%, -50%);transform:rotate(" + (i * 30) + "deg); position:absolute; background:var(--start-color);  animation: loadingAnimation2 1s infinite linear;left:" + (((Math.sin(deg * (Math.PI / 180))) * this.diameter) + this.diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * this.diameter) + this.diameter) + "px; animation-delay:" + (i * 0.1) + "s;";
            if (type == "circle3")
                this.spans[i].style = "display:block; width:7px; height:25px;border-radius:10px; transform: translate(-50%, -50%);transform:rotate(" + (i * 30 + 60) + "deg); position:absolute; background:var(--start-color);  animation: loadingAnimation2 1s infinite linear;left:" + (((Math.sin(deg * (Math.PI / 180))) * this.diameter) + this.diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * this.diameter) + this.diameter) + "px; animation-delay:" + (i * 0.1) + "s;";
            if (type == "circle_classic")
                this.spans[i].style = "display:block; width:7px; height:25px;border-radius:10px; transform: translate(-50%, -50%);transform:rotate(" + (i * 30 + 90) + "deg); position:absolute; background:var(--start-color);  animation: loadingAnimation2 1s infinite linear;left:" + (((Math.sin(deg * (Math.PI / 180))) * this.diameter) + this.diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * this.diameter) + this.diameter) + "px; animation-delay:" + (i * 0.1) + "s;";

            this.insideDiv1.appendChild(this.spans[i]);
            deg -= 30;
        }
        this.mainDiv.appendChild(this.insideDiv1);

        var insideStyle = document.createTextNode("@keyframes loadingAnimation1{ 0%{width:0px;height:0px;opacity:0} 50%{width:15px;height:15px;opacity:1} 100%{width:0px;height:0px;opacity:0}}" +
            "@keyframes loadingAnimation2{ 0%{opacity:0} 50%{opacity:1} 100%{opacity:0}}");
        this.styleNode.appendChild(insideStyle);
    }
    orbital() {
        this.diameter = 80;
        document.documentElement.style.setProperty("--diameter", this.diameter / 2 + "px")

        this.loadingMessage.style.top = "0";
        this.loadingMessage.style.textShadow = "1px 1px 1px var(--text-color)";
        this.insideDiv1.style = "position:relative;top:50%;left:50%; justify-content: center;transform: translate(-50%, -50%);width:" + this.diameter * 2 + "px;height: " + this.diameter * 2 + "px;" +
            " border-radius:50%;border-top: 2px solid var(--start-color);border-right: 2px solid var(--start-color);border-bottom: 2px solid var(--start-color); animation : orbitalAnimation 1s infinite linear;box-shadow:1px 1px 1px 1px var(--start-color);margin-left:0px !important;over-flow:hidden ";
        this.mainDiv.appendChild(this.insideDiv1);

        var div = document.createElement("div");
        div.style = "width:12px;height:12px;border-radius:100%;background:var(--start-color);position:relative;top:" + (this.diameter + 25) + "px;";

        this.insideDiv1.appendChild(div);
        var insideStyle = document.createTextNode("@keyframes orbitalAnimation {from{transform:translate(-50%, -50%)rotate(0deg) }to{transform: translate(-50%, -50%)rotate(360deg)}}");
        this.styleNode.appendChild(insideStyle);
    }
    radioWave() {
        this.spans = [];
        this.insideDiv1.style.width = "220px";
        this.setBlockStartColor("rgb(33, 158, 188)");
        this.setBlockEndColor("rgb(64, 145, 108)");
        this.loadingMessage.style.top = "50px";
        for (let i = 0; i < 9; i++) {
            this.spans.push(document.createElement("span"));
            this.spans[i].style = "display:block;width:20px;height:30px;background-color:var(--start-color);position:absolute;top:0%;left:" + (i * 25) + "px;transform:translate(0%,-50%);animation: radioWaveAnimation 1s infinite linear " + (0.15 * i) + "s ;";

            this.insideDiv1.appendChild(this.spans[i]);
        }
        this.mainDiv.appendChild(this.insideDiv1);
        var insideStyle = document.createTextNode("@keyframes radioWaveAnimation {0%{height:30px;background-color:var(--start-color) }50%{height:80px;background-color:var(--middle-color)}100%{height:30px;background-color:var(--start-color) }}");
        this.styleNode.appendChild(insideStyle);
    }
    orbital2() {
        this.loadingMessage.style.zIndex = 101;
        this.insideDiv1.style = "display:block;width:150px;height:150px;border-radius:50%;background-color:var(--start-color);position: relative;top: 50%;left: 50%;transform: translate(-50%, -50%);animation:orbitalAnimationCenter 2s infinite linear";
        this.setBlockStartColor("rgb(33, 150, 188)");
        this.setBlockEndColor("rgb(33, 255, 50)");
        this.mainDiv.appendChild(this.insideDiv1);
        var insideStyle = document.createTextNode("#Angle_Preloader div div::before {display:block;width:170px;height:170px;border-radius:50%;border-top:10px solid var(--start-color);border-left:10px solid transparent;border-bottom:10px solid var(--start-color);border-right:10px solid transparent;content:'';position:relative;top: 50%;left: 50%;transform: translate(-50%, -50%); animation: orbitalAnimation1 2s infinite ease-in-out}" +
            "#Angle_Preloader div div::after {display:block;width:200px;height:200px;border-radius:50%;border-right:10px solid var(--start-color);border-top:10px solid transparent;border-left:10px solid var(--start-color);border-bottom:10px solid transparent;content:'';position:absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);animation:orbitalAnimation2 2s infinite ease-in-out;}" +
            "@keyframes orbitalAnimation1 {0%{ transform:translate(-50%,-50%) rotate(0deg); border-top-color:var(--start-color) ; border-bottom-color:var(--start-color) }50%{ transform:translate(-50%,-50%) rotate(180deg); border-top-color:var(--middle-color); border-bottom-color:var(--middle-color)}100%{  transform:translate(-50%,-50%) rotate(360deg); border-top-color:var(--start-color); border-bottom-color:var(--start-color)}}" +
            "@keyframes orbitalAnimation2 {0%{   transform:translate(-50%,-50%) rotate(0deg); border-right-color:var(--middle-color);border-left-color:var(--middle-color) }50%{ transform:translate(-50%,-50%) rotate(-180deg);border-right-color:var(--start-color);border-left-color:var(--start-color)}100%{ transform:translate(-50%,-50%) rotate(-360deg);border-right-color:var(--middle-color);border-left-color:var(--middle-color) }}" +
            "@keyframes orbitalAnimationCenter {0%{background-color:var(--middle-color)}50%{background-color:var(--start-color)}100%{background-color:var(--middle-color)}}");
        this.styleNode.appendChild(insideStyle);
    }

    balls() {
        this.setBlockStartColor("rgb(33, 150, 188)");
        this.insideDiv1.style = "display:block;width:40px;height:40px;background-color:var(--start-color);position:absolute;top:50%;left:0%;transform:translate(-50%,-50%);animation:ballsAnimation1 1.2s infinite alternate-reverse ease-in";

        this.insideDiv2 = document.createElement("div");
        this.insideDiv2.style = "display:block;width:40px;height:40px;background-color:var(--start-color);position:absolute;top:50%;left:100%;transform:translate(-50%,-50%);animation:ballsAnimation2 1.2s infinite alternate-reverse ease-in";

        this.mainDiv.appendChild(this.insideDiv1);
        this.mainDiv.appendChild(this.insideDiv2);

        var insideStyle = document.createTextNode("@keyframes ballsAnimation1 {0%{background-color:var(--start-color);transform:translate(-50%,-50%) rotate(0deg);left:45%;border-radius:50%}100%{background-color:var(--middle-color);transform:translate(-50%,-50%) rotate(360deg);left:100%;border-radius:0px}}" +
            "@keyframes ballsAnimation2 {0%{background-color:var(--start-color);transform:translate(-50%,-50%) rotate(0deg);left:55%;border-radius:50%}100%{background-color:var(--middle-color);transform:translate(-50%,-50%) rotate(360deg);left:0%;border-radius:0px;}}")
        this.styleNode.appendChild(insideStyle);
    }

    anime_text(website, domain) {
        this.setBlockStartColor("rgb(33, 150, 188)");
        this.insideDiv1.style = "display:block;opacity:0;width:180px;height:40px;direction:rtl;font-family: 'Comic Neue', cursive;font-size:30px;font-weight: 600;position:absolute;top:50%;left:50%;transform:translate(-90%,-50%);animation:anime_text_1 0.5s 1 .4s alternate forwards ease-in, glow 0.8s infinite alternate-reverse ";
        this.insideDiv1.innerText = website;

        this.insideDiv2 = document.createElement("div");
        this.insideDiv2.style = "display:block;opacity:0;width:40px;height:40px;direction:ltr;font-family: 'Comic Neue', cursive;font-size:30px;font-weight: 600;position:absolute;top:50%;left:50%;transform:translate(65%,-50%);animation:anime_text_2 0.5s 1 .4s alternate forwards ease-in, glow 0.8s infinite alternate-reverse";
        this.insideDiv2.innerText = domain;

        this.loadingMessage.style = "display:none"

        this.insideDiv3 = document.createElement("div");
        this.insideDiv3.style = "display:block;opacity:0;direction:ltr;font-size:70px;position:absolute;top:50%;left:50%;transform:translate(40%,-40%);animation:anime_text_3 0.5s 1 .6s alternate forwards ease-in";
        this.insideDiv3.innerText = "•"

        this.mainDiv.appendChild(this.insideDiv1);
        this.mainDiv.appendChild(this.insideDiv2);
        this.mainDiv.appendChild(this.insideDiv3);

        var insideStyle = document.createTextNode("@keyframes anime_text_1 {from{left:0%;opacity:0} to{left:50%;opacity:1}}" +
            "@keyframes anime_text_2 {from{left:100%;opacity:0} to{left:50%;opacity:1;}}" +
            "@keyframes anime_text_3 {from{top:100%;opacity:0} to{top:50%;opacity:1;}}" +
            "@keyframes glow{from{text-shadow:1px 1px 1px rgba(255,159,64,0.5),-1px -1px 1px rgba(255,159,64,0.5)}to{text-shadow:1px 1px 5px rgba(255,159,64,1),-1px -1px 5px rgba(255,159,64,1)}}")
        this.styleNode.appendChild(insideStyle);
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