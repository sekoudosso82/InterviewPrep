# Write a Bash script which accepts name as input 
# and displays a greeting: "Welcome (name)"
read name
    echo Welcome $name

# Your task is to use for loops to display 
# only odd natural numbers from 1 to 99.
for i in {1..99..2} 
do
    echo $i
done

# Use a for loop to display the natural numbers from 1 to 50.
for i in {1..50} 
do
    echo $i
done

# Given two integers, X and Y, find their 
#     sum, difference, product, and quotient.

# Input Format

# Two lines containing one integer each (X and Y, respectively).
read firsti
read secondi
summ=$(($firsti+$secondi))
    echo $summ
sub=$(($firsti-$secondi))
    echo $sub
mult=$(($firsti*$secondi))
    echo $mult
div=$(($firsti/$secondi))
    echo $div

# Given two integers, X and Y, identify whether X < Y or X > Y or X = Y.
# Exactly one of the following lines:
#     - X is less than Y
#     - X is greater than Y
#     - X is equal to Y
# Input Format
#     Two lines containing one integer each (X and Y, respectively). 
read firsti
read secondi
if [ $firsti -gt $secondi ]; then
    echo X is greater than Y 
elif [ $firsti -eq $secondi ]; then
    echo X is equal to Y 
else [ $firsti -lt $secondi ]
    echo X is less than Y 
fi

# Read in one character from STDIN.
# If the character is 'Y' or 'y' display "YES".
# If the character is 'N' or 'n' display "NO".
# No other character will be provided as input.

read char
case $char in
    Y|y)echo "YES";;
    N|n)echo "NO";; 
esac

# given three integers (X, Y, and Z) representing the three sides 
# of a triangle, identify whether the triangle is scalene, isosceles, 
# or equilateral.

#     If all three sides are equal, output EQUILATERAL.
#     Otherwise, if any two sides are equal, output ISOSCELES.
#     Otherwise, output SCALENE.

# Input Format

# Three integers, each on a new line.

read firsti
read secondi
read thirdi

if [ $firsti -eq $secondi ]; then
    if [ $secondi -eq $thirdi ]; then
        echo EQUILATERAL
    else 
        echo ISOSCELES
    fi
elif [ $secondi -eq $thirdi ]; then
        echo ISOSCELES
elif [ $firsti -eq $thirdi ]; then
        echo ISOSCELES
else 
    echo SCALENE
fi

# A mathematical expression containing +,-,*,^, / and parenthesis 
# will be provided. Read in the expression, then evaluate it. 
# Display the result rounded to 3 decimal places.
# Constraints
#     All numeric values are <= 999.
# Sample Input
#     5+50*3/20 + (19*2)/7 => 17.929
#     -105+50*3/20 + (19^2)/7 => -45.929
#     (-105.5*7+50*3)/20 + (19^2)/7 => 22.a46


read line 
NO_WHITESPACE="$(echo -e "${line}" | tr -d '[:space:]')"
# result=$(echo "scale=3; $NO_WHITESPACE" | bc )
result=$(echo "$NO_WHITESPACE" | bc -l )
result_rounded=`printf "%.3f" $result`

echo $result_rounded

# Given N integers, compute their average, rounded to three decimal places.

# Input Format
#     The first line contains an integer, N.
#     Each of the following N lines contains a single integer.

# Output Format
#     Display the average of the N integers, rounded off to 
#     three decimal places. 

read total_num
summ=0
declare -i count=0

while [ $count -lt $total_num ];do
    read line
    summ=$(($summ+$line))
    $count+=1
done 

average=$(echo "$summ/$total_num" | bc -l )
average_rounded=`printf "%.3f" $average`

echo $average_rounded


