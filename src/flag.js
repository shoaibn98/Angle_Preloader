function flag() {
    this.insideDiv1.style.width = "176px";
    this.insideDiv1.style.height = "176px";
    this.loadingMessage.style.top = "18%";
    this.spans = [];
    let x = 0;
    let y = 0;
    let time = 0;

    for (let i = 0; i < 16; i++) {
        if (i == 1 || i == 4) time = 1;
        if (i == 2 || i == 5 || i == 8) time = 2;
        if (i == 3 || i == 6 || i == 9 || i == 12) time = 3;
        if (i == 7 || i == 10 || i == 13) time = 4;
        if (i == 11 || i == 14) time = 5;
        if (i == 15) time = 6;
        this.spans.push(document.createElement("span"));
        this.spans[i].style = "display:block; width:40px; height:40px;  position:absolute;  padding:0;  margin:5px;  background:#000;  animation: zoomAnimation 1s infinite linear;left:" + (x * 44) + "px;top:" + (y * 44) + "px; animation-delay:" + (0.2 * time) + "s;";
        this.insideDiv1.appendChild(this.spans[i]);

        x++;
        if (x > 3) {
            y++;
            x = 0;
        }

    }
    this.mainDiv.appendChild(this.insideDiv1);

    var insideStyle = document.createTextNode("@keyframes zoomAnimation{ 0%{width:40px;height:40px;background-color:var(--start-color)} 50%{width:44px;height:44px;background-color:var(--middle-color);opacity:0.75;} 100%{width:40px;height:40px;background-color:var(--start-color)}}" +
        "@keyframes angle_preloader_fadeout {from{opacity: 1;display:block;} to{opacity: 0;display:none;z-index: -1}}");
    this.styleNode.appendChild(insideStyle);

}