a=int(input())
i=2
res=0
while i<=a:
	if a%i==0:
		res=i
		break
	i=i+1
print(res)