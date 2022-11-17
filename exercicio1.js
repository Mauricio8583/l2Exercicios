class Coordinates{
    constructor(walk, left, right){
        this.walk = walk;
        this.left = left;
        this.right = right;
    }
}

function count_x(limit, walk, direction, x){
    
   if(walk=="L"){
    if(x<limit && direction=="F"){
        x++;                
    }
    if(x>0 && direction=="T"){
        x--;
    }
   }
   if(walk=="O"){
    if(x>0 && direction=="F"){
        x--;
    }
    if(x<limit && direction=="T"){
        x++;
    }
   }

   return x
}

function count_y(limit, walk, direction, y){
    
   if(walk=="N"){
    if(y<limit && direction=="F"){
        y++;                
    }
    if(y>0 && direction=="T"){
        y--;
    }
   }
   if(walk=="S"){
    if(y>0 && direction=="F"){
        y--;
    }
    if(y<limit && direction=="T"){
        y++;
    }
   }

   return y
}

function robot(limits, walks){
    let space = new Coordinates("N", "O", "L");

    let spliting_limits = limits.split(" ");
    let spliting_walks = walks.split("");
    let x_limit = spliting_limits[0];
    let y_limit = spliting_limits[1];
    let x = 0;
    let y = 0;
    
    for(let i=0; i<spliting_walks.length; i++){
        if(spliting_walks[i] == "F" || spliting_walks[i] == "T"){
            if(space.walk == "N" || space.walk == "S"){
               y = count_y(y_limit, space.walk, spliting_walks[i], y)
            }
            if(space.walk == "L" || space.walk == "O"){
               x = count_x(x_limit, space.walk, spliting_walks[i], x);
            }
        }
        if(spliting_walks[i] == "D" || spliting_walks[i] == "E"){
            if(spliting_walks[i] == "D") space.walk = space.right;

            if(spliting_walks[i] == "E") space.walk = space.left;                
            
            if(space.walk == "N"){
                space.left = "O";
                space.right = "L"
            }
            if(space.walk == "S"){
                space.left = "L";
                space.right = "O";
            }
            if(space.walk == "L"){
                space.left = "N";
                space.right = "S"
            }
            if(space.walk == "O"){
                space.left = "S";
                space.right = "N";
            }
        }

    }
    let answers = [];

    answers.push(space.walk);
    answers.push(x);
    answers.push(y);

    return answers

}

//let line1 = "1232 1232";
//let line2 = "TTTTTTTTTTTTT";

//let line1 = "10 10";
//let line2 = "FFFFFFFFFDFFFFFFFFFDFFFFFFFFFDFFFFFFFFF";

let line1 = "5 5";
let line2 = "FDFEFDFEFDFEFDF";

let r = robot(line1, line2);

console.log(r)