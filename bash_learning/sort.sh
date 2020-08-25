# In this challenge, we practice using the sort command to sort 
# input in text or TSV formats.

# Given a text file, order the lines in lexicographical order.

# Input Format: A text file.

# Output Format: Output the text file with the lines reordered in lexicographical order. 

# This will sort on the first field alphabetically and 
# then on the second field numerically.
sort -k 1,1 -k 2,2n 

sort -k 1,1

cat $1 | sort



# In this challenge, we practice using the sort command to sort input 
# in text or TSV formats.
# Given a text file, order the lines in reverse lexicographical 
# order (i.e. Z-A instead of A-Z).

# Input Format: A text file.

# Output Format: Output the text file with the lines reordered 
# in reverse lexicographical order. 

cat $1 | sort -r

sort -nr

# You are given a text file where each line contains a number. 
# The numbers may be either an integer or have decimal places. 
# There will be no extra characters other than the number or 
# the newline at the end of each line. Sort the lines in ascending 
# order - so that the first line holds the numerically smallest number, 
# and the last line holds the numerically largest number.

# Input Format: A text file where each line contains a positive number 
# (less than 100) as described above.

# Output Format: Output the text file with the lines reordered in numerically ascending order. 

# sort -k 1,1n 
# sort -n
# cat $1 | sort -n
sort -V

# You are given a file of text, where each line contains a number 
# (which may be either an integer or have decimal places). There will be no 
# extra characters other than the number or the newline at the end of each line. 
# Sort the lines in descending order - - such that the first line holds 
# the (numerically) largest number and the last line holds the (numerically) 
# smallest number.

# Input Format: A text file where each line contains a number as described above.

# Output Format: The text file, with lines re-ordered in descending order (numerically). 

sort -r -n or sort -n -r or sort-rn or sort -nr works perfectly!!!

sort -rn 

cat $1 | sort -nr


# You are given a file of text,which contains temperature information about 
# American cities, in TSV (tab-separated) format. The first column is the 
# name of the city and the next four columns are the average temperature 
# in the months of Jan, Feb, March and April (see the sample input). 
# Rearrange the rows of the table in descending order of the values for 
# the average temperature in January.

# Input Format: A text file where each line contains a row of data as described above.

# Output Format: Rearrange the rows of the table in descending order of the 
# values for the average temperature in January (i.e, the mean temperature 
# value provided in the second column). 
# sort -t$'\t' -k2 -rn

# sort -t $'\t' -k2,2 -n -r

sort -t $'\t' -nrk2

# You are given a file of tab separated weather data (TSV). There is no header 
# column in this data file.
# The first five columns of this data are: (a) the name of the city (b) the 
# average monthly temperature in Jan (in Fahreneit). (c) the average monthly 
# temperature in April (in Fahreneit). (d) the average monthly temperature in 
# July (in Fahreneit). (e) the average monthly temperature in October (in Fahreneit).

# You need to sort this file in ascending order of the second column (i.e. the 
# average monthly temperature in January).

# Input Format: A text file with multiple lines of tab separated data. The first 
# five fields have been explained above

# Output Format: Sort the data in ascending order of the average monthly 
# temperature in January. 

sort -t $'\t' -k2,2 -n
# sort -n -t$'\t' -k2
# sort -t$'\t' -nk2

sort -t $'\t' -k 2n
-t $'\t'  - tells that table column is separated by 'tab space'
-k         - tells that sort the table column
2n         - tells that sort the table based on 2nd column 
               and n to denote column data is numeric.


You are given a file of pipe-delimited weather data (TSV). There is no 
header column in this data file. The first five columns of this data are: 
(a) the name of the city (b) the average monthly temperature in Jan (in Fahreneit). 
(c) the average monthly temperature in April (in Fahreneit). (d) the average 
monthly temperature in July (in Fahreneit). (e) the average monthly temperature 
in October (in Fahreneit).

You need to sort this file in descending order of the second column (i.e. 
the average monthly temperature in January).

Input Format: A text file with multiple lines of pipe-delimited data. 
The first five fields have been explained above

Output Format:Sort the data in descending order of the average monthly 
temperature in January. 

# sort -t$"|" -k2 -rn
# sort -t $'|' -k2 -rn
# or
# sort -t '|' -k2 -rn

sort -nr -k2 -t '|'




