

////////LOOPS/////////



var $btnTuto = $("#btnTuto"),
    $btnTest = $("#btnTest");


var btns = new TimelineMax({ repeat: -1 });
btns.from($btnTuto, 1, { color: "white", ease: Elastic.easeOut.config(1, 0.75), y: 10 })
    .to($btnTuto, 1, { color: "white", ease: Elastic.easeOut.config(1, 0.75), y: 10 })
    .from($btnTest, 1, { color: "white", ease: Elastic.easeOut.config(1, 0.75), y: 10 })
    .to($btnTest, 1, { color: "white", ease: Elastic.easeOut.config(1, 0.75), y: 10 })

function btns() {
    btns.play();
}

$('.estado1').hide();
$('.estado2').hide();
$('.estado3').hide();
$('.estado4').hide();
$('.estado5').hide();
$('.estado6').hide();
$('.estado7').hide();

function estado1() {
    $('.estado1').show();
    console.log("tema visto");
}

function estado2() {
    $('.estado2').show();
    console.log("tema visto");
}

function estado3() {
    $('.estado3').show();
    console.log("tema visto");
}

function estado4() {
    $('.estado4').show();
    console.log("tema visto");
}

function estado5() {
    $('.estado5').show();
    console.log("tema visto");
}

function estado6() {
    $('.estado6').show();
    console.log("tema visto");
}

function estado7() {
    $('.estado7').show();
    console.log("tema visto");
    //setCookie("btnNext_as400",true,30);
}
function btnNext() {
    ///alert("Hello! fix it!!");
    setCookie("btnNext_as400", true, 30);
    //codigo// 
}



////////LOOPS/////////



var $btnTuto = $("#btnTuto"),
    $btnTest = $("#btnTest"),
    $mujer1 = $("#mujer1"),
    $mujer2 = $('#mujer2'),
    $mujer3 = $("#mujer3"),
    $hombre3 = $("#hombre3"),
    $chat1 = $("#chat1"),
    $chat2 = $("#chat2"),
    $chat3 = $("#chat3"),
    $chat4 = $("#chat4");


var btns = new TimelineMax({ repeat: -1 });
btns.from($btnTuto, 1, { color: "white", ease: Elastic.easeOut.config(1, 0.75), y: 10 })
    .to($btnTuto, 1, { color: "white", ease: Elastic.easeOut.config(1, 0.75), y: 10 })
    .from($btnTest, 1, { color: "white", ease: Elastic.easeOut.config(1, 0.75), y: 10 })
    .to($btnTest, 1, { color: "white", ease: Elastic.easeOut.config(1, 0.75), y: 10 })

function btns() {
    btns.play();
}


var chat1 = new TimelineMax();
chat1.from($mujer1, 1, { scale: .2, opacity: 0, x: "-400", delay: 1 })
    .from($chat1, 1, { scale: .2, opacity: 0, ease: Elastic.easeOut.config(1, 0.3), y: -100 })


function c1() {
    chat1.restart();
    chat1.play();
}

var chat2 = new TimelineMax();
chat2.from($mujer2, 1, { scale: .2, opacity: 0, x: "-400", delay: 1 })
    .from($chat2, 1, { scale: .2, opacity: 0, ease: Elastic.easeOut.config(1, 0.3), y: -100 })

chat2.stop();

function c2() {
    chat2.restart();
    chat2.play();
}

var chat3 = new TimelineMax();
chat3.from($hombre3, 1, { scale: .2, opacity: 0, x: "1400", delay: 1 })
    .from($chat4, 1, { scale: .2, opacity: 0, ease: Elastic.easeOut.config(1, 0.3), y: -100 })
    .from($mujer3, 1, { scale: .2, opacity: 0, x: "-400", delay: 1 })
    .from($chat3, 1, { scale: .2, opacity: 0, ease: Elastic.easeOut.config(1, 0.3), y: -100 })


chat3.stop();

function c3() {
    chat3.restart();
    chat3.play();
}

$(window).on('load', function () {
    $('#welcomeTuto').modal('show');
});


$('.openBtn').on('click', function () {
    $('.modal-body').load('content.html', function () {
        $('#welcomeTuto').modal({ show: true });
    });
});




$(window).ready(function () {
    $(".boton").wrapInner('<div class=botontext></div>');

    $(".botontext").clone().appendTo($(".boton"));

    $(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');

    $(".twist").css("width", "25%").css("width", "+=3px");
});