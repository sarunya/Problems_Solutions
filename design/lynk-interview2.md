class BaseClass {
  function implementFeature() {
    //base implementation
  }
}

path : lib/functionality/feature1.js


IND : 

path : lib/functionality/IND/feature1.js


const MainBaseClassl = require("lib/functionality/feature1.js");

class BaseClass extends MainBaseClassl {
  constructor() {

  }

  function implementFeature() {
    //override functionality
  }
}

db : 
  1. single table identifier tenant for each row data  
  2. sharding for each tenant  (carts table)  --> cockroachSQL(NewSQL), PostgreSQL - 1. tenant
  3. Data is same for all tenants

1. muti-tenant configuration 
2. Service
      --> IND 

        --> tenantRequire()

        new BaseClass();


    --> /v1/test, function(request, response) {
      request.params.tenant = IND

    }


    tenantRequest(tenant) {

    }



    Factorypattern 
        
        Base 
          -> IND
          -> IND

        Factory(IND, functionation) {
          //Instantiating tenant

        }

    Java, Python 

    interface : 


    class MergeSort {

      constructor(arr) {
        this.arr = arr;
      }

      function split(arr, start, end) {
        const me = this;
        //single element
        if(start==end) {
          return;
        }
        let mid = Math.floor((start+end)/2)
        me.split(arr, start, mid); (2)
        me.split(arr, mid+1, end);  (1)
        me.sort(arr, start, mid, end)

      }

      function sortAndMerge(arr, start, mid, end) {
        // merge sorted first and second half
        let i = start, j=mid+1;
        if(i<j) {
          if(arr[i] > arr[j]) {
            //swapping arr[j]
          }
        }

      }
    }





    5 6 1 2 4 7 9

    5 6 1    2 4 7 9

    5  6 1
-> 5     6    1
   5    1 6

   1 5 6


2 -> 2 caching -> application layer 
                -> storage layer

                1. lazy caching at application layer
                2. active caching -> worker cron. 


                storage layer 
                  -> lazy, expiry : 

                API get price product -> 1000 / request 
                     -> empty caching strategy -> "product_price_": null


ELK stack -> 
