
import Banner from "./Banner.vue";

export default {
	install(Vue,options){
		//registramos componente globalmente
		Vue.component("banner",Banner);			
	}
};
