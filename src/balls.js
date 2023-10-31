function balls(option) {
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