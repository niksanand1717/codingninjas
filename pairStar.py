inp = input()
def insertStar(inp):
        if(len(inp) == 0):
        return inp
    first = inp[0]
    second = inp[1]
    rest = inp[2:]
    if first == second:
        return (first+'*'+second+insertStar(rest))


insertStar(inp)