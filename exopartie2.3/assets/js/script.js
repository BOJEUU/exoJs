var a=prompt("nombre")
function testNum(a) {
 let result;
    if (a> 0 && a<=3) {
      result = 'nul';
    } else if (a >3 && a<=6){
      result = 'moyen';
    } else if (a>6 && a<=8){
      result = 'assez Bien';
    } else if (a>8 && a<10){
      result = 'bien';
    } else if(a>=10){
      result = 'excellent';
    }
    
    return result;
  }
  console.log(testNum(a));
  alert(testNum(a))
