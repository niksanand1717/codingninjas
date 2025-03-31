# 1
# 11
# 6 1 6 5 3 2 5 0 5 6 0 


from sys import stdin

def sumOfRightElements(arr, ptr):
    print("Right Sum: ", sum(arr[ptr+1:]))
    return sum(arr[ptr+1:])

def sumOfLeftElements(arr, ptr):
    print("Left Sum: ", sum(arr[:ptr+1]))
    return sum(arr[:ptr])

def arrayEquilibriumIndex(arr, n) :
    #Your code goes here
    ptr = 0
    SOLE = 0
    SORE = sumOfRightElements(arr, ptr)
    # while ptr < n:

        # SOLE = sum(arr[:ptr])
        # SORE = SORE - 

    # while ptr < n:
    #     print(f"============== PTR {ptr} ======================")
    #     if ptr == 0 and sumOfRightElements(arr, ptr) == 0: return ptr
    #     if ptr == n-1 and sumOfLeftElements(arr, ptr) == 0: return ptr
    #     else:
    #         if sumOfRightElements(arr, ptr) == sumOfLeftElements(arr, ptr):
    #             return ptr
    #     ptr += 1
    # else:
    #     return -1





























#Taking input using fast I/O method
def takeInput() :
    n = int(stdin.readline().strip())
    if n == 0 :
        return list(), 0

    arr = list(map(int, stdin.readline().strip().split(" ")))
    return arr, n


def printList(arr, n) : 
    for i in range(n) :
        print(arr[i], end = " ")
    print()


#main
t = int(stdin.readline().strip())

while t > 0 :
    
    arr, n = takeInput()
    print(arrayEquilibriumIndex(arr, n))

    t-= 1