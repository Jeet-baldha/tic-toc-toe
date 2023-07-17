
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

        if(isX && !visited[i]){
            $(this).text('X');
            checkAns(i);
            isX = !isX;
        }
        else if(!visited[i]){
            $(this).text('O');
            checkAns(i);
            isX = !isX
        }

        remainingBox--;

        if(remainingBox == 0){

            setTimeout(function(){
                $('#res').text("Draw");
                location.reload();
               },500);

        }
        visited[i] =1;
    });

}


function checkAns(n){


    let row = Math.floor(n/3);
    let col = n%3;
    arr[row][col] = isX
    console.log(arr[row][col]);

    if(checkRow(row)){
        $('#res').text(isX    +" is win");
        location.reload();
    }

    if(checkCol(col)){
        $('#res').text(isX    +" is win");
        location.reload();
    }

   if(checkDigonlLeft()){
        $('#res').text(isX    +" is win");
        location.reload();
   }

   if(checkDigonlRight()){
        $('#res').text(isX    +" is win");
        location.reload();
   }
    

}

function checkRow(row) {
    
    for(let i = 0;i<3;i++){

        if(visited[row][i] == 0 ||arr[row][i] != isX){
            return false;
        }
        
       }

       return true;
}

function checkCol(col){
     // check row
   for(let i = 0;i<3;i++){

    if(visited[i][col] == 1 || arr[i][col] != isX){
        return false;
    }


    return true;
   }
}

function checkDigonlLeft() {
    
    let row = 0;
    let col = 0;

    while(row < 3 && col < 3){

        if(visited[row][col] == 0 || arr[row][col] != isX){
            return false;
        }

        row++;
        col++;

    }

    return true;

}
function checkDigonlRight() {
    
    let row = 0;
    let col = 3;

    while(visited[row][col] === 0 || row < 3 && col >= 0){

        if(arr[row][col] != isX){
            return false;
        }
        row++;
        col--;

    }

    return true;

}