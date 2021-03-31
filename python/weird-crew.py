'''
# Sample code to perform I/O:

name = input()                  # Reading input from STDIN
print('Hi, %s.' % name)         # Writing output to STDOUT

# Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail
'''

# Write your code here

def islPersonAllowed(crews):
    ht = input().split(" ")
    h = int(ht[0])
    t = int(ht[1])

    #get crew height by time
    i = 0
    ch = -1
    heights = []
    for crew in crews:
        if crew[1]<=t and t<=crew[2]:
            heights.append(crew[0])
            if ch==-1:
                ch = crew[0]
            elif ch<crew[0]:
                ch = crew[0]
        elif crew[1]>t:
            print(f"Break crew at {crew}")
            break
    print(f"Crew height at time {t} is {ch} {sorted(heights)}")
    if ch==-1 or h>ch:
        print("YES")
    else:
        print("NO")

HCQ = input().split(" ")
H = int(HCQ[0])
C = int(HCQ[1])
Q = int(HCQ[2])

crews = []
for _ in range(0, C):
    hse = input().split(" ")
    hse = tuple(int(elem) for elem in hse)
    crews.append(hse)

crews = sorted(crews, key=lambda tup: (tup[1],tup[2]) )
print(crews)

for _ in range(0, Q):
    islPersonAllowed(crews)
