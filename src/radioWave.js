function
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