

# Learning command line tools for managing 
# the file system in Bash or alternative shells 
# like, Zsh, can give you more speed and 
# control over your workflow. Here is a 
# low down of a top 10 to use — or to try 
# for the first time.

# What's Bash ?
# Bourne Again Shell is a popular interactive command line interpreter.
# Bash has been created by Thompson Shell(first UNIX shell) in 1971.

# Common Bash commands
# clear => clear the screen
# ls => (ls; ls -l; ls tree ...) Lists the folder and file names in the current working directory.
# cd => Change directory
    # (cd tree) changes directory to tree

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

# if statement syntax
# if expression [[string]]/((numeric))
# then 
#     echo
# else
#     echo
# fi

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
    # while expression; do 
    #     echo 
    #     increase counter
    # done
declare -i i=1 
while [ $i -le 10 ]; do
    echo i:$i
    ((i+=1))
done

# until loop 
# until loop syntax 
    # until expression; do 
    #     echo 
    #     increase counter
    # done
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

