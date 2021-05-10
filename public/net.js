//    leftnet_left_pole_img = loadImage('../assets/net/left_pole.png');
//    leftnet_bottom_pole_img = loadImage('../assets/net/bottom_pole.png');
//    leftnet_right_pole_img = loadImage('../assets/net/right_pole.png');
//    leftnet_top_pole_img = loadImage('../assets/net/top_pole.png');
//    leftnet_net_img = loadImage('../assets/net/net.png');

function net_setup() {
    
        //left net
    leftnet_net = createSprite(30,windowHeight-175);
    leftnet_net.addImage('net1_net', leftnet_net_img);
    leftnet_net.immovable = true;
    

    leftnet_left_pole = createSprite(7,windowHeight-170);
    leftnet_left_pole.addImage('net1_left', leftnet_left_pole_img);
    leftnet_left_pole.immovable = true;
    
    leftnet_bottom_pole = createSprite(25,windowHeight-87);
    leftnet_bottom_pole.addImage('net1_bottom', leftnet_bottom_pole_img);
    leftnet_bottom_pole.immovable = true;
    
    leftnet_top_pole = createSprite(33,windowHeight-262);
    leftnet_top_pole.addImage('net1_top', leftnet_top_pole_img);
    leftnet_top_pole.immovable = true;
    leftnet_top_pole.touching.top = true;
    
    leftnet_right_pole = createSprite(57,windowHeight-175);
    leftnet_right_pole.addImage('net1_right', leftnet_right_pole_img);
    leftnet_right_pole.immovable = true;

    
    //Right net
    rightnet_net = createSprite(windowWidth-30,windowHeight-175);
    rightnet_net.addImage('net2_net', rightnet_net_img);
    rightnet_net.immovable = true;
    
    rightnet_right_pole = createSprite(windowWidth-7,windowHeight-170);
    rightnet_right_pole.addImage('net2_right', rightnet_right_pole_img);
    rightnet_right_pole.immovable = true;
    
    rightnet_bottom_pole = createSprite(windowWidth-25,windowHeight-87);
    rightnet_bottom_pole.addImage('net2_bottom', rightnet_bottom_pole_img);
    rightnet_bottom_pole.immovable = true;
    
    rightnet_top_pole = createSprite(windowWidth-33,windowHeight-262);
    rightnet_top_pole.addImage('net2_top', rightnet_top_pole_img);
    rightnet_top_pole.immovable = true;
    rightnet_top_pole.touching.top = true;
    
    rightnet_left_pole = createSprite(windowWidth-57,windowHeight-175);
    rightnet_left_pole.addImage('net2_right', rightnet_left_pole_img);
    rightnet_left_pole.immovable = true;
    
}




function remove_net() {
    
    removeSprite(leftnet_net);
    removeSprite(leftnet_left_pole);
    removeSprite(leftnet_bottom_pole);
    removeSprite(leftnet_top_pole);
    removeSprite(leftnet_right_pole);
    
    removeSprite(rightnet_net);
    removeSprite(rightnet_right_pole);
    removeSprite(rightnet_bottom_pole);
    removeSprite(rightnet_top_pole);
    removeSprite(rightnet_left_pole);
    
    
    
//    leftnet_left_pole.velocity.x = 0;
//    leftnet_left_pole.velocity.y = 0;
    
}