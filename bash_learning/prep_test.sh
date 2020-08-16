
while read line;do
  id=$(echo $line|awk '{print $2}')
  username=$(echo $line|awk '{print $4}')
  bool=$(echo $line|awk '{print $6}')
  # do other
  # action here
done <users.txt

a="2 40 -15"
# sed great for substitution
echo $a | sed 's/40/45/'
new_a=$(echo $a | sed 's/40/45/')
echo $new_a
#---------------------------
# awk get position
echo $a
c2=$(echo $a | awk '{print $2}')
  if [ $c2 -lt 0 ]; then
    c2=$((-1*$c2))
  fi
  echo $c2
c3=$(echo $a|awk '{print $3}')
  if [ $c3 -lt 0 ]; then
      c3=$((-1*$c3))
  fi
  echo $c3

r=$(($c2+$c3))

echo $r


