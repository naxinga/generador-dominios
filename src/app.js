var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['acordes','puedes',"azar"];
var dom = [".es", ".com", ".ar"]

for (var i of pronoun) {
  for (var i2 of adj){
    for (var i3 of noun){
      var fin = i3.substring(0,10)
      for (var domi of dom){
        var finDomi = domi.substring(1,10)
        var a = fin[(fin.length)-1];
        var b = fin[(fin.length)-2];
        if ((fin.includes( a, -1) && finDomi.includes( a, -1)) && (fin.includes( b, -2) && finDomi.includes( b, -2))){
          var probando = fin.split("");
          probando.pop();
          probando.pop();
          var i6 = "";
          for( i4 of probando){
            var i6= i6 + i4;
         }
         console.log(i+i2+i6+domi);
        }else{
          console.log(i+i2+i3+domi);
        }
      }     
  }
 }
}
