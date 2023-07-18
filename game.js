
var arr = []

for(let i =0;i<3;i++){
    arr[i] = [];
    for (let j = 0; j < 3; j++) {
        arr[i][j] = -1;
    }
}


var visited = Array.apply(null, Array(9)).map(function() { return 0 });
var remainingBox = 9;
var boxes = $('.box');


var isX = true;

for(let i =0;i<boxes.length;i++){

    $(boxes[i]).click(function () {
        
        if(remainingBox <= 0){
            $('#res').text("Draw");
            console.log($('#res'));
            setTimeout(function(){
                location.reload();
            },1000);
        }

        if(!isX && !visited[i]){
            $(this).text('X');
            checkAns(i,1);
            isX = !isX;
        }
        else if(!visited[i]){
            $(this).text('O');
            checkAns(i,0);
            isX = !isX
        }

        remainingBox--;
        visited[i] =1;
    });

}


function checkAns(index,num){


    let row = Math.floor(index/3);
    let col = index%3;
    arr[row][col] = num
    console.log(arr[row][col]);

    if(checkRow(row,num)){
        $('#res').text("player " + (num+1) + " is win");
        console.log($('#res'));
        setTimeout(function(){
            location.reload();
        },1000);
    }

    

    if(checkCol(col,num)){
        $('#res').text("player " + (num+1) + " is win");
        console.log($('#res'));
        setTimeout(function(){
            location.reload();
        },1000);
    }

   if(checkDigonlLeft(num)){
        $('#res').text("player " + (num+1) + " is win");
        setTimeout(function(){
            location.reload();
        },1000);
   }

   if(checkDigonlRight(num)){
        $('#res').text("player " + (num+1) + " is win");
        setTimeout(function(){
            location.reload();
        },1000);
   }
    

}

function checkRow(row,n) {
    
    for(let i = 0;i<3;i++){

        if( arr[row][i] === n){
            continue;
        }
        else{
            return false;
        }
        
       }

       return true;
}

function checkCol(col,n){
     // check row
   for(let i = 0;i<3;i++){

    if(arr[i][col] === n){
        continue;
    }
    else{
        return false;
    }
}
return true;
}

function checkDigonlLeft(num) {
    

    for(let i =0;i<3;i++){
        if( arr[i][i] === num){
            continue;
        }
        else{
            return false;
        }
    }

    return true;

}
function checkDigonlRight(num) {

    let col = 2;
    for(let row = 0;row<3;row++){

        if(arr[row][col--] === num){
            continue;
        }
        else{
            return false;
        }
    }

    return  true;

}