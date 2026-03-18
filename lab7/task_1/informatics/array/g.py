n = int(input())
arr = list(map(int,input().split()))
i=0
while i<n-1:
    arr[i],arr[i+1]=arr[i+1],arr[i]
    i+=2
print(*arr)  
 