# you are climbing a stairs. you can either take 1 step or 2 steps. How many ways can we reach n steps?

# climb(3) ---> 3.    - 111 12 21
# climb(4) ---> 5.    - 1111 121 121 22 211

# climb(6) ---> 13

def climb(n)
    arr = []
    if n===1 
      return 1 
    elsif n===2 
        return 2
    else 
      return climb(n-1) + climb(n-2)
    end  
end

  puts (climb(4))