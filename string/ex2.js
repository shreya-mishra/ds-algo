var commonChars = function(words) {
    let res = [];
    for(let char of words[0]){
          let isCommon = true

      //b e l l a --> b --> e
        for(let i=1;i<words.length;i++){ 
          // [bella]
          // [label]
          // [roller]
            if(words[i].includes(char)){
              // bella.includes(b) --> t
              // label.includes(b) --> t
              // roller.includes(b) --> t
                words[i] = words[i].replace(char, '');
              // bella = bella.replace(b,'') => [b,e,a]
              // label = label.replace(b,'') => [l,a,e,l]
              // roller = [r,o,e,r]
            }else{
              isCommon = false;
              
            }
        }
      if(isCommon)  res.push(char) 
    }
  return res;
};



let words = ["bella","label","roller"]

commonChars(words)