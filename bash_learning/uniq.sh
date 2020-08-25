# In this challenge, we practice using the uniq command to eliminate 
# consecutive repetitions of a line when a text file is piped through it.

# Given a text file, remove the consecutive repetitions of any line.

# Sample Input
# 00
# 00
# 01
# 01
# 00
# 00
# 02
# 02

# Sample Output
# 00
# 01
# 00
# 02  


uniq
# cat $1 | uniq
# uniq | awk '{print $n}'


# In this challenge, we practice using the uniq command to eliminate 
# consecutive repetitions of a line when a text file is piped through it.

# Given a text file, count the number of times each line repeats itself. 
# Only consider consecutive repetitions. Display the space separated 
# count and line, respectively. There shouldn't be any leading or trailing 
# spaces. Please note that the uniq -c command by itself will generate the 
# output in a different format than the one expected here.

# Sample Output
# Explanation
# Sample Input
# 00
# 00
# 01
# 01
# 00
# 00
# 02
# 02
# 03
# aa
# aa
# aa

# Sample Output

# 2 00
# 2 01
# 2 00
# 2 02
# 1 03
# 3 aa 

# uniq -c|sed "s/^[[:space:]]*//g"
# uniq -c | tr -s " " | cut -b 2-

uniq -c | tr -s " " | cut -c2-

# I found uniq -c | tr -s " " | cut -c2- to be a bit cleaner 
# and more intuitive that the suggestions here. I didn't spend 
# a lot of time looking for ways to remove the tab delimiter. 
# Piping the uniq to the tr -s will reduce the leading space 
# to one space, then `cut -c2-" will cut from the next space 
# to the end. Passed all three tests, but there may be a better way.

# Given a text file, count the number of times each line repeats itself 
# (only consider consecutive repetions). Display the count and the line, 
# separated by a space. There shouldn't be leading or trailing spaces. 
# Please note that the uniq -c command by itself will generate the 
# output in a different format.

# This time, compare consecutive lines in a case insensitive manner. 
# So, if a line X is followed by case variants, the output should 
# count all of them as the same (but display only the form X in the 
# second column).

# So, as you might observe in the case below: aa, AA and Aa are 
# all counted as instances of 'aa'.

# Sample Input
# 00
# 00
# 01
# 01
# 00
# 00
# 02
# 02
# 03
# aa
# AA
# Aa
# Sample Output
# 2 00
# 2 01
# 2 00
# 2 02
# 1 03
# 3 aa 

# uniq -ic|sed "s/^[[:space:]]*//g"
# uniq -ic|cut -c7-
# uniq -ci | sed 's/^[ \t]*//'



# Extreemly uniquely uniq -u :-)

uniq -u
# uniq -c | grep "^ *1 " | sed 's/^ *1 *//'
# cat /dev/stdin | uniq -c| tr  -s ' ' | cut -d' ' -f2- | grep ^1 | cut -d' ' -f2-


