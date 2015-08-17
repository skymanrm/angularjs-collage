# Angular Directive for make collage from photos

###Usage example

> \<collage images="images" ideal-height="100" rows-count="4"\>\</collage\>

###Parameters

**ideal-height** 

Target height for images

**rows-count**

Required number of rows

###Required input data

Array of images with width\&height parameters, example:

```javascript
[
    {src: 'http://placekitten.com/g/200/300', width: 200, height: 300},
    {src: 'http://placekitten.com/g/250/350', width: 250, height: 350},
    {src: 'http://placekitten.com/g/500/300', width: 500, height: 300},
    {src: 'http://placekitten.com/g/400/1000', width: 400, height: 1000},
    {src: 'http://placekitten.com/g/400/200', width: 400, height: 200},
    {src: 'http://placekitten.com/g/240/340', width: 240, height: 340},
    {src: 'http://placekitten.com/g/500/700', width: 500, height: 700},
    {src: 'http://placekitten.com/g/1500/500', width: 1500, height: 500}
]
```

###Result

![Result](https://github.com/skymanrm/angularjs-collage/example_collage.png)


###Requirements

Tested on AngularJS 1.4.4

Required underscore


###3rd-party

Used linear partition algorithm from [crispymtn/linear-partition](https://github.com/crispymtn/linear-partition)

Idea from [Crispy Mountain Article](https://www.crispymtn.com/stories/the-algorithm-for-a-perfectly-balanced-photo-gallery)
