# custom-banner-vue
Features:

-Optional orientation
-Optiona size
-Elements order customizable
-Transition configuration of every element.
-Configuration time.
-Possibility images or texts

Orientation
Two options for orientation: horizontal or vertical
Horizontal is the option by default.

Size
Two options for size: min or medium
Medium is the option by default.

Order
The order or sequence allows handling which element will perform animations and possiblity of add.

Transitions
Six differents transitions: 
width,height,left,top,rotate,opacity
Opacity provide perform together anyone of the others at time.

Time
Configuration of time between one animation and the next.

Images/Texts
Possibility of texts improving performance.

Template
<template>
    <div>
	<Banner :options="options"></Banner>
    </div>
</template>

Basic
...
data() {
  return {
	  options:{
	    orientation:"vertical",
	    images:[
	      [
	        "img/image1.jpg",
          "img/image2.jpg",
          "img/image3.jpg"
	      ],
	      [
	        "img/image1.png",
          "img/image2.png",
          "img/image3.png"
	      ],
	      [
	        "http://www.server/image1.jpg",
          "http://www.server/image2.jpg",
          "http://www.server/image3.jpg"
	      ]
	    ],
    }	
  }
},
....

Basic (texts)
...
options:{
    orientation:"vertical",
    texts:[
      [
	      "Regístrese ahora y obtendrá",
        "un cupón de descuento de 5€",
        "en su próxima compra"
      ],
      [
 		    "Si desea más información",
        "póngase en contacto con uno",
        "de nuestro asesores llamando al 606060606"
      ],
      [
	      "Welcome to mydomain.com",
	      "browse the different sections"
      ]
    ],
    effects:{
      1:{
	        modeText:true	
      },
      2:{
	        modeText:true
      }
      3:{
          modeText:true
      }
    }
}
...
Order && Effects
...
options:{
    orientation:"vertical",
    size:"min",
	  images:[
	    [
	      "img/image1.jpg",
        "img/image2.jpg",
        "img/image3.jpg"
	    ],
	    [
	      "img/image1.png",
        "img/image2.png",
        "img/image3.png"
	    ],
	    [
	      "http://www.server/image1.jpg",
        "http://www.server/image2.jpg",
        "http://www.server/image3.jpg"
	    ]
	  ],
    effects:{
      1:{
        opacity:true,
        width:true,
      },
      2:{
        positionTop:true
      },
      3:{
        scaleRotate:true
      }
    },
    order:{
      0:[1,3],
      1:[2],
      2:[3],
      3:[1,2,3]
	    ...
	    ...
    }
},
...

Images and texts

options:{
    orientation:"vertical",
    size:"min",
	  images:[
	    [
	      "img/image1.jpg",
        "img/image2.jpg",
        "img/image3.jpg"
	    ],
	    [
	      "img/image1.png",
        "img/image2.png",
        "img/image3.png"
	    ],
	    [
	      "http://www.server/image1.jpg",
        "http://www.server/image2.jpg",
        "http://www.server/image3.jpg"
	    ]
	],
	texts:[
	     "Welcome to mydomain.com",
	     "browse the different sections"	    
	],
  effects:{
    1:{
      opacity:true,
      width:true,
      modeText:true
    },
    2:{
      positionLeft:true	    
    },
    3:{
      opacity:true
    }
  },        
},
...

Other options

widthHTML
Property widthHTML allows assign attribute width of image can be useful some times for to reduce the image.

...
effects:{
  1:{
    opacity:true,
    width:true,
	  widthHTML:120,
  },
  2:{
    positionLeft:true
	  modeText:true,
  },
  3:{
    opacity:true
  }
},     
...

fontSizeStyle
Property fontSizeStyle allows assign one different size of font for every element. The text's option set the size
of first text of the list, so handling fontSizeStyle can be really useful.

...
effects:{
  1:{
    opacity:true,
    width:true,
  },
  2:{
    positionLeft:true
	  modeText:true,
	  fontSizeStyle:"20px",
  },
  3:{
    opacity:true
  }
}
...
