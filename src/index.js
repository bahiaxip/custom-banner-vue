import CustomBannerVue from "./Banner.vue";

//con default permitimos crear componente de forma global desde main.js o similar
// con Vue.use(....)
export default {	
//const customBanner = {
	install(Vue,options){

		//para otros casos revisar documentación:
		//https://es.vuejs.org/v2/guide/plugins.html
		//const { customOptions } = options;
		
		// Let's register our component globally
		// https://vuejs.org/v2/guide/components-registration.html
		Vue.component("custom-banner-vue",CustomBannerVue);
	}

};

//la siguiente condición  permite llamar al método de instalación automáticamente,
//sin embargo, parece que no funciona con plugins que no sean oficiales según 
//documentación oficial:
//https://es.vuejs.org/v2/guide/plugins.html
//Indica que se debe llamar a Vue.use explicitamente, por tanto, esto serviría para 
//plugins oficiales de Vuejs como vue-router

//Automatic installation if Vue has been added to the global scope.
/*
if(typeof window !=='undefined' &&  window.Vue){
	window.Vue.use(customBanner);
}
*/

//con este export permito crear componente localmente en un componente individual
export { CustomBannerVue }


