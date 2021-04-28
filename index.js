function translate(string){
  
  // console.log(string);
  string = string.toLowerCase();
 let vowels = ["a","i","e","o","u"];
 firstVowel = 0;
 if (vowels.includes(string[0])){
   return string + "way";
 }else
for (let letters of string){
  if(vowels.includes(letters)){
    firstVowel=string.indexOf(letters);
    break;
  }
}
return string.slice(firstVowel) + string.slice(0,firstVowel) + "ay"
}

module.exports.translate = translate;