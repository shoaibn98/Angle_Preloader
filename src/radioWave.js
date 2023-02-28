function
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