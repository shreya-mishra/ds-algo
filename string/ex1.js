
var longestCommonPrefix = function(strs) {
    var s = strs.sort();
    console.log(s);
    var pref = s[0];
    console.log(pref);
    
    for(i=1; i<s.length; i++){
        var commonPrefChars = "";
        for(j=0; j<pref.length; j++){
          console.log(pref[j])
            if(pref[j] === s[i][j]){
                commonPrefChars += s[i][j];
            }
            else break;
        }
        
        pref = commonPrefChars;    
    }
    
    return pref;  
        
    };
    
    let strs = ["flower","flow","flight"]
    longestCommonPrefix(strs)