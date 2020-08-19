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

# 11.
# In this challenge, we practice using the tr command 
# because it is a useful translation tool in Linux.
# In a given fragment of text, replace all parentheses ()
# with box brackets [].

# Input Format:  A block of ASCII text.
# Output Format: Output the text with all parentheses
# () replaced with box brackets [].

# Sample Input :
#   int i=(int)5.8 => int i=[int]5.8
#   (23 + 5)*2 => [23 + 5]*2

cat | tr '()' '[]' $1

or 
while read line; do

  echo $line | tr '()' '[]'

done
  echo $line | tr '()' '[]'

# 12. 
# In this challenge, we practice using the tr command 
# because it is a useful translation tool in Linux.
# In a given fragment of text, delete all the lowercase 
# characters a-z

# Input Format: A block of ASCII text.

# Output Format: Delete all the lowercase characters in the given block of text.

# Sample Input
# Hello => H
# World => W
# how are you => 

cat | tr -d '[:lower:]'

cat | tr -d a-z

cat |  tr -d abcdefghijklmnopqrstuvwxyz

# 13.
# In a given fragment of text, replace all sequences of 
# multiple spaces with just one space.

# Input Format: A block of ASCII text.

# Output Format: Replace all sequences of multiple spaces with just one space.

# Sample Input

# He  llo
# Wor  ld
# how  are  you

# Sample Output

# He llo
# Wor ld
# how are you

tr -s " "
tr -s ' ' ' '
cat $1 | tr -s ' ' ' '
tr -s [:space:]

# 14.
# You are provided a file with four space-separated 
# columns containing the scores of students in three 
# subjects. The first column, contains a single character 
# (A-Z) - the identifier of the student. The next three 
# columns have three numbers (each between 0 and 100, 
# both inclusive) which are the scores of the students in 
# English, Mathematics and Science respectively.

# Your task is to identify the performance grade for each student. 
# If the average of the three scores is 80 or more, the grade is 'A'. 
# If the average is 60 or above, but less than 80, the grade is 'B'. 
# If the average is 50 or above, but less than 60, the grade is 'C'. 
# Otherwise the grade is 'FAIL'.

# Input Format
# There will be no more than 10 rows of data.
# Each line will be in the format:
# [Identifier][Score in English][Score in Math][Score in Science]

# Output Format
# For each row of data, append a space, a colon, followed by another 
# space, and the grade. Observe the format showed in the sample output.

# Sample Input
# A 25 27 50
# B 35 37 75
# C 75 78 80
# D 99 88 76

# Sample Output
# A 25 27 50 : FAIL
# B 35 37 75 : FAIL
# C 75 78 80 : B
# D 99 88 76 : A


while read line; do
    student=$(echo $line | awk '{print $1}')
    first=$(echo $line | awk '{print $2}')
    second=$(echo $line | awk '{print $3}')
    third=$(echo $line | awk '{print $4}')
    summ=$(($first+$second+$third))
    av=$(($summ/3))
    if [ $av -ge 80 ]; then 
        echo  "$line : A"
    elif [ $av -ge 60 ]; then 
        echo  "$line : B"
    elif [ $av -ge 50 ]; then 
        echo  "$line : C"
    else
        echo "$line : FAIL"
    fi
done


awk 'NR%2{printf$0";"}1-NR%2'

cat /dev/stdin | awk '{
if ( NR%2 == 0 )
printf $0"\n";
else
printf $0";";
}'

awk '{
    if ( NR % 2 == 1 )
        printf "%s;", $0
    else
        printf "%s\n", $0  
}'

#15.
# Task: You are given a file with four space separated 
# columns containing the scores of students in three subjects. 
# The first column contains a single character (A-Z), the student 
# identifier. The next three columns have three numbers each. 
# The numbers are between 0 and 100, both inclusive. These numbers 
# denote the scores of the students in English, Mathematics, and Science, 
# respectively.
# Your task is to identify those lines that do not contain all three 
# scores for students.

# Input Format
# There will be no more than 10 rows of data.
# Each line will be in the following format:
# [Identifier][English Score][Math Score][Science Score]

# Output Format
# For each student, if one or more of the three scores is missing, display:
# Not all scores are available for [Identifier]

# Sample Input
# A 25 27 50
# B 35 75
# C 75 78 
# D 99 88 76

# Sample Output
# Not all scores are available for B
# Not all scores are available for C


# awk '{if ($4 == "") print "Not all scores are available for",$1;}'
# or
# awk '{if (NF < 4){print "Not all scores are available for "$1}}'
awk '{if (length($4)==0) print "Not all scores are available for " $1}'

#16.
# Task
# You are given a file with four space separated columns containing 
# the scores of students in three subjects. The first column contains 
# a single character (A-Z), the student identifier. The next three columns 
# have three numbers each. The numbers are between 0 and 100, both inclusive. 
# These numbers denote the scores of the students in English, Mathematics, 
# and Science, respectively.
# Your task is to identify whether each of the students has passed or failed.
# A student is considered to have passed if (s)he has a score 50 or more in 
# each of the three subjects.

# Input Format
# There will be no more than 10 rows of data.
# Each line will be in the following format:
# [Identifier][English Score][Math Score][Science Score]

# Output Format
# Depending on the scores, display the following for each student:
#   [Identifier] : [Pass] 
# or
#   [Identifier] : [Fail]  

# Sample Input
# A 25 27 50
# B 35 37 75
# C 75 78 80
# D 99 88 76

# Sample Output
# A : Fail
# B : Fail
# C : Pass
# D : Pass


# awk '{print $1,":", ($2<50||$3<50||$4<50) ? "Fail" : "Pass"}'

# awk '{if ($1>=50 && $2>=50 && $3>=50){print $1,": Pass"}else {print $1,": Fail"}}'

# awk '{
# if ($2 >=50 && $3 >= 50 && $4 >= 50)
#     print $1,":","Pass";
# else
#     print $1,":","Fail";
# }'

awk '{ if($2>=50 && $3>=50 && $4>=50) {print($1" : Pass")} else {print($1" : Fail")}}'

# ****************  GREP
# Task
# You are given a text file that will be piped into your command through STDIN. 
# Use grep to display all the lines that contain the word the in them. 
# The search should be sensitive to case. Display only those lines 
# of the input file that contain the word 'the'.

# Input Format: A text file will be piped into your command through STDIN.

# Output Format: Output only those lines that contain the word 'the'. 
# The search should be case sensitive. The relative ordering of the 
# lines in the output should be the same as it was in the input. 

# grep  " the "
# or
# grep -w 'the'
# or
# grep '\<the\>'
# or 
# grep -w "the"
# or 
grep "the " 

# Task
# You are given a text file that will be piped into your command 
# through STDIN. Use grep to display all those lines that contain 
# the word the in them.
# The search should NOT be sensitive to case.
# Display only those lines of the input file that contain the word 'the'.

# Input Format: A text file will be piped into your command through STDIN.

# Output Format: Output only those lines that contain the word 'the'. 
# The search should NOT be case sensitive. The relative ordering of 
# the lines in the output should be the same as it was in the input. 

# grep -i 'the '
# or 
# grep -wi "the"
# or
# grep -i "\bthe\b"
# or
cat | grep -i 'the '
# or
grep -w -i 'the'

# Task
# You are given a text file that will be piped into your command 
# through STDIN. Use grep to remove all those lines that contain 
# the word 'that'. The search should NOT be sensitive to case.

# Input Format: A text file will be piped into your command through STDIN.

# Output Format: Only display those lines that do NOT contain the word 'that'. 
# The relative ordering of the lines should be the same as it was in the input file. 

# grep -viw 'that'

# -v   : Invert the sense of matching
# -i   : Ignore case distinctions
# -w   : Match only those lines containing the whole word

# or 

# egrep -v "That|that"

# or

egrep -iwv 'that'