var football;
let ball_kick_sound;

var tile;
let bg;
let net_1;
let net_1_sprite;

let btm_tile;

let ball_gravity = 0.3;

let platform;
let platform_1;
let platform_tile;

let game_timer_val;

let timer_int_1;

let timerValue = 10;

let winning_sprite;
let losing_sprite;
let winlose_sprite;
    
//left net
let leftnet_left_pole_img;
let leftnet_bottom_pole_img;
let leftnet_right_pole_img;
let leftnet_top_pole_img;
let leftnet_net_img;

let leftnet_left_pole
let leftnet_bottom_pole
let leftnet_top_pole
let leftnet_right_pole
let leftnet_net;

//right net
let rightnet_right_pole_img;
let rightnet_bottom_pole_img;
let rightnet_left_pole_img;
let rightnet_top_pole_img;
let rightnet_net_img;

let rightnet_right_pole;
let rightnet_bottom_pole;
let rightnet_left_pole;
let rightnet_top_pole;
let rightnet_net;

let timer_int;

let bonus_img;
let bonus_sprite;
let bonus_2_img;
let power_up_arr = [];

let main_bkg;
let htp_bkg;

let bb_img;
let htp_img;
let htp_img_1;

let lastTrigger_3 = 0 ;

let player_head_sprite;
let bot_head_sprite;

let head_acc = 7;

let head_sprite;
let bothead_sprite;
let shoe_sprite;

let football_sprite;

let football_arr = [];

let ball_y;
let ball_y_speed;
//let ball_grav;

var kick_frames;
var kick_frames_1;

let gameState = "start";

let random_x_val_bonus;
let random_power_up_num;
let power_up_type;

let game_font;


let game_10_btn;
let game_timer_btn;

let green_head_img;
let red_head_img;

let ball_bounce_sd;
let goal_post_sd;
let goal_scream_sd;
let goal_whis_sd;
let mm_sd;
let stadium_sd;



function resetGame() {
    gameState = "start";
    player1_score = 0;
    player2_score = 0;

//    game_timer_val = 60;
}



function preload(){
    
    
    
    //-------------------------- IMAGES -------------------------
    bg = loadImage('./assets/bkg.png');
    bg_1 = loadImage('./assets/bkg_1.png');
    
    tile_img = loadImage('./assets/Tile.png');
//    htp_img = loadImage('./assets/htp.png');
    htp_img = loadAnimation('./assets/htp.png', './assets/htp_1.png');
    htp_img_1 = loadAnimation('./assets/htp_3.png');
//    winning_sprite = loadAnimation('./assets/endgame/win_1.png', './assets/endgame/win_2.png');
//    losing_sprite = loadAnimation('./assets/endgame/lose_1.png', './assets/endgame/lose_2.png');
    
    green_head_img = loadImage('./assets/green_head.png');
    red_head_img = loadImage('./assets/red_head.png');
    
    main_bkg = loadImage('./assets/main_bkg.png');
    htp_bkg = loadImage('./assets/bkg_4.png');
    
    fb_img = loadImage('./assets/SoccerBall.png');
    bb_img = loadImage('./assets/basketBall.png');
    
    game_font = loadFont('./assets/manaspc.ttf');
    
    leftnet_left_pole_img = loadImage('./assets/net/left_pole.png');
    leftnet_bottom_pole_img = loadImage('./assets/net/bottom_pole.png');
    leftnet_right_pole_img = loadImage('./assets/net/right_pole.png');
    leftnet_top_pole_img = loadImage('./assets/net/top_pole.png');
    leftnet_net_img = loadImage('./assets/net/net.png');
    
    rightnet_right_pole_img = loadImage('./assets/net/right/r_right_pole.png');
    rightnet_bottom_pole_img = loadImage('./assets/net/right/r_bottom_pole.png');
    rightnet_left_pole_img = loadImage('./assets/net/right/r_left_pole.png');
    rightnet_top_pole_img = loadImage('./assets/net/right/r_top_pole.png');
    rightnet_net_img = loadImage('./assets/net/right/right_net.png');
 
    bonus_1_img = loadImage('./assets/bonus_1.png');
    bonus_2_img = loadImage('./assets/bonus_2.png');
    
    bonus_img = loadAnimation('./assets/bonus_1.png', './assets/bonus_2.png');
    
    kick_sprite_sheet = loadSpriteSheet('./assets/kicksprite.png', kick_frames);
    
    player_kick = loadAnimation(kick_sprite_sheet);
     
    player_stand = loadAnimation(new SpriteSheet('./assets/kicksprite.png',
    [{'name':'player_stand', 'frame':{'x':0, 'y': 0, 'width': 65, 'height': 76}} ]));
    
    
    kick_sprite_sheet_1 = loadSpriteSheet('./assets/kicksprite_1.png', kick_frames);
    
    player_kick_1 = loadAnimation(kick_sprite_sheet_1);
     
    player_stand_1 = loadAnimation(new SpriteSheet('./assets/kicksprite_1.png',
    [{'name':'player_stand', 'frame':{'x':0, 'y': 0, 'width': 65, 'height': 76}} ]));
    
    //==========================================================
    
    
    //-------------------------- SOUND -------------------------
    // source: http://freesoundeffect.net/sound/soccer-ball-kick-ball-4-sound-effect
    ball_kick_sound = loadSound('./assets/sound/ball_kick.mp3');
    
    ball_bounce_sd = loadSound('./assets/sound/ball_bounce.wav');
    goal_post_sd = loadSound('./assets/sound/goal_post.wav');
    goal_scream_sd = loadSound('./assets/sound/goal_scream.wav');
    goal_whis_sd = loadSound('./assets/sound/goal_whis.wav');
    mm_sd = loadSound('./assets/sound/main_menu.mp3');
    stadium_sd = loadSound('./assets/sound/stadium_sound.wav');
    
    
    //==========================================================
    
}


function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}


function setup() {

    createCanvas(windowWidth, windowHeight);
//      if (getAudioContext().state !== 'running') {
//    getAudioContext().resume();
//  }
    
//    print("window " + windowHeight);  
    

    
    if (gameState === 'start'){
        textFont(game_font);
        mm_sd.amp(0.2);
        
        mm_sd.play();
//        getAudioContext().resume();
//        mm_sd.amp(0.2);
//        mm_sd.play();
        
        
        game_10_btn = new Clickable();
        game_10_btn.resize(280, 80)
        game_10_btn.locate((width/2-350) , 330)
        game_10_btn.cornerRadius = 10;
        game_10_btn.strokeWeight = 2;
        game_10_btn.stroke = "#ffffff"; 
        game_10_btn.color = "#ffffff";

        game_10_btn.text = "FIRST TO 10";
        game_10_btn.textSize = 32;
        game_10_btn.textColor = "#000000";
        game_10_btn.textFont = game_font;
        game_10_btn.textScaled = false;

        game_10_btn.onRelease = function(){
            console.log("Button released!");
            gameState = 'game';
            setup();
        }
        
        
        
        game_timed_btn = new Clickable();
        game_timed_btn.resize(280, 80)
        game_timed_btn.locate((width/2-350) , 425)
        game_timed_btn.cornerRadius = 10;
        game_timed_btn.strokeWeight = 2;
        game_timed_btn.stroke = "#ffffff"; 
        game_timed_btn.color = "#ffffff";

        game_timed_btn.text = "1 MIN TIMED";
        game_timed_btn.textSize = 32;
        game_timed_btn.textColor = "#000000";
        game_timed_btn.textFont = game_font;
        game_timed_btn.textScaled = false;

        game_timed_btn.onRelease = function(){
            console.log("Button released!");
            gameState = 'game_1';
            setup();
        }
        
        
        
        online_game_btn = new Clickable();
        online_game_btn.resize(280, 80)
        online_game_btn.locate((width/2-350) , 420)
        online_game_btn.cornerRadius = 10;
        online_game_btn.strokeWeight = 2;
        online_game_btn.stroke = "#ffffff"; 
        online_game_btn.color = "#ffffff";

//        online_game_btn.text = createA("https://www.geeksforgeeks.org/", "Go to GeeksforGeeks", "_blank");
        online_game_btn.text = "MULTIPLAYER";
        online_game_btn.textSize = 32;
        online_game_btn.textColor = "#000000";
        online_game_btn.textFont = game_font;
        online_game_btn.textScaled = false;
        
        
        online_game_btn.onRelease = function(){
            window.open("https://bobblehead-soccer-online.glitch.me");
        }
        
        
                
        htp_btn = new Clickable();
        htp_btn.resize(300, 80)
        htp_btn.locate((width/2+70) , 420)
        htp_btn.cornerRadius = 10;
        htp_btn.strokeWeight = 2;
        htp_btn.stroke = "#ffffff"; 
        htp_btn.color = "#ffffff";

        htp_btn.text = "HOW TO PLAY";
        htp_btn.textSize = 32;
        htp_btn.textColor = "#000000";
        htp_btn.textFont = game_font;
        htp_btn.textScaled = false;

        htp_btn.onRelease = function(){
            gameState = 'how_to_play';
            setup();
        }

        acc_opt_btn = new Clickable();
        acc_opt_btn.resize(300, 80)
        acc_opt_btn.locate((width/2+70) , 520)
        acc_opt_btn.cornerRadius = 10;
        acc_opt_btn.strokeWeight = 2;
        acc_opt_btn.stroke = "#ffffff"; 
        acc_opt_btn.color = "#ffffff";

        acc_opt_btn.text = "Accessibility";
        acc_opt_btn.textSize = 32;
        acc_opt_btn.textColor = "#000000";
        acc_opt_btn.textFont = game_font;
        acc_opt_btn.textScaled = false;

        acc_opt_btn.onRelease = function(){
            gameState = 'accessibility_options';
            setup();
        }
        
//        repos_btn();
        
    }

    
    
    if (gameState === 'game'){
        mm_sd.stop();
        stadium_sd.amp(0.3);
        stadium_sd.play();
        

    
        //add base tile
        add_make_tile();

        //add new football
        for(let i = 0; i < 1; i++){
            football_sprite = new FootballSprite(random(width/2-10, width/2+10), 250);
            football_arr.push(football_sprite);
        }

        //add player and bot head
        player_head_sprite = new HeadSprite(100, height-120);
        bot_head_sprite = new HeadSprite(width-160, height-120);

        

        //add nets 
        net_setup();
        
        //add scoreboard
        setup_scoreboard();

        //add barriers
        platform_setup();

        //add players
        player_head_sprite.show();
        bot_head_sprite.bot_show();

        mainm_btn_1 = new Clickable();
        mainm_btn_1.resize(50, 50)
        mainm_btn_1.locate(50 , 35)
        mainm_btn_1.cornerRadius = 10;
        mainm_btn_1.strokeWeight = 2;
        mainm_btn_1.stroke = "#ffffff"; 
        mainm_btn_1.color = "#ffffff";

        mainm_btn_1.text = "<";
        mainm_btn_1.textSize = 32;
        mainm_btn_1.textColor = "#000000";
        mainm_btn_1.textFont = game_font;
        mainm_btn_1.textScaled = false;

        mainm_btn_1.onRelease = function(){
            mm_sd.stop();
            gameState = 'game_end';
            setup();
        } 

    }
    
    
    
    if (gameState === 'game_1'){
        mm_sd.stop();
        stadium_sd.amp(0.3);
        stadium_sd.play();
        
        game_timer_val = 60;
        
        timer_int = setInterval(() => {  if (game_timer_val > 0) {game_timer_val--;}}, 1000);
        
        
    
        //add base tile
        add_make_tile();

        //add new football
        for(let i = 0; i < 1; i++){
            football_sprite = new FootballSprite(random(width/2-10, width/2+10), 250);
            football_arr.push(football_sprite);
        }

        //add player and bot head
        player_head_sprite = new HeadSprite(100, height-120);
        bot_head_sprite = new HeadSprite(width-160, height-120);

        
        
        //add nets 
        net_setup();
        
        //add scoreboard
        setup_scoreboard();

        //add barriers
        platform_setup();

        //add players
        player_head_sprite.show();
        bot_head_sprite.bot_show();

        mainm_btn_2 = new Clickable();
        mainm_btn_2.resize(50, 50)
        mainm_btn_2.locate(50 , 35)
        mainm_btn_2.cornerRadius = 10;
        mainm_btn_2.strokeWeight = 2;
        mainm_btn_2.stroke = "#ffffff"; 
        mainm_btn_2.color = "#ffffff";

        mainm_btn_2.text = "<";
        mainm_btn_2.textSize = 32;
        mainm_btn_2.textColor = "#000000";
        mainm_btn_2.textFont = game_font;
        mainm_btn_2.textScaled = false;

        mainm_btn_2.onRelease = function(){
            mm_sd.stop();
            gameState = 'game_end';
            setup();
        } 

    }
    
    
    
    if (gameState === 'game_end'){
        
        
        winlose_sprite = createSprite(width/2-10, 150);
        winlose_sprite.addAnimation('win', './assets/endgame/win_1.png', './assets/endgame/win_2.png');
        winlose_sprite.addAnimation('lose', './assets/endgame/lose_1.png', './assets/endgame/lose_2.png');
        winlose_sprite.addAnimation('draw', './assets/endgame/draw_1.png', './assets/endgame/draw_2.png');
        
        mm_btn = new Clickable();
        mm_btn.resize(280, 70)
        mm_btn.cornerRadius = 10;
        mm_btn.strokeWeight = 2;
        mm_btn.stroke = "#ffffff"; 
        mm_btn.color = "#ffffff";

        mm_btn.text = "MAIN MENU";
        mm_btn.textSize = 32;
        mm_btn.textColor = "#000000";
        mm_btn.textFont = game_font;
        mm_btn.locate( (width/2-140) , height/2+50);
        
        mm_btn.onRelease = function(){
            console.log("Button released!");
//            removeSprites();
            removeSprite(winlose_sprite);
            removeSprite(player_head_sprite.sprite);
            removeSprite(bot_head_sprite.sprite);
            removeSprite(football_sprite.sprite);
            remove_net();
            btm_tile.removeSprites();
            platform_tile.removeSprites();
            stadium_sd.stop();
            clear();
            
            
            resetGame();
            setup();
        }
//        
    }
    
    
    if(gameState === 'how_to_play'){
        mainm_btn = new Clickable();
        mainm_btn.resize(70, 70)
        mainm_btn.locate(50 , 35)
        mainm_btn.cornerRadius = 10;
        mainm_btn.strokeWeight = 2;
        mainm_btn.stroke = "#ffffff"; 
        mainm_btn.color = "#ffffff";

        mainm_btn.text = "<";
        mainm_btn.textSize = 32;
        mainm_btn.textColor = "#000000";
        mainm_btn.textFont = game_font;
        mainm_btn.textScaled = false;

        mainm_btn.onRelease = function(){
            mm_sd.stop();
            gameState = 'start';
            setup();
        } 
    }
    

    if(gameState === 'accessibility_options'){
        mainm_btn_3 = new Clickable();
        mainm_btn_3.resize(70, 70)
        mainm_btn_3.locate(50 , 35)
        mainm_btn_3.cornerRadius = 10;
        mainm_btn_3.strokeWeight = 2;
        mainm_btn_3.stroke = "#ffffff"; 
        mainm_btn_3.color = "#ffffff";

        mainm_btn_3.text = "<";
        mainm_btn_3.textSize = 32;
        mainm_btn_3.textColor = "#000000";
        mainm_btn_3.textFont = game_font;
        mainm_btn_3.textScaled = false;

        mainm_btn_3.onRelease = function(){
            mm_sd.stop();
            gameState = 'start';
            setup();
        } 
    }


}




function draw() {
    
//    repos_btn();
    
    if (gameState === 'start') {
        drawStartMenu();
    } 
    
    else if (gameState === 'game_end') {  
        draw_end_Game();
    }
    else if (gameState === 'game') {  
        draw_10_Game();
    }
    else if (gameState === 'game_1') {
        draw_timer_Game();
    }
    else if (gameState === 'how_to_play') {
        howtoplay();
    }
    else if (gameState === 'accessibility_options') {
        draw_accessibility();
    }
}




function howtoplay(){
    background(htp_bkg);
    mainm_btn.draw();
}

function draw_accessibility(){
    background(main_bkg);
    mainm_btn_3.draw();
}



function drawStartMenu(){
    background(main_bkg);
    
    push();
        fill(255)
        textSize(80);
        text("BOBBLEHEAD SOCCER", width/2-450, 80);
    
        textSize(50);
        text("GAME MODES", width/2-380, 270);

        stroke(255)
        strokeWeight(1)
        line(width/2, 180, width/2, height-140);
    pop();
    
    animation(htp_img_1, width/2+200, 290);
    
    htp_btn.onHover = function(){
        animation(htp_img, width/2+200, 290);
    }
    
    acc_opt_btn.draw();
    game_10_btn.draw();
    game_timed_btn.draw();
    htp_btn.draw();
    online_game_btn.draw();
}





function draw_end_Game(){
    background(0);
    mm_btn.draw();
    
    fill(0)
//        background(0)
        push();
            textSize(60)
//        console.log(player1_score + "p1");
//    console.log(player2_score + "p2");
            
            if(player1_score < player2_score){
                fill(255, 0 ,0)
                text("You Lose!", width/2, height/2-30);
                winlose_sprite.changeAnimation("lose")
            }
    
            
            else if(player1_score > player2_score){
                fill(0, 255 ,0)
                text("You Win!", width/2, height/2-30);
                winlose_sprite.changeAnimation("win")
            }
    
            
            else if(player1_score === player2_score || (player2_score === 0 && player1_score === 0) ){
                fill(0, 0 ,250)
                text("Draw!", width/2, height/2-30);
                winlose_sprite.changeAnimation("draw")
            }
        
        pop();

    drawSprites();

}




function draw_10_Game(){
    background(bg_1);
    

    
    if(football_arr.length == 0){
        for(let i = 0; i < 1; i++){
            football_sprite = new FootballSprite(random(width/2-10, width/2+10), 200);
            ball_gravity = 0.3;
            football_arr.push(football_sprite);
        }
    }  
    
//    ball_gravity = 0.3;
    football_sprite.move(ball_gravity);
    
//    console.log("head speed: " + head_acc);
    player_head_sprite.move(head_acc);
    
    bot_head_sprite.bot_move(football_sprite);
    
    football_sprite.sprite.bounce(player_head_sprite.sprite);
    football_sprite.sprite.bounce(bot_head_sprite.sprite);

    
    
    
    
//    net_draw();

        
    
    
//    console.log(football_sprite.sprite.position.y);
    if(football_sprite.sprite.position.y >windowHeight-94) {
        ball_bounce_sd.play()
      }
    
    if(football_sprite.sprite.collide(leftnet_top_pole) || football_sprite.sprite.collide(leftnet_bottom_pole) || football_sprite.sprite.collide(rightnet_bottom_pole)|| football_sprite.sprite.collide(rightnet_top_pole)) {
//        goal_post_sd.amp(0.4);
        goal_post_sd.play();
      }
    
              
    if(power_up_arr.length === 0){
        if (millis() - lastTrigger_3 >= 10000 ) {
            create_power_up(power_up_arr);
            lastTrigger_3 = millis(); 
        }
    }
    
    if(timerValue < 10 && timerValue > 0){
        head_acc = 0;
        push();
        textSize(14);
        fill(255, 0, 0)
        text("0:" + timerValue, player_head_sprite.sprite.position.x, player_head_sprite.sprite.position.y-50);
        pop();
       }else if(timerValue === 0){
           head_acc = 7;
           clearInterval(timer_int_1);
           timer_int_1 = 0;
       }
    
    if(power_up_arr.length >= 1){
        // remove power up from arr and change ball gravity
        if(football_sprite.sprite.collide(bonus_sprite)){
            
            if(power_up_type === "basketball"){
               console.log("im bouncy");
//                timerValue = 0;
                clearInterval(timer_int_1);
                timer_int_1 = 0;
                head_acc = 7;
                ball_gravity = 0.1;
                football_sprite.sprite.changeImage('basketball');
            }
             if(power_up_type === "frozen"){
                 head_acc = 0;
                 console.log("im frozen");  
                 timer_int_1 = setInterval(() => {if (timerValue > 0) {timerValue--;}}, 1000);   
            }
            if(power_up_type === "normal"){
                console.log("im normal");
//                timerValue = 0;
                clearInterval(timer_int_1);
                timer_int_1 = 0;
                head_acc = 7;
                ball_gravity = 0.3;
                football_sprite.sprite.changeImage('football');
            }
            
            removeSprite(bonus_sprite);
            power_up_arr.splice( (power_up_arr.lenght)-1 , 1);
                    timerValue = 10;
        }   
    }
    



    
    
    for(let w = 0; w < football_arr.length; w++) {
        
        if(football_sprite.sprite.collide(player_head_sprite.sprite) || football_sprite.sprite.collide(bot_head_sprite.sprite) || player_head_sprite.sprite.collide(football_sprite.sprite) || bot_head_sprite.sprite.collide(football_sprite.sprite)){
            ball_kick_sound.play();
            break;
        }

        // if player1 scores
        if(football_sprite.sprite.collide(rightnet_right_pole) || ((football_sprite.sprite.position.x > width-28) && (football_sprite.sprite.position.y> height-250)) ){
            goal_scream_sd.play();
            goal_whis_sd.play(); 
            removeSprite(football_sprite.sprite)
          football_arr.splice(w,1);
          player1_score += 1;
            
            
          break;
        }
        
//        console.log(football_sprite.sprite.position.x);
        
        // if player2 scores
        if(football_sprite.sprite.collide(leftnet_left_pole) || ((football_sprite.sprite.position.x < 28) && (football_sprite.sprite.position.y> height-250)) ){
            goal_scream_sd.play();
            goal_whis_sd.play(); 
            removeSprite(football_sprite.sprite)
            football_arr.splice(w,1);
            player2_score += 1;
            break;
        }
        
        if(football_sprite.sprite.position.y > windowHeight-10){
          football_arr.splice(w,1);
          break;
        }
        
        
      }
      mainm_btn_1.draw();
    
    
    drawSprites();
    draw_scoreboard();
    

    
    if(player1_score === 10 || player2_score === 10){
        clearInterval(timer_int_1);
        timer_int_1 = 0;
        gameState = 'game_end';
        setup();

        
    }
    
    
}



function draw_timer_Game(){
    background(bg);
    

    
    if(football_arr.length == 0){
        for(let i = 0; i < 1; i++){
            football_sprite = new FootballSprite(random(width/2-10, width/2+10), 200);
            ball_gravity = 0.3;
            football_arr.push(football_sprite);
        }
    }  
    
//    ball_gravity = 0.3;
    football_sprite.move(ball_gravity);
    
//    console.log("head speed: " + head_acc);
    player_head_sprite.move(head_acc);
    
    bot_head_sprite.bot_move(football_sprite);
    
    football_sprite.sprite.bounce(player_head_sprite.sprite);
    football_sprite.sprite.bounce(bot_head_sprite.sprite);

    
    
    
    
//    net_draw();

        
    
    
//    console.log(football_sprite.sprite.position.y);
    if(football_sprite.sprite.position.y >windowHeight-94) {
        ball_bounce_sd.play()
      }
    
    if(football_sprite.sprite.collide(leftnet_top_pole) || football_sprite.sprite.collide(leftnet_bottom_pole) || football_sprite.sprite.collide(rightnet_bottom_pole)|| football_sprite.sprite.collide(rightnet_top_pole)) {
//        goal_post_sd.amp(0.4);
        goal_post_sd.play();
      }
    
              
    if(power_up_arr.length === 0){
        if (millis() - lastTrigger_3 >= 10000 ) {
            create_power_up(power_up_arr);
            lastTrigger_3 = millis(); 
        }
    }
    
    if(timerValue < 10 && timerValue > 0){
        head_acc = 0;
        push();
        textSize(14);
        text("0:" + timerValue, player_head_sprite.sprite.position.x, player_head_sprite.sprite.position.y-50);
        pop();
       }else if(timerValue === 0){
           head_acc = 7;
           clearInterval(timer_int_1);
           timer_int_1 = 0;
       }
    
    if(power_up_arr.length >= 1){
        // remove power up from arr and change ball gravity
        if(football_sprite.sprite.collide(bonus_sprite)){
            
            if(power_up_type === "basketball"){
               console.log("im bouncy");
//                timerValue = 0;
                clearInterval(timer_int_1);
                timer_int_1 = 0;
                head_acc = 7;
                ball_gravity = 0.1;
                football_sprite.sprite.changeImage('basketball');
            }
             if(power_up_type === "frozen"){
                 head_acc = 0;
                 console.log("im frozen");  
                 timer_int_1 = setInterval(() => {if (timerValue > 0) {timerValue--;}}, 1000);   
            }
            if(power_up_type === "normal"){
                console.log("im normal");
//                timerValue = 0;
                clearInterval(timer_int_1);
                timer_int_1 = 0;
                head_acc = 7;
                ball_gravity = 0.3;
                football_sprite.sprite.changeImage('football');
            }
            
            removeSprite(bonus_sprite);
            power_up_arr.splice( (power_up_arr.lenght)-1 , 1);
                    timerValue = 10;
        }   
    }
    



    
    
    for(let w = 0; w < football_arr.length; w++) {
        
        if(football_sprite.sprite.collide(player_head_sprite.sprite) || football_sprite.sprite.collide(bot_head_sprite.sprite) || player_head_sprite.sprite.collide(football_sprite.sprite) || bot_head_sprite.sprite.collide(football_sprite.sprite)){
            ball_kick_sound.play();
            break;
        }

        // if player1 scores
        if(football_sprite.sprite.collide(rightnet_right_pole) || ((football_sprite.sprite.position.x > width-28) && (football_sprite.sprite.position.y> height-260)) ){
            goal_scream_sd.play();
            goal_whis_sd.play(); 
            removeSprite(football_sprite.sprite)
          football_arr.splice(w,1);
          player1_score += 1;
            
            
          break;
        }
        
//        console.log(football_sprite.sprite.position.x);
        
        // if player2 scores
        if(football_sprite.sprite.collide(leftnet_left_pole) || ((football_sprite.sprite.position.x < 28) && (football_sprite.sprite.position.y> height-260)) ){
            goal_scream_sd.play();
            goal_whis_sd.play(); 
            removeSprite(football_sprite.sprite)
            football_arr.splice(w,1);
            player2_score += 1;
            break;
        }
        
        if(football_sprite.sprite.position.y > windowHeight-10){
          football_arr.splice(w,1);
          break;
        }
        
        
      }
    
    mainm_btn_2.draw();

    drawSprites();
    draw_scoreboard_1();
    

    
    if(game_timer_val === 0){  
        clearInterval(timer_int);
        timer_int = 0;
        gameState = 'game_end';
        setup();       
    }
    
    
}




function repos_btn(){

//    game_10_btn.draw();

}




function windowResized() {
//    console.log("sdfds");
//    console.log(windowWidth, width);
    resizeCanvas(windowWidth, windowHeight);
    repos_btn();
}