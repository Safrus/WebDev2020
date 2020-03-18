a=int(input())
res=0
for i in range(2,a):
	if a%i==0:
		res = i
		break

if res == 0:
	res = a

print(res)