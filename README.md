# as400
curso sliders
body{
	margin: 0 !important;
    padding: 0 !important;
    font-family: 'Lato', sans-serif !important;    
    font-size: 14px !important;
    line-height: 1.5 !important;
}

.continuar {
    width: 300px;
    height: auto;
    padding: .5em;
    background-color: brown;
    border-radius: 20px;
    text-align: center;
    color: white;
    position: absolute;
    top: 240px;
    font-weight: 700;
    font-size: 1em;
    left: 35%;
    display: block;
    cursor: pointer;
    -webkit-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
}
.continuar:hover{
    background-color: white;
    color: brown;
}
.bg{
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 550px;
    z-index: -9;
}
.personaje_1{
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    left: 50px;
    width: 344px;
    height: 296px;
}
.personaje_2{
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
    right: 50px;
    width: 344px;
    height: 296px;
}
.woman1{
     background-image: url(../img/personaje_1/bien1.png);   
}
.woman2{
     background-image: url(../img/personaje_1/mal2.png);   
}
.robot1{
     background-image: url(../img/personaje_2/pose7.png); 
}
.robot2{
     background-image: url(../img/personaje_2/pose2.png); 
}
.bg-1{
    background-image: url(../img/img_intro.png);

}
.bg-2{
    background-image: url(../img/nameModule.png);

}
.bg-3{
    background-image: url(../img/background.png);

}
.bg-4{
    background-image: url(../img/despedida.jpg);

}

.row{
    margin-right: 0px !important; 
    margin-left: 0px !important;
}
.oculto{
    display: none;
}
.col-13 {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 0px;
    padding-left: 0px
}
.speech-bubble1 {
    position: absolute;
    background: linear-gradient(to bottom, #da1a1a, #fe3753);
    border-radius: .4em;
    width: 350px;
    padding: 20px;
    color: #fff !important;
}

.speech-bubble1:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #fe3753;
    border-bottom: 0;
    margin-left: -20px;
    margin-bottom: -20px;
}
.bubble1-xy-1{
    left: 100px;
    top: 70px;
}

.speech-bubble2 {
    position: absolute;
    background: linear-gradient(to bottom, #da1a1a, #fe3753);
    border-radius: .4em;
    right: 10px;
    width: 350px;
    padding: 20px;
    color: #fff !important;
}

.speech-bubble2:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-top-color: #fe3753;
    border-bottom: 0;
    margin-left: -20px;
    margin-bottom: -20px;
}

.cerrar{
    padding: 3px;
    float: right;
    border-radius: 50%;
    background-color: blue;
    color: #fff;
    margin-top: -35px;
    margin-right: -30px;
  
}
@media (min-width: 576px) {
    .col-13 {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%
    }
}
b, strong{
    font-stretch: bolder !important;
}
ul{
    padding: 0;
}
p{
    font-weight: 600;
}
.oculto{
    display: none;
}

.lr{
  right: 0;
}

.swing{
  animation: 1s infinite swing;
}

.bubble1{
    background-color: #fff;
    padding: 2%;
    position: fixed;
    top: 142px;
    left: 1000px;
    width: 350px;
    border: solid;
    border-radius: 10px;
}
.pd-t-9{
    padding-top: 9%;
}
.pd-t-3{
    padding-top: 3%;
}
.pd-l-7{
    padding-left: 7% !important;
}
.pd-lr-5{
    padding-right: 5%;
    padding-left: 5%;
}
.TituloIn{
    padding-top: 10px;
    padding-left: 45px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 1px 0 rgba(0, 0, 0, 0.4);
    background-color: #ccc;
    height: 60px;
}

.instruccion p{
    color:#fff !important;
    font-weight: 700;    
}

.mtop-10{
	margin-top: -10px;
}
.espacio15{
	margin-top: 15px;
}
.espacio20{
    margin-top: 20px;
}
.espacio5{
	margin-top: 5px;
}
.instruccion{
    padding: 10px;
    padding-bottom: 3px;
    background-color: #8bb176;
    text-align: center;
    border-radius: 20px;
}
.posicion-close1{
    position: absolute;
    top: -29px;
    left: 320px;
}
.closebtn{  
    padding: 2px;
    border: solid 2px #fff;
    background-color: #00000000;
    color: #fff;   
    z-index: 999;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 30px;
    font-size: 25px;
    font-weight: 800;
}
.closebtn2{  
    padding: 2px;
    border: solid 2px #fff;
    background-color: #ff7900;
    color: #fff;   
    z-index: 999;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 30px;
    font-size: 25px;
    font-weight: 800;
}
.inforPopUp{
    background-color: #0c132314;
    z-index: 999;
    position: absolute !important;
    top: 0;
    height: 550px;
    padding: 15% !important;
    color: #fff;
}
.inforPopUpImg{
    background-color: #0c1323e0;
    z-index: 999;
    position: absolute !important;
    top: 0;
    height: 550px;
    padding: 2px !important;
    color: #fff;
}
/*@keyframes pound {
    to { transform: scale(1.1); }
}

.scale-btn{
    animation: pound .5s infinite alternate;
}*/

.centrarM{
      margin: 0 auto;
}
.popUpInfo{
    background-color: #8e206a;
    padding: 25px;
    border-radius: 20px;
    box-shadow: aqua;
    -webkit-box-shadow: -4px 11px 41px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -4px 11px 41px -8px rgba(0,0,0,0.75);
    box-shadow: -4px 11px 41px -8px rgba(0,0,0,0.75);
}
.popUpInfo2{
       margin-top: 5%;
    box-shadow: aqua;
    -webkit-box-shadow: -4px 11px 41px -8px rgba(0,0,0,0.75);
    -moz-box-shadow: -4px 11px 41px -8px rgba(0,0,0,0.75);
    box-shadow: -4px 11px 41px -8px rgba(0,0,0,0.75);
}
