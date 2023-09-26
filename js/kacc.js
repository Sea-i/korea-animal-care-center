$(document).ready(function(){
    //상단메뉴 mouseenter & focus
    $("#menu a").on("mouseenter focus" , function(){
        $("#menu ul li > a").removeClass("ent");
        $(this).addClass("ent");
    });
    $("#menu a").mouseleave(function(){
        $("#menu ul li > a").removeClass("ent");
    });
    $("#menu .sub-down").on("mouseenter focus" , function(){
        $(".sub-menu").stop().slideUp();
        $(this).children().next().stop().slideDown();
    });
    $(".sub-menu a").on("mouseenter focus" , function(){
        $(".sub-menu a").removeClass("ent");
        $(this).addClass("ent");
        $("#menu a").removeClass("ent");
        $(this).parent().prev().addClass("ent");
    });
    $("#menu li").mouseleave(function(){
        $("#menu a").removeClass("ent");
        $(".sub-menu").stop().slideUp();
    });
    $("#menu li").blur(function(){
        $("#menu a").removeClass("ent");
        $(".sub-menu").stop().slideUp();
    });
    $("#menu").mouseleave(function(){
        $("#menu ul li > a").removeClass("ent");
        $(".sub-menu a").removeClass("ent");
        $(".sub-menu").stop().slideUp();
    });
    $("#menu").blur(function(){
        $("#menu ul li > a").removeClass("ent");
        $(".sub-menu a").removeClass("ent");
        $(".sub-menu").stop().slideUp();
    });
    // -------------
    let bigSlide = setInterval( leftSlide , 3200 );
    function leftSlide (){
        $("#slide").stop().animate({ "left" : "-1440px"}, 3000,function(){
            $("#slide").append( $("#slide").children().first() );
            $("#slide").css( "left" , 0);
        });
    }

    $("#slider").hover(
        function(){
            clearInterval( bigSlide );
        }, 
        function(){
            bigSlide = setInterval( leftSlide , 3200 );
        });
    // -------------
    // 텍스트배너 위로 슬라이드
    setInterval( txtTopSlide , 3200 );
    function txtTopSlide(){
        $("#txtSlide").stop().animate({ "top" : "-40px"}, 3000, function(){
            $("#txtSlide").append( $("#txtSlide").children().first() );
            $("#txtSlide").css( "top", 0 );
        });
    }

    // 보호중인 동물 왼쪽으로 천천히 슬라이드
    // let careSlide = setInterval( careLeftSlide , 100);
    // let imgW = 0;
    // function careLeftSlide(){
    //     $("#care-slide").stop().animate( { "left" : "-=20px"}, 80, "linear" , function(){
    //         imgW = $("#care-slide").position().left;
    //         if( imgW <= -2800 ){
    //             $("#care-slide").append( $("#care-slide").children().first() );
    //             $("#care-slide").css( "left" , imgW * (-1) );
    //         }
    //     });
    // }

    // 입양가족 천천히 슬라이드
});