


# Write an `dups` method that will accept an array and returns a hash containing the indices
# of all duplicate elements. The keys are the duplicate elements; the values
# are arrays of their indices in ascending order.
# e.g. [1, 3, 4, 3, 0, 3, 0] => { 3 => [1, 3, 5], 0 => [4, 6] }

def dups (arr)
    # save all entrie in an object (entrie => key , value: array containing different index of entrie)
    # check the different keys which values.length > 1 
    # use a new object to save key and value 
    obj = {}
    
    # test_obj = {
    #     1 => [0],
    #     3 => [1,3,5],
    #     4 => [2],
    #     0 => [4,6]
    # }
    for i in 0..(arr.length-1) 
        if obj.has_key? arr[i]
            obj[arr[i]].push(i)
        else 
            obj[arr[i]] = [i]
        end 
    end 
    result = obj.select{ |key, value| value.length > 1}
    return result 
end

# p dups([1, 3, 4, 3, 0, 3, 0])


