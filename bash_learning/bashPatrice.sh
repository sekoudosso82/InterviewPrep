# declare an arr
arr1=(asd aws qqq)
echo "index zero ${arr1[0]}"

arr1=(1 2 3)
echo "index zero ${arr1[0]}"

# arr length
echo "length of this array is ${#arr1[@]}"
# print array content
echo ${arr1[@]}

# print each element in arr1
echo "print each element in arr1"
arr1=(jack ben mark)
echo "index zero ${arr1[0]}"
declare -i i=0
for((i=0; i<${#arr1[@]}; i++))
do
    echo ${arr1[$i]};
done

echo "end for loop"

