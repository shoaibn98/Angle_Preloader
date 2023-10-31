function loading(option) {
    // set type of Loading 
    var type = option.model;
    // set Diameters
    var diameter = this.getOptionValue(this.option.diameter, 50);


    // set Style
    this.spans = [];
    this.insideDiv1.style.width = diameter * 2 + "px";
    this.insideDiv1.style.height = diameter * 2 + "px";
    this.loadingMessage.style.top = (diameter + 30) + "px";


    // Create elements
    var x = 0;
    var y = 0;
    var deg = 90;
    for (let i = 0; i < 12; i++) {
        this.spans.push(document.createElement("span"));
        if (type == "circle")
            this.spans[i].style = "display:block; width:0px; height:0px;border-radius:50%; transform: translate(-50%, -50%); position:absolute; background:var(--first-color);  animation: loadingAnimation1 1s infinite ease-in-out;left:" + (((Math.sin(deg * (Math.PI / 180))) * diameter) + diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * diameter) + diameter) + "px; animation-delay:" + (i * 0.1) + "s;";
        if (type == "circle_2")
            this.spans[i].style = "display:block; width:7px; height:25px;border-radius:10px; transform: translate(-50%, -50%);transform:rotate(" + (i * 30) + "deg); position:absolute; background:var(--first-color);  animation: loadingAnimation2 1s infinite linear;left:" + (((Math.sin(deg * (Math.PI / 180))) * diameter) + diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * diameter) + diameter) + "px; animation-delay:" + (i * 0.1) + "s;";
        if (type == "circle_3")
            this.spans[i].style = "display:block; width:7px; height:25px;border-radius:10px; transform: translate(-50%, -50%);transform:rotate(" + (i * 30 + 60) + "deg); position:absolute; background:var(--first-color);  animation: loadingAnimation2 1s infinite ease-in-out;left:" + (((Math.sin(deg * (Math.PI / 180))) * diameter) + diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * diameter) + diameter) + "px; animation-delay:" + (i * 0.1) + "s;";
        if (type == "circle_classic")
            this.spans[i].style = "display:block; width:7px; height:25px;border-radius:10px; transform: translate(-50%, -50%);transform:rotate(" + (i * 30 + 90) + "deg); position:absolute; background:var(--first-color);  animation: loadingAnimation2 1s infinite ease-in-out;left:" + (((Math.sin(deg * (Math.PI / 180))) * diameter) + diameter) + "px;top:" + (((Math.cos(deg * (Math.PI / 180))) * diameter) + diameter) + "px; animation-delay:" + (i * 0.1) + "s;";

        this.insideDiv1.appendChild(this.spans[i]);
        deg -= 30;
    }

    // Set Settings
    this.setSettings();
    // append elements
    this.mainDiv.appendChild(this.insideDiv1);
    var insideStyle = document.createTextNode("@keyframes loadingAnimation1{ 0%{width:0px;height:0px;opacity:0} 50%{width:15px;height:15px;opacity:1} 100%{width:0px;height:0px;opacity:0}}" +
        "@keyframes loadingAnimation2{ 0%{opacity:0} 50%{opacity:1} 100%{opacity:0}}");
    this.styleNode.appendChild(insideStyle);
}