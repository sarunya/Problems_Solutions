def getAllShortestPaths(parent, paths, vertex):
    path = [vertex]
    queue = [path]

    while len(queue) > 0 :
      pathnow = queue.pop()
      lastv = pathnow[-1]

      if lastv == -1:
        paths.append(pathnow)
      
      else:
        for p in parent[lastv] :
          pathnow.append(p)
          queue.append(pathnow.copy())

    print(paths)




nm = input().split(" ")
n = int(nm[0])
m = int(nm[1])

dist = [2**32]*(n+1)
parent = {}
graph = {}
weight = {}


## build the graph
for _ in range(0, m):
    uvw = input().split(" ")
    u = int(uvw[0])
    v = int(uvw[1])
    w = int(uvw[2])

    weight[uvw[0]+" "+uvw[1]]=w
    weight[uvw[1]+" "+uvw[0]]=w

    if u not in graph:
        graph[u] = []
    
    if v not in graph:
        graph[v] = []

    graph[u].append(v)
    graph[v].append(u)


##find shortest paths
parent[1] = [-1]
dist[1] = 0
queue = [1]

while len(queue)>0:
    vertex = queue.pop(0)
    edges = graph[vertex]

    for child in edges:
        ## update current distance as smallest and update the parent
        w = weight[str(vertex)+" "+str(child)]
        if dist[child] > dist[vertex]+w:
            dist[child] = dist[vertex]+w
            parent[child] = [vertex]
            queue.append(child)
        elif dist[child] == dist[vertex]+w:
            parent[child].append(vertex)


paths = []
# print(paths)
# print(parent)
# print(dist)
res = [0]*(n+1)
getAllShortestPaths(parent, paths, n)
# print(paths)

result = [0]*(n+1)
totalPaths = len(paths)

for path in paths:
    for vertex in path:
        result[vertex] += 1

# print(result)

for vertex in range(1, n+1):
    if result[vertex] == totalPaths:
        print("all")
    elif result[vertex] == 0:
        print("none")
    else:
        print("some")