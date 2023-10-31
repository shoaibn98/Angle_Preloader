function orbital(option) {
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