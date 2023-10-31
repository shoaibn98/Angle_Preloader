function flag(option) {
    // Set spans Count
    var rowCount = this.getOptionValue(this.option.rowCount, 4);


    this.insideDiv1.style.width = (44 * rowCount) + "px";
    this.insideDiv1.style.height = (44 * rowCount) + "px";
    this.loadingMessage.style.top = "18%";
    this.spans = [];
    let x = 0;
    let y = 0;
    let time = 0;



    // Create Matrix to save spans
    var m = new Array(rowCount);
    for (let i = 0; i < m.length; i++) {
        m[i] = new Array(rowCount);
        var count = i;
        for (let j = 0; j < m[i].length; j++) {
            m[i][j] = count;
            count++;

            this.spans.push(new createElement("span", "display:block; width:40px; height:40px;  position:absolute;  padding:0;  margin:5px;  background:#000;  animation: zoomAnimation 1s infinite ease-in-out;left:" + (j * 44) + "px;top:" + (i * 44) + "px; animation-delay:" + (0.2 * m[i][j]) + "s;"));
            this.insideDiv1.appendChild(this.spans[(rowCount * i) + j]);
        }

    }
    // Set Settings
    this.setSettings();
    // appends Element
    this.mainDiv.appendChild(this.insideDiv1);
    // append Keyframes
    var insideStyle = document.createTextNode("@keyframes zoomAnimation{ 0%{width:40px;height:40px;background-color:var(--first-color)} 50%{width:44px;height:44px;background-color:var(--second-color);opacity:0.75;} 100%{width:40px;height:40px;background-color:var(--first-color)}}" +
        "@keyframes angle_preloader_fadeout {from{opacity: 1;display:block;} to{opacity: 0;display:none;z-index: -1}}");
    this.styleNode.appendChild(insideStyle);

}