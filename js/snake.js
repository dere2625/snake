jQuery(function(){
    
    //Creating the grid for the game
    let numberOfColumns = ($(window).width() - $(window).width()*0.3)/20;
    // console.log("Width ",numberOfColumns);
    let numberOfRows = ($(window).height() - $(window).height()*0.3)/20;
    for(let i=1; i < numberOfColumns; i++){
        $(".container").append(`<div class = "row`+i+`"></div>`)
        for(let j=1; j< numberOfRows; j++){
            // console.log(j);
            $(".row"+i).append(`<div class = "column"></div>`);
        }
    }

    var held = false;
    var drawable = true;
    var clicked = 'none';
    $(".column").mousedown(function(){
        held = true;
        if(clicked === 'draw'){

            $(".column").mousemove(function(){
                if(held && drawable){
                    $(this).addClass("on");
                }
            })
            $(".column").mouseup(function(){
                held = false;
            })
        }

    })

    $(".column").mousedown(function(){
        held = true;
        if(clicked === 'erase'){

            $(".column").mousemove(function(){
                if(held && drawable){
                    $(this).removeClass("on");
                }
            })
            $(".column").mouseup(function(){
                held = false;
            })
        }

    })

    $("#draw").on('click',()=>{
        clicked = 'draw';
        console.log('clicked from main',clicked);
    })

    $("#erase").on('click',()=>{
        clicked = 'erase';
        console.log('clicked from main',clicked);
    })

    $(document).keydown(function(e){
        if(e.key == "Escape"){
            console.log("escape");
            $(".column").css("border", "0.5px rgb(192, 192, 192) solid")
            $(".column").removeClass("on");
            drawable = true;
        }

        if(e.key == "Enter"){
            console.log("Enter");
            $(".column").css("border","0px black solid")
            drawable = false;
        }
    })
    
})