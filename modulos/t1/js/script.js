var arrayUl = "";
var titulo = ["<h2>Titulo 1</h2>","<h2>Titulo 2</h2>", "<h2>Titulo 3</h2>", "<h2>Titulo 4</h2>", "<h2>Titulo 5</h2>"];
var pantallas =[
				{caso:0, img:"<img src='img/p1.png'>"},
				{caso:1, img:"<img src='img/p2.png'>"},
				{caso:0, img:"<img src='img/p3.png'>"},
				{caso:1, img:"<img src='img/p4.png'>"},
				{caso:1, img:"<img src='img/p5.png'>"}
				];
var info = [	"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, maiores alias soluta? Distinctio, corporis libero a optio iusto accusantium ex eveniet consequuntur.</p>",
				"<h4 style='color:#378981'>Retiro</h4><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, maiores alias soluta? Distinctio, corporis libero a optio iusto accusantium ex eveniet consequuntur.</p>",
				"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, maiores alias soluta? Distinctio, corporis libero a optio iusto accusantium ex eveniet consequuntur.</p>",
				"<h4 style='color:#378981'>Retiro</h4><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, maiores alias soluta? Distinctio, corporis libero a optio iusto accusantium ex eveniet consequuntur.</p>",
				"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, maiores alias soluta? Distinctio, corporis libero a optio iusto accusantium ex eveniet consequuntur.</p>",
				"<h4 style='color:#378981'>Retiro</h4><br><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, maiores alias soluta? Distinctio, corporis libero a optio iusto accusantium ex eveniet consequuntur.</p>"
			];

$(function() {
	var mutacion = pantallas;
	for(var i = 0; i <= pantallas.length -1; i++)
	{
		j = i;				
		//debugger
		arrayUl += "<li id='tema_" + j + "'><div class='bg'></div><div class='row'><div class='col-13'><div class='TituloIn' id='titulo_" + j +"'></div></div><div><div class='row'><div class='pantallas_" + j +"'></div><div class='personaje_"+ mutacion[i].caso +"'></div><div class='personaje_2'></div><div class='speech-bubble1'><div class='wow bounceIn cerrar' data-wow-delay='3s'><i class='fas fa-times-circle fa-2x'></i></div><div class='bocadillo_" + j +"'></div> </div><div class='oculto vermas_" + j +"'></div></div></div></li>";
		
	};
	$("#itemContainer").append(arrayUl);

});
$(function() {
	for(var i = 0; i < pantallas.length; i++)
		{	
			console.log(i);

			$("#titulo_" + i).html(titulo[i]);
			$(".pantallas_" + i).html(pantallas[i].img);
			$(".bocadillo_" + i).html(info[i]);			
			switch(pantallas[i].caso) {
				case 0: 
					$(".bg").addClass("bg-1");
					$(".personaje_1").addClass("woman1");
					$(".personaje_2").addClass("robot1");
					//document.getElementsByClassName('personaje_0');
					//document.getElementById('btn_continuar').style.setProperty('--display', 'none')
					break;
				case 1: 
					$(".continuar").addClass("cont-con");
					$(".continuar").removeClass("cont-sin");
					$(".personaje_1").addClass("woman2");
					
					console.log("y entonces");
					break;						
			}
			/*if(pantallas[0] || pantallas[1] ){
				$(".continuar").addClass("cont-sin");
					$(".continuar").removeClass("cont-con");
					$(".bg").addClass("bg-1");
					$(".personaje_1").addClass("woman1");
					$(".personaje_1").removeClass("woman2");
					$(".personaje_2").addClass("robot1");
					console.log('estoy en default')
				}else{
					$(".continuar").addClass("cont-con");
					$(".continuar").removeClass("cont-sin");
					$(".personaje_1").addClass("woman2");
					$(".personaje_1").removeClass("woman1");
					console.log("y entonces")
				}*/					
		};	
});


/* $(".arrowPrev").click(function(event) 
        {   
            });
    $(".arrowNext").click(function(event) 
        {   
        });*/
