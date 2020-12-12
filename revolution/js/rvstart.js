
var	revapi1,
	tpj;
jQuery(function() {
	tpj = jQuery;

	/* Home */
	if(tpj("#rev_slider_1_1").length){
		revapi1 = tpj("#rev_slider_1_1").show().revolution({
			sliderType:"standard",
			sliderLayout:"fullwidth",
			delay:9000,
			navigation: {
				arrows:{
					enable:false
				},
				bullets: {
					enable:true,
					hide_onleave:false,
					h_align:"center",
					space:10,
					direction:"horizontal",
					h_offset:0,
					v_offset:0
				}
			},
			responsiveLevels: [1240, 1024, 768, 480],
			gridwidth:[1200, 1024, 768, 480],
			gridheight:[950, 800, 600, 500],
			disableProgressBar:"on"
		});
	}

	/* Home 02 */
	if(tpj("#rev_slider_2_1").length){
		revapi1 = tpj("#rev_slider_2_1").show().revolution({
			sliderType:"standard",
			sliderLayout:"fullwidth",
			delay:9000,
			navigation: {
				arrows:{
					enable:true,
					hide_onleave:false,
					left : {
						h_offset:30
					},
					right : {
						h_offset:30
					}
				},
				bullets: {
					enable:true,
					hide_onleave:false,
					h_align:"center",
					space:10,
					direction:"horizontal",
					h_offset:0,
					v_offset:0
				}
			},
			responsiveLevels: [1240, 1024, 768, 480],
			gridwidth:[1200, 1024, 768, 480],
			gridheight:[880, 800, 600, 500],
			disableProgressBar:"on"
		});
	}

	/* Home 03 */
	if(tpj("#rev_slider_3_1").length){
		revapi1 = tpj("#rev_slider_3_1").show().revolution({
			sliderType:"standard",
			sliderLayout:"fullwidth",
			delay:9000,
			navigation: {
				arrows:{
					enable:true,
					hide_onleave:false,
					left : {
						h_offset:30
					},
					right : {
						h_offset:30
					}
				},
				bullets: {
					enable:false
				}
			},
			responsiveLevels: [1240, 1024, 768, 480],
			gridwidth:[1200, 1024, 768, 480],
			gridheight:[945, 800, 600, 500],
			disableProgressBar:"on"
		});
	}


});