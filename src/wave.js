function wave(option) {
    // Set spans Count
    var spanCount = this.getOptionValue(this.option.spanCount, 6)

    // Set default Style
    this.mainDiv.style.width = (spanCount * 30) + "px";
    this.loadingMessage.style.top = "5%";

    // Create new Element to showing Shadow
    this.insideDiv2 = new createElement("div", "position: relative;top: 50%;left: 50%;transform: translate(-50%, -50%)")

    // array of spans for balls
    this.firstSpans = [];
    this.secondSpans = [];


    // set Default Color
    this.setFirstColor("rgb(33, 158, 188)");
    this.setSecondColor("rgb(64, 145, 108)");


    // Create Spans
    for (let i = 0; i < spanCount; i++) {
        this.firstSpans.push(new createElement("span", "bottom: 0;height: 30px;width: 30px;border-radius: 50%;position: absolute;background: var(--first-color);display: block;animation: angle_Preloader001I 1s infinite  ease-in-out;left: " + (30 * i) + "px;animation-delay:" + (0.2 * i) + "s;"));
        this.insideDiv1.appendChild(this.firstSpans[i]);

        this.secondSpans.push(new createElement("span", "bottom: 0;height: 30px;width: 30px;border-radius: 50%;position: absolute;background:  rgba(155,155,155,0.8);display: block;animation: angle_Preloader001II 1s infinite  ease-in-out;left: " + (30 * i) + "px;animation-delay:" + (0.2 * i) + "s;"));
        this.insideDiv2.appendChild(this.secondSpans[i]);
    }


    // Set Settings
    this.setSettings();
    // append Spans
    this.mainDiv.appendChild(this.insideDiv1);
    this.mainDiv.appendChild(this.insideDiv2);

    // append KeyFrames
    var insideStyle = document.createTextNode(" @keyframes angle_Preloader001I 	{0%{transform: translateY(0px);}	50%{transform: translateY(-20px); background: var(--second-color);}	80%{transform: translateY(0px);}	100%{transform: translateY(0px);}}" +
        "  @keyframes angle_Preloader001II  {0%{transform: translateY(0px);opacity: 0;}	50%{transform: translateY(20px);opacity: 1; background: rgba(200,200,200,0.5);}		80%{transform: translateY(0px);opacity: 0;}	100%{transform: translateY(0px);opacity: 0;}}" +
        "@keyframes angle_preloader_fadeout 	{from{opacity: 1;display:block;}	to{opacity: 0;display:none;z-index: -1}}");
    this.styleNode.appendChild(insideStyle);

}