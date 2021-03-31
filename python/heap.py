# Write your code here
def swap(arr, a, b):
    temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp

def heapify(arr, i, n):
    left = 2*i+1
    right = 2*i+2
    largestIndex = i
    # print(f"{left} {right} {arr} {i}")
    if left<n and arr[left] > arr[i]:
        largestIndex = left
    if right<n and arr[right] > arr[i] and arr[right] > arr[left]:
        largestIndex = right
    
    if largestIndex != i:
        swap(arr, i, largestIndex)
        heapify(arr, largestIndex, n)
    
    # print(f"Print Heapify {i} {arr}")


def buildHeap(arr):

    length = len(arr)
    parentIndex = int(length/2)-1

    for i in range(0, len(arr))[::-1]:
        heapify(arr, i, length)
    
    # print(f"Array after build heap {arr}")


#program execution starts here
n = int(input())
arr = input().split(" ")
arr = [int(elem) for elem in arr]

buildHeap(arr)

q = int(input())

for _ in range(0, q):
    query = input().split(" ")
    query = [int(elem) for elem in query]

    if query[0] == 1 :
        arr.insert(0, query[1])
        heapify(arr, 0, len(arr))
    else :
        print(arr[0])