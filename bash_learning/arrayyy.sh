
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


# Array slice
# Given a list of countries, each on a new line, your task is to read 
# them into an array. Then slice the array and display only the elements 
# lying between positions 3 and 7, both inclusive. Indexing starts from from 0.

# Input Format: A list of country names. The only characters present in the 
# country names will be upper or lower case characters and hyphens.

# Output Format: Display the sliced portion of the array of country names, 
# with a space between each of them.

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


# CONCATENATE ARRAY 
# Given a list of countries, each on a new line, your task is to read 
# them into an array. Then, concatenate the array with itself (twice) - so 
# that you have a total of three repetitions of the original array - and 
# then display the entire concatenated array, with a space between each of 
# the countries' names.

# Input Format: A list of country names. The only characters present in the 
# country names will be upper or lower case characters and hyphens.

# Output Format: Display the entire concatenated array, with a space between 
# each of them.



for line in `cat`; do
    countries=( "${countries[@]}" $line )
done

countries=("${countries[@]}" "${countries[@]}" "${countries[@]}")
echo "${countries[@]}"

or 
array=($(cat))
Total=("${array[@]}" "${array[@]}" "${array[@]}")
echo ${Total[@]}

#  Display an element of an array
# Given a list of countries, each on a new line, your task is to read 
# them into an array and then display the element indexed at 3. 
# Note that indexing starts from 0.

# Input Format: A list of country names. The only characters present 
# in the country names will be upper or lower case characters and hyphens.

# Output Format: The element at index 3 of the array (one string).

while read word; do
    array=(${array[*]} $word)
done
echo ${array[3]}
# or 
a=($(cat))

echo ${a[3]}

# or
awk 'NR==4'

# or 
cat | head -4 | tail -1

# or  
arr=($(cat))
echo ${arr[@]:3:1}


a=($(cat))

# Count the number of elements in an Array 
# Given a list of countries, each on a new line, your task is to read 
# them into an array and then display the count of elements in that array.

# Input Format: A list of country names. The only characters present in 
# the country names will be upper or lower case characters and hyphens.

# Output Format: A single integer - the number of elements in the array.

echo ${#a[@]}

# Remove the First Capital Letter from Each Element 
# Task
# You are given a list of countries, each on a new line. Your task is to read 
# them into an array and then transform them in the following way:

# The first capital letter (if present) in each element of the array should 
# be replaced with a dot ('.'). Then, display the entire array with a space 
# between each country's names.

# Input Format: The input format consists of a list of country names each 
# on a separate line. The only characters present in the country names 
# will be upper or lower case characters and hyphens.

# Output Format: Transform the names as described and display the entire 
# array of country names with a space between each of them.

while read word; do
    array=(${array[*]} $(echo $word | sed 's/[A-Z]/./'))
done

echo ${array[@]}

# or 
readarray ary 
echo ${ary[@]/[A-Z]/.}

# or 
arr=($(cat))
echo ${arr[@]/#[A-Z]/.}

# Lonely Integer - Bash! 
# There are N integers in an array A. All but one integer occur in pairs. 
# Your task is to find the number that occurs only once.

# Input Format: The first line of the input contains an integer N, indicating 
# the number of integers. The next line contains N space-separated integers 
# that form the array A.

read 
tr ' ' '\n' | sort | uniq -u
# or 

read            # throw away useless n
a=($(cat))      # put ints in an array

# let's do it with an assoc-array... bash4 has these!
declare -A aa
for i in ${a[*]}; do
    if [ ${aa[$i]} ]; then 
        unset aa[$i]    # we've seen it second time so throw away
    else
        aa[$i]=1        # seens first time
    fi
done
echo ${!aa[*]}         # print the keys of what's left

# ************************* TAIL OF  FILE *************************
# Tail of a Text File #1
# Display the last 20 lines of an input file.

# Input Format: A text file. 

cat | tail -20


# ************************* HEAD OF  FILE *************************
# Head of a Text File 
#1
# Display the first 20 lines of an input file.
# Input Format: A text file. 

cat | head -20

# Head of a Text File #2
Display the first 20 characters of an input file.

Input Format: A text file. 

at | head -c 20

# Middle of a Text File
# Display the lines (from line number 12 to 22, both inclusive) of a given text file.

# Input Format: A text file

# Output Format: Display the lines (from line number 12 to 22, both inclusive) for 
# the input file. 

# head -n 22 | tail -n +12
# cat | head -22 | tail -11
# sed -n '12,22p'
head -n 22 | tail -n 11
