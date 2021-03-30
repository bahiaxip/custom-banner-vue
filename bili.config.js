//import vue from 'rollup-plugin-vue'
module.exports={
	
	banner:true,
	output:{
		extractCSS:false,
		//libraryExport:'default'
	},
	plugins:{
		vue:{
			css:true
		}
	}
};