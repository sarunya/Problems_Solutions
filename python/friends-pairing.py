def formFriendsCircle(friends, visited, key) : 
    if (visited[key] or not friends[key]) :
        return 0
   
    visited[key] = True
    result = 1

    for i in range(0, len(friends[key])) :
        key2 = friends[key][i]
        if(not visited[key2] and key2 in friends) :
            result = result + formFriendsCircle(friends, visited, key2)
       
   
    return result


def processInput() :

    t = int(input())

    while(t>0) :
        nm = input().split(" ")
        n = int(nm[0]), m = int(nm[1])
        friends = {}, visited = {}, groups = []
        
        for j in range(0, m) :

            lr = input().split(" ")
            lr = [int(elem) for elem in lr]
            
            if(lr[0] in friends) :
                friends[lr[0]].append(lr[1])
            else :
                friends[lr[0]] = [lr[1]]
           

            if(lr[1] in friends) :
                friends[lr[1]].append(lr[0])
            else :
                friends[lr[1]] = [lr[0]]
           
       

        for key in range(1, n+1) :
            if(not visited[key] and key in friends) :
                count = formFriendsCircle(friends, visited, key)
                groups.append(count)
           

        result = 0
        for j in range(0, len(groups)) :
            result += (groups[j]*(n-groups[j]))
       

        for key in range(1, n+1) :
            if(not visited[key]) :
                result += (n-1)
           
       

        console.log(result)

        t -= 1

processInput()