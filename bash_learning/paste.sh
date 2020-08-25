# You are given a CSV file where each row contains the name of a 
# city and its state separated by a comma. Your task is to replace 
# the newlines in the file with semicolons as demonstrated in the sample.

# Input Format
# You are given a CSV file where each row contains the name of a city 
# and its state separated by a comma.

# Output Format
# Replace the newlines in the input file with semicolons as 
# demonstrated in the sample.

# Sample Input

# Albany, N.Y.
# Albuquerque, N.M.
# Anchorage, Alaska
# Asheville, N.C.
# Atlanta, Ga.
# Atlantic City, N.J.
# Austin, Texas
# Baltimore, Md.
# Baton Rouge, La.
# Billings, Mont.
# Birmingham, Ala.
# Bismarck, N.D.
# Boise, Idaho
# Boston, Mass.
# Bridgeport, Conn.

# Sample Output

# Albany, N.Y.;Albuquerque, N.M.;Anchorage, Alaska;Asheville, N.C.;Atlanta, Ga.;Atlantic City, N.J.;Austin, Texas;Baltimore, Md.;Baton Rouge, La.;Billings, Mont.;Birmingham, Ala.;Bismarck, N.D.;Boise, Idaho;Boston, Mass.;Bridgeport, Conn.


# paste -s -d";"
# paste -d';' -s
# paste -sd ';'
# paste -s | tr $'\t' ";"

# a=`tr '\n' ';'`
# echo "${a::-1}"

tr '\n' ';' | head -c -1


# You are given a CSV file where each row contains the name of a city 
# and its state separated by a comma. Your task is to restructure the 
# file so that three consecutive rows are folded into one line and 
# are separated by semicolons.

# Input Format
# You are given a CSV file where each row contains the name of a city 
# and its state separated by a comma.

# Output Format
# Restructure the file so that three consecutive rows are folded into 
# one line and are separated by semicolons.

# Sample Input

# Albany, N.Y.
# Albuquerque, N.M.
# Anchorage, Alaska
# Asheville, N.C.
# Atlanta, Ga.
# Atlantic City, N.J.
# Austin, Texas
# Baltimore, Md.
# Baton Rouge, La.
# Billings, Mont.
# Birmingham, Ala.
# Bismarck, N.D.
# Boise, Idaho
# Boston, Mass.
# Bridgeport, Conn.

# Sample Output

# Albany, N.Y.;Albuquerque, N.M.;Anchorage, Alaska
# Asheville, N.C.;Atlanta, Ga.;Atlantic City, N.J.
# Austin, Texas;Baltimore, Md.;Baton Rouge, La.
# Billings, Mont.;Birmingham, Ala.;Bismarck, N.D.
# Boise, Idaho;Boston, Mass.;Bridgeport, Conn.

# paste -d";" - - -

# paste -sd ';;\n'

# awk '{
# if (NR % 3 == 0)
#     printf $0"\n"
# else
#     printf $0";"
# }'

paste - - - -d ';'

# Given a CSV file where each row contains the name of a city and its 
# state separated by a comma, your task is to restructure the file in 
# such a way, that three consecutive rows are folded into one, and 
# separated by tab.

# Input Format
# You are given a CSV file where each row contains the name of a 
# city and its state separated by a comma.

# Output Format
# Restructure the file in such a way, that every group of three 
# consecutive rows are folded into one, and separated by tab.

# Sample Input
# Albany, N.Y.
# Albuquerque, N.M.
# Anchorage, Alaska
# Asheville, N.C.
# Atlanta, Ga.
# Atlantic City, N.J.
# Austin, Texas
# Baltimore, Md.
# Baton Rouge, La.
# Billings, Mont.
# Birmingham, Ala.
# Bismarck, N.D.
# Boise, Idaho
# Boston, Mass.
# Bridgeport, Conn.

# Sample Output

# Albany, N.Y.    Albuquerque, N.M.   Anchorage, Alaska
# Asheville, N.C. Atlanta, Ga.    Atlantic City, N.J.
# Austin, Texas   Baltimore, Md.  Baton Rouge, La.
# Billings, Mont. Birmingham, Ala.    Bismarck, N.D.
# Boise, Idaho    Boston, Mass.   Bridgeport, Conn.

paste - - -
# paste -sd"\t\t\n"
# paste -sd $'\t\t\n'
# awk -v c=3 '{if(NR%c){printf $0"\t"}else{printf $0"\n"}}'


# Given a CSV file where each row contains the name of a city and 
# its state separated by a comma, your task is to replace the 
# newlines in the file with tabs as demonstrated in the sample.

# Input Format
# You are given a CSV file where each row contains the name of a 
# city and its state separated by a comma.

# Output Format
# Replace the newlines in the input with tabs as demonstrated in the sample.

# Sample Input
# Albany, N.Y.
# Albuquerque, N.M.
# Anchorage, Alaska
# Asheville, N.C.
# Atlanta, Ga.
# Atlantic City, N.J.
# Austin, Texas
# Baltimore, Md.
# Baton Rouge, La.
# Billings, Mont.
# Birmingham, Ala.
# Bismarck, N.D.
# Boise, Idaho
# Boston, Mass.
# Bridgeport, Conn.

# Sample Output
# Albany, N.Y.    Albuquerque, N.M.   Anchorage, Alaska   Asheville, N.C.Atlanta, Ga. Atlantic City, N.J. Austin, Texas   Baltimore, Md.  Baton Rouge, La.    Billings, Mont. Birmingham, Ala.    Bismarck, N.D.  Boise, Idaho    Boston, Mass.   Bridgeport, Conn.

paste -sd"\t"
# tr '\n' '\t'

paste -s

