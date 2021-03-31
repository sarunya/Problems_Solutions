dictMap = {}

def checkIfAlreadySolved(i, j, isFlip):
  if isFlip == True:
    temp = i
    i = j
    j = i
  
  if i in dictMap:
    if j in dictMap[i]:
      return dictMap[i][j]
  else:
    dictMap[i] = {}
  
  return -1

def setInDictMap(i, j, val, isFlip):
  if isFlip == True:
    temp = i
    i = j
    j = i
  
  if i not in dictMap:
    dictMap[i] = {}
  
  if not j in dictMap[i]:
    dictMap[i][j] = -1
  
  dictMap[i][j] = max(val, dictMap[i][j])

  print(dictMap)

def subSolve(A, i, N, B, j, M, X, isFlip):
  
  maxResult = checkIfAlreadySolved(i, j, isFlip)
  
  if maxResult != -1:
    return maxResult

  ii = i
  maxResult = 1
  for ii in range(i, N):
    jj = j
    for jj in range(j, M):
      if A[ii] < B[jj]:
        result = 1 + subSolve(B, jj, M, A, ii, N, X, not isFlip)
        setInDictMap(ii, jj, result, isFlip)
        maxResult = max(maxResult, result)
        if maxResult >= X:
          return maxResult
      else:
        continue
  
  setInDictMap(i, j, maxResult, isFlip)
  return maxResult


def solve(A, N, B, M, X):
  result = subSolve(A, 0, N, B, 0, M, X, False)
  if result >= X:
    return "YES"
  else:
    return "NO"


#convert to numbers
def convertToNumbers(arr):
  return [int(elem) for elem in arr]

t = input()
nmx = input().split(" ")
nmx = convertToNumbers(nmx)
n = nmx[0]
m = nmx[1]
x = nmx[2]

A = input().split(" ")
A = convertToNumbers(A)

B = input().split(" ")
B = convertToNumbers(B)

result = solve(A, n, B, m, x)
print(result)


# 1
# 3 4 6
# 3 5 7
# 2 6 8 9