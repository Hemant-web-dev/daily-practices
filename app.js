let reversed = ""
const reversi = (strings) =>{
    ;
for(i=strings.length-1;i>=0;i--){
 reversed += strings[i]
}
return reversed
}
console.log(reversi("hello"))
