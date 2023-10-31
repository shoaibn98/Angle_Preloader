function diamond(option) {
    // Set row Count
    var rowCount = this.getOptionValue(this.option.rowCount, 2);

    this.setFirstColor("rgb(6, 152, 254)");
    this.setSecondColor("rgb(42, 219, 38)");
    this.insideDiv1.style = "display:block;width:" + (50 * rowCount) + "px;height:" + (50 * rowCount) + "px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);animation:rotateDiamond 5s infinite linear";



    this.spans = [];
    var m = new Array(rowCount);
    for (let i = 0; i < m.length; i++) {
        m[i] = new Array(rowCount);
        var count = 0;
        var anim = "diamond1";
        if (i % 2 == 0) {
            count = 0;
        } else {
            count = 1;
        }
        for (let j = 0; j < m[i].length; j++) {
            m[i][j] = count;
            if (count > 1) {
                count = 0;
            }
            if (count == 0) {
                anim = "diamond1";
            } else {
                anim = "diamond2";
            }
            this.spans.push(new createElement("span", "display:block; width:40px; height:40px;  position:absolute;  padding:0;  background:var(--second-color);  animation: " + anim + " 1.5s infinite alternate linear;left:" + (j * 50) + "px;top:" + (i * 50) + "px;"));
            this.insideDiv1.appendChild(this.spans[(rowCount * i) + j]);
            count++;
        }

    }

    // Set Settings
    this.setSettings();

    this.mainDiv.appendChild(this.insideDiv1);

    var insideStyle = document.createTextNode(
        "@keyframes diamond1 {0%{transform:scale(1);background: var(--first-color);}" +
        "50%{transform:scale(0.5);background: var(--second-color);}" +
        "100%{transform:scale(1);background: var(--first-color);}}" +
        "@keyframes diamond2 {0%{transform:scale(0.5);background: var(--second-color);}" +
        "50%{transform:scale(1);background: var(--first-color);}" +
        "100%{transform:scale(0.5);background: var(--second-color);}}" +
        "@keyframes rotateDiamond {from{transform:translate(-50%,-50%), rotate(0deg);}" +
        "to{transform:translate(-50%,-50%) rotate(360deg);}}")
    this.styleNode.appendChild(insideStyle);
}