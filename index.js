function theBeatlesPlay(musicians,instruments) {
  var letsmakemusic=[]
  var str1,str2,str3
  for (i=0;i<musicians.length;i++) {
    str1=musicians[i]
    str2=instruments[i]
    str3=str1.concat(" plays ",str2)
    letsmakemusic[i]=str3
  }
  return letsmakemusic
}

function johnLennonFacts(facts) {
  var str 
  var i=0
  while (i<facts.length) {
    str=facts[i]
    str=str.concat("!!!")
    facts[i]=str
    i++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var array=[]
  do {
    array[number]="I love the Beatles!"
    number++
  } while ([number<15])
  return array
}