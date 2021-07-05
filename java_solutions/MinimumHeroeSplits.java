import java.io.*;
import java.util.*;


public class MinimumHeroeSplits {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter wr = new PrintWriter(System.out);
        int T = Integer.parseInt(br.readLine().trim());
        for(int t_i = 0; t_i < T; t_i++)
        {
            int N = Integer.parseInt(br.readLine().trim());
            String[] arr_X = br.readLine().split(" ");
            int[] X = new int[N];
            for(int i_X = 0; i_X < arr_X.length; i_X++)
            {
            	X[i_X] = Integer.parseInt(arr_X[i_X]);
            }
            String[] arr_Type = br.readLine().split(" ");
            int[] Type = new int[N];
            for(int i_Type = 0; i_Type < arr_Type.length; i_Type++)
            {
            	Type[i_Type] = Integer.parseInt(arr_Type[i_Type]);
            }

            int out_ = minimumSplits(N, X, Type);
            System.out.println(out_);
            
         }

         wr.close();
         br.close();
    }
    static int minimumSplits(int N, int[] X, int[] Type){
       // Write your code here
        int result = 0, heroes = 1;

        PriorityQueue<Integer> pq = new PriorityQueue<Integer>(Collections.reverseOrder());
        
        for(int i=0; i<N; i++) {
            //if 2, then this value is required from previous steps
            if(Type[i]==2) {
                //if current herores is less than required heroes
                while(heroes<=X[i]) {
                    //if heroes cannot be split, then last stage cannot be reached
                    if(pq.size()==0) {
                        return -1;
                    }
                    heroes += pq.remove();
                    --heroes;
                    ++result;
                }
            } else {
                //if type is 1, then add to priorityQueue
                pq.add(X[i]);
            }

            // System.out.println("Values in PQ "+i+" heroes "+heroes+" type "+Type[i]+" requried "+X[i]);
            // for(int val : pq) {
            //     System.out.println("Value: "+val);
            // }
            // System.out.println("----Values in PQ END-----");
        }

        return result;
    
    }
}