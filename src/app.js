var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['acordes','puedes',"azar"];
var dom = [".es", ".com", ".ar"]

//function incluir (ar1,ar2){
//  if ((ar1.includes( 's', -1) && ar2.includes( "s", -1)) && (ar1.includes( 'e', -2) && ar2.includes( "e", -2))){
//    console.log(ar1);
//    //console.log(i+i2+i3+domi);
//}else{
//    //console.log("Vas mal niño");
//}
//  return
//}

for (var i of pronoun) {
  for (var i2 of adj){
    for (var i3 of noun){
      var fin = i3.substring(0,10)
      for (var domi of dom){
        var finDomi = domi.substring(1,10)
        var a = fin[(fin.length)-1];
        var b = fin[(fin.length)-2];
        if ((fin.includes( a, -1) && finDomi.includes( a, -1)) && (fin.includes( b, -2) && finDomi.includes( b, -2))){
          fin.reverse();
          //console.log(fin);
          //console.log(i+i2+i3+domi);
        }else{
          //console.log(i+i2+i3+domi);
        }
      }     
  }
 }
}