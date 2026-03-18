n = int(input())
arr = list(map(int, input().split()))
s=0
for i in range(0, n):
    if arr[i]>0:
        s+=1
print(s)