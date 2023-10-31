function anime_text(option) {
    // set default values
    var website = this.getOptionValue(this.option.website, "Preloader");
    var domain = this.getOptionValue(this.option.domain, "com");

    this.loadingMessage.style = "display:none"

    // create Elements and append
    this.insideDiv1.style = "display:block;opacity:0;width:180px;height:40px;direction:rtl;color:var(--first-color);font-family: 'Comic Neue', cursive;font-size:30px;font-weight: 600;position:absolute;top:50%;left:50%;transform:translate(-90%,-50%);animation:anime_text_1 0.5s 1 .4s alternate forwards ease-in, glow 0.8s infinite alternate-reverse ";
    this.insideDiv1.innerText = website;

    this.insideDiv2 = new createElement("div", "display:block;opacity:0;width:40px;height:40px;direction:ltr;color:var(--second-color);font-family: 'Comic Neue', cursive;font-size:30px;font-weight: 600;position:absolute;top:50%;left:50%;transform:translate(65%,-50%);animation:anime_text_2 0.5s 1 .4s alternate forwards ease-in, glow 0.8s infinite alternate-reverse")
    this.insideDiv2.innerText = domain;

    this.insideDiv3 = new createElement("div", "display:block;opacity:0;direction:ltr;color:var(--3th-color);font-size:70px;position:absolute;top:50%;left:50%;transform:translate(40%,-40%);animation:anime_text_3 0.5s 1 .6s alternate forwards ease-in")
    this.insideDiv3.innerText = "•"

    // Set Settings
    this.setSettings();

    this.mainDiv.appendChild(this.insideDiv1);
    this.mainDiv.appendChild(this.insideDiv2);
    this.mainDiv.appendChild(this.insideDiv3);

    var insideStyle = document.createTextNode("@keyframes anime_text_1 {from{left:0%;opacity:0} to{left:50%;opacity:1}}" +
        "@keyframes anime_text_2 {from{left:100%;opacity:0} to{left:50%;opacity:1;}}" +
        "@keyframes anime_text_3 {from{top:100%;opacity:0} to{top:50%;opacity:1;}}" +
        "@keyframes glow{from{text-shadow:1px 1px 1px rgba(255,159,64,0.5),-1px -1px 1px rgba(255,159,64,0.5)}to{text-shadow:1px 1px 5px rgba(255,159,64,1),-1px -1px 5px rgba(255,159,64,1)}}")
    this.styleNode.appendChild(insideStyle);
}