function balls() {
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