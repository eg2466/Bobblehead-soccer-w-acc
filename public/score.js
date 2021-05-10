let player1_score;
let player2_score;

function setup_scoreboard() {
    player1_score = 0;
    player2_score = 0;
}

function draw_scoreboard() {
    push();
        fill(0, 0, 0, 150);
        rectMode(CENTER);

        //left scoreboard
        rect(width/2-50, 35, 65, 50, 10);
        image(red_head_img, width/2-105, 12);


        

        //right scoreboard
        rect(width/2+50, 35, 65, 50, 10);
        image(green_head_img, width/2+60, 12);

        fill(255);
        textSize(32);
        text(":", width/2, 35)
        text(player1_score, width/2-40, 35);
        text(player2_score, width/2+40, 35);
    pop();
    
//    if(football.collide(rightnet_right_pole)) {
//      player1_score += 1;
//    }
//    
//    if(football.collide(leftnet_left_pole)) {
//      player2_score += 1;
//    }
}


function draw_scoreboard_1() {
    push();
    fill(0, 0, 0, 150);
    rectMode(CENTER);
    
    rect(width/2, 35, 100, 50, 10);
    
    //left scoreboard
    rect(width/2-100, 35, 65, 50, 10);
    image(red_head_img, width/2-155, 12);
    
    
//    text(":", width/2, 35)
    
    //right scoreboard
    rect(width/2+100, 35, 65, 50, 10);
    image(green_head_img, width/2+110, 12);
    
    fill(255);
    textSize(32);
    if (game_timer_val >= 10) {
        text("0:" + game_timer_val, width/2, 35);
    }
    if (game_timer_val < 10) {
        if(tts_checked == true){
            ai_voice.speak(game_timer_val + ' seconds left');
            if(game_timer_val == 0){
                ai_voice.stop();
            }
        }
        text('0:0' + game_timer_val, width/2, 35);
    }
    
    
    text(player1_score, width/2-90, 35);
    text(player2_score, width/2+90, 35);
    pop();
    

}