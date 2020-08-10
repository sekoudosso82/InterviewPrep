



# What's Bash ?
# Bourne Again Shell is a popular interactive command line interpreter.
# Bash has been created by Thompson Shell(first UNIX shell) in 1971.

# Learning command line tools for managing 
# the file system in Bash or alternative shells 
# like, Zsh, can give you more speed and 
# control over your workflow. Here is a 
# low down of a top 10 to use — or to try 
# for the first time.

# Common Bash commands
# clear => clear the screen
# ls => (ls; ls -l; ls tree ...) Lists the folder and file names in the current working directory.
# cd => Change directory
#     (cd tree) changes directory to tree

# mkdir => Make new directory 
#     (mkdir people) Make new directory people
# rmdir => remove directory
#     (rmdir people) remove people directory

# touch => create new file(s)
#     (touch apple)
#     (touch {apple, banana, cherry})
#     (touch file_{1..100})
#     (touch file_{01..100})
# cat => many purpose  concatenate or see files content
#     cat file.txt

# mv => move file and folder
#     mv ../folder/*.js ../folder1

# cp =>  copy file(s) from 1 file to anotther
#     (cp maple.txt new_maple.txt) copy maple.txt to new_maple.txt
# cp -r => copy folder from 1 to another

# rm => removes files
#     (rm maple.txt) delete maple.txt file
#     rm * delete all files in a directory
# rm -r => remove folder
#     rm -r ../folder_copy

# chmod => Change mode so you can set permissions for read, write and execute for the user
# man => (man ls) Manuals for a command can be shown with this instruction.
# echo => print outt to the screen
#     echo "abc"
#     echo {1..10}
#     echo {1..10..2}
#     echo {A..Z} echo {A..z} echo {Z..a} echo {A..z..2}

# more => print out file content page by page
#     (more my_file.txt)
# head => print out beginning lines 
#     (head my_file.txt)
# tail => print out few last lines 
#     (tail my_file.txt)

#09. How to take input from the terminal in bash?

`read` command is used in a bash script to take input from the terminal.
example 
#!/bin/bash
#Print message
echo "Enter your name"
#Take input from the user
read name
# Print the value of $name with other string
echo "Your name is $name"

#06. How to add comments in a bash script?

# Single line and multi-line comments can be used in 
# bash script. ‘#‘ symbol is used for single-line 
# comment. ‘<<’ symbol with a delimiter and 
# ‘:’ with single (‘) are used for adding multi-line 
# comment.
example
#!/bin/bash
#Print the text [Single line comment]
echo "Bash Programming"
<<addcomment
Calculate the sum
Of two numbers [multiline comment]
addcomment
num=25+35
echo $num
: '
Combine two
String data [multiline comment]
'
String="Hello"
echo $string" World"

#ARRAYYYYYYYYY
# How to declare and access an array variable in bash?

# Both numeric and associative arrays are supported by a 
# bash script. An array variable can be declared with and 
# without declare command. –a option is used with declare 
# command to define a numeric array and –A option is used 
# with declare statement to define an associative array in 
# bash. Without declare command, the numeric array can be 
# defined only in bash.

# Example:
#!/bin/bash                                                                
                                                                           
# Declare a simple numeric array
arr1=( CodeIgniter Laravel ReactJS )

# Print the first element value of $arr1                                        
echo ${arr1[0]}      
                 
# Declare a numeric array using declare command                                    
declare -a arr2=( HTML CSS JavaScript )  
     
# Print the second element value of $arr2                            
echo ${arr2[1]}              
           
# Declare an associative array using declare statement                                  
declare -A arr3=( [framework]=Laravel [CMS]=Wordpress [Library]=JQuery )

# Print the third element value of $arr3    
echo ${arr3[Library]}

# if statement syntax
# if expression [[string]]/((numeric))
# then 
#     echo
# else
#     echo
# fi
if [ condition ];
then
statements
fi

if [ condition ]; then
statements 1
else
statement 2
fi

declare -i a=5 
if [ $a -gt 4 ]
then 
    echo $a is great than 4!
else
    echo $a is not great than 4!
fi

# if elif statement syntax
# if expression; then 
#     echo
# elif expression; then
#     echo
# fi

if [ condition ]; then
statement 1
elif [ condition ]; then
statement 2
….
else
statement n
fi

example:
#!/bin/bash

# Assign a value to $n
n=30
# Check $n is greater than 100 or not
if [ $n -gt 100 ]; then
    echo "$n is less than 100"
# Check $n id greater than 50 or not
elif [ $n -gt 50 ]; then
    echo "$n is less than 50"
else
    echo "$n is less than 50"
fi

declare -i b=4 
if [ $b -gt 4 ]
then 
    echo $b is great than 4!
elif [ $b -lt 4 ]; then
    echo $b is not great than 4!
elif [ $b -eq 4 ]; then
    echo $b is equal to 4!
fi 
# while loop 
# while loop syntax 
#     while expression; do 
#         echo 
#         increase counter
#     done
declare -i i=1 
while [ $i -le 10 ]; do
    echo i:$i
    ((i+=1))
done

# until loop 
# until loop syntax 
#     until expression; do 
#         echo 
#         increase counter
#     done
declare -i j=0 
until [ $j -le 10 ]; do
    echo i:$j
    ((j+=1))
done

# for loop syntax
# for i in 123 -- 
# for i in {1..100} -- for i in {1..100..2}
# for ((i=1; i<=10; i++))
# do
#     echo $i
# done

declare -a arrBB # declare array
arrBB=("apple" "banana" "cherry")
declare -i i=0
for ((i=0; i<${#arrBB[@]}; i++))
do  
    echo ${arrBB[$i]}
done

# CASE statement
# var to test
# case $var in 
#     test1) echo;;
#     test2) echo;;
#     test3) echo;;
# esac

q="dog"
case $q in 
    cat) echo "feline";;
    dog|puppy) echo "Canine";;
    *) echo "no match";;
esac

#16. Which conditional statement can be used 
# as an alternative to if-elseif-else statements 
# in bash?

# ‘case’ statement can be used as an alternative 
# tp if-elseif-if statement. The syntax for ‘case’ 
# statement in bash scripts is different from the 
# switch-case statement of other programming languages. 
# ‘case’ block is closed by ‘esac’ statement in bash. 
# No ‘break‘ statement is used inside ‘case‘ block to 
# terminate from the block.

Syntax:
case  in
Match pattern 1) commands;;
Match pattern 2) commands;;
……
Match pattern n) commands;;
esac

#!/bin/bash
#Initialize the variable $ticket
ticket=101
# Compare the value of $ticket with 23, 101 and 503
case $ticket in
23)
# Print message if the value is 23  
echo "You got the first prize";;
101)
# Print message if the value is 101
echo  "You got the second prize";;
503)
# Print message if the value is 503
echo  "You got the third prize";;
*)
# Print message if the value does not match with 23, 101 and 503
echo "Sorry, try for the next time"
exit 0;;
esac

# What different types of loops can be used in bash?

# Three types of loops are supported by a bash script. 
# These are while, for and until loops. Loops in bash 
# check the condition at the start of the loop. While 
# loop works until the condition remains true and 
# until loop works until the condition remains false. 
# There are two ways to use for loop. One is general 
# for loop that contains three parts and another is 
# for-in loop. The uses of these three loops are shown 
# in the following example.

Example:
#!/bin/bash
# Initialize $n
n=5
# Calculate the square of 5-1 using while loop
while [ $n -gt 0 ]
do
   sqr=$((n*n))
   echo "The square of $n is $sqr"
   ((n--))
done

# Calculate the square of 5-1 using for loop
for (( i=5; i>0; i-- ))
do
   sqr=$((i*i))
   echo "The square of $i is $sqr"
done

# Initialize $x
x=5

# Calculate the square of 5-1 using until loop
until [ $x -le 0 ]
do
   sqr=$((x*x))
   echo "The square of $x is $sqr"
   ((x--))
done

# function syntax

# function function_name {
#     body
# }

# call the function by it's name

function greet {
    echo "Hi there"
}

greet

# function with arguments 
# function function_name {
#     body
# }

# call the function by it's name
# function_name arg1, arg2 ...


function greet1 {
    echo "Hi, $1 "
    echo "Hi, $2 "
}

greet1 scott Sekou

# another example
function numberthings {
    declare -i i=1
    for f in $@; do
        echo $i: $f
        ((i+=1))
    done
}
#numberthings $(ls)
numberthings scott Sekou Ben Jack

# array syntax
# declare -a a=()
declare -a bbb
bbb=("apple" "banana" "cherry")
echo " array elements"
declare -i i=0
for ((i=0; i<${#bbb[@]}; i++ )) 
do
    echo ${bbb[$i]}
done
echo " array element at position 2"
echo ${bbb[2]}
bbb+=("mango") # add  at the end of the array
echo " array element at position 3"
echo ${bbb[3]}

echo " array all elements "
echo ${bbb[@]} # print all elemeng in the array

bbb+="mango" # without () add to the first element of the array
echo " array element at position 0"
echo ${bbb[@]}

bbb[4]="kiwi"
echo " array element at position 4"
echo ${bbb[@]}

bbb[8]="Monday"
echo " array elements"
echo ${bbb[@]}

bbb[10]="Friday"
echo " array elements"
echo ${bbb[@]}

echo " array length"
echo ${#bbb[@]}

 How to cut and print some part of a string data in 
 bash?

 Example:
 #!/bin/bash
# Initialize a string value into $string
string="Python Scripting Language"
# Cut the string value from the position 7 to the end of the string
echo ${string:7}
# Cut the string value of 9 characters from the position 7
echo ${string:7:9}
# Cut the string value from 17 to 20
echo ${string:17:-4}

# Mention some ways to perform arithmetic operations in bash?

# Arithmetic operations can be done in multiple ways in bash. 
# ‘let’, ‘expr’, ‘bc’ and double brackets are the most 
# common ways to perform arithmetic operations in bash. 
# The uses of these commands are shown in the 
# following example.

Example:

#!/bin/bash                                                                      
# Calculating the subtraction by using expr and parameter expansion
var1=$( expr 120 - 100 )
# print the result
echo $var1
# Calculate the addition by using let command
let var2=200+300
# Print the rsult
echo $var2
# Calculate and print the value of division using ‘bc’ to get the result
# with fractional value
echo "scale=2; 44/7" | bc
# Calculate the value of multiplication using double brackets
var3=$(( 5*3 ))
# Print the result
echo $var3

# How to check a directory exists or not using bash?

# Bash has many test commands to check if a file or 
# directory exists or not and the type of the file. 
# ‘-d’ option is used with a directory path as a 
# conditional statement to check if the directory 
# exists or not in bash. If the directory exists, 
# then it will return true otherwise it will return 
# false.

#!/bin/bash                                                                  
# Assign the directory with path in the variable, $path
path="/home/ubuntu/temp"
# Check the directory exists or not
if [ -d "$path" ]; then
   # Print message if the directory exists
   echo "Directory exists"
else
   # Print message if the directory doesn’t exist
   echo "Directory not exists"
fi

# How can a bash script be terminated without executing all statements?

# Using ‘exit’ command, a bash script can be terminated without executing 
# all statements.

Example:
#!/bin/bash

# Initialize the filename to the variable, $filename
filename="course.txt"

# Check the file exists or not by using -f option
if [ -f "$filename" ]; then
    # Print message if the file exists
    echo "$filename exists"
else
    # Print message if the file doesn't exist
    echo "$filename not exists"
    # Terminate the script
    exit 1
fi

# Count the length of the file if the file exists
length=`wc -c $filename`

# Print the length of the file
echo "Total characters - $length"

# What is meant by ‘bc’ and how can this command can 
# be used in bash?

# The full form of ‘bc’ is Bash Calculator to perform 
# arithmetic operations more accurately in bash. 
# The fractional part is omitted if any arithmetic 
# operation is done in bash by using ‘expr’ command. 
# The fractional part can be rounded also by using 
# scale value with ‘bc’ command.

Example:
#!/bin/bash
# Calculate the division without the fractional value
echo "39/7" | bc
 
# Calculate the division with the full fractional value
echo "39/7" | bc -l
 
# Calculate the division with three digits after the decimal point
echo "scale=3; 39/7" | bc

How to find out the length of a string data? 

‘expr’, ‘wc’ and ‘awk’ commands can be used to find out the length of a string data in bash. ‘expr’ and ‘awk’ commands use length option, ‘wc’ command uses ‘–c’ option to count the length of the string.

Example:

The uses of the above commands are shown in the following script.
#!/bin/bash                      
# Count length using `expr` length option
echo `expr length "I like PHP"`
# Count length using `wc` command
echo "I like Bash" | wc -c
# Count length using `awk` command
echo "I like Python" | awk '{print length}'

