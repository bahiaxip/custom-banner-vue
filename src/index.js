import Banner from "./Banner.vue";

//con default permitimos crear componente de forma global desde main.js o similar
// con Vue.use(....)
export default {	
//const customBanner = {
	install(Vue,options){
		// Let's register our component globally
		// https://vuejs.org/v2/guide/components-registration.html
		Vue.component("custom-banner",Banner);
	}
};

//Automatic installation if Vue has been added to the global scope.
/*
if(typeof window !=='undefined' &&  window.Vue){
	window.Vue.use(customBanner);
}
*/

//con este export permito crear componente localmente en un componente individual
export { Banner }


