function platform_setup() {
    
//        left net
//    leftnet_net = createSprite(width/2,100);
//    leftnet_net.addImage('net1_net', leftnet_net_img);
//    leftnet_net.immovable = true;
    
    platform_tile = new Group();

              
    for(var j=0; j<120; j++)
      {
        
        platform = createSprite((width-300+(j) ), 150+(j), 50, 50);
//        platform.addImage('tile', tile_img);
        platform.immovable = true;
        platform.scale = 0.7;
          platform.shapeColor = 0;
        platform_tile.add(platform);
      }
//    platform.draw = function() { ellipse(0,0,50,50)}
    for(var j=0; j<120; j++)
      {
        
        platform = createSprite((200+(j) ), 270-(j), 50, 50);
//        platform.addImage('tile', tile_img);
        platform.immovable = true;
        platform.scale = 0.7;
          platform.shapeColor = 0;
        platform_tile.add(platform);
      }
    
    
    platform_1 = createSprite(500 , 220, 50, 50);
    platform_1.immovable = true;
//    platform_1.shapeColor = [255, 255 ,255];
    fill(0, 0, 0, 100);
    platform_1.draw = function() { ellipse(0,0,50,50)}
    
    platform_tile.add(platform_1);
    
    platform_1 = createSprite(windowWidth-500 , 220, 50, 50);
        platform_1.immovable = true;
//    platform_1.shapeColor = [255, 255 ,255];
    fill(0);
    platform_1.draw = function() { ellipse(0,0,50,50)}
    
    platform_tile.add(platform_1);

}