function orbital2(option) {
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