import bisect

class MyCalendar:

    def __init__(self):
        self.arr = []
        self.map = {}

    def book(self, start: int, end: int) -> bool:
        idx = bisect.bisect_left(self.arr, start)
        if idx != 0 and start < self.map[self.arr[idx - 1]]: return False
        if idx < len(self.arr) and end > self.arr[idx]: return False
        self.arr.insert(idx, start)
        self.map[start] = end
        
        return True

# Your MyCalendar object will be instantiated and called as such:
# obj = MyCalendar()
# param_1 = obj.book(start,end)

# myCal = MyCalendar()
# myCal.book(20, 30)
# myCal.book(100, 250)
# myCal.book(10, 20)
# myCal.book(15, 25)
# myCal.book(20, 30)
# myCal.print()