var player = function(){
    this.health = 10;
    this.ac = 10;
    this.attk = 10;
    this.dmg = 1;
}

var p1 = new player();

var monster = function(lvl){
    this.health = 5 + lvl;
    this.ac = 10 + lvl;
    this.attk = 10 + lvl;
    this.dmg = 1 + lvl;
}

var m1 = new monster(1);

$('document').ready(function(){
    refreshUi('<div>A monster appears!</div>');

    
    $('#btn-attk').click(function(){
        var output ='';
        var diceRoll = d20()+p1.attk;
        output +='<div>You attack the Monster! (Roll: '+diceRoll+')</div>';
        
        if(diceRoll>m1.ac){
            m1.health-=p1.dmg;
            output+='<div>You hit! (Dmg: '+p1.dmg+')</div>';
        }else{
            output+='<div>You missed!</div>';
        }
        
        
        if(m1.health>0){
            diceRoll = d20()+m1.attk;
            output+='<div>The monster attacks you! (Roll: '+diceRoll+')</div>';
            if(diceRoll>p1.ac){
                output+='<div>The monster hits! (Dmg: '+m1.dmg+'</div>';
                p1.health-=m1.dmg;
            }else{
                output+='<div>You dodge the attack!</div>';
            }
        }else{
            output+='<div>You defeated the monster!</div>';
        }
        
        refreshUi(output);
        
    });
});

function d20(){
    return Math.floor(Math.random()*20);
}

function refreshUi(output){
    $('#player-health').html(p1.health);
    $('#player-ac').html(p1.ac);
    $('#player-attack').html(p1.attk);
    $('#player-dmg').html(p1.dmg);
    
    $('#game-console').html(output);
    $('#game-console').append('<div>Monster Health: '+m1.health+'</div>');
    
}



