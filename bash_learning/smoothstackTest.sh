input="2 40 -15"
echo $input

first=$(echo $input | awk '{print $2}')
if [ $first -lt 0 ]; then 
    first=$((-1*$first)) 
fi
echo $first

second=$(echo $input | awk '{print $3}')
if [ $second -lt 0 ]; then 
    second=$((-1*$second)) 
fi
echo $second

summ=$(($first+$second))
echo $summ

# 2.
# Given N lines of input, print the 3rd character from 
# each line as a new line of output. It is guaranteed 
# that each of the n lines of input will have a 3rd character.

while read line; do
    third_char=$(echo $line | head -c 3 | tail -c 1)
    echo $third_char
done

# 3.
# Display the 2nd and 7th character from each line of text. 
while read line; do
    second_char=$(echo $line | head -c 2 | tail -c 1)
    seventh_char=$(echo $line | head -c 7 | tail -c 1)
    echo "$second_char$seventh_char"
done

# 4.
# Display the first four characters from each line of text.

# Input Format: A text file with lines of ASCII text only. 
# Output Format: The output should contain N lines. Each line should contain just the first four characters of the corresponding input line. 

while read line; do
    second_char=$(echo $line | head -c 4 )
    echo "$second_char"
done

# 5.
# Given a tab delimited file with several columns (tsv format) print the first three fields.

# Input Format: A tab-separated file with lines of ASCII text only. 

IFS=""
while read line; do
  echo -e "$line" | cut -f -3
done

# 6.
# Display a range of characters starting at the 2nd position 
# of a string and ending at the 7t position (both positions included).

# Input Format: A text file containing N lines of ASCII text only. 

# Output Format: The output should contain N lines.
# Each line should contain the range of characters starting 
# at the 2nd position of a string and ending at the position 
# (both positions included).
IFS=""
while read line; do
    second_char=$(echo $line | cut -c 2-7)

  echo $second_char
done

# 7.
# Given a sentence, identify and display its fourth word. 
# Assume that the space (' ') is the only delimiter 
# between words.

# Input Format: A text file with lines of ASCII text only. 
# Each line has exactly one sentence. 

# Output Format: The output should contain N lines.
# For each input sentence, identify and display its 
# fourth word. Assume that the space (' ') is 
# the only delimiter between words. 

while read line; do
    echo $line | cut -d " " -f 4
done

# 8.
# Given a sentence, identify and display its first three words. 
# Assume that the space (' ') is the only delimiter between words.

# Input Format: A text file with lines of ASCII text only. 
# Each line has exactly one sentence. 

# Output Format: The output should contain N lines. For each 
# input sentence, identify and display its first three words. 
# Assume that the space (' ') is the only delimiter between words.

while read line; do

  echo -e "$line" | cut -d ' ' -f1-3

done

# 9.
# Print the characters from thirteenth position to the end.

# Input Format: A text file with lines of ASCII text only. 
# Output Format: The output should contain N lines. For each input line, print the characters from thirteenth position to the end. 
while read line; do
  echo -e "$line" | cut -c13-
done

# 10.
# Given a tab delimited file with several columns (tsv format) 
# print the fields from second fields to last field.

# Input Format: A tab-separated file with lines of ASCII text only. 
# Output Format: The output should contain N lines.
# For each line in the input, print the fields from second fields to last field. 

while read line; do

  echo -e "$line" | cut -f2-

done