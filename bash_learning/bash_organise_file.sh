# Organize a list of files by their extensions 
# into new folders in the current directory 
# using bash 

#!/bin/bash                      

path="/home/ubuntu/directory"
for x in path
do
    if (-d "$path/x") then
        mv x "$path/x"
    else 
        mkdir "$path/x"
        mv x "$path/x"
    fi
done

for file in *.mp3 ; do
    [ -f "$file"] || continue
        mv -- "$file" music
done
for file in *.flac ; do
    [ -f "$file"] || continue
    mv -- "$file" music
done

for file in *.png ; do
    [ -f "$file"] || continue
    mv "$file" images
done
for file in *.jpg ; do
    [ -f "$file"] || continue
    mv "$file" images
done

for file in *.avi ; do
    [ -f "$file"] || continue
    mv "$file" videos
done
for file in *.mov ; do
    [ -f "$file"] || continue
    mv "$file" videos
done

for file in *.log
do
        rm "$file"
done
    










    



declare -i  first_int=echo $1
if [ $first_int -lt 0 ]; then 
    $first_int=$((-1*$first_int))
fi
echo "$first_num"

declare -i  second_int=echo $2
if [ $second_int -lt 0 ]; then 
    $second_int=$((-1*$second_int))
fi
declare -i  summm=$first_int+$second_int

    echo "$summm"

