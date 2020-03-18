import math
a=int(input())
powerOfTwo=False

for i in range(a):
	if math.pow(2,i)==a:
		powerOfTwo=True

if powerOfTwo:
	print("YES")
else:
	print("NO")