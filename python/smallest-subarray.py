n = int(input()) 

arr = input().split(" ")
arr = [int(elem) for elem in arr]

brr = input().split(" ")
brr = [int(elem) for elem in brr]

for i in range(0, len(arr))[::-1]:
    j = i+1
    count = brr[i] - 1
    while count>0 and j<len(arr) and len(arr)-j>=count:
        if arr[j] >= arr[i]:
            count -= 1
        j+=1

    if count==0:
        brr[i] = (j-i)
    else :
        brr[i] = -1

print(" ".join([str(elem) for elem in brr]))