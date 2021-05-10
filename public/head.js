var kick_frames = [ 
    {'name':'player_kick01', 'frame':{'x':0, 'y': 0, 'width': 65, 'height': 76}},
//    {'name':'player_kick02', 'frame':{'x':81, 'y': 0, 'width': 71, 'height': 76}},
//    {'name':'player_kick03', 'frame':{'x':168, 'y': 0, 'width': 81, 'height': 76}},
//    {'name':'player_kick04', 'frame':{'x':265, 'y': 0, 'width': 91, 'height': 76}},
    {'name':'player_kick05', 'frame':{'x':372, 'y': 0, 'width': 94, 'height': 76}},
    {'name':'player_kick06', 'frame':{'x':482, 'y': 0, 'width': 92, 'height': 76}},
    {'name':'player_kick07', 'frame':{'x':372, 'y': 0, 'width': 94, 'height': 76}},
//    {'name':'player_kick08', 'frame':{'x':265, 'y': 0, 'width': 91, 'height': 76}},
//    {'name':'player_kick09', 'frame':{'x':168, 'y': 0, 'width': 81, 'height': 76}},
//    {'name':'player_kick10', 'frame':{'x':81, 'y': 0, 'width': 71, 'height': 76}},
    {'name':'player_kick11', 'frame':{'x':0, 'y': 0, 'width': 65, 'height': 76}}
];

var kick_frames_1 = [ 
    {'name':'player_kick01', 'frame':{'x':0, 'y': 0, 'width': 65, 'height': 76}},
//    {'name':'player_kick02', 'frame':{'x':81, 'y': 0, 'width': 71, 'height': 76}},
//    {'name':'player_kick03', 'frame':{'x':168, 'y': 0, 'width': 81, 'height': 76}},
//    {'name':'player_kick04', 'frame':{'x':265, 'y': 0, 'width': 91, 'height': 76}},
    {'name':'player_kick05', 'frame':{'x':372, 'y': 0, 'width': 94, 'height': 76}},
    {'name':'player_kick06', 'frame':{'x':482, 'y': 0, 'width': 92, 'height': 76}},
    {'name':'player_kick07', 'frame':{'x':372, 'y': 0, 'width': 94, 'height': 76}},
//    {'name':'player_kick08', 'frame':{'x':265, 'y': 0, 'width': 91, 'height': 76}},
//    {'name':'player_kick09', 'frame':{'x':168, 'y': 0, 'width': 81, 'height': 76}},
//    {'name':'player_kick10', 'frame':{'x':81, 'y': 0, 'width': 71, 'height': 76}},
    {'name':'player_kick11', 'frame':{'x':0, 'y': 0, 'width': 65, 'height': 76}}
];




class HeadSprite {
    
    constructor(x, y) {
        this.sprite = createSprite(x, y);
        this.x = this.sprite.position.x;
        this.y = this.sprite.position.y;
        this.sprite.setCollider('circle', 0, 0, 35);
        this.sprite.scale = 0.9;
        this.sprite.mass = 10;
        this.sprite.immovable = true;
    }
    
    show(){

        this.sprite.addAnimation('kick', player_kick);
        this.sprite.addAnimation('stand', player_stand);

    }
    
    bot_show(){
//        this.sprite.mirrorX(-1);
        this.sprite.addAnimation('kick_1', player_kick_1);
        this.sprite.addAnimation('stand_1', player_stand_1);
    }
    
    
    move(acc){
//        print(this.sprite.position.y)
        this.sprite.changeAnimation('stand');
        this.sprite.velocity.x = 0;
    
        this.sprite.velocity.y += .6;
    
        if(this.sprite.collide(btm_tile)) {
            this.sprite.velocity.y = 0;
            this.sprite.position.y -= 0.5;
        }


        if(this.sprite.collide(leftnet_top_pole) || this.sprite.collide(rightnet_top_pole)) {
            this.sprite.velocity.y = 0;
        }
        

        if(keyWentDown('up') && this.sprite.position.y>50){
            this.sprite.velocity.y = -10;
        }


        //kick the ball
        if(keyDown('space') ) {
            this.sprite.changeAnimation('kick');
        }

        //player move right
        if(keyDown('right') && (this.sprite.position.x < windowWidth-30) ) {
            this.sprite.velocity.x = acc;
        }

        //player move left
        if(keyDown('left') && (this.sprite.position.x > 30)) {
            this.sprite.velocity.x = -acc;
        }
    }
    
    
    //Bot AI
        bot_move(ball){
//        print(this.sprite.position.y)
        this.sprite.changeAnimation('stand_1');
        this.sprite.velocity.x = 0;
    
        this.sprite.velocity.y += .6;
    
        if(this.sprite.collide(btm_tile)) {
            this.sprite.velocity.y = 0;
            this.sprite.position.y -= 0.5;
        }


        if(this.sprite.collide(leftnet_top_pole) || this.sprite.collide(rightnet_top_pole)) {
            this.sprite.velocity.y = 0;
        }
        


        //kick the ball
            let pos_val = map(ball.sprite.position.x, width/2+10, width-100, width/2, width-90);
//            console.log(pos_val)
            
            if(this.sprite.position.x === width/2+40 ){
               this.sprite.velocity.x = 0;
            }
            
            if(this.sprite.position.x === width-90 ){
               this.sprite.velocity.x = 0;
            }
            
//            while(ball.sprite.position.x === pos_val){
//                this.sprite.velocity.x = 7;
//            }
            
//             if( (ball.sprite.position.x < this.sprite.position.x-50) ) {
////            console.log(ball.sprite.position.x, this.sprite.position.x)
//            this.sprite.changeAnimation('kick_1');
//            this.sprite.velocity.x = -7;
//            
//            if(this.sprite.position.x > width/2 + 50 && this.sprite.position.x < width/2 + 60){
//               this.sprite.velocity.x = 0;
//            }
//            
//        }
            
            if(ball.sprite.position.x < this.sprite.position.x && ball.sprite.position.x > width/2-10){
//                while(this.sprite.position.x < width/2){
                this.sprite.changeAnimation('kick_1');
                      this.sprite.velocity.x = -8;
//                      }
//                this.sprite.velocity.x = 0;
            }
            
            if(ball.sprite.position.x > this.sprite.position.x){
//                while(this.sprite.position.x < width/2){
//                this.sprite.changeAnimation('kick_1');
                      this.sprite.velocity.x = 8;
//                      }
//                this.sprite.velocity.x = 0;
            }
            
            
            if( (ball.sprite.position.x > width-140 && ball.sprite.position.x < width-90 && this.sprite.position.y>height-250) || ((ball.sprite.position.x > width/2 && ball.sprite.position.x < width/2+10 && this.sprite.position.y>height-250)) ){
//                while(this.sprite.position.x < width/2){
                      this.sprite.velocity.y = -10;
//                      }
//                this.sprite.velocity.x = 0;
            }
            
//                if( (ball.sprite.position.x < this.sprite.position.x+50) ) {
////            console.log(ball.sprite.position.x, this.sprite.position.x)
//            this.sprite.changeAnimation('kick_1');
//            this.sprite.velocity.x = 7;
//            
////            if(this.sprite.position.x > width-100 && this.sprite.position.x < width-90){
//                    if(this.sprite.position.x === width-90){
//               this.sprite.velocity.x = 0;
//            }
//        }


    }
    
}




//function make_head_kick(){
//        //head
//    head_sprite = createSprite(100, height-120);
//    head_sprite.setCollider('circle', 0, 0, 35);
//    head_sprite.addAnimation('kick', player_kick);
//    head_sprite.addAnimation('stand', player_stand);
//    head_sprite.scale = 0.9;
//    head_sprite.immovable = true;
//}
//
//
//
//
//
//
//function head_kick_draw(){
//    
////    head_sprite.bounce(leftnet_top_pole)
////    football.touching.top(leftnet_top_pole);
//    
//    
//    head_sprite.changeAnimation('stand');
//    head_sprite.velocity.x = 0;
//    
////    head_sprite.velocity.y = 0;
//    head_sprite.velocity.y += 0.7;
//    
//if(head_sprite.collide(btm_tile)) {
//    head_sprite.velocity.y = 0;
//  }
//    
//    
//    if(head_sprite.collide(leftnet_top_pole) || head_sprite.collide(rightnet_top_pole)) {
//        head_sprite.velocity.y = 0;
//    }
//    
//    if(keyWentDown('up') && head_sprite.position.y>50){
//        head_sprite.velocity.y = -10;
//    }
//    
//    
//    //kick the ball
//    if(keyDown('space') ) {
//        head_sprite.changeAnimation('kick');
//    }
//    
//    //player move right
//    if(keyDown('right') && (head_sprite.position.x < windowWidth-30) ) {
//        head_sprite.velocity.x = 7;
//    }
//    
//    //player move left
//    if(keyDown('left') && (head_sprite.position.x > 30)) {
//        head_sprite.velocity.x = -7;
//    }
//    
//}
//



//function make_bot_head_kick(){
//        //head
//    bothead_sprite = createSprite(width-160, height-120);
//    bothead_sprite.mirrorX(-1);
//    bothead_sprite.setCollider('circle', 0, 0, 35);
//    bothead_sprite.addAnimation('kick', player_kick);
//    bothead_sprite.addAnimation('stand', player_stand);
//    bothead_sprite.scale = 0.9;
//
//    bothead_sprite.immovable = true;
//}