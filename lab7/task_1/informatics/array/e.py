n = int(input())
arr = list(map(int, input().split()))
s=0
for i in range(0, n-1):
    if arr[i]==arr[i+1]:
        print("YES")
        break
else:
    print("NO")