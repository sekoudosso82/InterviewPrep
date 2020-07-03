function solution(s) {
    var c = s[0];
    let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
                    'o','p','q','r','s','t','u','v','w','x','y','z'] 
                    
    let upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
                    'O','P','Q','R','S','T','U','V','W','X','Y','Z']
                    
    let dig = ['0','1','2','3','4','5','6','7','8','9']
    
    if (upCase.includes(c)) {  // please fix condition
        return 'upper';
    } else if (lowerCase.includes(c)) {  // please fix condition
        return 'lower';
    } else if (dig.includes(c)) {  // please fix condition
        return 'digit';
    } else {
        return "other";
    }
}
