class FootballSprite {
    
    constructor(x, y) {
        this.sprite = createSprite(x, y);
        this.x = this.sprite.position.x;
        this.y = this.sprite.position.y;
        this.sprite.setSpeed(4, 90);
        this.sprite.scale = 0.6;
        this.sprite.mass = 500;
        this.sprite.addImage('football', fb_img);
        this.sprite.addImage('basketball', bb_img);
        this.sprite.setCollider('circle', 0, 0, 20);
    }
    
//    show() {
//        this.sprite.addImage('football', fb_img);
//        this.sprite.setCollider('circle', 0, 0, 20);
//    }    
    
    
//    bounce(s) {
//        this.sprite.bounce(s);
//    } 

    
    
  move(grav) {
      
//    football.bounce(head_sprite);
//    football.bounce(bothead_sprite);
      
      //uncomment
//    this.sprite.bounce(platform_tile);
    
    this.sprite.bounce(leftnet_left_pole);
    this.sprite.bounce(leftnet_bottom_pole);
    this.sprite.bounce(leftnet_top_pole);
    
    this.sprite.bounce(rightnet_right_pole);
    this.sprite.bounce(rightnet_bottom_pole);
    this.sprite.bounce(rightnet_top_pole);
      
      

//    
      
      this.sprite.bounce(platform_tile);
      
//      this.sprite.velocity.y += 0.3
      this.sprite.velocity.y += grav
    
    
    if(this.sprite.collide(btm_tile)) {
      this.sprite.velocity.y = -0.8 * abs(this.sprite.velocity.y);
    }
    
    
    if(this.sprite.position.y<0) {
      this.sprite.velocity.y = abs(this.sprite.velocity.y);
    }
    
    if(this.sprite.position.x<10) {
      this.sprite.position.x = 10;
      this.sprite.velocity.x = 0.7 * abs(this.sprite.velocity.x);
    }
      
    if(this.sprite.position.x > windowWidth-10) {
      this.sprite.position.x = windowWidth-10;
      this.sprite.velocity.x = -0.7 * abs(this.sprite.velocity.x);
    }  
      
      
  }


}






//function make_football() { 
//    
//        //football
//        football = createSprite(600,100);
//        football.setCollider('circle', 0, 0, 20);
//        football.addImage('football', fb_img);
//        football.setSpeed(10, 90);
//        football.scale = 0.6;
//        football.mass = 5;
//    
//}
//
//
//function draw_football(){
////    football.bounce(btm_tile);
//    football.bounce(head_sprite);
//    football.bounce(bothead_sprite);
//   football.bounce(platform_tile);
//    
//    football.bounce(leftnet_left_pole);
//    football.bounce(leftnet_bottom_pole);
//    football.bounce(leftnet_top_pole);
//    
//    football.bounce(rightnet_right_pole);
//    football.bounce(rightnet_bottom_pole);
//    football.bounce(rightnet_top_pole);
//    
//    football.velocity.y += 0.5
//    
//    
//    if(football.collide(btm_tile)) {
//      football.velocity.y = -0.8 * abs(football.velocity.y);
//    }
//    
//    
//    if(football.position.y<0) {
//      football.velocity.y = abs(football.velocity.y);
//    }
//    
//    if(football.position.x<10) {
//      football.position.x = 10;
//      football.velocity.x = 0.7 * abs(football.velocity.x);
//    }
//    
//    
//    
//    //function to remove football and increase score
//    if(football.collide(rightnet_right_pole)) {
//        console.log('touch right pole')
//      remove(football);
//    }    
//    
//
//    if(football.position.x > windowWidth-10) {
//      football.position.x = windowWidth-10;
//      football.velocity.x = -0.7 * abs(football.velocity.x);
//    }
//    
//}