function orbital(type) {
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