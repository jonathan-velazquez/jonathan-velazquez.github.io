var app = {
	ready: function(){
		$(document).ready(function(){
			app.render();
		});
	},

	win: {
		load: function(){

		},

		scroll: function(){

		}
	},

	render: function(){
		app.components.brokenlinks();
		app.components.nav.toggle();
	},

	components: {
		brokenlinks: function(){
			$('a[href="#"]').click(function(i){
				i.preventDefault();
			});
		},
	}
}
app.ready();