//function create_power_up(arr, a){
//  
//    arr.push({
//        x: a,
//        y: 325,
//        dead: false
//      }); 
//
//}


function create_power_up(arr){
    random_power_up_num = random([1, 2, 3]);
//    console.log(random_power_up_num);
    console.log("random_power_up_num " + random_power_up_num);
    
    
    if(random_power_up_num === 1){
        random_x_val_bonus = random(325, width-325);
        power_up_type = "basketball"
        bonus_sprite = createSprite(random_x_val_bonus, 325);
        bonus_sprite.addAnimation('powerup', './assets/bonus_1.png', './assets/bonus_2.png');
    }

    if(random_power_up_num === 2){
        random_x_val_bonus = random(325, width-325);
        power_up_type = "frozen"
        bonus_sprite = createSprite(random_x_val_bonus, 325);
        bonus_sprite.addAnimation('powerup', './assets/bonus_3.png', './assets/bonus_4.png');
    }
    
    if(random_power_up_num === 3){
        random_x_val_bonus = random(325, width-325);
        power_up_type = "normal"
        bonus_sprite = createSprite(random_x_val_bonus, 325);
        bonus_sprite.addAnimation('powerup', './assets/bonus_5.png', './assets/bonus_6.png');
    }
    
    
    arr.push(bonus_sprite)

}



function draw_power_up(arr){
  
    for (pu of arr){
        animation(bonus_img, random_x_val_bonus, pu.y); 
    }
    
}



//function bonus_draw(){
//    
//    animation(bonus_img, random_x_val_bonus, 350);
//    
    
    
    
    
//}
