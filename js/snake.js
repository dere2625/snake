jQuery(function(){
    
    //Creating the grid for the game
    let numberOfColumns = $(window).width()/10;
    let numberOfRows = $(window).height()/10;
    for(let i=1; i < numberOfColumns; i++){
        $("body").append(`<div class = "row`+i+`"></div>`)
        for(let j=1; j< numberOfRows; j++){
            console.log(j);
            $(".row"+i).append(`<div class = "column"></div>`);
        }
    }

    // $(".column").mousedown(function(){
    //     $(this).addClass("on");
    // }).mouseUp(function(){
    //     return;
    // })
    var held = false;
    $(".column").mousedown(function(){
        held = true;
        console.log("mouse down");
        $(".column").mousemove(function(){
            console.log("mouseenter");
            if(held){
                $(this).addClass("on");
            }
        })
        $(".column").mouseup(function(){
            held = false;
        })
    })
    
})