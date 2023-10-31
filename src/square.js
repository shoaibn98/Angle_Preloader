function square(option) {
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