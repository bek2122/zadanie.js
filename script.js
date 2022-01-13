var h = +prompt (' введите ');
var w = +prompt (' введите ');

function area(h,w) {
   var perimetrPryam = (h + w )*2
   var ploshadKvad = (h * w)
   if(h == w) {
      console.log(perimetrPryam);
   }else if(h != w) {
       console.log(ploshadKvad);
   }
}

area(h,w)








