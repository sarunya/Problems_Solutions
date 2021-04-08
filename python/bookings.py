class MyCalendarTwo:

    def __init__(self):
        self.bookings = [] 
        
    def mergeOverlaps(self, start: int, end: int, index) :
        book = self.bookings[index]
        if book["start"] > start:
            book["start"] = start
        
        if book["end"] < end:
            book["end"] = end
            
        book["overlap"] = 2
        
        self.bookings[index] = book
        print(self.bookings)
        return True
        
    def insertAtIndex(self, start, end, index):
        print("inser at index", index)
        self.bookings.insert(index, {
            "start": start,
            "end": end,
            "overlap": 1
        })
        print(self.bookings)
        return True
        
        
    def getOverlappingBook(self, start: int, end: int) -> bool:
        endindex = -1
        startindex = -1
        overlaps = 0
        index = -1
        while (index+1) < len(self.bookings):
            book = self.bookings[index+1]
            print(index+1, book)
            isoverlapping = False
            if end >=book["start"] and  end <= book["end"]:
                isoverlapping = True
            
            if start >=book["start"] and  start <= book["end"]:
                isoverlapping = True
            
            if isoverlapping == True:
                if (startindex == -1):
                    startindex = index+1
                    endindex = index+1
                else:
                    endindex = index+1
                    
                overlaps += book["overlap"]
                if overlaps >= 2:
                    break
            
            if end < book["start"]:
                break
                
            index += 1

        print(startindex, endindex, overlaps, index) 
            
        if startindex == -1 and endindex == -1:
            if index == 0:
                if self.bookings[-1]["end"] < start:
                    index = len(self.bookings)
            return self.insertAtIndex(start, end, index)
        elif overlaps >= 2 or startindex!=endindex:
            return False
        else :
            return self.mergeOverlaps(start, end, startindex)
            

    def book(self, start: int, end: int) -> bool:
        #check if an overlapping exists
        end -= 1
        return self.getOverlappingBook(start, end)
        #No overlapping present


# Your MyCalendarTwo object will be instantiated and called as such:
obj = MyCalendarTwo()
param_1 = obj.book(10,20)
print(param_1)
param_1 = obj.book(50,60)
print(param_1)
param_1 = obj.book(10,40)
print(param_1)
param_1 = obj.book(5,15)
print(param_1)
param_1 = obj.book(5,10)
print(param_1)
param_1 = obj.book(25,55)
print(param_1)