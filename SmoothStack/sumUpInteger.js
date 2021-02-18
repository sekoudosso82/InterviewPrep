# you can use `read` to get standard input
read input

first=$(echo $input | awk '{print $1}')
if (( $first < 0 )) ; then 
    first=$((-1*$first))
fi
# echo $first

second=$(echo $input | awk '{print $2}')
if (( $second < 0 )) ; then 
    second=$((-1*$second)) 
fi
# echo $second

third=$(echo $input | awk '{print $3}')
if (( $third < 0 )) ; then 
    third=$((-1*$third))
fi
summ=$(($first + $second + $third))
echo $summ