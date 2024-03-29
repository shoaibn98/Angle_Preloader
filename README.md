# Angle_Preloader

- ### What is it?

A preloader in HTML is a small animation or graphic displayed on a webpage while its content and resources are loading, preloaders are essential elements in web design to enhance user experience and ensure that a webpage loads smoothly and correctly.

This  preloader not only allows you to preload your entire web page but also individual elements within it.

<br>

![Header](https://my-app.alwaysdata.net/angle_preloader/img/header.gif)

 - ### Documentation
 >   [How to use](https://github.com/shoaibn98/Angle_Preloader#How-To-Use)  

  >   [Complete Documentation](https://my-app.alwaysdata.net/angle_preloader)  -> link to my app website

 > [Personalization](https://github.com/shoaibn98/Angle_Preloader#Personalization) -> set Dark Mode, Colors, Font family and size

  > [List of all Preloader](https://github.com/shoaibn98/Angle_Preloader#Preloaders) -> wave, flag, orbital, radio_wave ....

</br>

***
 - ### How To Use

 [use as HTML Page Preloader](https://github.com/shoaibn98/Angle_Preloader#as_HTML_Preloader)
 
 [use as an Elements Preloader](https://github.com/shoaibn98/Angle_Preloader#as_Element_Preloader)
 
 </br>


 before start using add script file to your HTML file.
 ```
    <script src="https://cdn.jsdelivr.net/gh/shoaibn98/Angle_Preloader/Angle_Preloader.min.js"></script>

 ```
  > Note: This is a Preloader. Link it before any JS file.



 - ### as HTML Preloader

 
Create an Empty `div` with `Angle_Preloader` Id.

```
    <div id="Angle_Preloader"></div>

```

 Right after the closing `div` element, initiate your preloader by opening a JavaScript tag:
 ````
    <div id="Angle_Preloader"></div>
    <script>
        let preloader = new Angle_Preloader(option);
    </script>
 ````
 This sequence seamlessly integrates the preloader with your HTML content, allowing you to customize and control the loading process effectively.

You can conveniently save and customize all your settings within an options variable.
````
    <script>
        let option={
             type: "preloader_Name" // *Required* -type of Preloader
            }
        let preloader = new Angle_Preloader(option);
    </script>
 ````
You can explore a comprehensive range of options and tailor them to your preferences in the box below.

````
    <script>
        let option={
            type: "loading", // *Required* => To set type of Preloader
            window: "element", // *Required If* => if preloader used as Element's Preloader
            message: "loading", // *Optional* => To set Message to show
            target: "elementID", // *Required If* => if preloader used as Element's Preloader
            model: "circle_3", // *Required If* => Only used for some type of Preloaders like 'loading'
            darkTheme: true, // *Optional* => To active dark Theme
            color1: "red", // *Optional* => To set First animation's Color
            color2: "green", // *Optional* => To set Second animation's Color
            color3: "green", // *Optional* => To set 3th animation's Color
            messageColor: "green", // *Optional* => To set Color of Message text
            diameter: 10, // *Optional* => To set Diameter only for some type like 'loading' and 'orbital'
            spanCount: 10, // *Optional* => To set count of Spans only for some type like 'wave' and 'radio_wave'
            rowCount: 10, // *Optional* => To set count of row  only for some type like 'flag' and 'diamond'
            minHeight: 2, //  *Optional* => Only for type 'radio_wave'
            maxHeight: 60, // *Optional* => Only for type 'radio_wave'
            website: "website", // *Optional* => Only for type 'anime_text'
            domain: "de", // *Optional* => Only for type 'anime_text'
            websiteColor: "#fff", // *Optional* => Only for type 'anime_text'
            domainColor: "#000", // *Optional* => Only for type 'anime_text'
            dotColor: "#000", // *Optional* => Only for type 'anime_text'
            }
        let preloader = new Angle_Preloader(option);
    </script>
 ````

 Example:
````

let option={
    type: "wave",
    message: "Please Waiting",
    darkTheme: true,
    spanCount: 6,
}
let preloader = new Angle_Preloader(option);

 ````
 ![](https://my-app.alwaysdata.net/angle_preloader/img/ex-wave-message-dark.gif)
 


 We're nearly done! For the final step, don't forget to incorporate the 'hide()' function from this package to deactivate the preloader once your website has fully loaded.

````
    <script>
        var preloader = new Angle_Preloader(option);

        function onload() {
            preloader.hide();
        }
    </script>

````
> Note: don't forget to add this line in to `onload()` event. 


 - ### as Element Preloader
To add a Preloader to an Element follow this steps:
````
<div id="myElementID" style="width:200px;height: 200px;;position:relative" >
        <img src="https://my-app.alwaysdata.net/angle_preloader/img/11.jpg" width="200" height="200" onload="loaded()">
</div>
````
> Note: define ID for your element, set Position to relative , add Onload event to your target Element

inside Script Tag, set Option:
````
    var option = {
            type: "loading", // *Required*
            window: "element", // *Required*
            target: "myElementID", // *Required* 
            model: "circle_3", 
            darkTheme: true, 
            diameter: 10
    }

````
Result :
![](https://my-app.alwaysdata.net/angle_preloader/img/ex-loading-circle-3-dark.gif)





 
 




- ### Personalization :

- ### Message text settings 

````
    preloader.setText("Please Wait..."); 

    preloader.setTextColor("red"); // you can use name of color 
    preloader.setTextColor("#000"); // Or HEX format
    preloader.setTextColor("rgb(33, 158, 188)"); // Or RGB() and RGBA() format

    preloader.setTextFontFamily("Font Family"); 
    preloader.setTextFontSize(20); 

````


<br>

- ### set Block colors

````
    preloader.setFirstColor("rgb(0,0,0)");
    preloader.setSecondColor("rgb(0,0,0)");
    preloader.set3thColor("rgb(0,0,0)");
   
````

<br>


</br>

- ### darkTheme( )
If you like dark Theme or you use dark Theme in your website, don't worry you can use `DarkTheme()` method of `Preloader`:

````  
    preloader.darkTheme(true);
 
````
> Note : It's more safer to set DarkTheme in option. If you use method `darkTheme()` don't forget to add this method exactly after your preloader Variable, It may change your personalize setting. 

</br>

 - ## Preloaders

 - #### wave
 ````
let option={
    type: "wave",
    message: "Please Waiting",
    darkTheme: true,
    spanCount: 6,
}
let preloader = new Angle_Preloader(option);

 ````
 ![](https://my-app.alwaysdata.net/angle_preloader/img/ex-wave-message-dark.gif)

 - #### flag
  ````
  let option={
    type: "flag",
    darkTheme: true,
    rowCount: 4,
    color1: "#005f7e",
}
let preloader = new Angle_Preloader(option);
 ````

 ![](https://my-app.alwaysdata.net/angle_preloader/img/ex-flag.gif)



 - #### loading
 ````
  let option={
    type: "loading",
    model: "circle", // try : 'circle-2','circle-3','circle-classic'
    darkTheme: true,
    diameter: 50,
}
let preloader = new Angle_Preloader(option);
 ````
 ![](https://my-app.alwaysdata.net/angle_preloader/img/ex_loading_circle.gif)


 - #### orbital_1

  ````
let option={
    type: "orbital_1",
    darkTheme: true,
    diameter: 50,
}
let preloader = new Angle_Preloader(option);
 ````
 ![](https://my-app.alwaysdata.net/angle_preloader/img/ex_orbital_1.gif)

 - #### orbital_2

````
let option={
    type: "orbital_2",
    darkTheme: true,
    message:"Loading",
}
let preloader = new Angle_Preloader(option);
 ````
 ![](https://my-app.alwaysdata.net/angle_preloader/img/ex_orbital_2.gif)

 - #### radio_wave
  ````
let option={
    type: "radio_wave",
    darkTheme: true,
    spanCount: 10,
    minHeight: 2,
    maxHeight: 60, 
}
let preloader = new Angle_Preloader(option);
 ````
 ![](https://my-app.alwaysdata.net/angle_preloader/img/ex-radio-wave.gif)

 - #### Balls
  ````
let option={
    type: "balls",
    darkTheme: true,
    color1: "#1e578b",
    color2: "#2ca130",
}
let preloader = new Angle_Preloader(option);
 ````
 ![](https://my-app.alwaysdata.net/angle_preloader/img/ex-balls.gif)

- #### anime_text
````
let option={
    type: "anime_text",
    darkTheme: true,
     website: "website", 
     domain: "de", 
     websiteColor: "#fff",
     domainColor: "#000", 
     dotColor: "#000",
}
let preloader = new Angle_Preloader(option);

````
  ![](https://my-app.alwaysdata.net/angle_preloader/img/ex-anime-text.gif)

 - #### diamond
  ````
let option={
    type: "diamond",
    darkTheme: true,
    rowCount:2,
}
let preloader = new Angle_Preloader(option);
 ````
 ![](https://my-app.alwaysdata.net/angle_preloader/img/ex-diamond.gif)

 - #### square
  ````
let option={
    type: "square",
    darkTheme: true,
}
let preloader = new Angle_Preloader(option);
 ````
 ![](https://my-app.alwaysdata.net/angle_preloader/img/ex-square.gif)


</br>
</br>
</br>

 - ## New Preloader coming soon
 
 <br>


 Made with ♥ by [Ahmad Shoaib Norouzi](https://shoaibnorouzi.alwaysdata.net)