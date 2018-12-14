// add solution here
function theBeatlesPlay (musicians,instruments) {
  var letsmakemusic=[]
  var str1,str2,str3
  for (i=-1;i<musicians.length;i++) {
    str1=musicians[i]
    str2=instruments[i]
    str3=str1.concat(" plays ",str2)
    letsmakemusic[i]=str3
  }
  return letsmakemusic
}