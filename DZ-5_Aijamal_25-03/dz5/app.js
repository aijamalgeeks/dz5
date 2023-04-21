const arr = ['фронтенд', 'апрель', 'урок','привет','спасибо','15июля','мама']

function reversing(mass){
  let answer = []
  for(j of mass){
    var a = [];
    for (i = 0; i < j.length; i++){
      a[i] = j[(j.length - 1) - i]
    }
    answer.push(a.join(''))
  }
  console.log(answer)
}
reversing(arr)