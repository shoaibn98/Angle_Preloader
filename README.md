# Angle_Preloader
Add preloader to your website easily with only 1 line script code, compatible with all major browsers, and compatible to personalization elements 

<br>

![Header](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/header.gif)

 - ### Documentation
 >   [How to use](https://github.com/shoaibn98/Angle_Preloader#How-To-Use)  

 > [Personalization](https://github.com/shoaibn98/Angle_Preloader#Personalization) -> set Dark Mode, Colors, Font family and size

  > [Preloaders](https://github.com/shoaibn98/Angle_Preloader#Preloaders) -> wave, flag, orbital, radio_wave ....

</br>

***
 - ### How To Use

 before start using add script file to your HTML file.
 ```
    <script src="https://cdn.jsdelivr.net/gh/shoaibn98/Angle_Preloader/Angle_Preloader.min.js"></script>

 ```
 > Note: This is a Preloader. Link it before any JS file.

 
Create an Empty `div` with `Angle_Preloader` Id.

```
    <div id="Angle_Preloader"></div>

```

 Exactly after `div` element, open a Javascript Tag and start your Preloader.
 ````
    <div id="Angle_Preloader"></div>
    <script>
        var preloader = new Angle_Preloader("Preloader_Name");
    </script>
 ````

 If you want to add some Message in your Preloader page, add as a second parameter:
````
    <script>
        var preloader = new Angle_Preloader("Preloader_Name","Your Message to show");
    </script>
 ````

 
 It's almost finished. For last step you need to add `hide()` function of this package to stop preloader, when your website loaded.

````
    <script>
        var preloader = new Angle_Preloader("Preloader_Name");

        function onload() {
            preloader.hide();
        }
    </script>

````


> Note: don't forget to add this line in to `onload()` event. 

- ### Personalization 

1. ### setText( ) 
if you need to add some text or message to your preloader Page, use this function:
````
    preloader.setText("Please Wait..."); 

````

</br>

2. ### setTextColor( )
You can change color of your message text:
````
    preloader.setTextColor("red"); // you can use name of color 
    preloader.setTextColor("#000"); // Or HEX format
    preloader.setTextColor("rgb(33, 158, 188)"); // Or RGB() and RGBA() format

````

</br>

3. ### setTextFontSize( ) and setTextFontFamily()
You can change size and family of your message text:
````
    preloader.setTextFontFamily("Font Family"); 
    preloader.setTextFontSize(20); 

````

<br>

4. ### setBlockColor( )
set a single color to the preloader's elements :
> Note: for better result user single color only for `flag` Preloader.
````
    <script>
        var preloader = new Angle_Preloader("flag");
        preloader.setBlockColor("blue");
    </script>
````
![flag_singleColor](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/flag_singleColor.gif)

<br>

5. ### setBlockStartColor( ) and setBlockEndColor( )

we use 2 colors in every block, `StartColor` is block's when animation is in 0% and 100%, and `EndColor`when animation reach to 50%.
<br>
you can add 2 deferent colors and check the result:
````
    <script>
        var preloader = new Angle_Preloader("flag");
        preloader.setBlockStartColor("#7c2169")
        preloader.setBlockEndColor("#b81140")
    </script>

````
![flag_DiffColor](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/flag_diffColor.gif)

</br>

6. ### darkTheme( )
If you like dark Theme or you use dark Theme in your website, don't worry you can use `DarkTheme()` method of `Preloader`:

````
    <script>
        var preloader = new Angle_Preloader("wave");
        preloader.darkTheme(true);
    </script>
````
> Note : If you use `darkTheme()` don't forget to add this method exactly after your preloader Variable, It may change your personalize setting.

</br>

 - ## Preloaders
 1. #### wave
 ````
    var preloader = new Angle_Preloader("wave");
 ````
 ![wave](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/ex_wave.gif)

 2. #### flag
  ````
    var preloader = new Angle_Preloader("flag");
 ````
 ![flag](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/flag_diffColor.gif)


 3. #### loading_circle

  ````
    var preloader = new Angle_Preloader("loading_circle");
 ````
 ![flag_singleColor](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/ex_loading_circle.gif)


 4. #### loading_circle_2
  ````
    var preloader = new Angle_Preloader("loading_circle_2");
 ````
 ![flag_singleColor](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/ex_loading_circle_2.gif)

 5. #### loading_circle_3
  ````
    var preloader = new Angle_Preloader("loading_circle_3");
 ````
 ![flag_singleColor](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/ex_loading_circle_3.gif)

 6. #### loading_circle_classic

  ````
    var preloader = new Angle_Preloader("");
 ````
 ![flag_singleColor](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/ex_loading_circle_classic.gif)


 7. #### orbital_1

  ````
    var preloader = new Angle_Preloader("orbital_1");
 ````
 ![flag_singleColor](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/ex_orbital_1.gif)

 8. #### orbital_2

  ````
    var preloader = new Angle_Preloader("orbital_2");
 ````
 ![flag_singleColor](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/ex_orbital_2.gif)

 9. #### radio_wave
  ````
    var preloader = new Angle_Preloader("radio_wave");
 ````
 ![flag_singleColor](https://shoaibnorouzi.alwaysdata.net/img/angle_preloader/ex_radio_wave.gif)

</br>
</br>
</br>

 - ## New Preloader coming soon
 
 <br>


 Made with ♥ by [Ahmad Shoaib Norouzi](https://shoaibnorouzi.alwaysdata.net)