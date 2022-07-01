var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['acordes','puedes',"azar"];
var dom = [".es", ".com", ".ar"]

for (var pronombre of pronoun) {
  for (var adjetivo of adj){
    for (var nombre of noun){
      var fin = nombre.substring(0,10)
      for (var domi of dom){
        var finDomi = domi.substring(1,10)
        var a = fin[(fin.length)-1];
        var b = fin[(fin.length)-2];
        if ((fin.includes( a, -1) && finDomi.includes( a, -1)) && (fin.includes( b, -2) && finDomi.includes( b, -2))){
          var removeEnd = fin.split("");
          removeEnd.pop();
          removeEnd.pop();
          var dominioFin = "";
          for( index of removeEnd){
            var dominioFin= dominioFin + index;
         }
         console.log(pronombre+adjetivo+nombre+domi);
        }else{
          console.log(pronombre+adjetivo+nombre+domi);
        }
      }     
  }
 }
}
