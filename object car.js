var fiat={
 model:"500",
 make:"First",
 year:1955,
 color: "tan",
 passengers: 5,
 convertible:true,
 mileage:25000,
 
 started:false,
 fuel:0,
 start:function(){
 this.started=true;},
 stop:function(){
 this.started=false;},
 drive:function(){
 if(this.started){
 alert(this.model + " " +this.make + "goes zoom zoom ");
 }
 else{
 alert("u need to start the engine first");}
 }
 };
 
 
 
