<template>
	<div class="bh_banner"  :class="[
			main[mainString.confString].orientation=='vertical' ? 'bh_banner_vertical':'bh_banner_horizontal'
			,
				main[mainString.confString].size=='min' ? 'min':'medium'
				,
				main[mainString.confString].display=='flex' ? 'flex':''
			]">
		<div :ref="main[mainString.refString].parentsDivsString[0]" class="div_banner" :class="main[mainString.confString].size=='min' ? 'min':'medium'" >
			<img :src="main[mainString.tmpString][1].selected" :width="main[mainString.bannerString][1].widthHTML"  :ref="main[mainString.refString].refsString[0]" class="img_banner" v-if="!main[mainString.bannerString][1].modeText"/>
			<p class="text_banner text1" :ref="main[mainString.refString].refsString[0]" v-else >{{main[mainString.tmpString][1].selected}}</p>
		</div>
		<div :ref="main[mainString.refString].parentsDivsString[1]"  class="div_banner" :class="main[mainString.confString].size=='min' ? 'min':'medium'">
			<img :src="main[mainString.tmpString][2].selected" :width="main[mainString.bannerString][2].widthHTML" :ref="main[mainString.refString].refsString[1]" class="img_banner" v-if="!main[mainString.bannerString][2].modeText"/>
			<p class="text_banner font_zerogirl" :ref="main[mainString.refString].refsString[1]" v-else>{{main[mainString.tmpString][2].selected}}</p>
		</div>
		<div :ref="main[mainString.refString].parentsDivsString[2]" class="div_banner" :class="main[mainString.confString].size=='min' ? 'min':'medium'">
			<img :src="main[mainString.tmpString][3].selected" :width="main[mainString.bannerString][3].widthHTML"  :ref="main[mainString.refString].refsString[2]" class="img_banner" v-if="!main[mainString.bannerString][3].modeText"/>
			<p class="text_banner" :ref="main[mainString.refString].refsString[2]" v-else>{{main[mainString.tmpString][3].selected}}</p>
		</div>		
	</div>
</template>
<script>
export default {
	name: 'Banner',
	props:['options'],
	data(){
		return {
					
			bhBannerConf:{			
				modeText:false,
				orientation:"horizontal",				
				fontSizeDefault:"16px",
				size:null,
				display:"flex",
				time:null,
				order:{
		
					0:[1],
					//0:[{state:true,type:},{},{}]
					1:[3],
					2:[1,3],					
					3:[1,2,3],
					4:[2]
				},
				imagesBanner:[
					//images element 1
					[
						"https://cdn.pixabay.com/photo/2017/02/20/17/47/icon-2083456_960_720.png",
						"https://cdn.pixabay.com/photo/2013/07/13/10/11/qr-code-156717_960_720.png"

					],
					//images element 2
					[
						"https://cdn.pixabay.com/photo/2017/11/15/06/31/black-2951013_960_720.png",
						"https://cdn.pixabay.com/photo/2016/03/22/04/23/map-1272165_960_720.png"
					],
					//images element 3
					[
						"https://cdn.pixabay.com/photo/2019/06/27/13/10/selfie-4302321_960_720.jpg",
						"https://cdn.pixabay.com/photo/2015/08/13/19/39/children-887393_960_720.jpg",
						"https://cdn.pixabay.com/photo/2020/07/16/21/10/asian-5412358_960_720.jpg"
					]
				],
				textsBanner:[
					//texts element 1
					[
						"Regístrate con tu correo",
						"Sube tus imágenes...",
						"...descárgalas donde quieras",
					],
					//texts element 2
					[
						"Cambia las dimensiones de tu imagen",
						"Recorta tu imagen fácilmente",
						"Múltiples efectos"
					],
					//texts element 3
					[
						"Descuentos de hasta el 50%",
						"Envíos gratis desde 25€"
					]
				],
			},
	
			bhBannerOptions:{
			//opciones del primer elemento del banner (1/3)
				1:{					
					opacity:false,					
					trans:{						
						width:false,
						height:false,						
						fontSize:false,
						left:false,
						top:false,						
						rotate:true,			
					},					
					fontSizeStyle:null,
					modeText:false,
					widthHTML:null,
				},
			//opciones del segundo elemento del banner  (2/3)
				2:{
					opacity:false,					
					trans:{
						width:false,
						height:false,						
						fontSize:false,
						left:false,
						top:true,						
						rotate:false,
					},					
					fontSizeStyle:null,
					modeText:false,
					widthHTML:null,
				},
			//opciones del tercer elemento del banner (3/3)
				3:{
					opacity:true,			
					trans:{
						width:false,
						height:false,						
						fontSize:false,
						left:false,
						top:false,						
						rotate:false,
					},					
					fontSizeStyle:null,
					modeText:false,
					widthHTML:null,
				}
			},		
			
			tmpBhBanner:{
				1:{
					type:null,
					selected:null,
					index:0,
					list:null,
					fontSize:null,
				},
				2:{
					type:null,
					selected:null,
					index:0,
					list:null,
					fontSize:null,
				},
				3:{
					type:null,
					selected:null,
					index:0,
					list:null,
					fontSize:null,
				},
				listOrder:null,
				counter:0,				
			},			
			refBhBanner:{								
				parentsDivsString:[
					'div_banner1',
					'div_banner2',
					'div_banner3'
				],
				refsString:[
					'nodeRef1',
					'nodeRef2',
					'nodeRef3'
				],				
				confObject:'bhConfBanner',
				//ref
				refObject:'bhRefBanner',
				//banner
				optionsObject: 'bhOptionsBanner',				
				//tmpBanner
				tmpObject: 'bhTmpBanner',
				divParentRef:{
					1:null,
					2:null,
					3:null,
				},

				nodeRef:{
					1:null,
					2:null,
					3:null,	
				},
				interval:null,				
			},
			main:null,			
			mainString:null,
			
		}
	},
	created(){		
		if(this.options)			
			for(let i=0;i<this.refBhBanner.parentsDivsString.length;i++){
				this.refBhBanner.parentsDivsString[i]=(Math.floor(Math.random()*1000000)+1).toString();
				this.refBhBanner.refsString[i]=(Math.floor(Math.random()*1000000)+1).toString();
			}

		let main=this.setDataMain(this.options);	
		console.log("main: es: ",this.bhBannerConf)
		this.mainString=main;
		this.main={};
		this.main[main.confString]=this.bhBannerConf;
		this.main[main.refString]=this.refBhBanner;
		this.main[main.bannerString]=this.bhBannerOptions;
		this.main[main.tmpString]=this.tmpBhBanner;
		
		if(this.options){
			this.testAndSetTimeAndResponsive(this.options,this.main[main.confString]);
			this.testOrientationAndNodes(this.options,this.main[main.confString],this.main[main.bannerString]);			
			this.setOrderAnimations(this.options,this.main[main.confString]);
			this.setEffects(this.options,this.main[main.bannerString]);
			
		}		
	},

	mounted(){
		this.setRefs(this.main[this.mainString.refString],this.main[this.mainString.confString],this.main[this.mainString.tmpString],this.main[this.mainString.bannerString]);
	
		this.interval_animationbanner(this.main[this.mainString.tmpString],this.main[this.mainString.confString],this.main[this.mainString.refString],this.main[this.mainString.bannerString]);
	},
	destroyed(){		
		clearInterval(this.main[this.mainString.refString].interval);
	},
	methods:{		
		testAndSetEffect(option,effects){
			let effectsList=["width","height","left","top","rotate"];
			if(option.modeText)
				effectsList.push("fontSize");	

			for(let i=0;i<effectsList.length;i++){
				let effectSelected=this.setTransFromOptions(option[effectsList[i]]);

				if(effectSelected===false || effectSelected ===true)				
					effectsList.forEach((typeString) => {
						effects.trans[typeString]=false;
					})								
				if(effectSelected===true){
					effects.trans[effectsList[i]]=true;
					break;
				}
			}
		},

		setEffects(options,effects){			
			if(options.effects){
				for(let i=1;i<4;i++){
					if(options.effects[i]){					
						if(options.effects[i].opacity){						
							effects[i].opacity=true;
						
						}else if(options.effects[i].opacity===false){
							effects[i].opacity=false;					
						}						
						this.testAndSetEffect(options.effects[i],effects[i])
					}					
				}				
			}
		},

		setOrderAnimations(options,conf){			
			if(options.order){
				let order={};
				for(let i=0;i<Object.keys(options.order).length;i++){					
					if(options.order[i] && options.order[i].length>0 && options.order[i].length<4){				
						var resultOrders=options.order[i].every((order)=> {
							return (order===1||order===2||order===3||order==="1"||order==="2"||order==="3");
						})
						
						if(!resultOrders){
							console.warn("La configuración en order no es correcta");
							break;
						}						
						order[i]=options.order[i];
					}
				}				
				if(Object.keys(order).length>0)
					conf.order=order;		
			}
		},
		testAndSetTimeAndResponsive(options,conf){
			console.log(options);
			//tiempo por defecto
			let time = 4000;
			//si se ha establecido la opción de tiempo asignamos comprobando que sea entero
			if(options.time && !isNaN(options.time) == true)
				time=options.time * 1000;
			else
				//si no es entero mostramos warning en consola
				console.warn("El valor de tiempo no es un valor numérico")
			//establecemos tiemop de intervalo de imágenes global
			conf.time=time;
			//si se ha establecido el valor de responsive en true establecemos la opción a "flex"
			conf.display = (options.responsive) ?  'flex':'';
				

		},
		testOrientationAndNodes(options,conf,banner){		
			if(options.orientation){				
				if(options.orientation !=="vertical" && options.orientation !=="horizontal"){
					console.warn("Error orientation: horizontal o vertical");
					return;
				}				
				conf.orientation=options.orientation				
			}
			
			if(options.size && options.size==="medium" ||
				options.size && options.size==="min"){
				conf.size=options.size;			
			}
			
			if(options.fontSizeDefault){
				let font=options.fontSizeDefault;
				if(typeof(options.fontSizeDefault)=="number")
					font=font+"px";				
				conf.fontSizeDefault=font;				
			}
		
			if(options.images && options.images.length>0  || options.texts && options.texts.length>0){

				let opEffects;
				if(options.effects){
					opEffects=options.effects;
				}
				for(let i=1;i<4;i++){
					if(opEffects && opEffects[i] && opEffects[i].modeText){							
						//textos							
						banner[i].modeText=true;
						
						if(options.texts && options.texts[i-1] && options.texts[i-1].length>0){
							
							let testArray=this.testStringArray(options.texts[i-1]);
							if(!testArray){
								console.warn("texts debe ser un array de tipo cadena");
							}
					
							if(options.effects[i].fontSizeStyle){
								let font=options.effects[i].fontSizeStyle;								
								if(typeof(font)==="number"){	
									font=font+"px";
								}										
								banner[i].fontSizeStyle=font;
							}									
								//se asignan textos del elemento
								conf.textsBanner[i-1]=options.texts[i-1];
						}else{
							console.warn("El modo texto está activado pero no se han encontrado textos")
						}								
						//imágenes
					}else{						
						if(options.images && options.images[i-1] && options.images[i-1].length>0){

							let testArray=this.testStringArray(options.images[i-1]);
							
							if(!testArray){
								console.warn("texts debe ser un array de tipo cadena");
							}							
							if(opEffects && opEffects[i] && opEffects[i].widthHTML)
								banner[i].widthHTML=opEffects[i].widthHTML;
							conf.imagesBanner[i-1]=options.images[i-1];
						}else{

							console.info("No se han detectado imágenes, se establecerán la imágenes por defecto")
						}
					}
				}
			}
		},
		
		testStringArray(arr){
			var result=arr.every((pathImage) =>{
				return typeof(pathImage)==="string";
			})
			return result;
		},
		
		setDataMain(options){			
			let confString,refString,bannerString,tmpString;
			
			if(options){										
				let confObjectString="bhBanner_"+(Math.floor(Math.random()*1000000)+1);
				confString=confObjectString;					
				let refObjectString="bhBanner_"+(Math.floor(Math.random()*1000000)+1);				
				refString=refObjectString;				
				let transObjectString="bhBanner_"+(Math.floor(Math.random()*1000000)+1);		
				bannerString=transObjectString;				
				let tmpObjString="bhBanner_"+(Math.floor(Math.random()*1000000)+1);
				tmpString=tmpObjString;
			}else{				
				confString=this.refBhBanner.confObject;								
				refString=this.refBhBanner.refObject;
				bannerString=this.refBhBanner.optionsObject;
				tmpString=this.refBhBanner.tmpObject;
			}
			return {confString,refString,bannerString,tmpString};

		},
		
		setTransToFalse(bannerTrans){
			bannerTrans.width=false;
			bannerTrans.height=false;
			bannerTrans.left=false;
			bannerTrans.top=false;		
			bannerTrans.rotate=false;
		},		
		setTransFromOptions(transType){
			if(transType && transType===true)
				return true;
			else if(transType===false)
				return false;
			else
				return;
		},
		setSizeByOrientation(divParent,orientation){
			if(orientation=="horizontal"){
					divParent.style.width=divParent.clientWidth+"px";
		
			}else if(orientation=="vertical"){					
				divParent.style.height=divParent.clientHeight+"px";
			}
		},
	
		setRefs(refObject,conf,tmp,banner){			
			for(let i=0;i<refObject.parentsDivsString.length;i++){
				const num=i+1;		
				refObject.divParentRef[num]=this.$refs[refObject.parentsDivsString[i]];
				refObject.nodeRef[num]=this.$refs[refObject.refsString[i]];
				this.setListByType(tmp,num,conf,banner);				
				tmp[num].selected=tmp[num].list[tmp[num].index];
				this.initStylesFirstTime(refObject.nodeRef[num],banner[num],conf,tmp[num]);
				this.setSizeByOrientation(refObject.divParentRef[num],conf.orientation);
			}			
		},
		setListByType(tmp,num,conf,banner){
			if(banner[num].modeText===true)
				tmp[num].list=conf.textsBanner[num-1]
			else
				tmp[num].list=conf.imagesBanner[num-1]			
		},	
	
		initStylesFirstTime(bannerRef,effects,conf,tmp){
			if(conf.size){
				//
			}
			console.log("firsttime: ",conf)
			let tmpFont;
			let fontSizeCSS=window.getComputedStyle(bannerRef,null).getPropertyValue("font-size");
			if(effects.fontSizeStyle)
				tmpFont=effects.fontSizeStyle			
			else if(bannerRef.style.fontSize)				
				tmpFont=bannerRef.style.fontSize				
			else if(fontSizeCSS)
				tmpFont=fontSizeCSS						
			else				
				tmpFont=conf.fontSizeDefault

			tmp.fontSize=tmpFont;
			bannerRef.style.fontSize=tmpFont;
			
			if(effects.trans.left)				
				bannerRef.style.left="0px";			
			else if(effects.trans.width){
				if(bannerRef.width)
					bannerRef.style.width=bannerRef.width+'px';
				else
					bannerRef.style.width="100%";
			}else if(effects.trans.fontSize){
				if(effects.modeText){					
					bannerRef.style.fontSize=tmpFont;
				}else{					
					console.info("Propiedad fontSize requiere declarar la propiedad modeText como true");
				}
			}
			else if(effects.trans.height){									
				bannerRef.style.height=bannerRef.parentNode.clientHeight+"px";
			}			
			else if(effects.trans.top)
				bannerRef.style.top="0px";

		},

		interval_animationbanner(tmp,main,ref,bannerConf){
	
			tmp.listOrder=Object.keys(main.order);
			if(tmp.listOrder.length<=0)
				return;
			//establecemos valor 4000 por defecto, en caso de no asignar opciones
			let intervalTime = 4000;
			console.log("main_time: ",this.bhBannerConf)
			if(main.time){
				intervalTime = main.time;
			}
			ref.interval=setInterval(()=>{				
				if(tmp.counter==tmp.listOrder.length)	{
					tmp.counter=0;
				}				
				let matchElement=tmp.listOrder.find(element=> element==tmp.counter);				
				let list=main.order[matchElement];
				if(!matchElement){					
					return;
				}
				let time=100;
				let time2=700;				
					
				setTimeout(()=> {					
					this.hideAnimation(list,tmp,bannerConf,ref);
				},time)

				setTimeout(()=> {					
					this.showAnimation(list,tmp,bannerConf,ref);
				},time2)
				tmp.counter++;
			},intervalTime)
		},
		
		hideAnimation(list,tmp,bannerConf,ref){		
			if(list.indexOf(1)!=-1){
				this.initAnimation('1','hide',tmp,bannerConf,ref);
			}			
			if(list.indexOf(2)!=-1){
				this.initAnimation('2','hide',tmp,bannerConf,ref);
			}
			if(list.indexOf(3)!=-1){
				this.initAnimation('3','hide',tmp,bannerConf,ref);
			}
		},
		initAnimation(num,type,tmp,bannerConf,ref){
			
			let banner,bannerRef,list;
			if(num==1 || num==2 || num==3){
				
				banner=bannerConf[num];				
				bannerRef=ref.nodeRef[num];				
				list=tmp[num].list;
				if(type=="show"){				
					if(tmp[num].index==0 && list.length>1)
						tmp[num].index=1;					
					else if(list.length==tmp[num].index)
						tmp[num].index=0;				
					tmp[num].selected=list[tmp[num].index];
					tmp[num].index=tmp[num].index+1;
				}
			}
		
			if(type=="hide"){		
				if(banner.opacity)
					bannerRef.style.opacity="0";				
				if(banner.trans.width)					
					bannerRef.style.transform="scale(0,1)";
				else if(banner.trans.height){					
					bannerRef.style.transform="scale(1,0)";
				}else if(banner.trans.top)					
					bannerRef.style.top="-150px";
				else if(banner.trans.left){					
					bannerRef.style.left="-300px";					
				}
				else if(banner.trans.rotate)
					bannerRef.style.transform="scale(0) rotate(360deg)";
				else if(banner.trans.fontSize){
					if(banner.modeText)
						bannerRef.style.fontSize="0";
					else
						console.info("Propiedad fontSize requiere declara la propiedad modeText como true");
				}

		//mostrar
			}else if(type=="show"){			
				if(banner.opacity)
					bannerRef.style.opacity="1";
				if(banner.trans.width){
					bannerRef.style.transform="scale(1,1)";					
				}
				else if(banner.trans.height){					
					bannerRef.style.transform="scale(1,1)";
				}
				else if(banner.trans.top)
					bannerRef.style.top="0px";
				else if(banner.trans.left)
					bannerRef.style.left="0px";				
				else if(banner.trans.rotate)
					bannerRef.style.transform="scale(1) rotate(0deg)"
				else if(banner.trans.fontSize){
					if(banner.modeText){
						bannerRef.style.fontSize=tmp[num].fontSize
					}
				}
			}
			banner=null,
			bannerRef=null,
			list=null;
		},		
		showAnimation(list,tmp,bannerConf,ref){
			//mostrar animación 
			if(list.indexOf(1)!=-1){
				this.initAnimation('1','show',tmp,bannerConf,ref);		
			}			
			if(list.indexOf(2)!=-1){
				this.initAnimation('2','show',tmp,bannerConf,ref);
			}
			if(list.indexOf(3)!=-1){
				this.initAnimation('3','show',tmp,bannerConf,ref);
			}
		},
	}
}
</script>
<style>
/*@import '../assets/css/bh_banner.css';*/
.bh_banner{
    /*width:80%;*/
    /*width:300px;*/
    margin:10px auto;
    border-radius:20px;
    background-color:rgba(0,0,0,.8);
    color:white;
    padding:10px;
    position:relative;
    z-index:10;
    text-align:center;
    box-sizing:border-box;
}
.bh_banner_vertical{

}
.bh_banner_vertical.medium{
    width:200px;
    min-height:550px;
}
.bh_banner_vertical.min{
    width:150px;
    min-height:450px;
}
.bh_banner_horizontal{
    display:inline-block;
}
.bh_banner_horizontal.medium{
    min-width:800px;        
    height:150px;
}
/*responsive: true*/
.bh_banner_horizontal.medium.flex{
	justify-content:space-around;
	display:flex;
	min-width:unset;
	max-width:800px;
	width:100%;
}
.bh_banner_horizontal.min{
    min-width:550px;
    height:120px;    
}
/*responsive: true*/
.bh_banner_horizontal.min.flex{
    justify-content:space-around;
	display:flex;
	max-width:550px;
	width:100%;
}
.div_banner{
    overflow:hidden;    
}
.bh_banner_horizontal .div_banner{
    align-items:center !important;
    vertical-align: middle;
    display:inline-flex;
    margin:auto 10px;
}
.bh_banner_horizontal .div_banner.medium{    
    min-width:230px;
    height:130px;
}
.bh_banner_horizontal.medium.flex .div_banner.medium,
.bh_banner_horizontal.medium.flex .div_banner.min{
	min-width:80px;
	width:100% !important;
} 
.bh_banner_horizontal .div_banner.min{
    min-width:150px;
    height:100px;
}
.bh_banner_vertical .div_banner.medium{
    min-height:180px;
}
.bh_banner_vertical .div_banner.min{
    min-height:130px;
}
.bh_banner_vertical .div_banner{
    align-items:center !important;    
    vertical-align: middle;    
    display:inline-flex;
}
.bh_banner_horizontal .text_banner{
    line-height:30px;
    margin: 10px auto;
}
.bh_banner_vertical .text_banner{
    line-height:40px;
}
.text_banner{ 
    color:white;    
    font-size:null;
    letter-spacing: 1px;
    position:relative;
    transition:all 0.6s linear;    
}
.img_banner{
	max-width:100%;
    max-height:100%;        
    margin:auto;
    position:relative;
    transition:all 0.6s linear;
}
.text1{    
    font-size:18px;
}
</style>