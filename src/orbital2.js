function orbital2() {
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