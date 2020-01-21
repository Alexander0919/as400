$(function() {
	
	for(var i = 0; i <= 3; i++) 
	{
		$("#btn_" + i).click(function(event) 
			{				
				var ind = event.target.id.split("_");
				$(this).css("opacity", ".2");
				$(this).addClass("desactivar");	
							
			});
	};
	$('.cerrar').css("cursor","pointer");      	
      $( ".cerrar" ).click(function() {
          $("#cierre-modulo").hide(1000);
      });
      
	
});





