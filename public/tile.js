
function add_make_tile() {  

btm_tile = new Group();
    
    for(var j=0; j<30; j++)
      {
        tile = createSprite((80*j), windowHeight-40);
        tile.addImage('tile', tile_img);
        tile.immovable = true;
        tile.scale = 0.4;
        btm_tile.add(tile);
      }
      
}



function remove_make_tile() {  

    for(var j=0; j<20; j++)
      {
        btm_tile[i].remove()
      }
      
}