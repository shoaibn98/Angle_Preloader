function wave() {
    this.mainDiv.style.width = "190px";

    this.loadingMessage.style.top = "5%";
    this.insideDiv2 = document.createElement("div");
    this.insideDiv2.style = "position: relative;top: 50%;left: 50%;transform: translate(-50%, -50%)";

    this.firstSpans = [];
    this.secondSpans = [];

    this.setBlockStartColor("rgb(33, 158, 188)");
    this.setBlockEndColor("rgb(64, 145, 108)");

    for (let i = 0; i < 6; i++) {
        this.firstSpans.push(document.createElement("span"));
        this.firstSpans[i].style = "bottom: 0;height: 30px;width: 30px;border-radius: 50%;position: absolute;background: var(--start-color);display: block;animation: angle_Preloader001I 1s infinite  linear;left: " + (30 * i) + "px;animation-delay:" + (0.2 * i) + "s;";
        this.insideDiv1.appendChild(this.firstSpans[i]);

        this.secondSpans.push(document.createElement("span"));
        this.secondSpans[i].style = "bottom: 0;height: 30px;width: 30px;border-radius: 50%;position: absolute;background:  rgba(155,155,155,0.8);display: block;animation: angle_Preloader001II 1s infinite  linear;left: " + (30 * i) + "px;animation-delay:" + (0.2 * i) + "s;";
        this.insideDiv2.appendChild(this.secondSpans[i]);
    }
    this.mainDiv.appendChild(this.insideDiv1);
    this.mainDiv.appendChild(this.insideDiv2);

    var insideStyle = document.createTextNode(" @keyframes angle_Preloader001I 	{0%{transform: translateY(0px);}	50%{transform: translateY(-20px); background: var(--middle-color);}	80%{transform: translateY(0px);}	100%{transform: translateY(0px);}}" +
        "  @keyframes angle_Preloader001II  {0%{transform: translateY(0px);opacity: 0;}	50%{transform: translateY(20px);opacity: 1; background: rgba(200,200,200,0.5);}		80%{transform: translateY(0px);opacity: 0;}	100%{transform: translateY(0px);opacity: 0;}}" +
        "@keyframes angle_preloader_fadeout 	{from{opacity: 1;display:block;}	to{opacity: 0;display:none;z-index: -1}}");
    this.styleNode.appendChild(insideStyle);

}