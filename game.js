var model={
 boardsize:7,
 numships:3,
 shiplength:3,
 shipssunk:0,
 ships:[ { locations:[0,0,0],hits:["","",""]},
         { locations:[0,0,0],hits:["","",""]},
		  { locations:[0,0,0],hits:["","",""]}];
		  fire:function(guess){
		  for(var i=0;i<this.numships;i++){
		   var ship=this.ships[i];
		   var index=ship.locations.indexOf(guess);
		   if(index >= 0){
		   ship.hits[index]="hit";
		   if(this.issunk(ship)){
		   this.shipssunk++;}
		   return true;
		   }
		   }
		   return false;
		   },
		   fuction parseguess(guess){
			   var alphabet=["A","B","C","D","E","F"];
		     if(guess===null|| guess.legth!==2){
				 alert("entry not valid");
			 } else{ 
			       firstchar=guess.charAt(0);
				   var row=alphabet.indexOf(firstchar);
				   var column= guess.charAt(1);
			 return row + column;}
		   processguess:function(guess){
			    var location= parseguess(guess);
				if(location)
					this.guesses++;
				var hit=model.fire(location);
				if(hit&&model.shipsunk===model.numships){
					view.displaymessage("u sank my battleship in this,guesses + guesses)"
				}
		   }
		   }
};
             
		   function handlefirebutton(){
			   var guessinput=document.getElementById("guessinput");
			   var guess=guessinput.value;
		   guessinput.value="";}
		   issunk:function(ship){
		   for(var i=0;i<this.shiplength;i++){
		   if(ship.hits[i]!=="hit"){
		   return false;}
		   }
		   return true;}
		   generateshiplocations:functions(){
		   var locations;
		   for(var i=0;i<this.numships;i++){
		   do{
		    locations=this.generateship();
			} while(this.collision(locations));
			this.ships[i].locations=locations;}
			},
			generateship:function(){
			 var direction=Math.floor(Math.random()*2);
		   var row,col;
		   if(direction==1){
		   row=Math.floor(Math.random()*this.boardsize);
		   col=Math.floor(Math.random()*(this.boardsize-this.shiplength);
		   }else
		   { row=Math.floor(Math.random()*this.boardsize-this.shiplength);
		   col=Math.floor(Math.random()*(this.boardsize);
		   }
		   var newshiplocations=[];
		   for(var i=0;i<this.shiplength;i++){
		   if(direction==1){
		   newshipplocation.push(row + "" + (col+i));
		   }
		    else{
			 newshiplocations.push((row+i) + "" + col);
			 }
			 }
			 return newshiplocations;
			 },
			 collision:function(locations){
			  for(var i=0;i<this.numships;i++){
			   var ship=model.ships[i];
			   for(var j=0; j<locations.length;j++){
			   if(ship.locations.indexOf(locations[j]>=0){
			   return true;}
			   }
			   }
			   return false;
			   }
			   };
			   function init(){
               var firebutton=document.getElementById("firebutton");
                firebutton.onclick=handlefirebutton;
                var guessinput=document.getElementById("guessinput");
                 guessinput.onkeypress=handlekeypress;
                 model.generateshiplocations();
}				 
    	   window.onload=init;