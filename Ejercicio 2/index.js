
var n1 = +prompt(`Ingrese el primer número:`);
var n2 = +prompt(`Ingrese el segundo número:`);
var operacion = prompt(`Ingrese el número de la operación a realizar:
    1) Suma
    2) Resta
    3) Multiplicación
    4) División
    5) Módulo
`);

if (n1>0 && n2>0 && n1!=n2){
  var resultado = 0;
    switch(operacion){
          case '1':
          resultado= n1+n2;
          alert('el resultado de la suma es '+ resultado);
          break;
          case '2':
            resultado= n1-n2;
          alert('el resultado de la resta es '+ resultado);
          break;
          case '3':
            resultado= n1*n2;
          alert('el resultado de la multiplicación es '+ resultado);
          break;
          case '4':
            resultado= n1/n2;
          alert('el resultado de la división es '+ resultado);
          break;
          case '5':
            resultado= n1%n2;
          alert('el resultado del módulo es '+ resultado);
          break;
  }
}else{
    alert(`No cumple con el formato mínimo para poder hacer la operación
  Favor tratar con números mayores a cero y distintos entre si!`)
}

