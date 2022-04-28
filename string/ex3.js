var wordPattern = function(pattern, s) {

    const hash = {};
    const words = s.split(" ");
    const set = new Set();
     
    if (pattern.length !== words.length) return false
     
       for (let i = 0; i < pattern.length; i++) {
           const char = pattern[i]
           
           if (hash[char] && hash[char] !== words[i]) return false
           if (!hash[char] && set.has(words[i])) return false
           
           hash[char] = words[i]
           set.add(words[i])
       }
       return true   
   };
   
   var pattern = "abba", s = "dog cat cat dog";
   
   wordPattern(pattern,s)