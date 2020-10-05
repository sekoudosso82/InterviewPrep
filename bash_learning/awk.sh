# see file content
cat test.txt 

# return all line
awk '{ print }' test.txt

# return first column
awk '{ print $1 }' test.txt

# return second column
awk '{ print $2 }' test.txt

# return two column
awk '{ print $1, $2 }' test.txt

# return two column with space between them
awk '{ print $1, $2 }' test.txt

# return two column without space between them
awk '{ print $1.$2 }' test.txt

# return every line that contain 'test'
awk '/test/ { print $1, $2 }' test.txt
awk '/Test/ { print $1, $2 }' test.txt

# return every line character from 'a' to 'z'
awk '/[a-z]/ { print }' test.txt

# return every line contain a number
awk '/[0-9]/ { print }' test.txt

# return every line start with a number
awk '/^[0-9]/ { print }' test.txt

# return every line end with a number
awk '/[0-9]$/ { print }' test.txt

# return with if statement / if column 1 == 123
awk '{ if($1 ~ /123/) print }' test.txt

# return with if statement / if column 2 == to a number
awk '{ if($2 ~ /[0-9]/) print }' test.txt

# grep and awk 
# return every line that contain test 
grep -i test test.txt #CASE SENSITIVE

# return every line that contain test and a munber
grep -i test test.txt | awk '/[0-9]/ { print }'

# return every line that contain test and start with a munber
grep -i test test.txt | awk '/^[0-9]/ { print }'







