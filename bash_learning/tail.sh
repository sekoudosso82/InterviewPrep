# ************************* TAIL OF  FILE *************************
# Tail of a Text File #1
# Display the last 20 lines of an input file.

# Input Format: A text file. 

cat | tail -20


# ************************* HEAD OF  FILE *************************
# Head of a Text File 
#1
# Display the first 20 lines of an input file.
# Input Format: A text file. 

cat | head -20

# Head of a Text File #2
# Display the first 20 characters of an input file.

# Input Format: A text file. 

cat | head -c 20

# Middle of a Text File
# Display the lines (from line number 12 to 22, both inclusive) of a given text file.

# Input Format: A text file

# Output Format: Display the lines (from line number 12 to 22, both inclusive) for 
# the input file. 

# head -n 22 | tail -n +12
# cat | head -22 | tail -11
# sed -n '12,22p'
head -n 22 | tail -n 11


# In this challenge, we practice using the tail command to 
# display the last n characters of a text file.
# Display the last 20 characters of an input file.

# Input Format: A text file.

# Output Format: Output the last 20 characters of the text file. 

cat | tail -c 20

tail -c20

cat $1 | tail -c20