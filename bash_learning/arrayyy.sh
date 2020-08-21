
# print array content
# Given a list of countries, each on a new line, your task is to read them 
# into an array and then display the entire array, with a space between 
# each of the countries' names.

# Input Format: A list of country names. The only characters present in the country names will be upper or lower case characters and hyphens.

# Output Format: Display the entire array of country names, with a space between each of them.

declare -i index=0
declare -a arr
while read line; do
    arr[i]=$line
    i+=1
done

echo ${arr[@]}


Array slice
Given a list of countries, each on a new line, your task is to read 
them into an array. Then slice the array and display only the elements 
lying between positions 3 and 7, both inclusive. Indexing starts from from 0.

Input Format: A list of country names. The only characters present in the 
country names will be upper or lower case characters and hyphens.

Output Format: Display the sliced portion of the array of country names, 
with a space between each of them.

# arr=($(cat))
# echo ${arr[@]:3:5} 


# while read line
# do 
#  my_array+=( $line ) 
# done

# for i in {3..7}
# do
#     printf -- '%s ' "${my_array[$i]}"
done

while read line
do 
 my_array+=( $line ) 
done
echo ${my_array[@]:3:5}

# FIlter Array
# Task: You are given a list of countries, each on a new line. Your task is 
# to read them into an array and then filter out (remove) all the names 
# containing the letter 'a' or 'A'.

# Input Format: The input format consists of a list of country names, each 
# on a separate line. The only characters present in the country names 
# will be upper or lower case characters and hyphens.

# Output Format: From the given list, remove the names that contain 'a' or 'A' 
# in them. If there are no names left after removing these characters, you 
# should display a blank line.

while read line
do 
 my_array+=( $line ) 
done
echo  ${my_array[@]/*[aA]*/}cat > myfile
awk '!/a|A/' myfile

# or 
arr=($(cat))
echo ${arr[@]/*[aA]*/}

# or 
cat > myfile
awk '!/a|A/' myfile

# or 

while read word; do
    array=(${array[*]} $word)
done

for var in ${array[*]}; do
    if echo $var | grep 'A' > /dev/null ; then
        continue
    elif echo $var | grep 'a'> /dev/null; then 
        continue
    else
        echo $var
    fi
done