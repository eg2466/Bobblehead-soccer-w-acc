//var football;
//var tile;
//let bg;
//let net_1;
//let net_1_sprite;
//
//let net_2;
//let net_2_sprite;
//
//let head_sprite;
//let shoe_sprite;
//
//let ball_y;
//let ball_y_speed;
//let ball_gravity = 0.2;
//
//function preload(){
//    bg = loadImage('../assets/bkg.png');
//    fb_img = loadImage('../assets/SoccerBall.png');
//    tile_img = loadImage('../assets/Tile.png');
//    leftnet_left_pole_img = loadImage('../assets/net/left_pole.png');
//    leftnet_bottom_pole_img = loadImage('../assets/net/bottom_pole.png');
//    leftnet_right_pole_img = loadImage('../assets/net/right_pole.png');
//    leftnet_top_pole_img = loadImage('../assets/net/top_pole.png');
//    leftnet_net_img = loadImage('../assets/net/net.png');
////    net_1_img = loadImage('../assets/net_1.png');
////    net_2_img = loadImage('../assets/net_2.png');
////    net_1_img_s = loadImage('../assets/net_1_s.png');
////    net_2_img_s = loadImage('../assets/net_2_s.png');
//    head_img = loadImage('../assets/head.png');
//    shoe_img = loadImage('../assets/shoe.png');
//}
//
//function setup() {
////    createCanvas(1200, 600);
//    createCanvas(windowWidth, windowHeight);
//    
//    image(net_2_img, 1000, 400);
//    
//    //left net
//    net_1_sprite = createSprite(32,428);
//    net_1_sprite.addImage('net1', net_1_img_s);
//    net_1_sprite.immovable = true;
//    
//    //right net
//    net_2_sprite = createSprite(1168,428);
//    net_2_sprite.addImage('net2', net_2_img_s);
//    net_2_sprite.immovable = true;
//    
//    
//    //head
//    head_sprite = createSprite(100,465);
//    head_sprite.addImage('head_1', head_img);
//    
//    //shoe
//    shoe_sprite = createSprite(110,508);
//    shoe_sprite.addImage('shoe_1', shoe_img);
//    
//    //football
//    football = createSprite(600,100);
//    football.addImage('football', fb_img);
//    football.setSpeed(10, 90);
//    
//    //this should change based on the speed of the kick
//    football.scale = 0.6;
//    football.mass = 2;
////    football.restitution = 0.2;
//    
//    
//    //adding floor for the game
//    btm_tile = new Group();
//    
//    for(var j=0; j<16; j++)
//      {
//        tile = createSprite((80*j), windowHeight-40);
//        tile.addImage('tile', tile_img);
//        //setting immovable to true makes the sprite immune to bouncing and displacements
//        //as if with infinite mass
//        tile.immovable = true;
//        tile.scale = 0.4;
//        btm_tile.add(tile);
//      }
//    
//    
//    
//}
//
//
//
//
//function draw() {
//    background(bg);
//    image(net_1_img, 0, 330);
//    image(net_2_img, 1135, 330);
//    
//    
//    football.bounce(net_1_sprite);
//    football.bounce(net_2_sprite);
//    football.bounce(shoe_sprite);
//
//    
//    
//    console.log(football.position.y);
//    console.log(football.collide(btm_tile));
//    
//        if(football.position.x<0) {
//          football.position.x = 1;
//          football.velocity.x = abs(football.velocity.x);
//        }
//
//        if(football.position.x>width) {
//          football.position.x = width-1;
//          football.velocity.x = -abs(football.velocity.x);
//        }
//
//    
//    football.velocity.y += 0.4
//    
//    if(football.position.y>height-95) {
//      football.position.y = height-95;
//      football.velocity.y = -0.7 * abs(football.velocity.y);
//    }
//    
//
//    
//    //head movement
////    head_sprite.bounce(btm_tile)
//    head_sprite.velocity.y += 1;
//    head_sprite.velocity.x = 0;
//    if(head_sprite.position.y>windowHeight-200){
//        head_sprite.velocity.y = 0;
//      }
//    
//    if(keyWentDown('space') && head_sprite.position.y>0){
//        head_sprite.velocity.y = -10;
//    }
//    
//    
//    //shoe movement
//    shoe_sprite.bounce(btm_tile)
//    shoe_sprite.velocity.x = 0;
//    shoe_sprite.velocity.y += 1;
////    if(shoe_sprite.collide(btm_tile)) {
//    if(shoe_sprite.position.y>500){
//        shoe_sprite.velocity.y = 0;
//    }
//    if(keyWentDown('space') && shoe_sprite.position.y>30){
//        shoe_sprite.velocity.y = -10;
//    }
//    if(keyDown('right') && shoe_sprite.position.x<1170){
//        head_sprite.velocity.x = 4;
//        shoe_sprite.velocity.x = 4;
//    }
//    if(keyDown('left') && shoe_sprite.position.x>50){
//        head_sprite.velocity.x = -4;
//        shoe_sprite.velocity.x = -4;
//    }
//    
//    
//    drawSprites();
////    drawSprite(tile);
//    
//    
//}
//
//
//function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}