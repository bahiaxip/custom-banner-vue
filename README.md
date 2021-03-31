# custom-banner-vue

## Features:

* Optional orientation
* Optional size
* Customizable Elements order 
* Transition's configuration of every element.
* Time settings.
* Optional images or texts

* Orientation
  * Two options for orientation: horizontal or vertical
  * Horizontal is the option by default.

* Size
  * Two options for size: min or medium
  * Medium is the option by default.

* Order
  * The order or sequence allows handling which element will perform animations and possiblity of add new animations.

* Transitions
  * Six differents transitions: 
    * width,height,left,top,rotate,opacity.

  * Opacity provide perform together anyone of the others at time.

* Time
  * Configuration of time between one animation and the next.

* Images/Texts
  * Possibility of texts improving performance.

## Install
```console
npm install custom-banner-vue
```

## Import globally

```console
import CustomBanner from 'custom-banner-vue'

Vue.use(CustomBannerVue)
```
## Import locally
  
```console
import { CustomBannerVue } from 'custom-banner-vue'
```


* Configuration

**Template**
```javascript
<template>
    <div>
	<custom-banner-vue :options="options"></custom-banner-vue>
    </div>
</template>
```

**Basic**
```javascript
...
data() {
  return {
    options:{
      orientation:"horizontal",
      images:[
      //folder public
        [
	        "img/image1.jpg",
          "img/image2.jpg",
          "img/image3.jpg"
        ],
      //folder assets  
        [
          require("@/assets/img/image1.jpg"),
          require("@/assets/img/image2.jpg"),
          require("@/assets/img/image3.png")
        ],
      //absolute path
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
```

**Basic (texts)**
```javascript
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
    },
    3:{
      modeText:true
    }
  }
}
...
```

**Order && Effects**
```javascript
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
```

**Images and texts**
```javascript
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
    [
      "Welcome to mydomain.com",
      "browse the different sections"     
    ],
    [],
    []    
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
```

**Other options**

  * widthHTML
    * Property widthHTML allows assign attribute width of image can be useful some times for to reduce the image or keep dimensions for width effect.
```javascript
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
```
  * fontSizeStyle
    * Property fontSizeStyle allows assign one different size of font for every element. The text's option set the size
of first text of the list by default, so handling fontSizeStyle can be really useful.
```javascript
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
```
## License
custom-banner-vue is released under MIT license
