class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        
        # bookings.sort(key= lambda x: x[0])
        answer = [0]*n
        
        for booking in bookings:
            
            if booking[0]<=n:
                answer[booking[0]-1] += booking[2]
                
            if booking[1]<n:
                answer[booking[1]] -= booking[2]
          
        # print(answer)
        for i in range(1, n):
            answer[i] += answer[i-1]
            
        return answer