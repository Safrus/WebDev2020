import math
a=int(input())
i=1
while i<=a:
	b=i
	while b>1:
		if b%2:
			break
		b=b/2
	if b==1:
		print(i, end = ' ')
	i=i+1