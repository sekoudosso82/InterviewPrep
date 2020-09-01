function solution(A, B, C){
     
    rt = "" 
    while (0 < A || 0 < B || 0 < C) {
        // # More 'b', append "bba" 
        if ((A < B)&&(C < B)) {
            if (0 < B){
                rt = rt +'b'
                B -= 1
            } 
            if (0 < B){
                rt += 'b'
                B -= 1
            }
            if (0 < A){
                rt += 'a'
                A -= 1
            }else if (0<C){
                rt += 'c'
                C -= 1
            }
        }
        // # More 'a', append "aab" 
        else if ((B < A) && (C < A)){
            if (0 < A){
                rt += 'a'
                A -= 1
            } 
            if (0 < A){
                rt += 'a'
                A -= 1
            }
            if (0 < B){
                rt += 'b'
                B -= 1
            } else if (0 < C){
                rt += 'c'
                C -= 1
            } 
        } 
        // # More 'c', append "ccb" 
        else if ((B < C) && (A < C)){
            if (0 < C){
                rt += 'c'
                C -= 1
            } 
            if (0 < C){
                rt += 'c'
                C -= 1
            }
            if (0 < B){
                rt += 'b'
                B -= 1
            } else if (0 < A){
                rt += 'a'
                A -= 1
            } 
        } 
   
        // # Equal number of 'a' 'b' and 'c'
        // # append "ab" 
        else if (0 < B){
                rt += 'b'
                B -= 1
                if (0 <B){
                    rt += 'b'
                B -= 1
                } 
        }else if (0 < C){
                rt += 'c'
                C -= 1
                if (0 < C){
                    rt += 'c'
                    C -= 1
                } 
        }else if (0 < A){
                rt += 'a'
                A -= 1
                if (0 < C){
                    rt += 'c'
                    C -= 1
                } 
        }
        
    } 
    while (rt.indexOf('aaa')!== -1){
        rt=rt.slice(0,-1)
    }
    while (rt.indexOf('bbb')!== -1){
        rt=rt.slice(0,-1)
    }
    while (rt.indexOf('ccc')!== -1){
        rt=rt.slice(0,-1)
    }
    
    
    console.log(rt) 

}

solution(6,1,1)
solution(1,3,1)
solution(0,1,8)