// ddata.js — questions for each topic used in PracticePage

const questionsData = {

  "concepts":[
    {
      "title": "Java - When to Use public, private, static, void, and Classes",
      "answer": "EXPLANATION:\n\n1. **public**:\n➤ Used to make a class, method, or variable accessible **from anywhere** (any package/class).\n➤ Example:\n```java\npublic class Car {\n    public void start() {\n        System.out.println(\"Car started\");\n    }\n}\n```\n- You can access `start()` method from another file or class if both are compiled.\n\n2. **private**:\n➤ Used to restrict access **only within the same class**.\n➤ Commonly used for internal/helper methods or data encapsulation.\n➤ Example:\n```java\npublic class Car {\n    private String engineType = \"Diesel\";\n\n    private void checkEngine() {\n        System.out.println(\"Checking \" + engineType);\n    }\n}\n```\n- `checkEngine()` and `engineType` cannot be accessed outside the `Car` class.\n\n3. **static**:\n➤ Used to make a method or variable **belong to the class instead of an object**.\n➤ Can be accessed without creating an object.\n➤ Common for utility functions or `main()` method.\n➤ Example:\n```java\npublic class MathUtils {\n    public static int square(int x) {\n        return x * x;\n    }\n}\n\n// Usage:\nint result = MathUtils.square(5); // No object needed\n```\n\n4. **void**:\n➤ Used when a method **does not return any value**.\n➤ Example:\n```java\npublic void printHello() {\n    System.out.println(\"Hello!\");\n}\n```\n- This method just performs an action, no return value.\n\n5. **When to Create a Class**:\n➤ Create a class when you want to represent a real-world **entity** (like `Car`, `Student`, `BankAccount`) or when you need to **group data and methods** logically.\n➤ Example:\n```java\npublic class Student {\n    String name;\n    int age;\n\n    public void study() {\n        System.out.println(name + \" is studying\");\n    }\n}\n```\n- You can then create multiple objects of `Student` with different data.\n\nSUMMARY:\n- Use **`public`** for global access.\n- Use **`private`** for internal logic.\n- Use **`static`** for utility/shared logic.\n- Use **`void`** for methods that don't return values.\n- Use **classes** to group related data and methods."
    },    
    {
      "title": "How to find the majority element in an array using HashMap? Explain algorithm, complexity, dry run, and key loop.",
      "answer": "APPROACH / ALGORITHM USED:\n- Use a HashMap to store the frequency of each element in the array.\n- Traverse the array once and for each element nums[i], update the count using:\n  map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);\n- After building the frequency map, iterate over each key in map.keySet() and check if map.get(key) > nums.length / 2.\n- If such a key is found, return it as the majority element. Otherwise, return -1 (if the majority is not guaranteed).\n\nTIME & SPACE COMPLEXITY:\nTime: O(n)\n- O(n) to build the map + O(n) to iterate map keys.\nSpace: O(n)\n- In the worst case, all elements are unique and stored in the map.\n\nDRY RUN / EXAMPLE:\nInput: [3, 1, 3, 3, 2]\n\nStep 1 (Build map):\n- Add 3 → {3=1}\n- Add 1 → {3=1, 1=1}\n- Add 3 → {3=2, 1=1}\n- Add 3 → {3=3, 1=1}\n- Add 2 → {3=3, 1=1, 2=1}\n\nStep 2 (Check majority):\n- Array length = 5 → n/2 = 2\n- map.get(3) = 3 > 2 → return 3\n\nFinal Output: 3\n\nEXPLANATION OF for (Integer key : map.keySet()):\n- This loop goes through each unique number in the array.\n- For example, with map = {3=3, 1=1, 2=1}, the loop iterates key = 3, 1, 2.\n- It checks if map.get(key) > n/2 → returns the key if true.\n\nOPTIMIZED APPROACH USING MOORE’S VOTING ALGORITHM:\n- Initialize count = 0 and candidate = None\n- Traverse the array:\n  - If count == 0, set candidate = current element\n  - If current element == candidate, increment count\n  - Else, decrement count\n- This finds a candidate that could be the majority\n- To confirm, do a second pass to count its actual frequency\n- If frequency > n/2, return candidate, else return -1\n\nDRY RUN (MOORE'S ALGORITHM):\nInput: [3, 1, 3, 3, 2]\n\nPass 1 (Find candidate):\n- count = 0 → candidate = 3 → count = 1\n- 1 ≠ 3 → count = 0\n- count = 0 → candidate = 3 → count = 1\n- 3 == 3 → count = 2\n- 2 ≠ 3 → count = 1\nCandidate after pass 1 = 3\n\nPass 2 (Verify candidate):\n- Count occurrences of 3 → frequency = 3\n- 3 > 5/2 → return 3\n\nTime: O(n), Space: O(1)"
    },                
    {
      "title": "(question - Find Missing and Repeated Values) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The grid contains numbers from 1 to n*n, but one number is repeated and one is missing.\n- Use a HashSet to detect the repeated number while iterating over the grid.\n- Simultaneously, calculate the actual sum of all numbers in the grid (actsum).\n- Compute the expected sum using the formula: expsum = (total * (total + 1)) / 2, where total = n*n.\n- The repeated number is detected when a number is already present in the HashSet.\n- The missing number is calculated as: expsum - (actsum - repeated).\n- Finally, return both [repeated, missing].\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n^2)\n- Because we traverse the entire n x n grid once.\nSpace Complexity: O(n^2)\n- In the worst case, the HashSet stores up to n*n - 1 unique elements.\n\nDRY RUN / EXAMPLE WALKTHROUGH:\nInput: grid = [[1, 2], [2, 4]]\n→ Flattened array: [1, 2, 2, 4]\n\nStep 1: Initialize actsum = 0, repnum = -1, set = {}\n- Add 1 → actsum = 1, set = {1}\n- Add 2 → actsum = 3, set = {1, 2}\n- Add 2 again → actsum = 5, repnum = 2 (duplicate found)\n- Add 4 → actsum = 9, set = {1, 2, 4}\n\nStep 2: Compute expected sum:\n- Total numbers = 4 → expsum = (4 * (4 + 1)) / 2 = 10\n\nStep 3: Find missing number:\n- misnum = expsum - (actsum - repnum) = 10 - (9 - 2) = 10 - 7 = 3\n\n✔️ Final Output: [2, 3] (2 is repeated, 3 is missing)\n\nOPTIMALITY NOTE:\n- This is an optimal O(n^2) time and O(n^2) space approach for 2D grids.\n- If grid was already flattened or sorted, other methods (like math-based equations or bitwise XOR) could be used, but for generic unsorted 2D input, this is the most efficient and readable solution."
    },    
    {
      "title": "(question - Merge Two Sorted Arrays in-place) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to merge two sorted arrays, nums1 and nums2, into nums1 in non-decreasing order.\n- Since nums1 has extra space at the end to accommodate nums2, we start merging from the end.\n- Use three pointers:\n  - i = last element of valid nums1 (index m - 1)\n  - j = last element of nums2 (index n - 1)\n  - k = last index of nums1 (m + n - 1)\n- Compare nums1[i] and nums2[j], and place the larger one at nums1[k].\n- Move the corresponding pointer (i or j) and also decrement k.\n- Repeat until all elements from nums2 are placed.\n- If any elements are left in nums2, copy them into the start of nums1.\n- If nums1 has remaining values, they are already in the correct place.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(m + n)\n- Every element is compared and placed exactly once.\nSpace Complexity: O(1)\n- Merge is performed in-place with constant extra space.\n\nDRY RUN / EXAMPLE WALKTHROUGH:\nInput:\nnums1 = [1, 2, 3, 0, 0, 0], m = 3\nnums2 = [2, 5, 6], n = 3\n\nPointers:\ni = 2 (nums1[2] = 3), j = 2 (nums2[2] = 6), k = 5\n\nSteps:\n- nums1[2] < nums2[2] → nums1[5] = 6 → j--, k--\n- nums1[2] < nums2[1] → nums1[4] = 5 → j--, k--\n- nums1[2] > nums2[0] → nums1[3] = 3 → i--, k--\n- nums1[1] <= nums2[0] → nums1[2] = 2 → j--, k--\n- Remaining nums1[1] = 2 and nums1[0] = 1 stay in place\n\nFinal nums1 = [1, 2, 2, 3, 5, 6]\n\nOPTIMALITY NOTE:\n- This approach is already optimal.\n- It does not use any extra space and performs merging in O(m + n) time, making it both time and space efficient."
    },    
    {
      "title": "(question - Find the Element that Appears Only Once) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- Use a HashMap to store the frequency of each element in the array.\n- Traverse the array once, and for each number, update its count in the map using:\n  map.put(nums[i], map.getOrDefault(nums[i], 0) + 1);\n- After building the frequency map, loop through all keys using map.keySet().\n- Return the key that has a frequency equal to 1 — this is the number that appears only once.\n- If no such number is found (edge case), return -1.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- One pass to build the frequency map, and one pass to check each key.\nSpace Complexity: O(n)\n- In the worst case, all elements are unique and stored in the HashMap.\n\nDRY RUN / EXAMPLE WALKTHROUGH:\nInput: [4, 1, 2, 1, 2]\n\nStep 1: Build frequency map:\n- Add 4 → {4=1}\n- Add 1 → {4=1, 1=1}\n- Add 2 → {4=1, 1=1, 2=1}\n- Add 1 again → {4=1, 1=2, 2=1}\n- Add 2 again → {4=1, 1=2, 2=2}\n\nStep 2: Check map for frequency 1:\n- map.get(4) = 1 → ✅ return 4\n\n✔️ Final Output: 4\n\nOPTIMIZED APPROACH USING BITWISE XOR:\n- XOR has a special property: a^a = 0 and a^0 = a\n- If all elements appear twice except one, XORing all of them cancels the duplicates\n- Traverse the array and XOR all numbers → result is the single element\n\nCode:\nint result = 0;\nfor (int num : nums) {\n  result ^= num;\n}\nreturn result;\n\nDRY RUN (XOR METHOD):\nInput: [4, 1, 2, 1, 2]\nSteps:\n- result = 0\n- result ^= 4 → 0^4 = 4\n- result ^= 1 → 4^1 = 5\n- result ^= 2 → 5^2 = 7\n- result ^= 1 → 7^1 = 6\n- result ^= 2 → 6^2 = 4\n\n✔️ Final Output: 4\n\nTime: O(n), Space: O(1)"
    },
    {
      "title": "(question - Best Time to Buy and Sell Stock) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to maximize profit by choosing a day to buy and a later day to sell.\n- Initialize `minprice = prices[0]` and an array `dp[]` to track max profit till each day.\n- Iterate through the array from day 1 to n-1:\n  - For each day i, calculate profit = prices[i] - minprice\n  - Update dp[i] as the max of dp[i - 1] and current profit\n  - Update minprice to the minimum seen so far\n- Finally, return dp[n - 1], which holds the max profit possible\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- We loop through the array once\nSpace Complexity: O(n)\n- We use an extra array dp[] of size n to track profit\n\nDRY RUN / EXAMPLE WALKTHROUGH:\nInput: prices = [7, 1, 5, 3, 6, 4]\n\nInitialize:\n- minprice = 7\n- dp = [0, 0, 0, 0, 0, 0]\n\nIteration:\n- i = 1 → minprice = 1, profit = 1 - 7 = -6 → dp[1] = max(0, -6) = 0\n- i = 2 → profit = 5 - 1 = 4 → dp[2] = max(0, 4) = 4\n- i = 3 → profit = 3 - 1 = 2 → dp[3] = max(4, 2) = 4\n- i = 4 → profit = 6 - 1 = 5 → dp[4] = max(4, 5) = 5\n- i = 5 → profit = 4 - 1 = 3 → dp[5] = max(5, 3) = 5\n\n✔️ Final Output: 5 (Buy at 1, Sell at 6)\n\nOPTIMIZED APPROACH (WITHOUT dp ARRAY):\n- Instead of storing profits in a dp array, keep just one variable for max profit.\n- Code:\n  int minprice = prices[0];\n  int maxprofit = 0;\n  for (int i = 1; i < prices.length; i++) {\n      maxprofit = Math.max(maxprofit, prices[i] - minprice);\n      minprice = Math.min(minprice, prices[i]);\n  }\n  return maxprofit;\n\nTime: O(n), Space: O(1)\n- This is the most optimal solution with linear time and constant space."
    },
    {
      "title": "Implement pow(x, n)",
      "answer": " APPROACH / ALGORITHM USED:\n- The task is to compute x raised to the power n (xⁿ) efficiently.\n- This is solved using **binary exponentiation (divide and conquer)**.\n\nSteps:\n1. **Base Case**:\n   - If n == 0 → return 1 (any number raised to 0 is 1).\n\n2. **If n is negative**:\n   - Convert x to 1/x and n to -n.\n   - Special case: if n == Integer.MIN_VALUE (−2³¹), negating it overflows.\n     → Handle it separately: return 1 / (myPow(x, Integer.MAX_VALUE) * x).\n\n3. **Recursive Case**:\n   - Compute: half = myPow(x, n / 2).\n   - If n is even → return half * half.\n   - If n is odd → return half * half * x.\n\n🔁 DRY RUN (Example):\nInput: x = 2.0, n = 5\n\nmyPow(2.0, 5)\n→ n is odd → compute half = myPow(2.0, 2)\n\n  myPow(2.0, 2)\n  → even → half = myPow(2.0, 1)\n\n    myPow(2.0, 1)\n    → odd → half = myPow(2.0, 0)\n      → return 1\n    → return 1 * 1 * 2.0 = 2.0\n\n  → return 2.0 * 2.0 = 4.0\n\n→ return 4.0 * 4.0 * 2.0 = 32.0\n\n✔️ Final Output: 32.0\n\n🧨 EDGE CASE:\nInput: x = 2.0, n = -2147483648 (Integer.MIN_VALUE)\n- Java cannot negate this directly.\n- So use: 1 / (myPow(2.0, 2147483647) * 2.0)\n\n⏱ TIME & SPACE COMPLEXITY:\n- Time: O(log n) → Because we divide n by 2 each time.\n- Space: O(log n) → Due to recursive call stack.\n\n🚀 OPTIMALITY:\n- Optimal for large powers.\n- Much faster than naive O(n) multiplication.\n\n💻 JAVA CODE:\n```java\npublic class Solution {\n    public double myPow(double x, int n) {\n        if (n == 0) return 1;\n\n        if (n < 0) {\n            if (n == Integer.MIN_VALUE)\n                return 1 / (myPow(x, Integer.MAX_VALUE) * x);\n            x = 1 / x;\n            n = -n;\n        }\n\n        double half = myPow(x, n / 2);\n\n        if (n % 2 == 0) {\n            return half * half;\n        } else {\n            return half * half * x;\n        }\n    }\n}\n```"
    },       
    {
      "title": "(question - Maximum Subarray Sum using Kadane’s Algorithm) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- Use Kadane’s Algorithm to find the maximum sum of a contiguous subarray.\n- Initialize two variables:\n  - `maxSum` = nums[0] → stores the overall maximum\n  - `currentSum` = nums[0] → stores current running subarray sum\n- Traverse the array starting from index 1:\n  - At each index i, update:\n    - `currentSum = max(nums[i], currentSum + nums[i])`\n    - This means: either start a new subarray from nums[i] or extend the current one\n  - Update `maxSum = max(maxSum, currentSum)`\n- Finally, return `maxSum` as the result\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Each element is visited only once\nSpace Complexity: O(1)\n- No extra space used beyond variables\n\nDRY RUN / EXAMPLE WALKTHROUGH:\nInput: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]\n\nStep-by-step:\n- maxSum = currentSum = -2\n\ni = 1: nums[i] = 1\n→ currentSum = max(1, -2 + 1) = 1\n→ maxSum = max(-2, 1) = 1\n\ni = 2: nums[i] = -3\n→ currentSum = max(-3, 1 - 3) = -2\n→ maxSum = max(1, -2) = 1\n\ni = 3: nums[i] = 4\n→ currentSum = max(4, -2 + 4) = 4\n→ maxSum = max(1, 4) = 4\n\ni = 4: nums[i] = -1\n→ currentSum = max(-1, 4 - 1) = 3\n→ maxSum = max(4, 3) = 4\n\ni = 5: nums[i] = 2\n→ currentSum = max(2, 3 + 2) = 5\n→ maxSum = max(4, 5) = 5\n\ni = 6: nums[i] = 1\n→ currentSum = max(1, 5 + 1) = 6\n→ maxSum = max(5, 6) = 6\n\ni = 7: nums[i] = -5\n→ currentSum = max(-5, 6 - 5) = 1\n→ maxSum = max(6, 1) = 6\n\ni = 8: nums[i] = 4\n→ currentSum = max(4, 1 + 4) = 5\n→ maxSum = max(6, 5) = 6\n\n✔️ Final Output: 6\n\nOPTIMALITY NOTE:\n- Kadane’s Algorithm is optimal for this problem\n- It runs in O(n) time with O(1) space — perfect for large arrays"
    },
    {
      "title": "(question - Search Element in 2D Sorted Matrix) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The matrix is sorted: rows are in ascending order left to right, and columns are sorted top to bottom.\n- Start from the **top-right corner** of the matrix: `matrix[0][cols - 1]`\n- At each step:\n  - If current value == target → ✅ found → return true\n  - If target < current value → move left (col--)\n  - If target > current value → move down (row++)\n- Continue until either target is found or we go out of matrix bounds\n- If loop ends, return false (not found)\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(m + n)\n- At most we move m rows and n columns (one step at a time)\nSpace Complexity: O(1)\n- No extra space used beyond index variables\n\nDRY RUN / EXAMPLE:\nInput:\nmatrix = [\n [1, 4, 7, 11],\n [2, 5, 8, 12],\n [3, 6, 9, 16],\n [10, 13, 14, 17]\n]\ntarget = 5\n\nStart at (0, 3) → 11\n- 5 < 11 → move left to (0, 2) → 7\n- 5 < 7 → move left to (0, 1) → 4\n- 5 > 4 → move down to (1, 1) → 5\n✔️ Match found → return true\n\nOPTIMALITY NOTE:\n- This is the most efficient method for sorted row-column matrix\n- Compared to brute-force O(m * n) or binary search O(log(m*n)) with flattening, this method is intuitive and O(m + n)"
    },
    {
      "title": "(question - Container With Most Water) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find two lines that together with the x-axis form a container, such that it holds the most water.\n- Use a **two-pointer approach** starting from both ends of the array:\n  - `left = 0`, `right = n - 1`\n  - At each step:\n    - Calculate width = right - left\n    - Calculate height = min(height[left], height[right])\n    - Area = width * height\n    - Update maxArea if this area is larger\n  - Move the pointer pointing to the shorter line:\n    - This is because moving the taller line cannot increase area (width is reducing and height stays same or reduces)\n- Continue until left meets right\n- Finally return the `maxArea` found\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Each element is visited at most once (left and right pointers move inward)\nSpace Complexity: O(1)\n- No extra space used\n\nDRY RUN / EXAMPLE:\nInput: height = [1,8,6,2,5,4,8,3,7]\n\nStep-by-step:\n- left = 0, right = 8 → height = min(1, 7) = 1 → area = 8 * 1 = 8\n- height[left] < height[right] → left++\n\n- left = 1, right = 8 → height = min(8, 7) = 7 → area = 7 * 7 = 49 → maxArea = 49\n- height[left] > height[right] → right--\n\n- left = 1, right = 7 → height = min(8, 3) = 3 → area = 6 * 3 = 18 → maxArea = 49\n- right--\n\n- left = 1, right = 6 → height = min(8, 8) = 8 → area = 5 * 8 = 40 → maxArea = 49\n- right--\n\n- left = 1, right = 5 → height = min(8, 4) = 4 → area = 4 * 4 = 16 → maxArea = 49\n...continue until left == right\n\n✔️ Final Output: 49\n\nOPTIMALITY NOTE:\n- This two-pointer technique is the most efficient solution\n- Much better than brute-force O(n²) checking every pair\n- Uses linear time and constant space"
    },
    {
      "title": "(question - Sort Colors / Dutch National Flag Problem) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- This approach uses **Counting Sort**, which is effective for sorting a small range of integers (in this case, 0, 1, and 2).\n- Step 1: Find the largest number in the array (not necessary for this specific problem since values are only 0, 1, 2, but handled generally).\n- Step 2: Create a count array of size `largest + 1` to store frequencies of each value.\n- Step 3: Traverse the original array to fill the count array.\n- Step 4: Reconstruct the original array by placing each number `i` from the count array `count[i]` times.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n + k)\n- O(n) to count frequencies, O(k) to fill back where `k = range of values` (here k = 3 for 0,1,2)\nSpace Complexity: O(k)\n- Count array uses extra space of size equal to the max element + 1\n\nDRY RUN / EXAMPLE:\nInput: nums = [2, 0, 2, 1, 1, 0]\n\nStep 1: largest = 2 → count[] = [0, 0, 0]\n\nStep 2 (Count frequency):\n- count[2]++ → [0, 0, 1]\n- count[0]++ → [1, 0, 1]\n- count[2]++ → [1, 0, 2]\n- count[1]++ → [1, 1, 2]\n- count[1]++ → [1, 2, 2]\n- count[0]++ → [2, 2, 2]\n\nStep 3 (Fill original array):\n- Fill two 0s → [0, 0, _, _, _, _]\n- Fill two 1s → [0, 0, 1, 1, _, _]\n- Fill two 2s → [0, 0, 1, 1, 2, 2]\n\n✔️ Final Output: [0, 0, 1, 1, 2, 2]\n\nOPTIMIZED APPROACH (No Extra Space):\n- Use the **Dutch National Flag algorithm** (three pointers for 0, 1, and 2)\n- Time: O(n), Space: O(1)\n- This is more space-efficient for problems like \"Sort Colors\" where values are only 0, 1, and 2."
    },
    {
      "title": "(question - 3Sum: Find All Unique Triplets That Sum to Zero) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find all unique triplets (a, b, c) such that a + b + c = 0.\n- Sort the array to enable the two-pointer approach and easy duplicate skipping.\n- Iterate over the array with index `i` (first element of triplet):\n  - Skip duplicates: if nums[i] == nums[i - 1], continue\n  - Use two pointers `j` = i + 1 and `k` = nums.length - 1\n  - While j < k:\n    - Calculate sum = nums[i] + nums[j] + nums[k]\n    - If sum == 0: Add the triplet and move both pointers, skipping duplicates\n    - If sum < 0: increase j (need larger sum)\n    - If sum > 0: decrease k (need smaller sum)\n- Continue until all unique triplets are found\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n²)\n- Outer loop runs O(n), inner two-pointer loop is O(n), total = O(n²)\nSpace Complexity: O(1) (excluding result list)\n- Sorting is in-place, only output list uses space\n\nDRY RUN / EXAMPLE:\nInput: nums = [-1, 0, 1, 2, -1, -4]\nSorted: [-4, -1, -1, 0, 1, 2]\n\nLoop i = 0 → nums[i] = -4\n- j = 1, k = 5 → sum = -4 + (-1) + 2 = -3 → j++\n- j = 2, k = 5 → sum = -3 → j++\n...\n\nLoop i = 1 → nums[i] = -1\n- j = 2, k = 5 → sum = -1 + (-1) + 2 = 0 → ✅ add [-1, -1, 2]\n- Skip duplicate j, j++\n- j = 3, k = 4 → sum = -1 + 0 + 1 = 0 → ✅ add [-1, 0, 1]\n- Move j++, k--\n\nLoop i = 2 → skip (duplicate -1)\nLoop i = 3 → nums[i] = 0, j = 4, k = 5 → sum = 0 + 1 + 2 = 3 → k--\n\n✔️ Final Output: [[-1, -1, 2], [-1, 0, 1]]\n\nOPTIMALITY NOTE:\n- This is the optimal approach for 3Sum in O(n²) time\n- Avoids unnecessary combinations using sorting and duplicate skipping\n- More efficient than brute-force O(n³)"
    },
    {
      "title": "(question - 4Sum: Find All Unique Quadruplets That Sum to Target) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find all unique quadruplets (a, b, c, d) such that a + b + c + d == target.\n- Sort the input array to apply two-pointer approach and skip duplicates efficiently.\n- Use two nested loops to fix the first two numbers (`i`, `j`), then use two pointers (`left`, `right`) for the remaining two.\n- At each step:\n  - Calculate the sum of the 4 elements (use long to avoid overflow)\n  - If sum == target → ✅ store the quadruplet, skip duplicates for left & right\n  - If sum < target → move left++ (need larger sum)\n  - If sum > target → move right-- (need smaller sum)\n- Skip duplicates for `i` and `j` to avoid repeated quadruplets.\n- Continue until all unique combinations are checked\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n³)\n- First loop (i): O(n), second loop (j): O(n), inner two-pointer scan: O(n)\n- Total: O(n³) for checking combinations efficiently\nSpace Complexity: O(1) (excluding result list)\n- No extra space used other than output list\n\nDRY RUN / EXAMPLE:\nInput: nums = [1, 0, -1, 0, -2, 2], target = 0\nSorted: [-2, -1, 0, 0, 1, 2]\n\nStep-by-step:\n- i = 0 → nums[i] = -2\n  - j = 1 → nums[j] = -1\n    - left = 2 (0), right = 5 (2)\n    - sum = -2 + (-1) + 0 + 2 = -1 → left++\n    - sum = -2 + (-1) + 0 + 2 = -1 → left++\n    - sum = -2 + (-1) + 1 + 2 = 0 ✅ → add [-2, -1, 1, 2]\n  - j = 2 → nums[j] = 0\n    - left = 3, right = 5\n    - sum = -2 + 0 + 0 + 2 = 0 ✅ → add [-2, 0, 0, 2]\n- i = 1 → nums[i] = -1\n  - j = 2 → nums[j] = 0\n    - left = 3, right = 5\n    - sum = -1 + 0 + 0 + 2 = 1 → right--\n    - sum = -1 + 0 + 0 + 1 = 0 ✅ → add [-1, 0, 0, 1]\n\n✔️ Final Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]\n\nOPTIMALITY NOTE:\n- This is the most efficient approach for 4Sum without using hashing\n- Uses sorting + two-pointer technique to reduce complexity from brute-force O(n⁴) to O(n³)\n- Prevents duplicates using checks before every key pointer advance"
    },
    {
      "title": "(question - Next Permutation: Rearrange to Next Lexicographically Greater Array) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to rearrange the given array into the next lexicographically greater permutation. If not possible, return the smallest (sorted ascending).\n- Step 1: Traverse from the end and find the first index `pivot` such that nums[i] < nums[i + 1]. This is the break point where the increasing sequence from the end starts.\n- Step 2: If such a pivot is found (i.e., array is not in descending order):\n  - Traverse again from the end to find the **smallest number greater than nums[pivot]** and swap them.\n- Step 3: Reverse the subarray to the right of `pivot` to make it the smallest lexicographic sequence.\n- If pivot was not found, the array is the last permutation — reverse the entire array to get the first permutation.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- One pass to find pivot, one pass to find swap index, and one pass to reverse → total O(n)\nSpace Complexity: O(1)\n- In-place rearrangement without using any extra space\n\nDRY RUN / EXAMPLE:\nInput: [1, 2, 3]\n- Step 1: i = 1 (nums[1] = 2 < 3), pivot = 1\n- Step 2: From end, nums[2] = 3 > nums[1] → swap 2 and 3 → [1, 3, 2]\n- Step 3: Reverse from pivot+1 = 2 → already sorted\n\n✔️ Final Output: [1, 3, 2]\n\nAnother Example:\nInput: [3, 2, 1]\n- Step 1: No such i found → pivot = -1\n- Reverse entire array → [1, 2, 3]\n\nOPTIMALITY NOTE:\n- This is the optimal in-place solution with constant space and linear time\n- Used in problems related to permutation generation and combinatorics"
    },
    {
      "title": "(question - Merge Intervals: Combine Overlapping Ranges) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to merge all overlapping intervals in a given list of intervals.\n- Step 1: Sort the intervals based on their start time using `Arrays.sort()`.\n- Step 2: Initialize a list `merged` to store the merged intervals.\n- Step 3: Start with the first interval as the current interval.\n- Step 4: Iterate through the remaining intervals:\n  - If the current interval's end overlaps with the next interval's start (`currentEnd >= nextStart`), merge them by updating the current interval’s end as `max(currentEnd, nextEnd)`.\n  - Otherwise, there's no overlap — add the next interval as a new current interval.\n- Step 5: Convert the list to a 2D array and return.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n log n)\n- Sorting takes O(n log n), and merging is O(n)\n- Total: O(n log n)\nSpace Complexity: O(n)\n- Required for storing the output list of merged intervals\n\nDRY RUN / EXAMPLE:\nInput: [[1, 3], [2, 6], [8, 10], [15, 18]]\nSorted: [[1, 3], [2, 6], [8, 10], [15, 18]]\n\nIteration:\n- Current = [1, 3], Next = [2, 6] → overlap → merge = [1, 6]\n- Current = [1, 6], Next = [8, 10] → no overlap → add [8, 10]\n- Current = [8, 10], Next = [15, 18] → no overlap → add [15, 18]\n\n✔️ Final Output: [[1, 6], [8, 10], [15, 18]]\n\nOPTIMALITY NOTE:\n- This is the most optimal and commonly accepted solution\n- Sorting enables a greedy merge strategy that ensures all overlaps are covered in one pass"
    },
    {
      "title": "(question - Longest Substring Without Repeating Characters) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find the length of the longest substring with all unique characters.\n- Use a **sliding window** approach with two pointers (`left` and `i`) and a **HashSet** to track unique characters.\n- Start with left = 0 and iterate `i` from 0 to end of the string:\n  - If the character at `i` is already in the set (i.e., duplicate found), shrink the window from the left by removing `s.charAt(left)` until the duplicate is removed.\n  - Add `s.charAt(i)` to the set.\n  - Update max length as `maxlen = max(maxlen, i - left + 1)`\n- Return `maxlen` at the end — this is the length of the longest valid window.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Each character is visited at most twice — once by `i` and once by `left`\n- Hence linear time\nSpace Complexity: O(k)\n- Where k = number of unique characters (max 26–128 depending on charset)\n- Uses HashSet to store current window's unique characters\n\nDRY RUN / EXAMPLE:\nInput: \"abcabcbb\"\n\nStep-by-step:\n- i=0: add 'a' → maxlen = 1\n- i=1: add 'b' → maxlen = 2\n- i=2: add 'c' → maxlen = 3\n- i=3: duplicate 'a' → remove 'a' from left, then add new 'a'\n- i=4: duplicate 'b' → remove 'b', add new 'b'\n- Continue this process\n\n✔️ Final Output: 3 (\"abc\")\n\nOPTIMALITY NOTE:\n- This is the optimal O(n) solution using the sliding window technique\n- Simple and efficient for problems involving substrings and uniqueness"
    },
    {
      "title": "(question - Set Matrix Zeroes) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to set the entire row and column to 0 if any cell in a matrix is 0.\n- Use the first row and first column as markers to track which rows and columns should be zeroed.\n\nStep-by-step:\n1. Check separately whether the first row and first column contain any zero, using two flags `firstRow` and `firstCol`.\n2. For the rest of the matrix (excluding first row and column), if any element is 0, mark its row and column by setting `matrix[i][0]` and `matrix[0][j]` to 0.\n3. Iterate again (excluding first row and column):\n   - If the corresponding row or column is marked, set `matrix[i][j]` to 0.\n4. Finally, based on `firstRow` and `firstCol`, zero the entire first row and/or first column if needed.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(m × n)\n- Two full traversals of the matrix\nSpace Complexity: O(1)\n- No extra space used except two flags\n- In-place modification using matrix itself\n\nDRY RUN / EXAMPLE:\nInput:\n[\n [1, 1, 1],\n [1, 0, 1],\n [1, 1, 1]\n]\n\nStep 1: firstRow = false, firstCol = false\nStep 2: Mark row and col — matrix[1][0] = 0, matrix[0][1] = 0\n\nMatrix after marking:\n[\n [1, 0, 1],\n [0, 0, 1],\n [1, 1, 1]\n]\n\nStep 3: Use markers to set matrix[1][1] and matrix[1][2] to 0, matrix[2][1] to 0\n\nMatrix after applying markers:\n[\n [1, 0, 1],\n [0, 0, 0],\n [1, 0, 1]\n]\n\n✔️ Final Output: [[1, 0, 1], [0, 0, 0], [1, 0, 1]]\n\nOPTIMALITY NOTE:\n- Uses no extra matrix or row/col arrays → best possible space optimization\n- Efficient for large matrices"
    },
    {
      "title": "(question - Word Search in Grid) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to determine if a given word can be formed by sequentially adjacent letters in the board (4 directions, no reuse).\n- Start by iterating over each cell. If the character matches the first letter of the word, begin a DFS search from that point.\n\nDFS FUNCTION:\n- At each step, check if the current cell matches the current index of the word.\n- Base case: if index == word.length(), return true.\n- If out of bounds or characters don’t match → return false.\n- Temporarily mark the current cell as visited by replacing it with '#'.\n- Recursively try all 4 directions (up, down, left, right).\n- After all calls, restore the original character (backtracking).\n- If any path returns true, propagate that up the call stack.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(m × n × 4^L)\n- m = rows, n = cols, L = word length\n- Each cell explores up to 4 directions recursively up to word length\nSpace Complexity: O(L)\n- Call stack depth is up to word length due to recursion\n\nDRY RUN / EXAMPLE:\nInput:\nboard = [\n  ['A', 'B', 'C', 'E'],\n  ['S', 'F', 'C', 'S'],\n  ['A', 'D', 'E', 'E']\n], word = \"ABCCED\"\n\nStep-by-step:\n- Start from board[0][0] = 'A' → match\n- Go right to 'B' → match\n- Go right to 'C' → match\n- Go down to 'C' → match\n- Go down to 'E' → match\n- Go left to 'D' → match\n✔️ All letters matched → return true\n\nOPTIMALITY NOTE:\n- Uses in-place board modification to avoid extra space\n- Efficient for large boards when pruning is effective\n- Backtracking ensures all valid paths are explored with minimal memory overhead"
    },
    {
      "title": "(question - Product of Array Except Self) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to return an array where result[i] = product of all elements except nums[i], without using division.\n- Use a two-pass approach with prefix and suffix products:\n\nStep 1 (Prefix Pass):\n- Initialize prefix = 1\n- Traverse left to right:\n  - result[i] = prefix\n  - prefix *= nums[i]\n\nStep 2 (Suffix Pass):\n- Initialize suffix = 1\n- Traverse right to left:\n  - result[i] *= suffix\n  - suffix *= nums[i]\n\n- This ensures result[i] = (product of all elements before i) * (product of all elements after i)\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Two linear passes over the array\nSpace Complexity: O(1) (excluding output array)\n- Only prefix and suffix variables used — constant extra space\n- The output array is not considered extra space as per problem statement\n\nDRY RUN / EXAMPLE:\nInput: [1, 2, 3, 4]\n\nPrefix pass:\n- result = [1, 1, 2, 6] (prefix multiplies left elements)\n\nSuffix pass:\n- result = [24, 12, 8, 6] (suffix multiplies right elements)\n\n✔️ Final Output: [24, 12, 8, 6]\n\nOPTIMALITY NOTE:\n- Space-optimized, avoids division, and runs in linear time\n- Works efficiently even with zeros in the input"
    },
    {
      "title": "(question - Subarray Sum Equals K) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- Use prefix sum technique with a HashMap to count subarrays whose sum equals k.\n- Maintain a running sum while traversing the array.\n- For each index i:\n  - Calculate sum += nums[i]\n  - Check if (sum - k) exists in the map → if yes, it means a subarray ending at i has sum k\n  - Increment count by map.get(sum - k)\n  - Update map: map[sum] = map.getOrDefault(sum, 0) + 1\n- This approach finds all subarrays in O(n) time\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Single pass over array, each map operation is O(1)\nSpace Complexity: O(n)\n- In worst case, map stores all unique prefix sums\n\nDRY RUN / EXAMPLE:\nInput: nums = [1, 2, 3], k = 3\n\nInitialize: sum = 0, count = 0, map = {0=1}\n\nIteration 1:\n- sum = 1 → map doesn't contain (1-3=-2)\n- map = {0=1, 1=1}\n\nIteration 2:\n- sum = 3 → map contains (3-3=0) ✅ count += 1\n- map = {0=1, 1=1, 3=1}\n\nIteration 3:\n- sum = 6 → map contains (6-3=3) ✅ count += 1\n- map = {0=1, 1=1, 3=1, 6=1}\n\n✔️ Final Output: 2 (subarrays: [1,2], [3])\n\nOPTIMALITY NOTE:\n- Efficient for large arrays\n- Handles both positive and negative numbers"
    },
    {
      "title": "(question - Find the Duplicate Number) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find the one repeated number in the array.\n- Use a HashSet to keep track of numbers we've seen.\n- Iterate through the array:\n  - If a number is already in the set → it's the duplicate → return it\n  - Else, add it to the set\n- If loop finishes without finding duplicate (theoretically shouldn't happen), return -1\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Each element is checked once in the set → O(1) operations\nSpace Complexity: O(n)\n- In worst case, the set stores up to n-1 unique elements\n\nDRY RUN / EXAMPLE:\nInput: [1, 3, 4, 2, 2]\n\nStep-by-step:\n- i = 0 → 1 → not in set → add → set = {1}\n- i = 1 → 3 → not in set → add → set = {1, 3}\n- i = 2 → 4 → not in set → add → set = {1, 3, 4}\n- i = 3 → 2 → not in set → add → set = {1, 2, 3, 4}\n- i = 4 → 2 → already in set ✅ return 2\n\n✔️ Final Output: 2\n\nOPTIMALITY NOTE:\n- Simple and easy to implement, but uses extra space\n- There exists a more optimized O(1) space Floyd’s Cycle Detection approach"
    },
    {
      "title": "(question - Spiral Matrix Traversal) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to traverse a 2D matrix in spiral order (right → down → left → up).\n- Use four pointers to define the current boundary: startRow, endRow, startCol, endCol.\n- Repeat the following steps while startRow <= endRow and startCol <= endCol:\n  1. Traverse from left to right across the top row\n  2. Traverse from top to bottom along the rightmost column\n  3. Traverse from right to left across the bottom row (if rows remain)\n  4. Traverse bottom to top along the leftmost column (if columns remain)\n- After each traversal, shrink the boundary (e.g., increment startRow, decrement endCol, etc.)\n- Continue until all elements are visited\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(m × n)\n- Every element in the matrix is visited once\nSpace Complexity: O(1) (excluding result list)\n- No extra space is used beyond the output\n\nDRY RUN / EXAMPLE:\nInput:\n[\n [1, 2, 3],\n [4, 5, 6],\n [7, 8, 9]\n]\n\nSteps:\n- Top row: 1 → 2 → 3\n- Right col: 6 → 9\n- Bottom row: 8 → 7\n- Left col: 4\n- Top row: 5\n\n✔️ Final Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]\n\nNOTE:\n- Commonly asked in interviews for understanding matrix traversal and loop boundaries\n- Be cautious with loop limits and edge cases like single row/column"
    },
    {
      "title": "(question - Search in a 2D Matrix) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The matrix is sorted in a special way:\n  - Each row is sorted from left to right\n  - First integer of each row is greater than the last integer of the previous row (or at least each row and column is sorted individually)\n- Use **staircase search** starting from the **top-right corner**:\n  1. If current value == target → return true\n  2. If target < current value → move left (decrement column)\n  3. If target > current value → move down (increment row)\n- Continue this until the target is found or indices go out of bounds\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(m + n)\n- Worst case: traverse one full row and one full column\nSpace Complexity: O(1)\n- No extra space is used\n\nDRY RUN / EXAMPLE:\nInput:\nmatrix = [\n [1, 3, 5, 7],\n [10, 11, 16, 20],\n [23, 30, 34, 50]\n], target = 3\n\nSteps:\n- Start at matrix[0][3] = 7 → 3 < 7 → move left\n- matrix[0][2] = 5 → 3 < 5 → move left\n- matrix[0][1] = 3 → match ✅ return true\n\n✔️ Final Output: true\n\nNOTE:\n- This is an efficient solution that leverages the matrix’s sorted structure\n- Avoids brute-force scanning which would take O(m×n)"
    },
    {
      "title": "(question - Trapping Rain Water) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find how much water can be trapped between bars after raining.\n- For each index `i`, the amount of water trapped is:\n  water = min(max_left, max_right) - height[i]\n- Precompute:\n  1. `leftmax[i]`: max height to the left (including i)\n  2. `rightmax[i]`: max height to the right (including i)\n- Traverse the array to fill `leftmax` and `rightmax`:\n  - `leftmax[0] = height[0]`\n  - `rightmax[n-1] = height[n-1]`\n- Final pass: for each index, calculate trapped water using:\n  `min(leftmax[i], rightmax[i]) - height[i]`\n- Sum all such values to get total trapped water.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- 3 passes over the array (left max, right max, water calculation)\nSpace Complexity: O(n)\n- Extra arrays `leftmax` and `rightmax` used\n\nDRY RUN / EXAMPLE:\nInput: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]\n\nleftmax  = [0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]\nrightmax = [3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1]\n\nWater trapped at each index:\n- i = 2: min(1, 3) - 0 = 1\n- i = 5: min(2, 3) - 0 = 2\n- i = 6: min(2, 3) - 1 = 1\n- ... and so on\nTotal trapped = 6 units\n\n✔️ Final Output: 6\n\nNOTE:\n- A more space-optimized version exists using two pointers and constant space.\n- This approach is intuitive and good for understanding the problem."
    },
    {
      "title": "(question - Sliding Window Maximum) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to find the maximum in each sliding window of size `k` in the array `nums`.\n- We use a PriorityQueue (Max-Heap) to keep track of the maximum element in the current window.\n- Each element in the heap is stored as a Pair (value, index).\n- Initially, push the first `k` elements into the heap.\n- For each new element:\n  - Remove all elements from the heap whose index is out of the current window (i.e., idx <= i - k).\n  - Add the new element as a Pair (nums[i], i).\n  - The max in the current window is at the top of the heap: `pq.peek().val`\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n log k)\n- Each insertion and deletion in heap takes O(log k).\n- Total of n elements processed → O(n log k).\nSpace Complexity: O(k)\n- Heap stores at most k elements at a time.\n\nDRY RUN / EXAMPLE:\nInput: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3\n\nInitial window: [1, 3, -1]\n→ Heap: {3, 1, -1}, max = 3\n\nNext window: [3, -1, -3]\n→ Remove 1 (out of window), add -3 → Heap: {3, -1, -3}, max = 3\n\nNext window: [-1, -3, 5]\n→ Remove 3, add 5 → Heap: {5, -1, -3}, max = 5\n\nNext: [-3, 5, 3] → max = 5\nNext: [5, 3, 6] → max = 6\nNext: [3, 6, 7] → max = 7\n\n✔️ Final Output: [3, 3, 5, 5, 6, 7]"
    },
    {
      "title": "(question - Count Reverse Pairs) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to count reverse pairs (i, j) where i < j and nums[i] > 2 * nums[j].\n- Brute force takes O(n^2), so we use a modified merge sort.\n- While performing merge sort, before merging two halves, we count valid reverse pairs:\n  - For each i in the left half, find how many j’s in the right half satisfy nums[i] > 2 * nums[j].\n  - Since both halves are sorted, we use two pointers to count in O(n).\n- After counting, we perform the usual merge step to maintain sorted order.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n log n)\n- Each merge step takes O(n), and there are log n levels in the recursion tree.\nSpace Complexity: O(n)\n- Temporary array is used during merging.\n\nDRY RUN / EXAMPLE:\nInput: [1, 3, 2, 3, 1]\n\nStep 1: Divide into halves → [1, 3] and [2, 3, 1]\nStep 2: Count pairs across halves\n- From left [1, 3], check reverse condition with right [2, 3, 1]\n- 3 > 2*1 → count = 1\n\nStep 3: Continue merge sort on right → [2, 3] and [1]\n- From [2, 3] check with [1]\n- 2 > 2*1 → count = 1\n- 3 > 2*1 → count = 2 (total 3 now)\n\n✔️ Final Output: 2 reverse pairs"
    },
    {
      "title": "(question - Largest Rectangle in Histogram) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- Use a monotonic increasing stack to store indices of bars.\n- Iterate through the histogram bars from left to right.\n- At each index i, if the current height is **less** than the bar at the stack's top, it means we've found the right boundary for the bar at top of stack.\n  - We pop from stack, and compute the area using:\n    height = heights[pop()]\n    width = i - stack.peek() - 1 (if stack not empty) else i\n  - Update maxArea.\n- After processing all bars, we still append a 0-height bar at the end to flush out remaining bars in stack.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Each bar is pushed and popped at most once.\nSpace Complexity: O(n)\n- Stack stores indices of bars (at most n indices).\n\nDRY RUN / EXAMPLE:\nInput: [2, 1, 5, 6, 2, 3]\n\nStack: []\n- i = 0 → push 0 → Stack: [0]\n- i = 1 → 1 < 2 → pop 0 → height = 2, width = 1 → area = 2 → maxArea = 2\n            → push 1 → Stack: [1]\n- i = 2 → 5 > 1 → push 2 → Stack: [1, 2]\n- i = 3 → 6 > 5 → push 3 → Stack: [1, 2, 3]\n- i = 4 → 2 < 6 → pop 3 → height = 6, width = 1 → area = 6 → maxArea = 6\n            → pop 2 → height = 5, width = 2 → area = 10 → maxArea = 10\n            → push 4 → Stack: [1, 4]\n- i = 5 → 3 > 2 → push 5 → Stack: [1, 4, 5]\n- i = 6 (0-height dummy bar)\n            → pop 5 → height = 3, width = 1 → area = 3\n            → pop 4 → height = 2, width = 4 → area = 8\n            → pop 1 → height = 1, width = 6 → area = 6\n\n✔️ Final maxArea = 10"
    },
    {
      "title": "(question - Valid Palindrome) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to check if a string is a valid palindrome, considering only alphanumeric characters and ignoring cases.\n- Use a `StringBuilder` to build a cleaned version of the input string:\n  - Iterate through each character of the input string.\n  - If the character is a letter or digit, convert it to lowercase and append it to the `StringBuilder`.\n- After constructing the cleaned string, use two pointers:\n  - `left` starts at 0, and `right` starts at the end of the cleaned string.\n  - Move the pointers toward each other, comparing characters at `left` and `right`.\n  - If at any point the characters do not match, return `false`.\n- If the loop completes without mismatches, return `true`.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- One pass to clean the string (O(n)) and one pass to check for palindrome (O(n)).\nSpace Complexity: O(n)\n- The cleaned string is stored in a `StringBuilder`, which can be up to length n.\n\nDRY RUN / EXAMPLE:\nInput: \"A man, a plan, a canal: Panama\"\n\nStep 1: Clean the string → \"amanaplanacanalpanama\"\nStep 2: Check palindrome:\n- left = 0, right = 20 → 'a' == 'a' ✔️\n- left = 1, right = 19 → 'm' == 'm' ✔️\n- left = 2, right = 18 → 'a' == 'a' ✔️\n...\n- All characters match until pointers meet.\n\n✔️ Final result = true"
    },
    {
      "title": "(question - Valid Anagram) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to check if two strings `s` and `t` are anagrams — meaning they contain the same characters with the same frequency.\n- First, check if the lengths of the strings are unequal. If they are, return false immediately.\n- Create a `HashMap<Character, Integer>` to store the frequency count of characters from string `s`.\n  - Iterate through `s`, and for each character, increment its count in the map.\n- Then iterate through string `t`:\n  - For each character, check if it exists in the map:\n    - If it does:\n      - If its frequency is 1, remove it from the map.\n      - Else, decrement its frequency.\n    - If it doesn't exist in the map, return false (extra character not in `s`).\n- If the loop completes without returning false, the two strings are anagrams.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- One pass to build the map and one pass to compare (n = length of the strings).\nSpace Complexity: O(n)\n- Map may contain up to n unique characters (in worst case).\n\nDRY RUN / EXAMPLE:\nInput: s = \"anagram\", t = \"nagaram\"\n\nStep 1: Build map from `s`\n→ {a=3, n=1, g=1, r=1, m=1}\n\nStep 2: Check characters from `t`:\n- 'n' exists → count 1 → remove 'n'\n- 'a' exists → count 3 → reduce to 2\n- 'g' exists → count 1 → remove 'g'\n- 'a' exists → count 2 → reduce to 1\n- 'r' exists → count 1 → remove 'r'\n- 'a' exists → count 1 → remove 'a'\n- 'm' exists → count 1 → remove 'm'\n\n✔️ All characters matched, final map is empty → return true"
    },
    {
      "title": "(question - Reverse Words in a String) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to reverse the order of words in a string, removing any extra spaces.\n- First, use `trim()` to remove leading and trailing spaces from the string.\n- Then use `split(\"\\\\s+\")` to split the string into words — this handles multiple spaces by splitting on one or more spaces.\n- Use a `StringBuilder` to construct the reversed sentence:\n  - Iterate from the end of the word array to the beginning.\n  - Append each word and a space (except after the last word).\n- Return the final reversed string.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Each character is visited a constant number of times (trimming, splitting, reversing).\nSpace Complexity: O(n)\n- Extra space used for the array of words and the output string.\n\nDRY RUN / EXAMPLE:\nInput: \"  the sky   is blue  \"\n\nStep 1: Trim → \"the sky   is blue\"\nStep 2: Split → [\"the\", \"sky\", \"is\", \"blue\"]\nStep 3: Reverse & join → \"blue is sky the\"\n\n✔️ Final Output = \"blue is sky the\""
    },
    {
      "title": "(question - Remove All Occurrences of a Substring) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to remove **all** occurrences of a given substring `part` from the input string `s`.\n- Convert the string `s` to a `StringBuilder` to allow efficient deletions.\n- Use a loop that continues as long as `part` exists in the current string:\n  - Find the index of the first occurrence of `part` using `indexOf`.\n  - Use `delete(start, end)` to remove that occurrence from the `StringBuilder`.\n- Repeat until no more occurrences are found.\n- Finally, return the modified string.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n * m)\n- Worst-case: for each of n characters in `s`, we may call `indexOf` which takes up to O(n), and `delete()` which can take O(n).\n- m = length of `part`.\nSpace Complexity: O(n)\n- `StringBuilder` stores the modified version of the original string.\n\nDRY RUN / EXAMPLE:\nInput: s = \"daabcbaabcbc\", part = \"abc\"\n\nStep 1: sb = \"daabcbaabcbc\"\n- 'abc' found at index 2 → delete → sb = \"dabaabcbc\"\n- 'abc' found at index 4 → delete → sb = \"dababcbc\"\n- 'abc' found at index 5 → delete → sb = \"dabab\"\n- 'abc' not found → exit loop\n\n✔️ Final Output = \"dab\"\n"
    },
    {
      "title": "(question - Permutation in String) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to check if `s2` contains a permutation of `s1` as a substring.\n- If `s1.length()` > `s2.length()`, return false immediately.\n- Use two frequency arrays (`s1Count` and `windowCount`) of size 26 (for lowercase letters):\n  - `s1Count` stores character counts of `s1`.\n  - `windowCount` tracks character frequencies of the current sliding window in `s2` of size equal to `s1.length()`.\n- Slide the window across `s2` using two pointers (`left` and `right`):\n  - Expand the window by moving `right`, updating `windowCount`.\n  - If window size exceeds `s1.length()`, shrink from left and update `windowCount` accordingly.\n  - After each window adjustment, check if the current `windowCount` matches `s1Count` using `Arrays.equals()`.\n  - If matched, return true (a valid permutation is found).\n- If no match is found after the loop, return false.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Where n is the length of `s2`.\n- Sliding window runs in linear time, and each `Arrays.equals()` call is O(26) = O(1).\nSpace Complexity: O(1)\n- Only fixed-size arrays of 26 characters are used.\n\nDRY RUN / EXAMPLE:\nInput: s1 = \"ab\", s2 = \"eidbaooo\"\n\n- s1Count = [1,1,0,...] // for 'a' and 'b'\n- Sliding window of size 2:\n  - window = \"ei\" → count ≠ s1Count ❌\n  - window = \"id\" → ❌\n  - window = \"db\" → ❌\n  - window = \"ba\" → count matches s1Count ✅\n\n✔️ Final Output = true"
    },
    {
      "title": "(question - String Compression) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to compress a character array in-place such that repeated characters are followed by their count (if > 1), and return the new length.\n- Use a `write` pointer to track the position where compressed characters should be written.\n- Iterate through the `chars` array with a read pointer `i`:\n  - Initialize `count = 1` for current character.\n  - Use a while loop to count consecutive occurrences of the same character.\n  - After counting, write the character at index `write`, then increment `write`.\n  - If `count > 1`, convert the count to a string, and write each digit separately.\n- Return the final `write` pointer, which represents the length of the compressed array.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Each character is processed once, and digits of counts are written in constant time.\nSpace Complexity: O(1)\n- In-place algorithm; no extra data structures used (excluding a few variables).\n\nDRY RUN / EXAMPLE:\nInput: ['a','a','b','b','c','c','c']\n\n- i = 0 → count = 2 for 'a' → write 'a', '2' → chars = ['a','2']\n- i = 2 → count = 2 for 'b' → write 'b', '2' → chars = ['a','2','b','2']\n- i = 4 → count = 3 for 'c' → write 'c', '3' → chars = ['a','2','b','2','c','3']\n\n✔️ Final Output = 6 (compressed chars = [\"a\",\"2\",\"b\",\"2\",\"c\",\"3\"])"
    },
    {
      "title": "(question - Reverse Words in a String) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to reverse the order of words in a given string, removing any extra spaces.\n- First, use `trim()` to remove leading and trailing spaces.\n- Then use `split(\"\\\\s+\")` to break the string into words. `\\\\s+` ensures that multiple spaces are treated as a single delimiter.\n- Use a `StringBuilder` to efficiently build the final reversed string:\n  - Iterate from the end of the `words` array to the beginning.\n  - Append each word to the `StringBuilder`.\n  - Add a space after each word **except** the last one.\n- Finally, return the reversed string using `toString()`.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Each character is visited a constant number of times for trimming, splitting, and joining.\nSpace Complexity: O(n)\n- Extra space used for the words array and the resulting string.\n\nDRY RUN / EXAMPLE:\nInput: \"  hello   world  \"\n\nStep 1: `trim()` → \"hello   world\"\nStep 2: `split(\"\\\\s+\")` → [\"hello\", \"world\"]\nStep 3: Iterate in reverse:\n- Append \"world\"\n- Append space\n- Append \"hello\"\n→ Result = \"world hello\"\n\n✔️ Final Output = \"world hello\""
    },
    {
      "title": "(question - Longest Common Prefix) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find the longest common prefix string among all strings in the array `strs`.\n- If the input array is empty or null, return an empty string.\n- Initialize the `prefix` as the first string in the array.\n- Iterate over the remaining strings in the array:\n  - While the current string does **not** start with the current `prefix`, shorten the `prefix` from the end.\n  - Use `indexOf(prefix) != 0` to check if the current prefix is at the start of the string.\n  - Keep reducing `prefix` until it matches or becomes empty.\n  - If `prefix` becomes empty at any point, return \"\" (no common prefix).\n- Return the final value of `prefix`.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n * m)\n- Where `n` is the number of strings and `m` is the length of the shortest string.\n- In the worst case, you may compare every character in every string.\nSpace Complexity: O(1)\n- Only a few extra variables are used.\n\nDRY RUN / EXAMPLE:\nInput: [\"flower\", \"flow\", \"flight\"]\n\nStep 1: prefix = \"flower\"\n- Compare with \"flow\":\n  → \"flower\" is not a prefix → shrink to \"flow\" ✅\n- Compare with \"flight\":\n  → \"flow\" is not a prefix → shrink to \"flo\" → \"fl\" → match ✅\n\n✔️ Final Output = \"fl\""
    },
    {
      "title": "(question - Group Anagrams) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to group words that are anagrams of each other.\n- Use a `HashMap<String, List<String>>` to group strings by their sorted character sequence:\n  - Iterate over each string in the input array:\n    - Convert the string to a character array.\n    - Sort the character array to get a canonical representation of the anagram group.\n    - Convert the sorted array back to a string (`sortedStr`).\n    - Use `sortedStr` as the key in the map.\n    - Add the original string to the list mapped by that key.\n- At the end, return a new list containing all grouped anagram lists from the map.\n\nWHY THIS WORKS:\n- All anagrams share the same sorted character sequence, so sorting ensures grouping by common pattern.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n * k log k)\n- n = number of strings\n- k = maximum length of a string (sorting each string takes O(k log k))\nSpace Complexity: O(n * k)\n- For storing grouped anagrams and intermediate sorted keys.\n\nDRY RUN / EXAMPLE:\nInput: [\"eat\", \"tea\", \"tan\", \"ate\", \"nat\", \"bat\"]\n\nStep-by-step:\n- \"eat\" → sorted: \"aet\" → map = {\"aet\": [\"eat\"]}\n- \"tea\" → sorted: \"aet\" → map = {\"aet\": [\"eat\", \"tea\"]}\n- \"tan\" → sorted: \"ant\" → map = {\"aet\": [...], \"ant\": [\"tan\"]}\n- \"ate\" → sorted: \"aet\" → map = {\"aet\": [\"eat\", \"tea\", \"ate\"], ...}\n- \"nat\" → sorted: \"ant\" → map = {\"ant\": [\"tan\", \"nat\"], ...}\n- \"bat\" → sorted: \"abt\" → map = {\"abt\": [\"bat\"], ...}\n\n✔️ Final Output = [[\"eat\", \"tea\", \"ate\"], [\"tan\", \"nat\"], [\"bat\"]]"
    },
    {
      "title": "(question - Minimum Window Substring) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to find the smallest substring in `s` that contains all characters from string `t` (including duplicates).\n- First, create a frequency map (`map`) of characters in `t`.\n- Use the sliding window technique with two pointers: `left` and `right`.\n- Use another map (`mop`) to track the character frequencies in the current window.\n- Use a variable `formed` to track how many characters meet the required count.\n\nSTEPS:\n1. Move the `right` pointer to expand the window and include characters in `mop`.\n2. When the window contains all required characters (`formed == map.size()`):\n   - Try to contract the window from the `left` to find the minimum possible window.\n   - Update the result if a smaller valid window is found.\n   - Before moving `left`, decrease the count in `mop` and update `formed` accordingly.\n3. Continue until the end of `s`.\n4. Finally, return the substring using stored indices from `result`. If no valid window is found, return an empty string.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(s.length + t.length)\n- Each character is visited at most twice (once by `right`, once by `left`).\nSpace Complexity: O(t.length)\n- Extra space for frequency maps.\n\nDRY RUN / EXAMPLE:\nInput: s = \"ADOBECODEBANC\", t = \"ABC\"\n\n- Frequency map of t: {A=1, B=1, C=1}\n- Window expands: A → AD → ADO → ADOB → ADO... → BANC (valid)\n- Minimum valid window found: \"BANC\"\n\n✔️ Final Output = \"BANC\""
    },
    {
      "title": "(question - Longest Happy Prefix) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find the longest prefix of the string which is also a suffix **but not equal to the full string itself**.\n- This is a classic use of the **KMP (Knuth-Morris-Pratt) prefix function**, also known as the 'failure function'.\n\nSTEPS:\n1. Create a prefix array `pi` of size `n`, where `pi[i]` stores the length of the longest proper prefix which is also a suffix for the substring `s[0..i]`.\n2. Initialize `j = 0` to track the length of the current matching prefix.\n3. Iterate `i` from 1 to n-1:\n   - If `s.charAt(i) != s.charAt(j)`, fall back using `pi[j - 1]` until match or j == 0.\n   - If characters match, increment `j`.\n   - Set `pi[i] = j`.\n4. The value `pi[n-1]` gives the length of the longest happy prefix.\n5. Return `s.substring(0, pi[n - 1])`.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Each character is processed at most twice.\nSpace Complexity: O(n)\n- The prefix table requires linear space.\n\nDRY RUN / EXAMPLE:\nInput: s = \"level\"\n- pi = [0, 0, 0, 1, 2]\n- `pi[4] = 2` → longest happy prefix is `s.substring(0, 2)` = \"le\"\n\n✔️ Final Output = \"le\""
    },            
    {
      title: "(question - Peak Index in a Mountain Array) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - The array represents a mountain — strictly increasing and then strictly decreasing.
    - We are to find the index of the peak element.
    - Use **Binary Search** since the array has a specific pattern that allows us to discard half at each step.
    
    STEPS:
    1. Initialize \`left = 0\`, \`right = arr.length - 1\`.
    2. While \`left < right\`:
       - Compute mid: \`mid = left + (right - left) / 2\`.
       - If \`arr[mid] < arr[mid + 1]\`, we are in the **ascending** part → peak is on the right → \`left = mid + 1\`.
       - Else, we are in the **descending** part or at peak → \`right = mid\`.
    3. Loop ends when \`left == right\`, which is the peak index.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(log n)
    - Each iteration halves the search space.
    Space Complexity: O(1)
    - No extra space used.
    
    EXAMPLE:
    Input: arr = [0, 2, 4, 3, 1]
    - mid = 2 → arr[mid] = 4, arr[mid+1] = 3 → move left
    - Eventually, left = right = 2 → arr[2] = 4 is the peak
    
    ✔️ Final Output = 2`,
      code: `class Solution {
        public int peakIndexInMountainArray(int[] arr) {
            int left = 0, right = arr.length - 1;
            while (left < right) {
                int mid = left + (right - left) / 2;
                if (arr[mid] < arr[mid + 1]) {
                    // We are in ascending part, peak is to the right
                    left = mid + 1;
                } else {
                    // We are in descending part or at peak
                    right = mid;
                }
            }
            return left;  // left == right is the peak index
        }
    }`
    },
    {
      title: "(question - Search in Rotated Sorted Array) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - This problem requires modified Binary Search on a rotated sorted array.
    - In each iteration, we check which half is sorted and decide where to move based on where the target lies.
    
    STEPS:
    1. Initialize \`left = 0\`, \`right = nums.length - 1\`.
    2. While \`left <= right\`:
       - Compute \`mid = left + (right - left) / 2\`.
       - If \`nums[mid] == target\`, return \`mid\`.
       - Check if **left half is sorted**: \`nums[left] <= nums[mid]\`
         - If target lies in this range: \`nums[left] <= target < nums[mid]\`, move right: \`right = mid - 1\`
         - Else, search right: \`left = mid + 1\`
       - Else, **right half is sorted**:
         - If target lies in this range: \`nums[mid] < target <= nums[right]\`, move left: \`left = mid + 1\`
         - Else, search left: \`right = mid - 1\`
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(log n)
    - Modified binary search with same efficiency.
    Space Complexity: O(1)
    - Only pointers are used.
    
    EXAMPLE:
    Input: nums = [4,5,6,7,0,1,2], target = 0
    - mid = 3 → 7; right half is sorted
    - target in sorted half → move right
    - Finally mid = 4 → match found
    
    ✔️ Final Output = 4`,
      code: `class Solution {
        public int search(int[] nums, int target) {
            int left = 0, right = nums.length - 1;
    
            while (left <= right) {
                int mid = left + (right - left) / 2;
    
                if (nums[mid] == target) return mid;
    
                // Check if left half is sorted
                if (nums[left] <= nums[mid]) {
                    // If target in left sorted half
                    if (nums[left] <= target && target < nums[mid]) {
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                }
                // Otherwise, right half must be sorted
                else {
                    // If target in right sorted half
                    if (nums[mid] < target && target <= nums[right]) {
                        left = mid + 1;
                    } else {
                        right = mid - 1;
                    }
                }
            }
    
            return -1; // target not found
        }
    }`
    },
    {
      title: "(question - Single Element in a Sorted Array) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Given a sorted array where every element appears exactly twice except one, find the single element.
    - Use Binary Search leveraging the pairing pattern: pairs always start at even indices before the single element.
    
    STEPS:
    1. Initialize \`left = 0\`, \`right = nums.length - 1\`.
    2. While \`left < right\`:
       - Compute \`mid = left + (right - left) / 2\`.
       - Ensure \`mid\` is even: if odd, decrement by 1.
       - If \`nums[mid] == nums[mid + 1]\`: valid pair → single is on right → \`left = mid + 2\`.
       - Else: mismatch → single is on left or at mid → \`right = mid\`.
    3. When loop ends, \`left == right\` which is the single element index.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(log n)
    - Each step discards half of the array.
    Space Complexity: O(1)
    - Only uses pointers.
    
    EXAMPLE:
    Input: [1,1,2,2,3,4,4,5,5]
    - mid = 4 (value 3), 3 ≠ 4 → mismatch → right = mid
    - Continue until left = right = 4 → result = 3
    
    ✔️ Final Output = 3`,
      code: `class Solution {
        public int singleNonDuplicate(int[] nums) {
            int left = 0, right = nums.length - 1;
    
            while (left < right) {
                int mid = left + (right - left) / 2;
    
                // Ensure mid is even for pairing check
                if (mid % 2 == 1) mid--;
    
                // Check pair starting at mid
                if (nums[mid] == nums[mid + 1]) {
                    // Single element is after this pair
                    left = mid + 2;
                } else {
                    // Single element is at mid or before
                    right = mid;
                }
            }
    
            return nums[left];
        }
    }`
    },
    {
      title: "(question - Minimized Maximum of Products Distributed to Any Store) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Goal: Distribute products among \`n\` stores such that the **maximum number of items in any one store is minimized**.
    - Each product type must be split into multiple stores, but the same type can be distributed across different stores.
    - We are trying to **minimize the maximum load** that a store can have — this is a classic use case for **Binary Search on Answer**.
    
    OPTIMIZED APPROACH (Binary Search on Answer):
    1. Let \`left = 1\` (minimum possible max load), \`right = max quantity in the array\` (worst case where all go in one store).
    2. Use binary search between \`left\` and \`right\`:
       - For mid = candidate max load, check: **Can we assign products such that no store gets more than mid items?**
       - To check this, calculate how many stores are needed for each product type:
         - \`stores += ceil(quantity / mid) = (quantity + mid - 1) / mid\`
       - If total stores needed ≤ n → try smaller \`mid\` → \`right = mid\`
       - Else → try bigger \`mid\` → \`left = mid + 1\`
    3. Final \`left\` is the minimized maximum load.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(m * log M), where m = quantities.length and M = max(quantities[i])
    - For each binary search step (log M), we scan quantities once (O(m)) to count stores.
    Space Complexity: O(1)
    - Constant space used.
    
    EXAMPLE:
    n = 6, quantities = [11, 6]
    - Try mid = 6 → stores needed: ceil(11/6) + ceil(6/6) = 2 + 1 = 3 → OK
    - Try mid = 3 → stores needed: ceil(11/3) + ceil(6/3) = 4 + 2 = 6 → OK
    - Try mid = 2 → 6 + 3 = 9 > 6 → too small
    - Final answer = 3
    
    ✔️ Final Output = 3`,
      code: `class Solution {
        public int minimizedMaximum(int n, int[] quantities) {
            int left = 1, right = 0;
            for (int q : quantities) {
                right = Math.max(right, q);
            }
    
            while (left < right) {
                int mid = left + (right - left) / 2;
                if (canDistribute(quantities, n, mid)) {
                    right = mid;  // try smaller max load
                } else {
                    left = mid + 1;  // need larger max load
                }
            }
    
            return left;
        }
    
        private boolean canDistribute(int[] quantities, int n, int maxLoad) {
            int storesNeeded = 0;
            for (int q : quantities) {
                // number of stores needed for product type q with maxLoad per store
                storesNeeded += (q + maxLoad - 1) / maxLoad;  // ceil division
                if (storesNeeded > n) return false;  // early stop
            }
            return true;
        }
    }`
    },

    {
      title: "(question - Single Element in a Sorted Array) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - The array has all elements in pairs except one single element.
    - Use **Binary Search** to find the non-duplicate in O(log n) time by leveraging the pattern of indices.
    
    STEPS:
    1. Initialize \`left = 0\`, \`right = nums.length - 1\`.
    2. While \`left < right\`:
       - Find mid: \`mid = (left + right) / 2\`
       - Ensure \`mid\` is even (so it pairs with \`mid+1\`)
       - If \`nums[mid] == nums[mid+1]\` → single is on right → \`left = mid + 2\`
       - Else → single is on left including mid → \`right = mid\`
    3. When \`left == right\`, it's the index of the single element.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(log n)
    - Halves the search space each iteration.
    Space Complexity: O(1)
    - Constant space usage.
    
    EXAMPLE:
    Input: [1,1,2,2,3,3,4,4,5]
    Output: 5 (only element without a pair)
    
    ✔️ Final Output = nums[left]`,
      code: `class Solution {
        public int singleNonDuplicate(int[] nums) {
            int left = 0, right = nums.length - 1;
    
            while (left < right) {
                int mid = left + (right - left) / 2;
    
                // Ensure mid is even for pairing check
                if (mid % 2 == 1) mid--;
    
                // Check pair starting at mid
                if (nums[mid] == nums[mid + 1]) {
                    // Single element is after this pair
                    left = mid + 2;
                } else {
                    // Single element is at mid or before
                    right = mid;
                }
            }
    
            return nums[left];
        }
    }`
    },
    {
      title: "(question - Median of Two Sorted Arrays) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use **Binary Search** on the smaller of the two sorted arrays to find the correct partition.
    - The goal is to partition both arrays such that all elements on the left are <= all elements on the right.
    
    STEPS:
    1. Ensure \`nums1\` is the smaller array to keep binary search on shorter length.
    2. Let \`partitionX + partitionY = (x + y + 1) / 2\`, where x and y are lengths of nums1 and nums2.
    3. Find \`maxLeftX, minRightX\` and \`maxLeftY, minRightY\`.
    4. If \`maxLeftX <= minRightY && maxLeftY <= minRightX\`:
       - If total length is even → return avg of max of lefts and min of rights.
       - Else → return max of lefts.
    5. If partition is invalid, adjust binary search accordingly.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(log(min(n, m)))
    - Efficient because we binary search on the smaller array.
    Space Complexity: O(1)
    - Uses only constant space.
    
    EXAMPLE:
    nums1 = [1, 3], nums2 = [2]
    - Partitions: [1] | [3] and [2] | []
    - Median = 2.0
    
    ✔️ Final Output = Median of combined sorted arrays`,
      code: `class Solution {
        public double findMedianSortedArrays(int[] nums1, int[] nums2) {
            // Ensure nums1 is the smaller array for binary search
            if (nums1.length > nums2.length) {
                return findMedianSortedArrays(nums2, nums1);
            }
    
            int x = nums1.length;
            int y = nums2.length;
            int low = 0, high = x;
    
            while (low <= high) {
                int partitionX = (low + high) / 2;
                int partitionY = (x + y + 1) / 2 - partitionX;
    
                int maxLeftX = (partitionX == 0) ? Integer.MIN_VALUE : nums1[partitionX - 1];
                int minRightX = (partitionX == x) ? Integer.MAX_VALUE : nums1[partitionX];
    
                int maxLeftY = (partitionY == 0) ? Integer.MIN_VALUE : nums2[partitionY - 1];
                int minRightY = (partitionY == y) ? Integer.MAX_VALUE : nums2[partitionY];
    
                if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
                    if ((x + y) % 2 == 0) {
                        return ((double)Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
                    } else {
                        return (double)Math.max(maxLeftX, maxLeftY);
                    }
                } else if (maxLeftX > minRightY) {
                    high = partitionX - 1;
                } else {
                    low = partitionX + 1;
                }
            }
    
            throw new IllegalArgumentException("Input arrays are not sorted");
        }
    }`
    },        
    {
      title: "(question - Combination Sum) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - This is a classic **Backtracking** problem where we try to build all combinations that sum up to the target using given candidates.
    - Each number can be used **unlimited times**. So we make recursive calls without incrementing the index after choosing a number.
    
    STEPS:
    1. Define a backtrack function with parameters: \`candidates\`, \`target\`, \`index\`, \`currentList\`, and \`result\`.
    2. Base Case 1: If \`target == 0\`, we've found a valid combination → add copy of current list to result.
    3. Base Case 2: If \`target < 0\` or \`index >= candidates.length\`, return (invalid path).
    4. Recursive Case:
       - **Include** current candidate → reduce \`target\`, do **not** increment index since reuse is allowed.
       - **Exclude** current candidate → move to next index.
    5. After including a candidate, always backtrack (remove the last added element) to explore other combinations.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(2^t), where t = target
    - In worst case, we explore all combinations.
    Space Complexity: O(t)
    - Maximum depth of recursion tree is proportional to the target.
    
    EXAMPLE:
    Input: candidates = [2, 3, 6, 7], target = 7
    - Valid combinations: [2,2,3], [7]
    
    ✔️ Final Output = [[2,2,3],[7]]`,
      code: `class Solution {
        public List<List<Integer>> combinationSum(int[] candidates, int target) {
            List<List<Integer>> result = new ArrayList<>();
            backtrack(candidates, target, 0, new ArrayList<>(), result);
            return result;
        }
    
        private void backtrack(int[] candidates, int target, int index, List<Integer> current, List<List<Integer>> result) {
            if (target == 0) {
                result.add(new ArrayList<>(current)); // Found a valid combination
                return;
            }
    
            if (target < 0 || index >= candidates.length) {
                return; // Invalid path
            }
    
            // Choose the current number
            current.add(candidates[index]);
            backtrack(candidates, target - candidates[index], index, current, result); // Not index + 1, because we can reuse same element
            current.remove(current.size() - 1); // Backtrack
    
            // Skip the current number
            backtrack(candidates, target, index + 1, current, result);
        }
    }`
    },
    {
      title: "(question - Combination Sum II) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Similar to Combination Sum, but here **each number can only be used once**, and **input may contain duplicates**.
    - To avoid duplicates in output, we **sort the array** and **skip duplicate candidates** during recursion.
    
    STEPS:
    1. Sort the \`candidates\` array to make it easier to skip duplicates.
    2. Define a backtracking function with parameters: \`candidates\`, \`target\`, \`start\`, \`currentList\`, and \`result\`.
    3. Base Case: If \`target == 0\`, add a deep copy of \`current\` to \`result\`.
    4. Loop from \`start\` to end of array:
       - Skip duplicate elements: if \`i > start && candidates[i] == candidates[i - 1]\`, continue.
       - If \`candidates[i] > target\`, break — no need to explore further.
       - Include \`candidates[i]\` and recurse with \`i + 1\` (since each number is used once).
       - Backtrack (remove last element) after the recursive call.
    5. Result contains all unique combinations summing to the target.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(2^n)
    - In worst case, we explore all combinations.
    Space Complexity: O(k), where k is the depth of recursion or target value.
    
    EXAMPLE:
    Input: candidates = [10,1,2,7,6,1,5], target = 8
    Output: [[1,1,6],[1,2,5],[1,7],[2,6]]
    
    ✔️ Final Output = list of unique combinations with no duplicate sets`,
      code: `import java.util.*;
    
    class Solution {
        public List<List<Integer>> combinationSum2(int[] candidates, int target) {
            List<List<Integer>> result = new ArrayList<>();
            Arrays.sort(candidates); // Sort to handle duplicates
            backtrack(candidates, target, 0, new ArrayList<>(), result);
            return result;
        }
    
        private void backtrack(int[] candidates, int target, int start, List<Integer> current, List<List<Integer>> result) {
            if (target == 0) {
                result.add(new ArrayList<>(current)); // Found a valid combination
                return;
            }
    
            for (int i = start; i < candidates.length; i++) {
                // Skip duplicates
                if (i > start && candidates[i] == candidates[i - 1]) continue;
    
                if (candidates[i] > target) break; // No need to continue (since array is sorted)
    
                current.add(candidates[i]);
                backtrack(candidates, target - candidates[i], i + 1, current, result); // i + 1 to use each element once
                current.remove(current.size() - 1); // Backtrack
            }
        }
    }`
    },
    {
      title: "(question - Palindrome Partitioning) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Goal: Partition string \`s\` into all possible combinations where each substring is a palindrome.
    - Use **backtracking** to explore all partitions, and **dynamic programming (DP)** to precompute palindrome checks for optimization.
    
    STEPS:
    1. Initialize a 2D boolean array \`dp[n][n]\` to store if \`s[i..j]\` is a palindrome.
    2. Fill \`dp[i][j]\`:
       - \`dp[i][j] = true\` if \`s[i] == s[j]\` and (\`j - i <= 2\` or \`dp[i+1][j-1]\`)
    3. Call backtrack from index 0:
       - If start == s.length → add current path to result.
       - For each end in \`[start, s.length)\`, if \`dp[start][end]\` is true:
         - Add \`s[start:end+1]\` to path
         - Recurse on \`end + 1\`
         - Backtrack (remove last substring)
    4. Collect all valid paths in \`result\`.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(n * 2^n)
    - There are 2^n possible partitions and palindrome checking is optimized by DP.
    Space Complexity: O(n^2) for DP + O(n) recursion stack.
    
    EXAMPLE:
    Input: s = "aab"
    Valid partitions:
    - ["a","a","b"]
    - ["aa","b"]
    
    ✔️ Final Output = [["a","a","b"],["aa","b"]]`,
      code: `class Solution {
        public List<List<String>> partition(String s) {
            int n = s.length();
            boolean[][] dp = new boolean[n][n];
            List<List<String>> result = new ArrayList<>();
    
            // Precompute all palindromes
            for (int i = n - 1; i >= 0; i--) {
                for (int j = i; j < n; j++) {
                    // A substring is a palindrome if:
                    // - s.charAt(i) == s.charAt(j)
                    // - and inner substring is also palindrome or length <= 2
                    if (s.charAt(i) == s.charAt(j) && (j - i <= 2 || dp[i + 1][j - 1])) {
                        dp[i][j] = true;
                    }
                }
            }
    
            backtrack(0, s, dp, new ArrayList<>(), result);
            return result;
        }
    
        private void backtrack(int start, String s, boolean[][] dp, List<String> path, List<List<String>> result) {
            if (start == s.length()) {
                result.add(new ArrayList<>(path));
                return;
            }
    
            for (int end = start; end < s.length(); end++) {
                if (dp[start][end]) {
                    path.add(s.substring(start, end + 1));
                    backtrack(end + 1, s, dp, path, result);
                    path.remove(path.size() - 1); // backtrack
                }
            }
        }
    }`
    },
    {
      title: "(question - N-Queens) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - The N-Queens problem asks us to place \`n\` queens on an \`n × n\` chessboard such that no two queens attack each other.
    - Use **Backtracking** to try placing queens row by row.
    - At each row, we try placing a queen in all columns and check if the position is **safe** (i.e., no queen on the same column or diagonal).
    
    STEPS:
    1. Create a board filled with '.' representing empty cells.
    2. Start from row 0 and use a recursive function to try placing a queen in every column.
    3. Before placing, use \`isSafe\` function to check if:
       - No queen exists in the current column.
       - No queen exists on the top-left diagonal.
       - No queen exists on the top-right diagonal.
    4. If safe, place the queen ('Q') and move to the next row.
    5. If row == n → solution is complete → convert board to string list and add to result.
    6. After recursion, backtrack by removing the queen.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(n!), as each row has up to n options but constraints reduce paths.
    Space Complexity: O(n^2) for storing the board + recursion stack.
    
    EXAMPLE:
    Input: n = 4
    One valid solution:
    [
     ".Q..",
     "...Q",
     "Q...",
     "..Q."
    ]
    
    ✔️ Final Output = All unique placements with no attacking queens`,
      code: `class Solution {
        public List<List<String>> solveNQueens(int n) {
            List<List<String>> result = new ArrayList<>();
            char[][] board = new char[n][n];
    
            // Initialize board with '.'
            for (int i = 0; i < n; i++) {
                Arrays.fill(board[i], '.');
            }
    
            solve(0, board, result, n);
            return result;
        }
    
        private void solve(int row, char[][] board, List<List<String>> result, int n) {
            if (row == n) {
                result.add(construct(board));
                return;
            }
    
            for (int col = 0; col < n; col++) {
                if (isSafe(board, row, col, n)) {
                    board[row][col] = 'Q';
                    solve(row + 1, board, result, n);
                    board[row][col] = '.'; // Backtrack
                }
            }
        }
    
        private boolean isSafe(char[][] board, int row, int col, int n) {
            // Check column
            for (int i = 0; i < row; i++)
                if (board[i][col] == 'Q') return false;
    
            // Check top-left diagonal
            for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--)
                if (board[i][j] == 'Q') return false;
    
            // Check top-right diagonal
            for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)
                if (board[i][j] == 'Q') return false;
    
            return true;
        }
    
        private List<String> construct(char[][] board) {
            List<String> res = new ArrayList<>();
            for (char[] row : board) {
                res.add(new String(row));
            }
            return res;
        }
    }`
    },
    {
      title: "(question - Sudoku Solver) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use **Backtracking** to fill the 9×9 Sudoku board.
    - Try placing numbers '1' to '9' in each empty cell ('.'), validating with Sudoku rules before placement.
    
    STEPS:
    1. Traverse the board cell-by-cell using nested loops.
    2. When an empty cell is found:
       - Try placing numbers from '1' to '9'.
       - For each number, check if it's **valid**:
         - Not present in the same row.
         - Not present in the same column.
         - Not present in the 3x3 subgrid.
    3. If valid, place the number and recursively call solve on the updated board.
    4. If recursion returns true → solution found.
    5. If no valid number can be placed → backtrack by resetting the cell and trying next number.
    6. Once all cells are filled correctly, return true.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(9^(n)) where n is the number of empty cells
    - Each empty cell can try up to 9 digits.
    Space Complexity: O(1) extra (in-place), excluding recursion stack.
    
    EXAMPLE:
    Input (partial board with '.'):
    [
     ["5","3",".",".","7",".",".",".","."],
     ["6",".",".","1","9","5",".",".","."],
     ...
    ]
    Output: fully filled valid Sudoku board.
    
    ✔️ Final Output = Solves the given board in-place`,
      code: `class Solution {
        public void solveSudoku(char[][] board) {
            solve(board);
        }
    
        private boolean solve(char[][] board) {
            for (int row = 0; row < 9; row++) {
                for (int col = 0; col < 9; col++) {
                    // If cell is empty
                    if (board[row][col] == '.') {
                        for (char num = '1'; num <= '9'; num++) {
                            if (isValid(board, row, col, num)) {
                                board[row][col] = num;
    
                                if (solve(board)) {
                                    return true; // Solved
                                }
    
                                board[row][col] = '.'; // Backtrack
                            }
                        }
                        return false; // No valid number found
                    }
                }
            }
            return true; // All cells are filled
        }
    
        private boolean isValid(char[][] board, int row, int col, char num) {
            // Check row and column
            for (int i = 0; i < 9; i++) {
                if (board[row][i] == num || board[i][col] == num) return false;
            }
    
            // Check 3x3 subgrid
            int boxRowStart = (row / 3) * 3;
            int boxColStart = (col / 3) * 3;
    
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    if (board[boxRowStart + i][boxColStart + j] == num) return false;
                }
            }
    
            return true;
        }
    }`
    },
    {
      title: "(question - Graph Coloring / M-Coloring Problem) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - The goal is to color a graph with \`m\` colors such that no two adjacent vertices share the same color.
    - Use **Backtracking** to try assigning colors to each vertex from 1 to m and check if it's safe.
    
    STEPS:
    1. Build an adjacency list from the given edge list.
    2. Initialize a \`colors[]\` array of size \`v\` to track the color of each vertex. Initially, all are uncolored (0).
    3. Start DFS (depth-first search) from node 0:
       - For each node, try assigning colors from 1 to m.
       - Before assigning, use \`isSafe()\` to check if any adjacent vertex has the same color.
       - If safe, assign the color and recurse for the next node.
       - If all nodes are colored without conflicts, return true.
       - If no color works, backtrack and try a different color.
    4. If all vertices are assigned valid colors → return true; else false.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(m^v)
    - In worst case, each vertex can be assigned any of m colors.
    Space Complexity: O(v + e)
    - For adjacency list and colors array.
    
    EXAMPLE:
    Input: v = 4, m = 3, edges = [[0,1],[0,2],[1,2],[1,3]]
    - Can we color the graph with 3 colors? → YES
    
    ✔️ Final Output = true or false depending on feasibility`,
      code: `import java.util.*;
    
    class Solution {
        public boolean graphColoring(int v, int[][] edges, int m) {
            // Build adjacency list
            List<List<Integer>> adj = new ArrayList<>();
            for (int i = 0; i < v; i++) adj.add(new ArrayList<>());
            for (int[] edge : edges) {
                int u = edge[0], w = edge[1];
                adj.get(u).add(w);
                adj.get(w).add(u);
            }
    
            int[] colors = new int[v]; // 0 means uncolored
            return dfs(0, v, m, colors, adj);
        }
    
        private boolean dfs(int node, int v, int m, int[] colors, List<List<Integer>> adj) {
            if (node == v) return true;
    
            for (int color = 1; color <= m; color++) {
                if (isSafe(node, color, colors, adj)) {
                    colors[node] = color;
                    if (dfs(node + 1, v, m, colors, adj)) return true;
                    colors[node] = 0; // Backtrack
                }
            }
            return false; // No valid color found
        }
    
        private boolean isSafe(int node, int color, int[] colors, List<List<Integer>> adj) {
            for (int neighbor : adj.get(node)) {
                if (colors[neighbor] == color) return false;
            }
            return true;
        }
    }`
    },
    {
      title: "(question - Subsets II / All Unique Subsets with Duplicates) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use **Backtracking** to generate all subsets.
    - Since input array may contain duplicates, we **sort** the array and **skip duplicates** at the same recursion level to avoid repeated subsets.
    
    STEPS:
    1. Sort the array to bring duplicates together.
    2. Initialize an empty list to store current subset and final result list.
    3. Call recursive backtrack function with starting index.
    4. For each index:
       - Skip duplicates if \`nums[i] == nums[i - 1]\` and \`i > index\`.
       - Include \`nums[i]\`, recurse for next index, then backtrack.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(2^n)
    - All subsets of n elements are explored (duplicates skipped).
    Space Complexity: O(n)
    - Recursion stack + subset list.
    
    EXAMPLE:
    Input: [1, 2, 2]
    Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
    
    ✔️ Final Output = List of all unique subsets`,
      code: `import java.util.*;
    
    class Solution {
        public List<List<Integer>> subsetsWithDup(int[] nums) {
            List<List<Integer>> result = new ArrayList<>();
            Arrays.sort(nums); // Sort to handle duplicates
            backtrack(0, nums, new ArrayList<>(), result);
            return result;
        }
    
        private void backtrack(int index, int[] nums, List<Integer> current, List<List<Integer>> result) {
            result.add(new ArrayList<>(current));
    
            for (int i = index; i < nums.length; i++) {
                // Skip duplicates at the same level
                if (i > index && nums[i] == nums[i - 1]) continue;
    
                current.add(nums[i]);
                backtrack(i + 1, nums, current, result);
                current.remove(current.size() - 1); // Backtrack
            }
        }
    }`
    },
    {
      title: "(question - Check Valid Knight Tour Grid) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - We're given a grid with numbers from 0 to n^2 - 1 indicating the order of knight moves.
    - The knight must start at (0, 0) and move step-by-step following knight’s movement rules.
    - Store the (x, y) coordinates of each step in an array indexed by step number.
    - Check if every step from 0 to n^2 - 2 makes a valid knight move to the next.
    
    STEPS:
    1. Check if starting cell has step 0.
    2. Map positions of all numbers in a \`pos[]\` array: \`pos[i] = (x, y)\` of step i.
    3. For each i from 1 to n^2 - 1:
       - Get coordinates of step i-1 and i, and check if they form a valid knight move.
    4. Return false if any move is invalid, true otherwise.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(n^2)
    - Every cell is visited once.
    Space Complexity: O(n^2)
    - To store all positions.
    
    EXAMPLE:
    Input: [[0,11,16,...],...], Output: true/false depending on knight move validity
    
    ✔️ Final Output = true if all moves are valid knight moves; else false`,
      code: `class Solution {
        public boolean checkValidGrid(int[][] grid) {
            int n = grid.length;
    
            // The knight must start at top-left with step 0
            if (grid[0][0] != 0) return false;
    
            // Store positions of all steps
            int[][] pos = new int[n * n][2];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    pos[grid[i][j]][0] = i;
                    pos[grid[i][j]][1] = j;
                }
            }
    
            // Check all moves from 0 to n^2 - 2
            for (int i = 1; i < n * n; i++) {
                int x1 = pos[i - 1][0], y1 = pos[i - 1][1];
                int x2 = pos[i][0], y2 = pos[i][1];
                if (!isKnightMove(x1, y1, x2, y2)) return false;
            }
    
            return true;
        }
    
        private boolean isKnightMove(int x1, int y1, int x2, int y2) {
            int dx = Math.abs(x1 - x2);
            int dy = Math.abs(y1 - y2);
            return (dx == 2 && dy == 1) || (dx == 1 && dy == 2);
        }
    }`
    },
    {
      title: "(question - Rat in a Maze) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use **Backtracking** to explore all paths from top-left to bottom-right in a grid.
    - Only move on cells with value 1 (open path).
    - Track the path using a string and visit/unvisit cells as needed.
    
    STEPS:
    1. Check base condition: if start or end cell is blocked, return empty result.
    2. Create \`visited[][]\` to mark visited cells and prevent revisits.
    3. From (0,0), explore all 4 directions: Down, Left, Right, Up using \`dx[]\`, \`dy[]\`, and \`dir[]\`.
    4. If move is safe (inside bounds, value is 1, and not visited), recursively backtrack.
    5. On reaching (n-1,n-1), add current path to result.
    6. Sort result in lexicographical order.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(4^(n^2))
    - In worst case, each cell tries 4 directions.
    Space Complexity: O(n^2)
    - Due to recursion stack and visited array.
    
    EXAMPLE:
    Input: [[1,0,0],[1,1,0],[0,1,1]] → Output: [“DDRDRR”]
    
    ✔️ Final Output = List of all paths in lexicographical order`,
      code: `import java.util.*;
    
    class Solution {
        public ArrayList<String> ratInMaze(int[][] maze) {
            ArrayList<String> result = new ArrayList<>();
            int n = maze.length;
    
            if (maze[0][0] == 0 || maze[n - 1][n - 1] == 0) return result; // No path if start or end is blocked
    
            boolean[][] visited = new boolean[n][n];
            backtrack(0, 0, maze, "", visited, result, n);
            Collections.sort(result); // Ensure lexicographical order
            return result;
        }
    
        private void backtrack(int row, int col, int[][] maze, String path,
                               boolean[][] visited, ArrayList<String> result, int n) {
            // If reached destination
            if (row == n - 1 && col == n - 1) {
                result.add(path);
                return;
            }
    
            // Direction arrays: D, L, R, U
            int[] dx = {1, 0, 0, -1};
            int[] dy = {0, -1, 1, 0};
            char[] dir = {'D', 'L', 'R', 'U'};
    
            for (int i = 0; i < 4; i++) {
                int newRow = row + dx[i];
                int newCol = col + dy[i];
    
                if (isSafe(newRow, newCol, maze, visited, n)) {
                    visited[row][col] = true;
                    backtrack(newRow, newCol, maze, path + dir[i], visited, result, n);
                    visited[row][col] = false; // Backtrack
                }
            }
        }
    
        private boolean isSafe(int row, int col, int[][] maze, boolean[][] visited, int n) {
            return row >= 0 && row < n && col >= 0 && col < n &&
                   maze[row][col] == 1 && !visited[row][col];
        }
    }`
    },
    {
      title: "(question - Sort an Array) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use **Merge Sort**, a classic divide-and-conquer sorting algorithm.
    - It recursively splits the array into halves, sorts them, and merges the sorted halves back together.
    
    STEPS:
    1. Recursively divide the array into two halves until each part has one or no element.
    2. Merge the sorted halves using a temporary array, comparing elements one by one.
    3. Copy the merged result back into the original array.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(n log n)
    - Each level splits the array (log n) and merging takes O(n) time.
    Space Complexity: O(n)
    - Extra space needed for temporary merge arrays.
    
    EXAMPLE:
    Input: [5, 2, 3, 1]
    1. Split: [5,2] and [3,1]
    2. Split further: [5],[2] and [3],[1]
    3. Merge: [2,5] and [1,3]
    4. Final merge: compare and merge [2,5] and [1,3] → [1,2,3,5]
    
    ✔️ Final Output = [1,2,3,5]`,
      code: `class Solution {
        public int[] sortArray(int[] nums) {
            mergeSort(nums, 0, nums.length - 1);
            return nums;
        }
    
        private void mergeSort(int[] nums, int left, int right) {
            if (left >= right) return;
    
            int mid = left + (right - left) / 2;
    
            mergeSort(nums, left, mid);
            mergeSort(nums, mid + 1, right);
    
            merge(nums, left, mid, right);
        }
    
        private void merge(int[] nums, int left, int mid, int right) {
            int[] temp = new int[right - left + 1];
    
            int i = left, j = mid + 1, k = 0;
    
            // Merge two sorted halves
            while (i <= mid && j <= right) {
                if (nums[i] <= nums[j]) temp[k++] = nums[i++];
                else temp[k++] = nums[j++];
            }
    
            // Copy remaining elements
            while (i <= mid) temp[k++] = nums[i++];
            while (j <= right) temp[k++] = nums[j++];
    
            // Copy back to original array
            for (int p = 0; p < temp.length; p++) {
                nums[left + p] = temp[p];
            }
        }
    }`
    },
    {
      title: "(question - Number of Permutations With Inversion Constraints) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - We use **Dynamic Programming** to count permutations based on inversion count.
    - Let dp[i][j] be the number of permutations of first i elements with exactly j inversions.
    - For each new element, we calculate how many inversions it can create and update dp accordingly using prefix sums for optimization.
    
    STEPS:
    1. Sort the \`requirements\` array based on prefix length to apply constraints during DP.
    2. Use a 1D array \`dpPrev[]\` to represent previous row of DP table (space optimized).
    3. For each i from 1 to n:
       - Calculate prefix sum of \`dpPrev[]\` for efficient range summation.
       - For each possible inversion count inv, compute valid range of previous inversions.
       - Use prefix sum to compute dp[i][inv] = sum of dp[i-1][inv-k] for all valid k.
    4. After filling dp for i, apply any inversion constraint that matches i - 1 by filtering \`dpPrev[]\` to a single valid inversion count.
    5. After processing all elements, sum all entries of \`dpPrev[]\` to get the final answer.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(n^2)
    - Outer loop for n elements, inner loop for all possible inversions (at most n*(n-1)/2).
    Space Complexity: O(n^2) → Optimized to O(n) with 1D arrays.
    
    EXAMPLE:
    Input: n = 3, requirements = [[1,0], [2,1]]
    - We must ensure: first 2 elements (0-based index) form 0 inversion; first 3 form 1 inversion.
    - Valid permutation: [1, 2, 3] → satisfies both requirements
    ✔️ Final Output = 1`,
      code: `import java.util.*;
    
    class Solution {
        private static final int MOD = 1_000_000_007;
    
        public int numberOfPermutations(int n, int[][] requirements) {
            Arrays.sort(requirements, Comparator.comparingInt(a -> a[0]));
    
            int maxInversions = n * (n - 1) / 2;
            long[] dpPrev = new long[maxInversions + 1];
            dpPrev[0] = 1;
    
            int reqIndex = 0;
    
            for (int i = 1; i <= n; i++) {
                long[] dpCurr = new long[maxInversions + 1];
                long[] prefixSum = new long[maxInversions + 2];
    
                for (int inv = 0; inv <= maxInversions; inv++) {
                    prefixSum[inv + 1] = (prefixSum[inv] + dpPrev[inv]) % MOD;
                }
    
                int maxInvI = i * (i - 1) / 2;
                for (int inv = 0; inv <= maxInvI; inv++) {
                    int left = Math.max(0, inv - (i - 1));
                    int right = inv;
                    dpCurr[inv] = (prefixSum[right + 1] - prefixSum[left] + MOD) % MOD;
                }
    
                dpPrev = dpCurr;
    
                while (reqIndex < requirements.length && requirements[reqIndex][0] == i - 1) {
                    int reqInv = requirements[reqIndex][1];
                    long val = dpPrev[reqInv];
                    Arrays.fill(dpPrev, 0);
                    dpPrev[reqInv] = val;
                    reqIndex++;
                }
            }
    
            long ans = 0;
            for (long v : dpPrev) {
                ans = (ans + v) % MOD;
            }
            return (int) ans;
        }
    }`
    },
    {
      title: "(question - Reverse Linked List) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use **Iterative Pointer Manipulation** to reverse the singly linked list in-place.
    - Maintain 3 pointers: \`prev\`, \`curr\`, and \`nextTemp\`.
    - At each step, reverse the current node’s pointer and move all pointers one step ahead.
    
    STEPS:
    1. Initialize \`prev = null\` and \`curr = head\`.
    2. Loop until \`curr != null\`:
       - Store \`curr.next\` in \`nextTemp\`.
       - Reverse the link: \`curr.next = prev\`.
       - Move \`prev\` to \`curr\` and \`curr\` to \`nextTemp\`.
    3. When loop ends, \`prev\` points to the new head of the reversed list.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(n)
    - Each node is visited once.
    Space Complexity: O(1)
    - No extra space is used, just pointers.
    
    EXAMPLE:
    Input: 1 → 2 → 3 → 4 → 5 → null
    - After reversing: 5 → 4 → 3 → 2 → 1 → null
    
    ✔️ Final Output = Head of the reversed linked list`,
      code: `/**
     * Definition for singly-linked list.
     * public class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode() {}
     *     ListNode(int val) { this.val = val; }
     *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     * }
     */
    class Solution {
        public ListNode reverseList(ListNode head) {
            ListNode prev = null;
            ListNode curr = head;
    
            while (curr != null) {
                ListNode nextTemp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nextTemp;
            }
    
            return prev;
        }
    }`
    },
    {
      title: "(question - Merge Two Sorted Linked Lists) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use the **two-pointer technique** to traverse both linked lists simultaneously.
    - At each step, compare the current nodes from both lists.
    - Append the smaller node to a new result list and move the pointer forward in that list.
    - Use a **dummy node** to simplify edge cases and handle the head of the result list.
    - After the loop, append any remaining nodes from either list.
    
    STEPS:
    1. Initialize a dummy node and a tail pointer pointing to dummy.
    2. While both lists are not null:
       - Compare list1.val and list2.val.
       - Append the smaller one to tail and move that list forward.
    3. After the loop, append the remaining nodes (only one list will be non-null).
    4. Return \`dummy.next\` as the merged head.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(n + m)
    - n and m are lengths of list1 and list2 respectively.
    Space Complexity: O(1)
    - No extra space except pointers.
    
    EXAMPLE:
    Input: list1 = 1 → 3 → 5, list2 = 2 → 4 → 6  
    Steps:
    - Compare 1 and 2 → pick 1  
    - Compare 3 and 2 → pick 2  
    - Compare 3 and 4 → pick 3  
    - Compare 5 and 4 → pick 4  
    - Compare 5 and 6 → pick 5  
    - Append 6  
    Final Output: 1 → 2 → 3 → 4 → 5 → 6`,
      
      code: `/**
     * Definition for singly-linked list.
     * public class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode() {}
     *     ListNode(int val) { this.val = val; }
     *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     * }
     */
    class Solution {
        public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
            ListNode dummy = new ListNode(-1);  // Dummy node to start the merged list
            ListNode tail = dummy;
    
            while (list1 != null && list2 != null) {
                if (list1.val <= list2.val) {
                    tail.next = list1;
                    list1 = list1.next;
                } else {
                    tail.next = list2;
                    list2 = list2.next;
                }
                tail = tail.next;
            }
    
            // Append remaining nodes
            if (list1 != null) tail.next = list1;
            if (list2 != null) tail.next = list2;
    
            return dummy.next; // Head of merged list
        }
    }`
    },
    {
      title: "(question - Detect Cycle in a Linked List) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use **Floyd’s Cycle Detection Algorithm** (Tortoise and Hare approach).
    - The idea is to use two pointers (slow and fast) moving at different speeds.
    - If there's a cycle, they will eventually meet at some point.
    - If fast reaches the end (null), there’s no cycle.
    
    STEPS:
    1. Initialize \`slow = head\`, \`fast = head.next\`.
    2. While fast and fast.next are not null:
       - If \`slow == fast\`, a cycle exists.
       - Move slow one step, fast two steps.
    3. If loop ends, no cycle exists → return false.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(n)
    - Worst case when no cycle, traverse all nodes once.
    Space Complexity: O(1)
    - Only two pointers used, constant space.
    
    EXAMPLE:
    Input: 3 → 2 → 0 → -4 → points back to 2  
    Steps:
    - slow moves 1 step, fast moves 2 steps  
    - Eventually, both point to node 2 again → cycle detected  
    ✔️ Final Output = true`,
      
      code: `/**
     * Definition for singly-linked list.
     * class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode(int x) {
     *         val = x;
     *         next = null;
     *     }
     * }
     */
    public class Solution {
        public boolean hasCycle(ListNode head) {
            if (head == null) return false;
    
            ListNode slow = head;
            ListNode fast = head.next;
    
            while (fast != null && fast.next != null) {
                if (slow == fast) return true;
    
                slow = slow.next;
                fast = fast.next.next;
            }
    
            return false;
        }
    }`
    },
    {
      title: "(question - Detect Start of Cycle in a Linked List) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use Floyd's Cycle Detection Algorithm (Tortoise and Hare).
    - Step 1: Detect the cycle using two pointers (slow, fast). If they meet, a cycle exists.
    - Step 2: Reset slow to head. Move both one step at a time. Their meeting point is the start of the cycle.
    
    STEPS:
    1. Initialize slow and fast pointers to head.
    2. Move fast by 2 and slow by 1 until they meet → confirms cycle.
    3. Move slow back to head; move both one step. Where they meet is the cycle start.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(n)
    - Detecting + locating cycle both in linear time.
    Space Complexity: O(1)
    - Only two pointers used.
    
    EXAMPLE:
    Input: 3 → 2 → 0 → -4 → (cycle back to node with value 2)
    - Step 1: slow meets fast at node 0
    - Step 2: reset slow to head, both meet at node 2 (cycle start)
    ✔️ Final Output = Node with value 2`,
      
      code: `/**
     * Definition for singly-linked list.
     * class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode(int x) {
     *         val = x;
     *         next = null;
     *     }
     * }
     */
    public class Solution {
        public ListNode detectCycle(ListNode head) {
            if (head == null) return null;
    
            ListNode slow = head;
            ListNode fast = head;
    
            // Step 1: Detect cycle
            while (fast != null && fast.next != null) {
                slow = slow.next;
                fast = fast.next.next;
    
                if (slow == fast) {
                    // Step 2: Find start of cycle
                    slow = head;
                    while (slow != fast) {
                        slow = slow.next;
                        fast = fast.next;
                    }
                    return slow; // start of cycle
                }
            }
    
            return null; // no cycle
        }
    }`
    },
    {
      title: "(question - Flatten a Multilevel Doubly Linked List) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use an iterative DFS approach with a stack to flatten the list.
    - Traverse the list; if a node has a child, push the current next to a stack and link the child as next.
    - If the current node has no next and the stack is not empty, pop from stack and continue.
    
    STEPS:
    1. Initialize a stack and pointer to head.
    2. If curr has a child: push curr.next to stack, connect curr.child as next, and nullify child.
    3. If curr.next is null and stack is not empty, pop and connect popped node as curr.next.
    
    TIME & SPACE COMPLEXITY:
    Time Complexity: O(n) — Each node is visited once.
    Space Complexity: O(n) — Stack used for managing deferred next nodes.
    
    EXAMPLE:
    Input: 1 - 2 - 3
                 |
                 7 - 8
                      |
                      11 - 12
    Output: 1 - 2 - 3 - 7 - 8 - 11 - 12
    ✔️ Final Output = Flattened list with depth-first ordering`,
      
      code: `/*
    // Definition for a Node.
    class Node {
        public int val;
        public Node prev;
        public Node next;
        public Node child;
    };
    */
    
    class Solution {
        public Node flatten(Node head) {
            if (head == null) return null;
    
            LinkedList<Node> stack = new LinkedList<>();
            Node curr = head;
    
            while (curr != null) {
                if (curr.child != null) {
                    if (curr.next != null) {
                        stack.push(curr.next);
                    }
                    curr.next = curr.child;
                    curr.child.prev = curr;
                    curr.child = null;
                }
    
                if (curr.next == null && !stack.isEmpty()) {
                    Node nextNode = stack.pop();
                    curr.next = nextNode;
                    nextNode.prev = curr;
                }
    
                curr = curr.next;
            }
    
            return head;
        }
    }`
    },
    {
      title: "(question - Palindrome Linked List) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use the two-pointer technique to find the middle of the list.
    - Reverse the second half and compare it with the first half node by node.
    - Optionally restore the reversed half for no side-effects.
    
    STEPS:
    1. Use slow & fast pointers to locate the middle of the list.
    2. Reverse the second half from the middle onward.
    3. Compare values from both halves node-by-node.
    4. Restore the list (optional) and return whether it’s a palindrome.
    
    TIME & SPACE COMPLEXITY:
    Time: O(n) — Traverses list a few times.
    Space: O(1) — No extra space used, in-place reverse.
    
    EXAMPLE:
    Input: 1 → 2 → 2 → 1 → Output: true
    Input: 1 → 2 → 3 → Output: false
    ✔️ Final Output = true if list is a palindrome, else false`,
      
      code: `/**
     * Definition for singly-linked list.
     * public class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode() {}
     *     ListNode(int val) { this.val = val; }
     *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     * }
     */
    class Solution {
        public boolean isPalindrome(ListNode head) {
            if (head == null || head.next == null) return true;
    
            // Step 1: Find middle
            ListNode slow = head, fast = head;
            while (fast != null && fast.next != null) {
                slow = slow.next;
                fast = fast.next.next;
            }
    
            // Step 2: Reverse second half
            ListNode secondHalfHead = reverseList(slow);
    
            // Step 3: Compare halves
            ListNode firstHalf = head;
            ListNode secondHalf = secondHalfHead;
            boolean palindrome = true;
            while (secondHalf != null) {
                if (firstHalf.val != secondHalf.val) {
                    palindrome = false;
                    break;
                }
                firstHalf = firstHalf.next;
                secondHalf = secondHalf.next;
            }
    
            // Step 4 (optional): Restore list
            reverseList(secondHalfHead);
    
            return palindrome;
        }
    
        private ListNode reverseList(ListNode head) {
            ListNode prev = null, curr = head;
            while (curr != null) {
                ListNode nextTemp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nextTemp;
            }
            return prev;
        }
    }`
    },
    {
      title: "(question - Palindrome Linked List) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use the two-pointer technique to find the middle of the list.
    - Reverse the second half and compare it with the first half node by node.
    - Optionally restore the reversed half for no side-effects.
    
    STEPS:
    1. Use slow & fast pointers to locate the middle of the list.
    2. Reverse the second half from the middle onward.
    3. Compare values from both halves node-by-node.
    4. Restore the list (optional) and return whether it’s a palindrome.
    
    TIME & SPACE COMPLEXITY:
    Time: O(n) — Traverses list a few times.
    Space: O(1) — No extra space used, in-place reverse.
    
    EXAMPLE:
    Input: 1 → 2 → 2 → 1 → Output: true
    Input: 1 → 2 → 3 → Output: false
    ✔️ Final Output = true if list is a palindrome, else false`,
    
      code: `/**
     * Definition for singly-linked list.
     * public class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode() {}
     *     ListNode(int val) { this.val = val; }
     *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     * }
     */
    class Solution {
        public boolean isPalindrome(ListNode head) {
            if (head == null || head.next == null) return true;
    
            // Step 1: Find middle
            ListNode slow = head, fast = head;
            while (fast != null && fast.next != null) {
                slow = slow.next;
                fast = fast.next.next;
            }
    
            // Step 2: Reverse second half
            ListNode secondHalfHead = reverseList(slow);
    
            // Step 3: Compare halves
            ListNode firstHalf = head;
            ListNode secondHalf = secondHalfHead;
            boolean palindrome = true;
            while (secondHalf != null) {
                if (firstHalf.val != secondHalf.val) {
                    palindrome = false;
                    break;
                }
                firstHalf = firstHalf.next;
                secondHalf = secondHalf.next;
            }
    
            // Step 4 (optional): Restore list
            reverseList(secondHalfHead);
    
            return palindrome;
        }
    
        private ListNode reverseList(ListNode head) {
            ListNode prev = null, curr = head;
            while (curr != null) {
                ListNode nextTemp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = nextTemp;
            }
            return prev;
        }
    }`
    },
    {
      title: "(question - Add Two Numbers) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Simulate the addition of two numbers represented by linked lists.
    - Start from the least significant digit (head of each list).
    - Maintain a carry for sums ≥ 10 and construct the result as a new linked list.
    
    STEPS:
    1. Initialize a dummy node to simplify result list handling.
    2. Use a pointer \`curr\` to build the result list and a variable \`carry = 0\`.
    3. Loop while either list has nodes left or carry is non-zero:
       - Add corresponding node values and carry.
       - Store \`sum % 10\` in new node and update carry as \`sum / 10\`.
    4. Return \`dummy.next\` (head of the result list).
    
    TIME & SPACE COMPLEXITY:
    Time: O(max(m, n)) — where m and n are lengths of the two lists.
    Space: O(max(m, n)) — for the output list.
    
    EXAMPLE:
    Input: (2 → 4 → 3) + (5 → 6 → 4)
    Output: 7 → 0 → 8
    Explanation: 342 + 465 = 807
    ✔️ Final Output = A new linked list representing the sum`,
      
      code: `/**
     * Definition for singly-linked list.
     * public class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode() {}
     *     ListNode(int val) { this.val = val; }
     *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     * }
     */
    class Solution {
        public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
            ListNode dummy = new ListNode(0); // dummy head for result
            ListNode curr = dummy;
            int carry = 0;
    
            while (l1 != null || l2 != null || carry != 0) {
                int sum = carry;
                if (l1 != null) {
                    sum += l1.val;
                    l1 = l1.next;
                }
                if (l2 != null) {
                    sum += l2.val;
                    l2 = l2.next;
                }
                carry = sum / 10;
                curr.next = new ListNode(sum % 10);
                curr = curr.next;
            }
    
            return dummy.next;
        }
    }`
    },
    {
      title: "(question - Reverse Linked List II) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Use a **dummy node** to simplify edge cases when reversing at head.
    - Traverse the list to the node just **before the 'left'** position.
    - Reverse the sublist from 'left' to 'right' using **standard reversal logic**.
    - Reconnect the reversed sublist to the rest of the list.
    
    STEPS:
    1. Create a dummy node pointing to head to handle edge cases.
    2. Traverse to the node before the \`left\`th node (store it as \`prev\`).
    3. Reverse the sublist from index \`left\` to \`right\`.
    4. Connect:
       - \`prev.next\` to the new head of the reversed sublist.
       - The original \`left\`th node (now tail) to the next node after \`right\`.
    
    TIME & SPACE COMPLEXITY:
    Time: O(n) — single traversal through the list.
    Space: O(1) — in-place reversal, constant extra space.
    
    EXAMPLE:
    Input: 1 → 2 → 3 → 4 → 5, left = 2, right = 4  
    Output: 1 → 4 → 3 → 2 → 5  
    ✔️ Final Output = List after reversing nodes between given positions`,
      
      code: `/**
     * Definition for singly-linked list.
     * public class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode() {}
     *     ListNode(int val) { this.val = val; }
     *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     * }
     */
    class Solution {
        public ListNode reverseBetween(ListNode head, int left, int right) {
            if (head == null || left == right) return head;
    
            ListNode dummy = new ListNode(0);
            dummy.next = head;
            ListNode prev = dummy;
    
            // Step 1: Move prev to node before left
            for (int i = 1; i < left; i++) {
                prev = prev.next;
            }
    
            // Step 2: Reverse sublist from left to right
            ListNode curr = prev.next;
            ListNode next = null;
            ListNode sublistPrev = null;
    
            for (int i = left; i <= right; i++) {
                next = curr.next;
                curr.next = sublistPrev;
                sublistPrev = curr;
                curr = next;
            }
    
            // Step 3: Reconnect reversed sublist
            prev.next.next = curr;  // prev.next was start of sublist, now it's tail
            prev.next = sublistPrev; // connect to new head of reversed sublist
    
            return dummy.next;
        }
    }`
    },
    {
      title: "(question - Rotate Linked List Right) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Make the list circular temporarily to simplify rotation logic.
    - Count the total number of nodes in the list.
    - The actual number of steps to rotate is \`k % length\`.
    - Break the circle at the new tail to get the rotated list.
    
    STEPS:
    1. If list is empty or \`k = 0\`, return as is.
    2. Traverse the list to find:
       - Its length
       - The tail node
    3. Connect tail to head to form a circular list.
    4. Compute effective rotation: \`k % length\`.
    5. Find the new tail node: move \`length - k\` steps from tail.
    6. Set \`newHead = newTail.next\` and break the circle by setting \`newTail.next = null\`.
    
    TIME & SPACE COMPLEXITY:
    Time: O(n) — One full pass to find length, one to reach new tail.
    Space: O(1) — Constant extra space used.
    
    EXAMPLE:
    Input: 1 → 2 → 3 → 4 → 5, k = 2  
    Circle: 1 → 2 → 3 → 4 → 5 → 1 ...  
    Effective rotation: k = 2 % 5 = 2  
    New tail = 3 → New head = 4  
    Output: 4 → 5 → 1 → 2 → 3`,
      
      code: `/**
     * Definition for singly-linked list.
     * public class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode() {}
     *     ListNode(int val) { this.val = val; }
     *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     * }
     */
    class Solution {
        public ListNode rotateRight(ListNode head, int k) {
            if (head == null || k == 0) return head;
    
            // Step 1: Compute length and get tail
            ListNode tail = head;
            int length = 1;
            while (tail.next != null) {
                tail = tail.next;
                length++;
            }
    
            // Step 2: Make list circular
            tail.next = head;
    
            // Step 3: Effective rotations
            k = k % length;
            int stepsToNewTail = length - k;
    
            // Step 4: Find new tail
            ListNode newTail = tail;
            while (stepsToNewTail-- > 0) {
                newTail = newTail.next;
            }
    
            // Step 5: New head is next of new tail
            ListNode newHead = newTail.next;
    
            // Step 6: Break the circle
            newTail.next = null;
    
            return newHead;
        }
    }`
    },
    {
      title: "(question - Reverse Nodes in k-Group) Approach / Algorithm Used",
      answer: `APPROACH / ALGORITHM USED:
    - Reverse every group of size k in the linked list.
    - Use a dummy node to simplify edge cases (like reversing the first k nodes).
    - Reverse k nodes at a time only if a full group is available.
    
    STEPS:
    1. Use a dummy node pointing to head.
    2. Use a loop to:
       - Find the k-th node from current position (group to reverse).
       - If not found, break (remaining < k nodes).
       - Reverse the k nodes.
       - Reconnect the previous group tail to new group head.
    3. Continue until end of list.
    
    HELPER:
    - \`getKthNode(start, k)\`: returns k-th node from \`start\`, or \`null\` if < k nodes.
    
    TIME & SPACE COMPLEXITY:
    Time: O(n) — Every node is visited once.
    Space: O(1) — In-place reversal.
    
    EXAMPLE:
    Input: 1 → 2 → 3 → 4 → 5, k = 2  
    Reverse: [1,2] → 2 → 1 → [3,4] → 4 → 3 → 5  
    Output: 2 → 1 → 4 → 3 → 5`,
      
      code: `/**
     * Definition for singly-linked list.
     * public class ListNode {
     *     int val;
     *     ListNode next;
     *     ListNode() {}
     *     ListNode(int val) { this.val = val; }
     *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
     * }
     */
    class Solution {
        public ListNode reverseKGroup(ListNode head, int k) {
            if (head == null || k <= 1) return head;
    
            ListNode dummy = new ListNode(0);
            dummy.next = head;
            ListNode groupPrev = dummy;
    
            while (true) {
                // Step 1: Find the k-th node
                ListNode kth = getKthNode(groupPrev, k);
                if (kth == null) break;
    
                ListNode groupNext = kth.next;
    
                // Step 2: Reverse the group
                ListNode prev = groupNext;
                ListNode curr = groupPrev.next;
    
                while (curr != groupNext) {
                    ListNode temp = curr.next;
                    curr.next = prev;
                    prev = curr;
                    curr = temp;
                }
    
                // Step 3: Reconnect
                ListNode temp = groupPrev.next;
                groupPrev.next = kth;
                groupPrev = temp;
            }
    
            return dummy.next;
        }
    
        private ListNode getKthNode(ListNode start, int k) {
            while (start != null && k > 0) {
                start = start.next;
                k--;
            }
            return start;
        }
    }`
    },
                                                



    
    











    {
      "title": "(question - BFS Traversal of a Graph) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to perform a **Breadth-First Search (BFS)** traversal of a graph represented as an adjacency list.\n- Start BFS from node 0 (assumed to be the starting point).\n- Use a `Queue` to explore nodes level by level.\n- Maintain a `visited[]` array to avoid revisiting the same nodes.\n- For each node:\n  - Dequeue it from the queue.\n  - Add it to the result list `bfs`.\n  - Traverse all its unvisited neighbors:\n    - Mark them as visited and enqueue them for future exploration.\n- Finally, return the `bfs` list containing nodes in the order they were visited.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(V + E)\n- V = number of vertices, E = number of edges.\n- Every vertex and edge is processed once.\nSpace Complexity: O(V)\n- Space for the visited array and the queue.\n\nDRY RUN / EXAMPLE:\nInput:\nadj = [[1, 2], [0, 3], [0], [1]]\nGraph:\n0 - 1 - 3\n|  \n2\n\nStep-by-step BFS:\n- Start at 0 → visited = [true, false, false, false], queue = [0]\n- Pop 0 → bfs = [0], queue = []\n  → Enqueue 1 and 2 → queue = [1, 2]\n- Pop 1 → bfs = [0, 1], enqueue 3 → queue = [2, 3]\n- Pop 2 → bfs = [0, 1, 2]\n- Pop 3 → bfs = [0, 1, 2, 3]\n\n✔️ Final Output = [0, 1, 2, 3]"
    },
    {
      "title": "(question - DFS Traversal of a Graph) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to perform a **Depth-First Search (DFS)** traversal of a graph represented using an adjacency list.\n- DFS explores as far as possible along each branch before backtracking.\n- Start DFS from node 0 (assumed starting point).\n- Use a `visited[]` array to avoid visiting the same node more than once.\n- Create a helper function `dfsHelper` to perform recursion:\n  - Mark the current node as visited.\n  - Add it to the result list.\n  - Recursively visit all unvisited neighbors.\n- Finally, return the result list containing the DFS traversal.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(V + E)\n- V = number of vertices, E = number of edges.\n- Every node and edge is visited once.\nSpace Complexity: O(V)\n- Space used for the visited array and recursion stack.\n\nDRY RUN / EXAMPLE:\nInput:\nadj = [[1, 2], [0, 3], [0], [1]]\nGraph:\n0 - 1 - 3\n|  \n2\n\nStep-by-step DFS:\n- Start at 0 → result = [0], visited = [T, F, F, F]\n- Visit 1 → result = [0, 1], visited = [T, T, F, F]\n- Visit 3 → result = [0, 1, 3], visited = [T, T, F, T]\n- Backtrack to 1, then to 0\n- Visit 2 → result = [0, 1, 3, 2], visited = [T, T, T, T]\n\n✔️ Final Output = [0, 1, 3, 2]"
    },
    {
      "title": "(question - Find Redundant Connection) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find the edge that, when added to an undirected graph, forms a cycle — i.e., the redundant connection.\n- We use the **Union-Find (Disjoint Set Union)** data structure with **path compression** to efficiently detect cycles.\n\nSTEPS:\n1. Initialize a `parent[]` array where each node is its own parent.\n2. Iterate through each edge `[u, v]`:\n   - Use the `find()` function to find the root parents of `u` and `v`.\n   - If both nodes have the same parent, they are already connected → adding this edge would form a cycle → return this edge.\n   - Otherwise, union the sets by setting the parent of `u`'s root to `v`'s root.\n3. If no cycle is found (which shouldn't happen given constraints), return an empty array.\n\n`find()` FUNCTION (with path compression):\n- Recursively finds the root parent of a node.\n- While doing so, compresses the path by directly connecting each node to its root → improves future performance.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(N * α(N))\n- α(N) is the inverse Ackermann function (very small in practice), due to path compression.\nSpace Complexity: O(N)\n- For storing the parent array.\n\nDRY RUN / EXAMPLE:\nInput: edges = [[1,2],[1,3],[2,3]]\n\n- Edge [1,2] → union 1 and 2 → parent[1] = 2\n- Edge [1,3] → union 1 and 3 → parent[2] = 3 (through path compression)\n- Edge [2,3] → find(2) = 3, find(3) = 3 → same parent → cycle detected ✅\n\n✔️ Final Output = [2, 3]",
      "code":`import java.util.*;

public class RedundantConnectionBFS {

    public int[] findRedundantConnection(int[][] edges) {
        // Adjacency list
        Map<Integer, List<Integer>> graph = new HashMap<>();

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];

            // Before adding the edge, check if u and v are already connected
            if (isConnected(u, v, graph)) {
                return edge; // Adding this edge would create a cycle
            }

            // Add edge to the graph
            graph.putIfAbsent(u, new ArrayList<>());
            graph.putIfAbsent(v, new ArrayList<>());
            graph.get(u).add(v);
            graph.get(v).add(u);
        }

        return new int[]{-1, -1}; // Should not reach here per problem constraints
    }

    private boolean isConnected(int start, int target, Map<Integer, List<Integer>> graph) {
        if (!graph.containsKey(start) || !graph.containsKey(target)) return false;

        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start);
        visited.add(start);

        while (!queue.isEmpty()) {
            int curr = queue.poll();
            if (curr == target) return true;

            for (int neighbor : graph.get(curr)) {
                if (!visited.contains(neighbor)) {
                    visited.add(neighbor);
                    queue.offer(neighbor);
                }
            }
        }

        return false;
    }

    // Test
    public static void main(String[] args) {
        RedundantConnectionBFS solver = new RedundantConnectionBFS();
        int[][] edges = {{1, 2}, {1, 3}, {2, 3}};
        int[] result = solver.findRedundantConnection(edges);
        System.out.println("Redundant Edge: [" + result[0] + ", " + result[1] + "]");
        // Output: [2, 3]
    }
}`
    },
    {
      "title": "(question - Flood Fill) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to perform a flood fill on a 2D image matrix: change the color of all connected cells (4-directionally) starting from `(sr, sc)` that have the same original color.\n- Use **Depth-First Search (DFS)** to recursively explore all adjacent matching cells.\n\nSTEPS:\n1. Store the original color at `(sr, sc)`.\n2. If the original color is already equal to the new color, return the image as-is (avoids infinite loop).\n3. Call the recursive `dfs()` helper with the current cell, the original color, and the new color.\n4. In `dfs()`:\n   - Check bounds and whether the current cell has the original color.\n   - If valid, change its color to the new color.\n   - Recursively explore its 4 neighbors (up, down, left, right).\n5. Return the modified image.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(m × n)\n- In the worst case, all pixels are the same as the original color.\nSpace Complexity: O(m × n)\n- Due to recursion stack in DFS.\n\nDRY RUN / EXAMPLE:\nInput: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2\n- originalColor = 1\n- Start DFS from (1,1): set to 2\n- Visit all connected 1s → change to 2\n\n✔️ Final Output = [[2,2,2],[2,2,0],[2,0,1]]"
    },
    {
      "title": "(question - Topological Sort of a Directed Graph) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to return a valid **topological ordering** of a Directed Acyclic Graph (DAG).\n- We use **Kahn’s Algorithm**, which is a **BFS-based** topological sort.\n\nSTEPS:\n1. **Build the adjacency list** from the given edges.\n2. Create an `indegree[]` array to store the number of incoming edges for each vertex.\n3. Initialize a queue with all vertices having `indegree = 0` (these can be safely placed first).\n4. While the queue is not empty:\n   - Pop a vertex `u` from the queue.\n   - Add `u` to the result array `topo[]`.\n   - For each neighbor `v` of `u`, decrement its indegree.\n   - If `indegree[v]` becomes 0, enqueue `v`.\n5. After traversal, check if all nodes were visited:\n   - If not (`idx != V`), the graph contains a cycle and topological sort is not possible.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(V + E)\n- V = number of vertices, E = number of edges.\n- Every vertex and edge is processed once.\nSpace Complexity: O(V + E)\n- For adjacency list and indegree array.\n\nDRY RUN / EXAMPLE:\nInput: V = 4, edges = [[0,1],[0,2],[1,3],[2,3]]\n- adj: {0: [1,2], 1: [3], 2: [3], 3: []}\n- indegree: [0,1,1,2]\n- Queue: [0]\n  → Pop 0 → topo = [0]\n  → Enqueue 1,2 (indegree[1]=0, indegree[2]=0)\n  → Pop 1 → topo = [0,1] → Enqueue 3 (indegree[3]=1)\n  → Pop 2 → topo = [0,1,2] → indegree[3]=0 → Enqueue 3\n  → Pop 3 → topo = [0,1,2,3]\n\n✔️ Final Output = [0,1,2,3] or [0,2,1,3] (any valid topological order)",
      "code":`import java.util.*;

public class TopologicalSortKahn {

    public List<Integer> topologicalSort(int V, int[][] edges) {
        // Step 1: Build the adjacency list
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            adj.get(u).add(v);
        }

        // Step 2: Compute indegree for each vertex
        int[] indegree = new int[V];
        for (int u = 0; u < V; u++) {
            for (int v : adj.get(u)) {
                indegree[v]++;
            }
        }

        // Step 3: Initialize queue with nodes having indegree 0
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < V; i++) {
            if (indegree[i] == 0) {
                queue.offer(i);
            }
        }

        // Step 4: Perform BFS
        List<Integer> topo = new ArrayList<>();
        while (!queue.isEmpty()) {
            int node = queue.poll();
            topo.add(node);

            for (int neighbor : adj.get(node)) {
                indegree[neighbor]--;
                if (indegree[neighbor] == 0) {
                    queue.offer(neighbor);
                }
            }
        }

        // Step 5: If topological sort includes all vertices
        if (topo.size() != V) {
            throw new RuntimeException("Cycle detected in graph. Topological sort not possible.");
        }

        return topo;
    }

    // Main method to test
    public static void main(String[] args) {
        TopologicalSortKahn sorter = new TopologicalSortKahn();

        int V = 4;
        int[][] edges = {
            {0, 1},
            {0, 2},
            {1, 3},
            {2, 3}
        };

        List<Integer> result = sorter.topologicalSort(V, edges);
        System.out.println("Topological Order: " + result);
        // Output can be: [0, 1, 2, 3] or [0, 2, 1, 3]
    }
}
`
    },
    {
      "title": "(question - Course Schedule II / Find Course Order) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to return a valid order in which a student can complete all courses given the list of prerequisites.\n- This is a **topological sort** problem on a **Directed Acyclic Graph (DAG)**.\n- We use **Kahn’s Algorithm** (BFS-based topological sorting) to solve it.\n\nSTEPS:\n1. Initialize an **adjacency list** `adj` for `numCourses` nodes.\n2. Initialize an `indegree[]` array to count the number of prerequisites for each course.\n3. For each `prerequisite pair [course, prereq]`:\n   - Add an edge from `prereq → course` in the graph.\n   - Increment `indegree[course]`.\n4. Add all courses with `indegree = 0` to the queue (these have no prerequisites).\n5. While the queue is not empty:\n   - Remove a course from the queue and add it to the result array.\n   - For all neighbors of this course (i.e., dependent courses), decrement their indegree.\n   - If any neighbor's indegree becomes 0, add it to the queue.\n6. If all courses are processed (`idx == numCourses`), return the order array.\n7. Otherwise, a cycle exists, and it's not possible to finish all courses → return an empty array.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(V + E)\n- V = number of courses, E = number of prerequisites.\n- Each edge and vertex is processed once.\nSpace Complexity: O(V + E)\n- For the adjacency list and indegree array.\n\nDRY RUN / EXAMPLE:\nInput: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]\n\nGraph:\n0 → 1, 2\n1 → 3\n2 → 3\n\n- indegree = [0,1,1,2]\n- Queue: [0]\n- Process 0 → result: [0] → enqueue 1 and 2\n- Process 1 → result: [0,1] → decrement indegree[3] to 1\n- Process 2 → result: [0,1,2] → indegree[3] becomes 0 → enqueue 3\n- Process 3 → result: [0,1,2,3]\n\n✔️ Final Output = [0,1,2,3] (or any valid topological order)",
      "code":`import java.util.*;

public class CourseScheduleOrder {

    public int[] findOrder(int numCourses, int[][] prerequisites) {
        // Step 1: Build the adjacency list
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) {
            adj.add(new ArrayList<>());
        }

        // Step 2: Build indegree array
        int[] indegree = new int[numCourses];
        for (int[] pair : prerequisites) {
            int course = pair[0];
            int prereq = pair[1];
            adj.get(prereq).add(course); // prereq → course
            indegree[course]++;
        }

        // Step 3: Add all courses with indegree 0 to queue
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (indegree[i] == 0) {
                queue.offer(i);
            }
        }

        // Step 4: Perform BFS and build result
        int[] order = new int[numCourses];
        int idx = 0;

        while (!queue.isEmpty()) {
            int current = queue.poll();
            order[idx++] = current;

            for (int neighbor : adj.get(current)) {
                indegree[neighbor]--;
                if (indegree[neighbor] == 0) {
                    queue.offer(neighbor);
                }
            }
        }

        // Step 5: Check if topological order includes all courses
        if (idx == numCourses) {
            return order; // Valid ordering found
        } else {
            return new int[0]; // Cycle detected
        }
    }

    // Driver method
    public static void main(String[] args) {
        CourseScheduleOrder scheduler = new CourseScheduleOrder();
        int numCourses = 4;
        int[][] prerequisites = {
            {1, 0},
            {2, 0},
            {3, 1},
            {3, 2}
        };

        int[] result = scheduler.findOrder(numCourses, prerequisites);
        System.out.println("Course Order: " + Arrays.toString(result));
        // Output: [0, 1, 2, 3] or [0, 2, 1, 3]
    }
}
`
    },
    {
      "title": "(question - Dijkstra's Shortest Path Algorithm) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to compute the shortest path from a source node `src` to all other nodes in a **weighted undirected graph**.\n- We use **Dijkstra’s Algorithm** with a **priority queue (min-heap)** to efficiently pick the next closest node.\n\nSTEPS:\n1. **Build the adjacency list**:\n   - Each entry in `adj` contains a list of (neighbor, weight) pairs.\n   - Since the graph is undirected, add both `u → v` and `v → u`.\n2. **Initialize**:\n   - `dist[]`: shortest distance array, initialized to `Integer.MAX_VALUE`, except `src = 0`.\n   - A `PriorityQueue<Pair>` to always process the closest unvisited node.\n3. While the priority queue is not empty:\n   - Extract the node with the minimum distance (`currDist`).\n   - If this distance is greater than the stored distance, skip it.\n   - For all neighbors, if the new distance via the current node is smaller:\n     - Update `dist[]` and push the updated node to the queue.\n4. Return the `dist[]` array containing the shortest distances from `src` to all vertices.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O((V + E) * log V)\n- Using a priority queue gives log V per insertion/removal.\nSpace Complexity: O(V + E)\n- Adjacency list and distance array.\n\nDRY RUN / EXAMPLE:\nInput: V = 5, edges = [[0,1,2],[0,2,4],[1,2,1],[1,3,7],[2,4,3]], src = 0\n\nAdjacency list:\n0 → (1,2), (2,4)\n1 → (0,2), (2,1), (3,7)\n2 → (0,4), (1,1), (4,3)\n...\n\nPriority Queue Steps:\n- Start from 0 → dist[0] = 0\n- Visit 1 → dist[1] = 2\n- Visit 2 via 1 → dist[2] = 3\n- Visit 4 via 2 → dist[4] = 6\n- Visit 3 via 1 → dist[3] = 9\n\n✔️ Final Output = [0, 2, 3, 9, 6]",
      "code":`import java.util.*;

class Pair {
    int node;
    int weight;

    public Pair(int node, int weight) {
        this.node = node;
        this.weight = weight;
    }
}

public class DijkstraShortestPath {

    public int[] dijkstra(int V, int[][] edges, int src) {
        // Step 1: Build adjacency list
        List<List<Pair>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            int u = edge[0], v = edge[1], w = edge[2];
            adj.get(u).add(new Pair(v, w)); // u → v
            adj.get(v).add(new Pair(u, w)); // v → u (undirected)
        }

        // Step 2: Initialize distance array
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;

        // Step 3: PriorityQueue based on distance
        PriorityQueue<Pair> pq = new PriorityQueue<>((a, b) -> a.weight - b.weight);
        pq.offer(new Pair(src, 0));

        while (!pq.isEmpty()) {
            Pair current = pq.poll();
            int u = current.node;
            int currDist = current.weight;

            if (currDist > dist[u]) continue; // Skip outdated entry

            for (Pair neighbor : adj.get(u)) {
                int v = neighbor.node;
                int weight = neighbor.weight;
                if (dist[u] + weight < dist[v]) {
                    dist[v] = dist[u] + weight;
                    pq.offer(new Pair(v, dist[v]));
                }
            }
        }

        return dist;
    }

    // Driver Test
    public static void main(String[] args) {
        DijkstraShortestPath solver = new DijkstraShortestPath();
        int V = 5;
        int[][] edges = {
            {0, 1, 2},
            {0, 2, 4},
            {1, 2, 1},
            {1, 3, 7},
            {2, 4, 3}
        };
        int src = 0;

        int[] result = solver.dijkstra(V, edges, src);
        System.out.println("Shortest distances from source " + src + ": " + Arrays.toString(result));
        // Output: [0, 2, 3, 9, 6]
    }
}`
    },
    {
      "title": "(question - Cheapest Flights Within K Stops) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find the **minimum cost** to travel from `src` to `dst` using at most `K` stops.\n- This is a variation of **Dijkstra’s Algorithm** with an additional constraint on the number of stops.\n- We use a **BFS-like traversal** with a queue that tracks (city, cost, stops).\n\nSTEPS:\n1. **Build the adjacency list** where each city maps to a list of destination cities with their respective prices.\n2. Use a `dist[][]` matrix where `dist[city][stops]` stores the **minimum cost** to reach `city` with `stops` used.\n3. Initialize the `dist[src][0] = 0` and push `(src, 0, 0)` into a queue.\n4. While the queue is not empty:\n   - Pop `(city, cost, stops)` from queue.\n   - Skip if `stops > K`.\n   - For each neighbor, calculate the new cost.\n   - If this new cost is cheaper than the previously stored cost with `stops+1`, update it and enqueue the new state.\n5. Finally, find the **minimum cost to reach `dst`** using up to `K+1` flights (since stops count edges).\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n × K × log n)\n- Each city may be processed multiple times up to `K+1` stops.\n- Depends on number of flights and queue operations.\nSpace Complexity: O(n × K)\n- For the `dist[][]` matrix and queue.\n\nDRY RUN / EXAMPLE:\nInput: n = 4, flights = [[0,1,100],[1,2,100],[2,3,100],[0,3,500]], src = 0, dst = 3, K = 1\n\n- Direct path: 0→3 = 500\n- 0→1→2→3 = 300 but has 2 stops → not allowed (K = 1)\n- 0→1→2 is okay but doesn’t reach 3\n- Final answer: 500\n\n✔️ Final Output = 500",
      "code":`import java.util.*;

class Flight {
    int city;
    int cost;
    int stops;

    public Flight(int city, int cost, int stops) {
        this.city = city;
        this.cost = cost;
        this.stops = stops;
    }
}

public class CheapestFlightKStops {

    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int K) {
        // Step 1: Build adjacency list
        Map<Integer, List<int[]>> adj = new HashMap<>();
        for (int[] flight : flights) {
            int from = flight[0], to = flight[1], price = flight[2];
            adj.computeIfAbsent(from, x -> new ArrayList<>()).add(new int[]{to, price});
        }

        // Step 2: dist[node][stops] = min cost to reach node with stops stops
        int[][] dist = new int[n][K + 2];
        for (int[] row : dist) Arrays.fill(row, Integer.MAX_VALUE);
        dist[src][0] = 0;

        // Step 3: Use a queue to perform BFS traversal
        Queue<Flight> queue = new LinkedList<>();
        queue.offer(new Flight(src, 0, 0));

        while (!queue.isEmpty()) {
            Flight current = queue.poll();
            int u = current.city, costSoFar = current.cost, stops = current.stops;

            if (stops > K) continue;

            if (!adj.containsKey(u)) continue;

            for (int[] neighbor : adj.get(u)) {
                int v = neighbor[0], price = neighbor[1];
                int newCost = costSoFar + price;

                if (newCost < dist[v][stops + 1]) {
                    dist[v][stops + 1] = newCost;
                    queue.offer(new Flight(v, newCost, stops + 1));
                }
            }
        }

        // Step 4: Return the minimum cost to reach dst within K+1 levels
        int minCost = Integer.MAX_VALUE;
        for (int i = 0; i <= K + 1; i++) {
            minCost = Math.min(minCost, dist[dst][i]);
        }

        return minCost == Integer.MAX_VALUE ? -1 : minCost;
    }

    // Driver
    public static void main(String[] args) {
        CheapestFlightKStops solver = new CheapestFlightKStops();
        int n = 4;
        int[][] flights = {
            {0, 1, 100},
            {1, 2, 100},
            {2, 3, 100},
            {0, 3, 500}
        };
        int src = 0, dst = 3, K = 1;
        int result = solver.findCheapestPrice(n, flights, src, dst, K);
        System.out.println("Cheapest Price: " + result);  // Output: 500
    }
}
`
    },
    {
      "title": "(question - Min Cost to Connect All Points) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to find the **minimum total cost** to connect all points, where the cost between two points is their **Manhattan distance**.\n- This is a classic **Minimum Spanning Tree (MST)** problem.\n- We use **Prim’s Algorithm** with a **min-heap (PriorityQueue)** to greedily choose the minimum cost edge.\n\nSTEPS:\n1. Start from point `0` and initialize a `minHeap` with `(0, 0)` — meaning cost 0 to reach point 0.\n2. Use a `visited` set to keep track of points already included in the MST.\n3. While MST does not include all points:\n   - Poll the minimum cost point `(cost, pointIndex)` from the heap.\n   - If the point is already visited, skip it.\n   - Otherwise, mark it visited and add the cost to the `totalCost`.\n   - For each unvisited point `j`, compute Manhattan distance from current point `i`:\n     - `dist = |x1 - x2| + |y1 - y2|`\n     - Add `(dist, j)` to the heap.\n4. Return `totalCost` once all points are included in the MST.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n² log n)\n- For each point, we check all other points to calculate distances.\n- Inserting into the heap takes log n time.\nSpace Complexity: O(n²)\n- For storing all edges in the priority queue and the visited set.\n\nDRY RUN / EXAMPLE:\nInput: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]\n\nPrim’s MST Sequence:\n- Start from 0 → connect to 1 (cost 4)\n- Connect to 3 (cost 3)\n- Connect to 4 (cost 2)\n- Connect to 2 (cost 7)\n\n✔️ Final Output = 17",
      "code":`import java.util.*;

public class MinCostConnectPoints {

    public int minCostConnectPoints(int[][] points) {
        int n = points.length;
        boolean[] visited = new boolean[n]; // tracks nodes in MST
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> a[0] - b[0]); // [cost, toNode]
        minHeap.offer(new int[]{0, 0}); // start with point 0 at cost 0

        int totalCost = 0;
        int pointsInMST = 0;

        while (pointsInMST < n) {
            int[] current = minHeap.poll();
            int cost = current[0];
            int pointIndex = current[1];

            if (visited[pointIndex]) continue; // skip if already included
            visited[pointIndex] = true;
            totalCost += cost;
            pointsInMST++;

            // Add all edges from current point to unvisited points
            for (int j = 0; j < n; j++) {
                if (!visited[j]) {
                    int dist = manhattanDistance(points[pointIndex], points[j]);
                    minHeap.offer(new int[]{dist, j});
                }
            }
        }

        return totalCost;
    }

    private int manhattanDistance(int[] a, int[] b) {
        return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    }

    // Driver method
    public static void main(String[] args) {
        MinCostConnectPoints solver = new MinCostConnectPoints();
        int[][] points = {
            {0, 0},
            {2, 2},
            {3, 10},
            {5, 2},
            {7, 0}
        };
        int result = solver.minCostConnectPoints(points);
        System.out.println("Minimum Cost to Connect All Points: " + result); // Output: 17
    }
}`
    },
    {
      "title": "(question - Single Source Shortest Path using Bellman-Ford) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The Bellman-Ford algorithm finds the shortest paths from a **source vertex** to all vertices in a **weighted graph**, even with **negative edge weights**.\n- It can also **detect negative weight cycles** (which Dijkstra’s algorithm cannot).\n\nSTEPS:\n1. Initialize the `dist[]` array with a large number (INF) for all nodes except the `src`, which is set to 0.\n2. **Relax all edges V-1 times**:\n   - For each edge (u → v, weight w), update `dist[v] = min(dist[v], dist[u] + w)` if possible.\n   - Do this V-1 times because the longest possible shortest path without a cycle has at most V-1 edges.\n3. **Check for negative cycles**:\n   - After V-1 iterations, go through all edges once more.\n   - If any distance can still be updated, a negative cycle exists → return `[-1]`.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(V × E)\n- Because we iterate through all E edges for V-1 times.\nSpace Complexity: O(V)\n- For the distance array.\n\nDRY RUN / EXAMPLE:\nInput:\nV = 5, edges = [[0,1,4],[0,2,5],[1,2,-3],[2,3,4],[3,1,-10]], src = 0\n\n- 1st Pass: dist[1] = 4, dist[2] = 1 (via 1), dist[3] = 5\n- 2nd & 3rd Pass: distances update due to negative weights\n- Final check shows negative cycle: 3 → 1 → 2 → 3\n\n✔️ Final Output: [-1] (due to negative weight cycle)",
      "code":`import java.util.*;

public class BellmanFordShortestPath {

    public int[] bellmanFord(int V, int[][] edges, int src) {
        // Step 1: Initialize distance array
        int[] dist = new int[V];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;

        // Step 2: Relax all edges V-1 times
        for (int i = 0; i < V - 1; i++) {
            for (int[] edge : edges) {
                int u = edge[0];
                int v = edge[1];
                int wt = edge[2];
                if (dist[u] != Integer.MAX_VALUE && dist[u] + wt < dist[v]) {
                    dist[v] = dist[u] + wt;
                }
            }
        }

        // Step 3: Check for negative weight cycle
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            int wt = edge[2];
            if (dist[u] != Integer.MAX_VALUE && dist[u] + wt < dist[v]) {
                return new int[]{-1}; // Negative weight cycle detected
            }
        }

        return dist; // Return shortest distances from src
    }

    // Driver code to test
    public static void main(String[] args) {
        BellmanFordShortestPath solver = new BellmanFordShortestPath();

        int V = 5;
        int[][] edges = {
            {0, 1, 4},
            {0, 2, 5},
            {1, 2, -3},
            {2, 3, 4},
            {3, 1, -10}
        };
        int src = 0;

        int[] result = solver.bellmanFord(V, edges, src);
        System.out.println("Shortest distances from source " + src + ": " + Arrays.toString(result));
        // Output: [-1] due to negative cycle
    }
}
`
    },
    {
      "title": "(question - Find the City With the Smallest Number of Neighbors Within Threshold) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find the city from which the **fewest other cities** are reachable within a given distance threshold.\n- If multiple cities have the same count, return the **city with the greatest index**.\n- This is solved using the **Floyd-Warshall algorithm** to compute **all-pairs shortest paths**.\n\nSTEPS:\n1. Initialize a `dist[][]` matrix:\n   - Set `dist[i][j] = INF` initially, and `dist[i][i] = 0`.\n2. For each edge `(u, v, w)`:\n   - Set `dist[u][v] = dist[v][u] = w` (because the graph is undirected).\n3. Run **Floyd-Warshall**:\n   - For each intermediate node `k`, and all pairs `(i, j)`, update:\n     `dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])`\n4. For each city `i`, count how many other cities `j` (≠ i) have `dist[i][j] ≤ distanceThreshold`.\n5. Track the city with the **minimum count** (or **largest index** if tie).\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n³)\n- Due to Floyd-Warshall’s three nested loops.\nSpace Complexity: O(n²)\n- For storing all-pairs shortest distances.\n\nDRY RUN / EXAMPLE:\nInput:\nn = 4,\nedges = [[0,1,3],[1,2,1],[2,3,4],[0,3,7]],\ndistanceThreshold = 4\n\nFloyd-Warshall Result:\n- dist[0] = [0,3,4,7]\n- dist[1] = [3,0,1,5]\n- dist[2] = [4,1,0,4]\n- dist[3] = [7,5,4,0]\n\nReachable within 4 units:\n- city 0: 2 cities\n- city 1: 2 cities\n- city 2: 3 cities\n- city 3: 1 city\n\n✔️ Final Output = 3 (least reachable neighbors, highest index)",
      "code":`import java.util.*;

public class FindCityWithinThreshold {

    public int findTheCity(int n, int[][] edges, int distanceThreshold) {
        int INF = 1000000;
        int[][] dist = new int[n][n];

        // Step 1: Initialize distances
        for (int i = 0; i < n; i++) {
            Arrays.fill(dist[i], INF);
            dist[i][i] = 0;
        }

        // Step 2: Fill initial edge weights
        for (int[] edge : edges) {
            int u = edge[0], v = edge[1], w = edge[2];
            dist[u][v] = w;
            dist[v][u] = w; // undirected
        }

        // Step 3: Floyd-Warshall algorithm
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (dist[i][k] + dist[k][j] < dist[i][j]) {
                        dist[i][j] = dist[i][k] + dist[k][j];
                    }
                }
            }
        }

        // Step 4: Find city with minimum reachable cities within threshold
        int minReachable = n + 1;
        int resultCity = -1;

        for (int i = 0; i < n; i++) {
            int reachable = 0;
            for (int j = 0; j < n; j++) {
                if (i != j && dist[i][j] <= distanceThreshold) {
                    reachable++;
                }
            }
            // If fewer reachable OR same but higher index → update
            if (reachable <= minReachable) {
                minReachable = reachable;
                resultCity = i;
            }
        }

        return resultCity;
    }

    // Driver
    public static void main(String[] args) {
        FindCityWithinThreshold solver = new FindCityWithinThreshold();

        int n = 4;
        int[][] edges = {
            {0, 1, 3},
            {1, 2, 1},
            {2, 3, 4},
            {0, 3, 7}
        };
        int threshold = 4;

        int result = solver.findTheCity(n, edges, threshold);
        System.out.println("City with smallest reachable neighbors within threshold: " + result);
        // Output: 3
    }
}
`
    },
    {
      "title": "(question - Rotting Oranges) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to determine the **minimum number of minutes** required to rot all fresh oranges, where rotten oranges spread to adjacent fresh ones each minute.\n- This is solved using **Multi-Source Breadth-First Search (BFS)** starting from all initially rotten oranges.\n\nSTEPS:\n1. **Preprocessing**:\n   - Count the number of fresh oranges.\n   - Add all initially rotten oranges `(row, col, time)` into a queue.\n2. **BFS Traversal**:\n   - Process the queue using BFS.\n   - For each rotten orange, rot its adjacent fresh oranges and add them to the queue with `time + 1`.\n   - Decrease the `freshOranges` count each time a fresh orange gets rotted.\n   - Track the maximum `timeElapsed` during the process.\n3. **Final Check**:\n   - If all fresh oranges are rotted (`freshOranges == 0`), return `timeElapsed`.\n   - Else, return `-1` indicating some oranges could not be rotted.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(m × n)\n- Each cell is visited at most once.\nSpace Complexity: O(m × n)\n- Queue holds at most all oranges.\n\nDRY RUN / EXAMPLE:\nInput:\ngrid = [[2,1,1],[1,1,0],[0,1,1]]\n\n- Initially rotten = (0,0)\n- BFS rots neighbors minute-by-minute\n- Final result = 4 minutes\n\n✔️ Final Output = 4",
      "code":`import java.util.*;

public class RottingOranges {

    public int orangesRotting(int[][] grid) {
        int m = grid.length, n = grid[0].length;

        Queue<int[]> queue = new LinkedList<>();
        int freshOranges = 0;
        int timeElapsed = 0;

        // Step 1: Add all rotten oranges to queue and count fresh ones
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 2) {
                    queue.offer(new int[]{i, j, 0}); // [row, col, time]
                } else if (grid[i][j] == 1) {
                    freshOranges++;
                }
            }
        }

        // Step 2: Multi-source BFS
        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int row = curr[0], col = curr[1], time = curr[2];
            timeElapsed = Math.max(timeElapsed, time);

            for (int[] dir : directions) {
                int newRow = row + dir[0];
                int newCol = col + dir[1];

                if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n &&
                    grid[newRow][newCol] == 1) {
                    grid[newRow][newCol] = 2; // rot the orange
                    freshOranges--;
                    queue.offer(new int[]{newRow, newCol, time + 1});
                }
            }
        }

        // Step 3: Final check
        return freshOranges == 0 ? timeElapsed : -1;
    }

    // Test driver
    public static void main(String[] args) {
        RottingOranges solver = new RottingOranges();

        int[][] grid = {
            {2, 1, 1},
            {1, 1, 0},
            {0, 1, 1}
        };

        int result = solver.orangesRotting(grid);
        System.out.println("Minimum minutes to rot all oranges: " + result); // Output: 4
    }
}
`
    },
    {
      "title": "(question - 01 Matrix / updateMatrix) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to update each cell containing 1 with the **distance to the nearest 0**.\n- This is solved using **Multi-Source Breadth-First Search (BFS)**, starting from all cells that already contain 0.\n\nSTEPS:\n1. **Initialization**:\n   - Traverse the matrix.\n   - Push all cells with value 0 into a queue (they're the sources for BFS).\n   - Mark all 1s as -1 (unvisited).\n\n2. **BFS Traversal**:\n   - From each 0, traverse its neighbors.\n   - If a neighbor is -1 (was originally 1), update its value as `mat[current] + 1` and enqueue it.\n   - This ensures that every 1 gets its shortest distance to the nearest 0.\n\n3. **Return the matrix** after all updates.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(m × n)\n- Each cell is processed at most once.\nSpace Complexity: O(m × n)\n- For the queue used in BFS.\n\nDRY RUN / EXAMPLE:\nInput:\n[[0,0,0],[0,1,0],[1,1,1]]\n\nAfter BFS:\n[[0,0,0],[0,1,0],[1,2,1]]\n\n✔️ Final Output = [[0,0,0],[0,1,0],[1,2,1]]",
      "code":`import java.util.*;

public class UpdateMatrix {

    public int[][] updateMatrix(int[][] mat) {
        int m = mat.length;
        int n = mat[0].length;

        Queue<int[]> queue = new LinkedList<>();

        // Step 1: Mark 1s as -1 and enqueue all 0s
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (mat[i][j] == 0) {
                    queue.offer(new int[]{i, j});
                } else {
                    mat[i][j] = -1; // mark as unvisited
                }
            }
        }

        int[][] directions = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};

        // Step 2: BFS to update distances
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int row = current[0], col = current[1];

            for (int[] dir : directions) {
                int newRow = row + dir[0];
                int newCol = col + dir[1];

                if (newRow >= 0 && newRow < m &&
                    newCol >= 0 && newCol < n &&
                    mat[newRow][newCol] == -1) {

                    mat[newRow][newCol] = mat[row][col] + 1;
                    queue.offer(new int[]{newRow, newCol});
                }
            }
        }

        return mat;
    }

    // Test driver
    public static void main(String[] args) {
        UpdateMatrix solver = new UpdateMatrix();

        int[][] input = {
            {0, 0, 0},
            {0, 1, 0},
            {1, 1, 1}
        };

        int[][] result = solver.updateMatrix(input);

        // Print output matrix
        for (int[] row : result) {
            System.out.println(Arrays.toString(row));
        }
        // Output:
        // [0, 0, 0]
        // [0, 1, 0]
        // [1, 2, 1]
    }
}
`
    },
    {
      "title": "(question - Clone an Undirected Graph) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The task is to clone an undirected connected graph where each node contains a value and a list of neighbors.\n- The approach uses **Depth-First Search (DFS)** with a **visited map** to avoid re-cloning the same node or falling into infinite loops in cyclic graphs.\n\nSTEPS:\n1. Create a `Map<Node, Node>` called `visited` to store already cloned nodes.\n2. Define a recursive `cloneGraph(node)` function:\n   - If the node is `null`, return `null`.\n   - If the node is already in the visited map, return the cloned node.\n   - Otherwise, clone the current node using `new Node(node.val)`.\n   - Add this clone to the `visited` map.\n   - Recursively clone all neighbors and add them to the `cloneNode.neighbors` list.\n3. Return the clone of the input node.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(N + E)\n- N = number of nodes, E = number of edges\n- Each node and edge is visited once.\nSpace Complexity: O(N)\n- For the visited map and recursion stack.\n\nDRY RUN / EXAMPLE:\nInput Graph:\n1 -- 2\n|    |\n4 -- 3\n\n- Start cloning from node 1\n- Clone 1 → recursively clone neighbors 2 and 4\n- When visiting 2 → recursively clone 3\n- When visiting 4 and 3 → already cloned → use from map\n\n✔️ Final Output: Deep-copied graph with the same structure and connections",
      "code":`import java.util.*;

// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;

    public Node() {
        neighbors = new ArrayList<>();
    }

    public Node(int val) {
        this.val = val;
        neighbors = new ArrayList<>();
    }

    public Node(int val, List<Node> neighbors) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

public class CloneGraphDFS {

    private Map<Node, Node> visited = new HashMap<>();

    public Node cloneGraph(Node node) {
        // Step 1: Handle base case
        if (node == null) return null;

        // Step 2: If already cloned, return it
        if (visited.containsKey(node)) {
            return visited.get(node);
        }

        // Step 3: Clone current node
        Node clone = new Node(node.val);
        visited.put(node, clone);

        // Step 4: Recursively clone neighbors
        for (Node neighbor : node.neighbors) {
            clone.neighbors.add(cloneGraph(neighbor));
        }

        return clone;
    }

    // Optional: test setup for small graph
    public static void main(String[] args) {
        // Create test graph: 1-2-3-4 cycle
        Node n1 = new Node(1);
        Node n2 = new Node(2);
        Node n3 = new Node(3);
        Node n4 = new Node(4);

        n1.neighbors.addAll(List.of(n2, n4));
        n2.neighbors.addAll(List.of(n1, n3));
        n3.neighbors.addAll(List.of(n2, n4));
        n4.neighbors.addAll(List.of(n1, n3));

        CloneGraphDFS solver = new CloneGraphDFS();
        Node cloned = solver.cloneGraph(n1);

        System.out.println("Original node: " + n1.val);
        System.out.println("Cloned node: " + cloned.val);
    }
}
`
    },
    {
      "title": "(question - Number of Islands) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to count the number of **connected groups of land ('1')** in a 2D grid.\n- This is solved using **Depth-First Search (DFS)** to traverse and mark all connected land cells as visited.\n\nSTEPS:\n1. Initialize a `count = 0` to track islands.\n2. Traverse the entire grid.\n   - If a cell contains `'1'`, it is a new island.\n   - Increment `count`, and call DFS to mark all connected `'1'` cells.\n3. In the `dfs()` function:\n   - Check for boundaries and whether the current cell is `'1'`.\n   - Mark the current cell as visited by setting `grid[i][j] = '0'`.\n   - Recursively explore the 4 neighboring cells (up, down, left, right).\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(m × n)\n- Every cell is visited at most once.\nSpace Complexity: O(m × n)\n- In the worst case, the recursion stack can grow to cover the whole grid (e.g., one big island).\n\nDRY RUN / EXAMPLE:\nInput:\n[ ['1','1','0','0','0'],\n  ['1','1','0','0','0'],\n  ['0','0','1','0','0'],\n  ['0','0','0','1','1'] ]\n\n- First island: top-left block (count = 1)\n- Second island: middle cell (2,2) (count = 2)\n- Third island: bottom-right block (count = 3)\n\n✔️ Final Output = 3",
      "code":`public class NumberOfIslands {

    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;

        int m = grid.length, n = grid[0].length;
        int count = 0;

        // Step 1: Scan each cell
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '1') {
                    count++;          // Found a new island
                    dfs(grid, i, j);  // Mark the whole island as visited
                }
            }
        }

        return count;
    }

    private void dfs(char[][] grid, int i, int j) {
        // Step 2: Boundary or water
        if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] != '1') {
            return;
        }

        // Step 3: Mark current cell as visited
        grid[i][j] = '0';

        // Step 4: Explore all 4 directions
        dfs(grid, i - 1, j); // up
        dfs(grid, i + 1, j); // down
        dfs(grid, i, j - 1); // left
        dfs(grid, i, j + 1); // right
    }

    // Main method for quick testing
    public static void main(String[] args) {
        NumberOfIslands solver = new NumberOfIslands();

        char[][] grid = {
            {'1','1','0','0','0'},
            {'1','1','0','0','0'},
            {'0','0','1','0','0'},
            {'0','0','0','1','1'}
        };

        int result = solver.numIslands(grid);
        System.out.println("Number of Islands: " + result);  // Output: 3
    }
}
`
    },
    {
      "title": "(question - Is Graph Bipartite) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- A graph is **bipartite** if we can color it using **two colors** such that no two adjacent nodes have the same color.\n- The algorithm uses **Breadth-First Search (BFS)** to attempt 2-coloring the graph.\n\nSTEPS:\n1. Maintain a `colors[]` array:\n   - 0 → uncolored\n   - 1 → color A\n   - -1 → color B\n2. Traverse each node `i`:\n   - If `colors[i] == 0`, perform BFS from that node.\n3. In `bfsCheck()`:\n   - Assign color 1 to start node.\n   - Use BFS to assign opposite colors to all neighbors.\n   - If a neighbor has the **same color** as the current node, return false (not bipartite).\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(V + E)\n- V = number of vertices, E = number of edges\n- Each edge and vertex is visited once.\nSpace Complexity: O(V)\n- For the `colors[]` array and queue.\n\nDRY RUN / EXAMPLE:\nInput:\ngraph = [[1,3],[0,2],[1,3],[0,2]]\n\n- BFS from node 0 → color 1\n- Neighbors 1 and 3 → color -1\n- Neighbors of 1 (0,2): 0 is valid, 2 → color 1\n- Neighbors of 3 (0,2): both valid\n\n✔️ Final Output = true (Graph is bipartite)",
      "code":`import java.util.*;

public class IsGraphBipartite {

    public boolean isBipartite(int[][] graph) {
        int n = graph.length;
        int[] colors = new int[n]; // 0 = unvisited, 1 and -1 are two colors

        for (int i = 0; i < n; i++) {
            if (colors[i] == 0) {
                if (!bfsCheck(graph, i, colors)) {
                    return false;
                }
            }
        }

        return true;
    }

    private boolean bfsCheck(int[][] graph, int start, int[] colors) {
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start);
        colors[start] = 1; // Start with color 1

        while (!queue.isEmpty()) {
            int node = queue.poll();

            for (int neighbor : graph[node]) {
                if (colors[neighbor] == 0) {
                    // Assign opposite color
                    colors[neighbor] = -colors[node];
                    queue.offer(neighbor);
                } else if (colors[neighbor] == colors[node]) {
                    // Conflict found
                    return false;
                }
            }
        }

        return true;
    }

    // Example to test
    public static void main(String[] args) {
        IsGraphBipartite solver = new IsGraphBipartite();

        int[][] graph = {
            {1, 3},
            {0, 2},
            {1, 3},
            {0, 2}
        };

        boolean result = solver.isBipartite(graph);
        System.out.println("Is the graph bipartite? " + result); // Output: true
    }
}
`
    },
    {
      "title": "(question - Number of Strongly Connected Components in a Directed Graph) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED (KOSARAJU’S ALGORITHM):\n- Kosaraju's algorithm is used to find the number of **Strongly Connected Components (SCCs)** in a directed graph.\n- A strongly connected component is a group of vertices where each vertex is reachable from every other vertex in the same group.\n\nSTEPS:\n1. **First DFS (Original Graph)**:\n   - Perform DFS on the original graph to fill a **stack with vertices** ordered by their finishing times (topological sort logic).\n\n2. **Transpose the Graph**:\n   - Reverse the direction of all edges to get the **transpose graph**.\n\n3. **Second DFS (Transpose Graph)**:\n   - Pop vertices from the stack one by one.\n   - For each unvisited node, perform DFS on the **transposed graph**.\n   - Each such DFS call indicates a **new SCC**.\n   - Count how many such DFS calls are made — that’s the number of SCCs.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(V + E)\n- V = number of vertices, E = number of edges\n- Each node and edge is visited exactly twice (once in original graph, once in transpose).\nSpace Complexity: O(V + E)\n- Stack, visited array, and adjacency lists for transpose.\n\nDRY RUN / EXAMPLE:\nInput:\n0 → 1 → 2 → 0\n3 → 4\n\n- Stack after first DFS: [3,4,0,1,2] (top to bottom)\n- Transposed edges: 1→0, 2→1, 0→2, 4→3\n- Second DFS:\n  - Pop 2 → DFS visits 2→1→0 → First SCC\n  - Pop 4 → DFS visits 4 → Second SCC\n  - Pop 3 → DFS visits 3 → Third SCC\n\n✔️ Final Output = 3",
      "code":`import java.util.*;

public class KosarajuSCC {

    public int kosaraju(int V, List<List<Integer>> adj) {
        boolean[] visited = new boolean[V];
        Stack<Integer> stack = new Stack<>();

        // Step 1: Perform DFS and store vertices in stack by finish time
        for (int i = 0; i < V; i++) {
            if (!visited[i]) {
                dfsOriginal(adj, visited, stack, i);
            }
        }

        // Step 2: Transpose the graph
        List<List<Integer>> transpose = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            transpose.add(new ArrayList<>());
        }

        for (int u = 0; u < V; u++) {
            for (int v : adj.get(u)) {
                transpose.get(v).add(u); // Reverse the edge
            }
        }

        // Step 3: DFS on transpose graph using order from stack
        Arrays.fill(visited, false);
        int sccCount = 0;

        while (!stack.isEmpty()) {
            int node = stack.pop();
            if (!visited[node]) {
                dfsTranspose(transpose, visited, node);
                sccCount++;
            }
        }

        return sccCount;
    }

    private void dfsOriginal(List<List<Integer>> adj, boolean[] visited, Stack<Integer> stack, int node) {
        visited[node] = true;
        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                dfsOriginal(adj, visited, stack, neighbor);
            }
        }
        stack.push(node); // Finished exploring this node
    }

    private void dfsTranspose(List<List<Integer>> transpose, boolean[] visited, int node) {
        visited[node] = true;
        for (int neighbor : transpose.get(node)) {
            if (!visited[neighbor]) {
                dfsTranspose(transpose, visited, neighbor);
            }
        }
    }

    // 🔎 Example to test
    public static void main(String[] args) {
        int V = 5;
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        // Sample Graph:
        adj.get(0).add(1);
        adj.get(1).add(2);
        adj.get(2).add(0);
        adj.get(3).add(4);

        KosarajuSCC solver = new KosarajuSCC();
        int sccCount = solver.kosaraju(V, adj);

        System.out.println("Number of Strongly Connected Components: " + sccCount); // Output: 3
    }
}
`
    },
    {
      "title": "(question - Remove Stones to Minimize the Total) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- Model the problem as finding **connected components**.\n- A stone can be removed **if there's another stone in the same row or column**.\n- So, each group of stones that are row/column-connected forms a connected component.\n- Within each component, we can remove all stones except one.\n- Thus, the answer is:\n  ➤ Total stones - Number of connected components\n\nSTEPS:\n1. Use **Union-Find (Disjoint Set Union)** to group stones that share the same row or column.\n2. Iterate over all pairs of stones `(i, j)`:\n   - If `stones[i][0] == stones[j][0]` or `stones[i][1] == stones[j][1]`, union them.\n3. After all unions, count the number of **unique parents** (i.e., connected components).\n4. Result = `total stones - number of components`\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n² * α(n))\n- n = number of stones\n- α(n) is the inverse Ackermann function from Union-Find, nearly constant\n- Nested loop for checking row/column match\nSpace Complexity: O(n)\n- Union-Find parent and rank arrays\n\nDRY RUN / EXAMPLE:\nInput:\nstones = [[0,0],[0,1],[1,0],[1,2],[2,1],[2,2]]\n\n- Connected components:\n  - Group 1: [0,0], [0,1], [1,0], [1,2], [2,1], [2,2] → all connected\n- Only 1 connected component → can remove 6 - 1 = 5 stones\n\n✔️ Final Output = 5",
      "code":`import java.util.*;

public class RemoveStones {

    public int removeStones(int[][] stones) {
        int n = stones.length;
        DSU dsu = new DSU(n);

        // Union stones that share row or column
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (stones[i][0] == stones[j][0] || stones[i][1] == stones[j][1]) {
                    dsu.union(i, j);
                }
            }
        }

        // Count number of unique parents (connected components)
        Set<Integer> uniqueParents = new HashSet<>();
        for (int i = 0; i < n; i++) {
            uniqueParents.add(dsu.find(i));
        }

        // Result = total stones - number of components
        return n - uniqueParents.size();
    }

    // Disjoint Set Union (Union-Find) with Path Compression
    class DSU {
        int[] parent;

        public DSU(int size) {
            parent = new int[size];
            for (int i = 0; i < size; i++) {
                parent[i] = i;
            }
        }

        public int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]); // Path compression
            }
            return parent[x];
        }

        public void union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            if (rootX != rootY) {
                parent[rootX] = rootY;
            }
        }
    }

    // Main method for testing
    public static void main(String[] args) {
        RemoveStones solver = new RemoveStones();

        int[][] stones = {
            {0, 0}, {0, 1}, {1, 0}, {1, 2}, {2, 1}, {2, 2}
        };

        int result = solver.removeStones(stones);
        System.out.println("Max stones that can be removed: " + result); // Output: 5
    }
}
`
    },
    {
      "title": "(question - Number of Provinces) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is equivalent to finding the number of **connected components** in an undirected graph.\n- Each city is a node; a direct connection means an edge.\n- You can treat this as either:\n  ➤ Using the **adjacency matrix directly** for DFS\n  ➤ Or converting the matrix into an **adjacency list**, then applying DFS\n- Whenever a node (city) is unvisited, we start DFS and count it as a new province.\n\nTWO IMPLEMENTATIONS:\n1. **Matrix DFS (No conversion)**\n   - Directly traverse the `isConnected` matrix\n   - If `isConnected[i][j] == 1`, and city `j` is unvisited, visit it recursively\n2. **Adjacency List Conversion + DFS**\n   - Convert matrix into graph (adjacency list)\n   - Apply DFS to count components\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n²)\n- Traversing the matrix once (for conversion or DFS)\n- n = number of cities\nSpace Complexity: O(n)\n- Visited array\n\nDRY RUN / EXAMPLE:\nInput:\nisConnected = [\n  [1, 1, 0],\n  [1, 1, 0],\n  [0, 0, 1]\n]\n\n- Province 1: City 0 and 1 are connected\n- Province 2: City 2 is isolated\n✔️ Total provinces = 2",
      "code":`public class NumberOfProvinces {

    public int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        boolean[] visited = new boolean[n];
        int provinceCount = 0;

        // Loop over all cities
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfs(isConnected, visited, i);
                provinceCount++; // New province found
            }
        }

        return provinceCount;
    }

    private void dfs(int[][] isConnected, boolean[] visited, int city) {
        visited[city] = true;

        for (int neighbor = 0; neighbor < isConnected.length; neighbor++) {
            if (isConnected[city][neighbor] == 1 && !visited[neighbor]) {
                dfs(isConnected, visited, neighbor);
            }
        }
    }

    // Main method for testing
    public static void main(String[] args) {
        NumberOfProvinces solver = new NumberOfProvinces();

        int[][] isConnected = {
            {1, 1, 0},
            {1, 1, 0},
            {0, 0, 1}
        };

        int result = solver.findCircleNum(isConnected);
        System.out.println("Number of Provinces: " + result); // Output: 2
    }
}
`
    },
    {
      "title": "(question - Number of Ways to Arrive at Destination) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem requires counting the number of **shortest paths** from node 0 to node n-1.\n- This is a variation of **Dijkstra’s algorithm** where, along with computing the shortest distance to each node, we also count how many different ways that shortest distance can be achieved.\n\nSTEPS:\n1. **Graph Construction**:\n   - Build an adjacency list for the graph: each edge stores (neighbor, time).\n\n2. **Dijkstra’s Algorithm (Modified)**:\n   - Use a min-heap (priority queue) to always expand the current shortest node.\n   - Track two things:\n     ➤ `dist[i]`: the shortest time to reach node `i` from node `0`\n     ➤ `ways[i]`: number of ways to reach node `i` using that shortest time\n   - For each neighbor of the current node:\n     ➤ If you find a shorter path, update `dist[neighbor]` and set `ways[neighbor] = ways[curr]`\n     ➤ If you find another path of equal length, add to `ways[neighbor]`\n\n3. **Final Answer**:\n   - Return `ways[n - 1]` as the number of ways to reach the destination node with minimum time.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(E * log V), due to priority queue operations\n- Space: O(V + E), for adjacency list, dist, and ways arrays\n\nDRY RUN:\nInput:\nn = 7,\nroads = [\n [0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]\n]\n\n- Multiple ways to reach destination `n-1 = 6`\n- Final Output: 4 (number of shortest paths to reach node 6)",
      "code":`import java.util.*;

public class CountPathsDijkstra {

    public int countPaths(int n, int[][] roads) {
        final int MOD = 1_000_000_007;

        // Step 1: Build the adjacency list
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }

        for (int[] road : roads) {
            int u = road[0], v = road[1], time = road[2];
            adj.get(u).add(new int[]{v, time});
            adj.get(v).add(new int[]{u, time}); // Undirected graph
        }

        // Step 2: Initialize distance and ways arrays
        long[] dist = new long[n];
        int[] ways = new int[n];
        Arrays.fill(dist, Long.MAX_VALUE);
        dist[0] = 0;
        ways[0] = 1;

        // Priority Queue: {distance, node}
        PriorityQueue<long[]> pq = new PriorityQueue<>((a, b) -> Long.compare(a[0], b[0]));
        pq.offer(new long[]{0, 0}); // start from node 0 with time 0

        while (!pq.isEmpty()) {
            long[] curr = pq.poll();
            long currTime = curr[0];
            int node = (int) curr[1];

            if (currTime > dist[node]) continue;

            for (int[] neighbor : adj.get(node)) {
                int next = neighbor[0];
                int time = neighbor[1];
                long newTime = currTime + time;

                // Shorter path found
                if (newTime < dist[next]) {
                    dist[next] = newTime;
                    ways[next] = ways[node];
                    pq.offer(new long[]{newTime, next});
                }
                // Same shortest path length found
                else if (newTime == dist[next]) {
                    ways[next] = (ways[next] + ways[node]) % MOD;
                }
            }
        }

        return ways[n - 1];
    }

    // Main method for testing
    public static void main(String[] args) {
        CountPathsDijkstra solver = new CountPathsDijkstra();

        int n = 7;
        int[][] roads = {
            {0, 6, 7}, {0, 1, 2}, {1, 2, 3}, {1, 3, 3},
            {6, 3, 3}, {3, 5, 1}, {6, 5, 1}, {2, 5, 1},
            {0, 4, 5}, {4, 6, 2}
        };

        int result = solver.countPaths(n, roads);
        System.out.println("Number of Shortest Paths to node " + (n - 1) + " = " + result);
        // Expected Output: 4
    }
}
`
    },





    {
      "title": "(question - Best Time to Buy and Sell Stock) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- We want to maximize profit by choosing a single day to buy and another day in the future to sell.\n- Track the minimum price so far using a variable `minprice`.\n- Traverse the array and for each day, calculate the profit = prices[i] - minprice.\n- Use a DP array `dp[i]` to store the maximum profit till index i.\n- Update `minprice` at each step if a lower price is found.\n- Finally, return dp[n - 1], the max profit up to last day.\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n)\n- Single pass through the array.\nSpace Complexity: O(n)\n- Extra space used for dp array of size n.\n\nDRY RUN / EXAMPLE:\nInput: [7, 1, 5, 3, 6, 4]\n\n- minprice = 7, dp = [0, 0, 0, 0, 0, 0]\n- i = 1 → minprice = 1 → profit = 0 → dp[1] = 0\n- i = 2 → profit = 5 - 1 = 4 → dp[2] = 4\n- i = 3 → profit = 3 - 1 = 2 → dp[3] = 4\n- i = 4 → profit = 6 - 1 = 5 → dp[4] = 5\n- i = 5 → profit = 4 - 1 = 3 → dp[5] = 5\n\n✔️ Final Output: 5\n\nOPTIMIZED APPROACH (No DP Array):\n- We don't actually need the dp array, just a single `maxProfit` variable.\n- Track `minprice` and update `maxProfit` directly.\n\n```java\npublic int maxProfit(int[] prices) {\n    int minprice = prices[0];\n    int maxProfit = 0;\n    for (int i = 1; i < prices.length; i++) {\n        maxProfit = Math.max(maxProfit, prices[i] - minprice);\n        minprice = Math.min(minprice, prices[i]);\n    }\n    return maxProfit;\n}\n```\n\nTime: O(n), Space: O(1)"
    },
    {
      "title": "(question - 0/1 Knapsack Problem) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- Problem: Given weights and values of `n` items, find the max total value that can be put in a knapsack of capacity `W`.\n- Use bottom-up Dynamic Programming.\n- Let dp[i][j] = max value using first i items and capacity j.\n- Transition:\n  - If wt[i-1] <= j → we can choose to:\n    - Include item i: profit = val[i-1] + dp[i-1][j - wt[i-1]]\n    - Exclude item i: profit = dp[i-1][j]\n    - Take max of the two.\n  - Else, we can't include it → dp[i][j] = dp[i-1][j]\n- Final answer: dp[n][W]\n\nTIME & SPACE COMPLEXITY:\nTime Complexity: O(n * W)\n- Nested loops over items and capacity.\nSpace Complexity: O(n * W)\n- 2D DP table of size (n+1) x (W+1)\n\nDRY RUN / EXAMPLE:\nInput:\n- val = [60, 100, 120], wt = [10, 20, 30], W = 50\n\nStep-by-step (just outline):\n- dp[0][j] = 0 for all j\n- i = 1: Item1 (wt=10, val=60) → fill dp[1][j] for j = 10 to 50\n- i = 2: Item2 (wt=20, val=100) → check include/exclude\n- i = 3: Item3 (wt=30, val=120) → repeat check\n✔️ Final Output: dp[3][50] = 220\n\nOPTIMIZED APPROACH (SPACE OPTIMIZATION):\n- We can reduce space to O(W) by using a 1D array (because we only use the previous row).\n\n```java\npublic static int knapsack(int W, int val[], int wt[]) {\n    int[] dp = new int[W + 1];\n    for (int i = 0; i < val.length; i++) {\n        for (int j = W; j >= wt[i]; j--) {\n            dp[j] = Math.max(dp[j], val[i] + dp[j - wt[i]]);\n        }\n    }\n    return dp[W];\n}\n```\n\nTime: O(n * W), Space: O(W)"
    },
    {
      "title": "(question - Target Sum Ways using Subset Sum DP) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to assign + or - signs to array elements to reach the target sum.\n- Let the total sum of array elements be `sum`.\n- Let `S1` be the sum of elements with a `+` sign, and `S2` be with a `-` sign.\n\nWe need:\n  S1 - S2 = target\n  S1 + S2 = sum\n=> Solving these:\n  2 * S1 = target + sum\n=> S1 = (target + sum) / 2\n\nSo now the problem reduces to: Count subsets with sum = S1.\n- Use classic 0/1 subset sum DP to count number of subsets with sum = S1.\n- Edge Case: If (target + sum) is odd or target > sum → return 0.\n\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n * S1) → where n = nums.length, and S1 = (target + sum)/2\n- Space: O(n * S1) for 2D DP table\n\n\nDRY RUN / EXAMPLE:\nInput:\n- nums = [1, 1, 1, 1, 1], target = 3\n\nStep 1: sum = 5\nS1 = (target + sum)/2 = (3 + 5)/2 = 4\n→ We need to count subsets with sum 4.\n\nSubsets with sum 4:\n- [1, 1, 1, 1] (5 combinations)\n✔️ Final Output: 5\n\n\nOPTIMIZED APPROACH (SPACE OPTIMIZED DP):\n```java\nprivate int countSubsets(int[] nums, int sum) {\n    int[] dp = new int[sum + 1];\n    dp[0] = 1;\n    for (int num : nums) {\n        for (int j = sum; j >= num; j--) {\n            dp[j] += dp[j - num];\n        }\n    }\n    return dp[sum];\n}\n```\n- Time: O(n * sum), Space: O(sum)"
    },
    {
      "title": "(question - Target Sum Ways using Subset Sum DP) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to assign + or - signs to array elements to reach the target sum.\n- Let the total sum of array elements be `sum`.\n- Let `S1` be the sum of elements with a `+` sign, and `S2` be with a `-` sign.\n\nWe need:\n  S1 - S2 = target\n  S1 + S2 = sum\n=> Solving these:\n  2 * S1 = target + sum\n=> S1 = (target + sum) / 2\n\nSo now the problem reduces to: Count subsets with sum = S1.\n- Use classic 0/1 subset sum DP to count number of subsets with sum = S1.\n- Edge Case: If (target + sum) is odd or target > sum → return 0.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n * S1) → where n = nums.length, and S1 = (target + sum)/2\n- Space: O(n * S1) for 2D DP table\n\nDRY RUN / EXAMPLE:\nInput:\n- nums = [1, 1, 1, 1, 1], target = 3\n\nStep 1: sum = 5\nS1 = (target + sum)/2 = (3 + 5)/2 = 4\n→ We need to count subsets with sum 4.\n\nSubsets with sum 4:\n- [1, 1, 1, 1] (5 combinations)\n✔️ Final Output: 5\n\nOPTIMIZED APPROACH (SPACE OPTIMIZED DP):\n```java\nprivate int countSubsets(int[] nums, int sum) {\n    int[] dp = new int[sum + 1];\n    dp[0] = 1;\n    for (int num : nums) {\n        for (int j = sum; j >= num; j--) {\n            dp[j] += dp[j - num];\n        }\n    }\n    return dp[sum];\n}\n```\n- Time: O(n * sum), Space: O(sum)"
    },
    {
      "title": "(question - Coin Change using Dynamic Programming) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find the minimum number of coins required to make up a given amount using the given coin denominations.\n- Let `dp[i][j]` represent the minimum number of coins needed to make sum `j` using the first `i` coins.\n\nInitialization:\n- `dp[0][j] = ∞` for all `j > 0` (we can't make positive amounts with 0 coins).\n- `dp[i][0] = 0` for all `i` (0 coins needed to make amount 0).\n\nFilling the DP table:\n- If `coins[i-1] <= j`, we have two choices:\n  1. Don't take the current coin → `dp[i-1][j]`\n  2. Take the current coin → `1 + dp[i][j - coins[i-1]]`\n  → Take the minimum of the two.\n- Else: Just take `dp[i-1][j]` (can't use current coin).\n\nReturn:\n- If `dp[n][amount] == ∞` → return -1 (not possible)\n- Else → return `dp[n][amount]`\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n * amount) → `n` = number of coins\n- Space: O(n * amount) for 2D DP array\n\nDRY RUN / EXAMPLE:\nInput:\n- coins = [1, 2, 5], amount = 11\n\nStep-by-step:\n- Try building up dp[i][j] using coin 1:\n  dp[1][1] = 1 (1 coin of 1), dp[1][2] = 2, ..., dp[1][11] = 11\n- Then try with coin 2:\n  dp[2][2] = 1 (1 coin of 2), dp[2][3] = 2 (1+2), etc.\n- Finally with coin 5:\n  dp[3][5] = 1, dp[3][10] = 2 (5+5), dp[3][11] = 3 (5+5+1)\n\n✔️ Final Output: 3\n(11 = 5 + 5 + 1)\n\nOPTIMIZED APPROACH (1D SPACE):\n```java\npublic int coinChange(int[] coins, int amount) {\n    int[] dp = new int[amount + 1];\n    Arrays.fill(dp, amount + 1);\n    dp[0] = 0;\n\n    for (int coin : coins) {\n        for (int j = coin; j <= amount; j++) {\n            dp[j] = Math.min(dp[j], 1 + dp[j - coin]);\n        }\n    }\n\n    return dp[amount] > amount ? -1 : dp[amount];\n}\n```\n- Time: O(n * amount), Space: O(amount)"
    },
    {
      "title": "(question - Longest Common Subsequence using Dynamic Programming) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find the length of the longest subsequence common to both strings (order matters, but elements don't have to be contiguous).\n\nDynamic Programming:\n- Let dp[i][j] represent the length of LCS between the first i characters of text1 and first j characters of text2.\n- Initialize dp[0][j] = 0 and dp[i][0] = 0 → Base case: LCS with empty string is 0.\n\nDP Transition:\n- If text1[i-1] == text2[j-1] → dp[i][j] = 1 + dp[i-1][j-1]\n- Else → dp[i][j] = max(dp[i-1][j], dp[i][j-1]) → choose best by skipping a char from either string.\n\nReturn dp[n][m] = LCS length for full strings.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n * m) → nested loops over lengths of the two strings\n- Space: O(n * m) for the 2D dp array\n\nDRY RUN / EXAMPLE:\nInput:\n- text1 = \"abcde\", text2 = \"ace\"\n\nStep-by-step:\n- Match: 'a' == 'a' → dp[1][1] = 1\n- No match: 'b' != 'c', take max from top or left\n- Match: 'c' == 'c' → dp[3][2] = 2\n- Match: 'e' == 'e' → dp[5][3] = 3\n\n✔️ Final Output: 3\nLCS = \"ace\"\n\nOPTIMIZED APPROACH (SPACE OPTIMIZED DP):\n```java\npublic int longestCommonSubsequence(String text1, String text2) {\n    int n = text1.length(), m = text2.length();\n    int[] prev = new int[m + 1], curr = new int[m + 1];\n\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= m; j++) {\n            if (text1.charAt(i - 1) == text2.charAt(j - 1)) {\n                curr[j] = 1 + prev[j - 1];\n            } else {\n                curr[j] = Math.max(prev[j], curr[j - 1]);\n            }\n        }\n        prev = curr.clone();\n    }\n    return prev[m];\n}\n```\n- Time: O(n * m), Space: O(2 * m) → reduced to 1D space"
    },
    {
      "title": "(question - Longest Common Substring using Dynamic Programming) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to find the length of the longest contiguous substring common to both strings `s1` and `s2`.\n\nDynamic Programming:\n- Define dp[i][j] as the length of the longest common substring ending at s1[i-1] and s2[j-1].\n- Initialize dp[0][j] = 0 and dp[i][0] = 0 → base case for empty prefixes.\n- If s1[i-1] == s2[j-1] → dp[i][j] = dp[i-1][j-1] + 1\n- Else → dp[i][j] = 0 (substring must be contiguous, so reset)\n- Track the maximum value of dp[i][j] to get the final answer.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n * m) → nested loops over s1 and s2\n- Space: O(n * m) for the 2D dp table\n\nDRY RUN / EXAMPLE:\nInput:\n- s1 = \"abcde\", s2 = \"abfce\"\n\nStep-by-step:\n- Match at dp[1][1] (a == a): dp[1][1] = 1\n- Match at dp[2][2] (b == b): dp[2][2] = 2\n- Mismatch resets to 0\n- Match at dp[5][5] (e == e): dp[5][5] = 1\n\n✔️ Final Output: 2 (Longest common substring = \"ab\")\n\nOPTIMIZED SPACE APPROACH (using 2 rows):\n```java\npublic int longestCommonSubstr(String s1, String s2) {\n    int n = s1.length(), m = s2.length(), ans = 0;\n    int[] prev = new int[m + 1], curr = new int[m + 1];\n    for (int i = 1; i <= n; i++) {\n        for (int j = 1; j <= m; j++) {\n            if (s1.charAt(i - 1) == s2.charAt(j - 1)) {\n                curr[j] = prev[j - 1] + 1;\n                ans = Math.max(ans, curr[j]);\n            } else {\n                curr[j] = 0;\n            }\n        }\n        prev = curr.clone();\n    }\n    return ans;\n}\n```\n- Time: O(n * m), Space: O(2 * m)"
    },
    {
      "title": "(question - Longest Increasing Subsequence using LCS) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to find the length of the longest increasing subsequence (LIS) in the array `nums`.\n- One way to solve this is to reduce it to the **Longest Common Subsequence (LCS)** problem:\n  \n  1. Remove duplicates from `nums` to avoid repeated elements in the comparison.\n  2. Sort the resulting set to get an increasing version of the elements.\n  3. Now find the LCS between original `nums` and the sorted unique array — this gives the LIS.\n\n- Why it works:\n  - The LCS of `nums` and its sorted unique version captures the longest subsequence that is both increasing and exists in `nums`.\n\nSTEPS:\n- Use a HashSet to remove duplicates from `nums`.\n- Convert the set to an array and sort it → this becomes the target for LCS.\n- Use standard 2D DP to compute LCS.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n^2)\n  - HashSet + sort: O(n log n)\n  - LCS DP: O(n * m), where m is the number of unique elements ≤ n\n- Space: O(n^2) for the DP table\n\nDRY RUN / EXAMPLE:\nInput: nums = [10, 9, 2, 5, 3, 7, 101, 18]\n\nStep 1: Unique sorted version: [2, 3, 5, 7, 9, 10, 18, 101]\n\nStep 2: LCS(nums, sortedUnique):\n- Common increasing subsequence: [2, 3, 7, 18]\n\n✔️ Final Output: 4\n\nNOTE:\n- This is not the most optimized LIS solution (which can be done in O(n log n)), but it’s a valid and easy-to-understand approach leveraging LCS."
    },
    {
      "title": "(question - Longest Palindromic Subsequence) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem asks for the length of the longest subsequence of a string that is also a palindrome.\n- Use Dynamic Programming (DP) to solve it in a bottom-up fashion.\n\nSTEPS:\n1. Create a 2D DP table `dp[i][j]` that stores the length of the longest palindromic subsequence in substring `s[i..j]`.\n2. Initialize all `dp[i][i] = 1` because each character alone is a palindrome of length 1.\n3. Iterate over all substrings of length 2 to `n`:\n   - If `s[i] == s[j]`: Then `dp[i][j] = 2 + dp[i+1][j-1]`\n   - Else: `dp[i][j] = max(dp[i+1][j], dp[i][j-1])`\n4. The final answer is in `dp[0][n-1]`.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n^2) → nested loop over string length\n- Space: O(n^2) → 2D DP table\n\nDRY RUN / EXAMPLE:\nInput: s = \"bbabcbcab\"\n\n→ Longest Palindromic Subsequence: \"babcbab\"\n→ Length = 7\n\n✔️ Final Output: 7"
    },
    {
      "title": "(question - Edit Distance / Minimum Operations to Convert Strings) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The goal is to convert word1 to word2 using minimum number of operations: Insert, Delete, or Replace.\n- Use Dynamic Programming to solve the problem.\n\nSTEPS:\n1. Let `dp[i][j]` represent the minimum number of operations to convert the first `i` characters of word1 to the first `j` characters of word2.\n2. Base Case:\n   - `dp[0][j] = j` → converting empty string to word2 (insert all characters)\n   - `dp[i][0] = i` → converting word1 to empty string (delete all characters)\n3. Transition:\n   - If characters match: `dp[i][j] = dp[i-1][j-1]`\n   - Else: `dp[i][j] = 1 + min(dp[i-1][j] (delete), dp[i][j-1] (insert), dp[i-1][j-1] (replace))`\n4. Final Answer: `dp[n][m]`, where n = word1.length, m = word2.length\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n * m) → nested loop over word lengths\n- Space: O(n * m) → 2D DP table\n\nDRY RUN / EXAMPLE:\nInput: word1 = \"horse\", word2 = \"ros\"\n\nDP Table Computation:\n- Convert \"horse\" → \"ros\"\n- Operations:\n   1. Replace 'h' with 'r'\n   2. Remove 'o'\n   3. Remove 'e'\n\n✔️ Final Output: 3"
    },
    {
      "title": "(question - Max Profit from Stock Transactions - DP Approach with State Tracking)",
      "answer": "APPROACH / ALGORITHM USED:\n- This is a variation of the stock buy/sell problem where you can make unlimited transactions (buy/sell multiple times).\n- We use **Dynamic Programming** to track two states:\n  - `dp[i][0]`: Max profit on day i when **not holding a stock**\n  - `dp[i][1]`: Max profit on day i when **holding a stock**\n\nSTEPS:\n1. Initialize:\n   - On day 0:\n     - `dp[0][0] = 0` (no stock, no profit)\n     - `dp[0][1] = -prices[0]` (bought stock, spent money)\n2. Transition:\n   - `dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])`\n     → Max of doing nothing or selling stock today\n   - `dp[i][1] = max(dp[i-1][1], dp[i-1][0] - prices[i])`\n     → Max of doing nothing or buying stock today\n3. Return `dp[n-1][0]` as final answer, which is max profit with no stock in hand\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n)\n- Space: O(n) for DP table (can be optimized to O(1))\n\nDRY RUN / EXAMPLE:\nInput: prices = [7, 1, 5, 3, 6, 4]\n\nDay 0: dp[0][0] = 0, dp[0][1] = -7\nDay 1: dp[1][0] = 0, dp[1][1] = max(-7, 0 - 1) = -1\nDay 2: dp[2][0] = max(0, -1 + 5) = 4, dp[2][1] = max(-1, 0 - 5) = -1\n...\n✔️ Final Output: 7\n\nSPACE OPTIMIZED VERSION:\n```java\nint cash = 0, hold = -prices[0];\nfor (int i = 1; i < prices.length; i++) {\n    cash = Math.max(cash, hold + prices[i]);\n    hold = Math.max(hold, cash - prices[i]);\n}\nreturn cash;\n```"
    },
    {
      "title": "(question - Find nth Catalan Number using DP) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- Catalan numbers count various combinatorial structures, like:\n  - Number of valid parentheses expressions\n  - Number of BSTs with n keys\n  - Number of ways to triangulate a polygon with (n+2) sides\n\nFormula:\n- C(n) = Σ (C(i) * C(n - i - 1)) for i = 0 to n-1\n- Base Cases:\n  - C(0) = 1\n  - C(1) = 1\n\nSTEPS:\n- Create a dp array of size (n+1) to store intermediate Catalan values.\n- Initialize dp[0] = 1, dp[1] = 1\n- For i from 2 to n:\n  - For j from 0 to i-1:\n    - dp[i] += dp[j] * dp[i-j-1]\n- Return dp[n] as the final answer\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n^2) → nested loop for each i and j\n- Space: O(n) → to store dp[0...n]\n\nDRY RUN / EXAMPLE:\nInput: n = 3\n\nCatalan Numbers:\n- C(0) = 1\n- C(1) = 1\n- C(2) = C(0)*C(1) + C(1)*C(0) = 1*1 + 1*1 = 2\n- C(3) = C(0)*C(2) + C(1)*C(1) + C(2)*C(0) = 1*2 + 1*1 + 2*1 = 5\n\n✔️ Final Output: 5"
    },
    {
      "title": "(question - Number of Unique BSTs using DP) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem asks for the number of unique binary search trees (BSTs) that can be formed using `n` distinct nodes.\n- This is a classic problem where we use **Dynamic Programming** to store the number of unique BSTs for each number of nodes.\n\n- Let dp[i] represent the number of unique BSTs that can be formed using `i` nodes.\n\nFormula:\n- dp[i] = Σ dp[j] * dp[i-j-1] for j = 0 to i-1\n  - Here, `j` represents the root node index, and the left and right subtrees are calculated recursively.\n  - Base Cases:\n    - dp[0] = 1 (an empty tree is a valid BST)\n    - dp[1] = 1 (a single node tree is a valid BST)\n\nSTEPS:\n- Create a dp array of size (n+1) to store the number of unique BSTs.\n- Initialize dp[0] = 1, dp[1] = 1.\n- For i from 2 to n:\n  - For j from 0 to i-1:\n    - dp[i] += dp[j] * dp[i-j-1] (count the left and right subtrees)\n- Return dp[n] as the result.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n^2) → nested loop for calculating dp[i]\n- Space: O(n) → space for dp array\n\nDRY RUN / EXAMPLE:\nInput: n = 3\n\nSteps:\n- dp[0] = 1, dp[1] = 1\n- For i = 2: dp[2] = dp[0]*dp[1] + dp[1]*dp[0] = 1 + 1 = 2\n- For i = 3: dp[3] = dp[0]*dp[2] + dp[1]*dp[1] + dp[2]*dp[0] = 2 + 1 + 2 = 5\n\n✔️ Final Output: 5"
    },
    {
      "title": "(question - Palindrome Partitioning using DP and Backtracking) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to partition the string `s` into all possible substrings such that each substring is a palindrome.\n- We can solve this problem using a combination of **Dynamic Programming (DP)** for palindrome checking and **Backtracking** for exploring all possible partitions.\n\n1. **Dynamic Programming (Palindrome Checking):**\n- Create a 2D boolean array `dp[][]` where `dp[i][j]` is true if the substring `s[i...j]` is a palindrome.\n- Initialize `dp[i][i] = true` (every single character is a palindrome), and `dp[i][i+1] = true` if `s[i] == s[i+1]` (two consecutive characters are palindromes).\n- For longer substrings, use the relation: `dp[i][j] = (s[i] == s[j] && dp[i + 1][j - 1])`.\n\n2. **Backtracking:**\n- Use backtracking to explore all possible partitions of the string where each partition is a palindrome.\n- At each position `start`, iterate over all possible `end` positions to check if `s[start...end]` is a palindrome (using `dp[start][end]` from the previous step).\n- If it is a palindrome, add it to the current partition and recurse to the next position.\n- If all characters have been processed, add the current partition to the result.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n^2) for DP filling + O(2^n) for backtracking, where n = s.length()\n- Space: O(n^2) for DP table\n\nDRY RUN / EXAMPLE:\nInput: s = \"aab\"\n\nStep 1: DP Table:\n- dp[0][1] = true (\"aa\" is a palindrome)\n- dp[1][2] = true (\"ab\" is not a palindrome)\n- dp[0][2] = false (\"aab\" is not a palindrome)\n- dp[2][2] = true (single character is a palindrome)\n\nStep 2: Backtracking:\n- Partitioning at index 0: [\"a\", \"a\", \"b\"]\n\n✔️ Final Output: [[\"a\", \"a\", \"b\"], [\"aa\", \"b\"]]"
    },
    {
      "title": "(question - Min Cost to Cut a Stick using DP) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to find the minimum cost to make all cuts in a stick of length `n`, given specific positions of cuts.\n- We can solve this using **Dynamic Programming (DP)** to minimize the cost of making cuts in the stick.\n\n1. **Problem Reduction to Subproblems:**\n- Consider each subproblem as finding the minimum cost of cutting between two points in the stick.\n- We have `n` as the total length of the stick, and the cuts array `cuts[]` contains positions where cuts need to be made.\n- We create an array `allCuts[]` that includes the start (0) and end (n) of the stick along with all given cut positions. We then sort this array to ensure all cuts are processed in order.\n\n2. **Dynamic Programming Approach:**\n- Define `dp[i][j]` as the minimum cost of making all cuts between `allCuts[i]` and `allCuts[j]` (i.e., between two cut positions, or between the start and the end).\n- The base case: `dp[i][i+1] = 0` (no cuts needed between two adjacent cuts).\n- For each possible length between cuts, calculate the minimum cost by trying all possible intermediate cuts `k` between `i` and `j`, and using the recurrence relation: `dp[i][j] = Math.min(dp[i][j], allCuts[j] - allCuts[i] + dp[i][k] + dp[k][j])`.\n- The result will be in `dp[0][c + 1]`, which represents the minimum cost to make all cuts between the start and the end of the stick.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(c^3), where c is the number of cuts.\n- Space: O(c^2) for the DP table.\n\nDRY RUN / EXAMPLE:\nInput: n = 7, cuts = [1, 3, 4, 5]\n\nStep 1: `allCuts[]` = [0, 1, 3, 4, 5, 7] (sorted cuts)\nStep 2: Initialize the DP table.\nStep 3: Fill the DP table by calculating the cost of cuts for every subproblem.\n\n✔️ Final Output: 16"
    },
    {
      "title": "(question - Maximum Product Subarray using DP) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to find the contiguous subarray within an array that has the largest product.\n- The key insight here is that the maximum product subarray might include negative numbers, and multiplying two negative numbers could result in a large positive product.\n\n1. **Dynamic Programming Approach:**\n- Define two variables `currMax` and `currMin` to track the maximum and minimum product at each step.\n- For each element `nums[i]` in the array, the maximum product at that element can be one of the following:\n  - The current number itself: `nums[i]`\n  - The product of the current maximum product and `nums[i]`: `currMax * nums[i]`\n  - The product of the current minimum product and `nums[i]`: `currMin * nums[i]`\n- Similarly, the minimum product at that element can be derived from the same values.\n- After processing each element, update the global maximum product (`maxProduct`) to ensure it contains the largest product found so far.\n\n2. **Key Observations:**\n- If a negative number is encountered, it can make a previously small product large by multiplying with the smallest product.\n- This necessitates tracking both the current maximum and minimum products.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n), where n is the length of the array (single pass).\n- Space: O(1), as only a constant amount of extra space is used.\n\nDRY RUN / EXAMPLE:\nInput: nums = [2, 3, -2, 4]\n\nStep 1: `currMax = 2`, `currMin = 2`, `maxProduct = 2`\nStep 2: Process 3: `currMax = 6`, `currMin = 3`, `maxProduct = 6`\nStep 3: Process -2: `currMax = -2`, `currMin = -12`, `maxProduct = 6`\nStep 4: Process 4: `currMax = 4`, `currMin = -48`, `maxProduct = 6`\n\n✔️ Final Output: 6"
    },
    {
      "title": "(question - Wildcard Matching using DP) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to determine if a given string `s` matches a pattern `p`, where `p` contains wildcard characters: `?` and `*`.\n- `?` matches any single character, while `*` matches any sequence of characters (including the empty sequence).\n\n1. **Dynamic Programming Approach:**\n- Define a 2D DP table `dp[i][j]` where `dp[i][j]` represents whether the substring `s[0...i-1]` matches the pattern `p[0...j-1]`.\n- Initialize `dp[0][0]` to `true` because an empty string matches an empty pattern.\n- Initialize the first row (`dp[0][j]`) for patterns like "*", "**", etc., because `*` can match an empty string.\n\n2. **Filling the DP Table:**\n- For each character in the string `s` and the pattern `p`, consider the following cases:\n  - If `p[j-1]` is a character from `s[i-1]` or `p[j-1]` is `?`, then `dp[i][j] = dp[i-1][j-1]`.\n  - If `p[j-1]` is `*`, then `dp[i][j] = dp[i-1][j] || dp[i][j-1]`. This means that `*` can match zero or more characters.\n  - If none of the above conditions hold, then `dp[i][j] = false`.\n\n3. **Final Result:**\n- The result is found in `dp[n][m]`, where `n` is the length of string `s` and `m` is the length of pattern `p`.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n * m), where n is the length of `s` and m is the length of `p`, as we are filling a DP table of size `n+1` x `m+1`.\n- Space: O(n * m) for the DP table.\n\nDRY RUN / EXAMPLE:\nInput:\ns = \"adceb\", p = \"*a*b\"\n\nStep 1: Initialize the DP table with size (6 x 5), where dp[0][0] = true.\nStep 2: Process characters and fill the table based on conditions.\nStep 3: Final output in dp[5][4] = true (matches).\n\n✔️ Final Output: true"
    },
    {
      "title": "(question - Minimum Mountain Removals using DP) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- A mountain array is an array that has a peak at some index and strictly increases before the peak and strictly decreases after it.\n- The problem asks us to find the minimum number of elements that must be removed to make the array into a mountain array.\n\n1. **Dynamic Programming Approach:**\n- **LIS (Longest Increasing Subsequence) Calculation:**\n  - We start by calculating the Longest Increasing Subsequence (LIS) for each element in the array.\n  - For every index `i`, we check all previous indices `j` and update `lis[i]` to represent the longest increasing subsequence ending at `i`.\n- **LDS (Longest Decreasing Subsequence) Calculation:**\n  - Similarly, we calculate the Longest Decreasing Subsequence (LDS) starting from each element in the array.\n  - For every index `i`, we check all subsequent indices `j` and update `lds[i]` to represent the longest decreasing subsequence starting at `i`.\n\n2. **Finding the Mountain Length:**\n- For each index `i` in the array, if `lis[i] > 1` and `lds[i] > 1`, it means that index `i` could be a peak of a valid mountain array.\n- The mountain length at index `i` would be `lis[i] + lds[i] - 1` (we subtract 1 to avoid counting the peak twice).\n- We track the maximum mountain length.\n\n3. **Final Result:**\n- The minimum number of elements to remove is the total length of the array minus the maximum mountain length.\n\nTIME & SPACE COMPLEXITY:\n- Time: O(n^2), where n is the length of the array, as we calculate both LIS and LDS for each element using a nested loop.\n- Space: O(n), for the `lis` and `lds` arrays.\n\nDRY RUN / EXAMPLE:\nInput:\nnums = [2, 1, 1, 5, 6, 2, 3, 1]\n\nStep 1: Calculate LIS:\n- lis = [1, 1, 1, 2, 3, 2, 3, 1]\nStep 2: Calculate LDS:\n- lds = [1, 2, 3, 3, 2, 2, 1, 1]\nStep 3: Check for mountain peaks and find the maximum mountain length:\n- Peak at index 3: Mountain length = 2 + 3 - 1 = 4\nStep 4: Result = n - maxMountainLength = 8 - 4 = 4\n\n✔️ Final Output: 4"
    },
    {
      "title": "(question - Super Egg Drop using DP with Binary Search) Approach / Algorithm Used",
      "answer": "APPROACH / ALGORITHM USED:\n- The problem is to find the minimum number of moves required to determine the highest floor from which an egg can be dropped without breaking, using `k` eggs and `n` floors.\n\n1. **Dynamic Programming Setup:**\n- We define a 2D DP table `dp[i][j]` where `i` is the number of eggs and `j` is the number of floors.\n- `dp[i][j]` represents the minimum number of moves required to find the highest safe floor with `i` eggs and `j` floors.\n\n2. **Base Cases:**\n- `dp[i][0] = 0` for all `i`: 0 moves are required for 0 floors.\n- `dp[i][1] = 1` for all `i`: 1 move is needed for 1 floor.\n- `dp[1][j] = j` for all `j`: With 1 egg, we need `j` moves for `j` floors (linear search).\n\n3. **Filling the DP Table:**\n- For more than 1 egg, we fill the table using the recurrence relation:\n  - For each combination of `i` (eggs) and `j` (floors), we find the optimal floor `mid` to drop the egg from.\n  - If the egg breaks, we check the floors below (`mid - 1`) with one less egg.\n  - If the egg doesn't break, we check the floors above (`j - mid`) with the same number of eggs.\n  - We use **Binary Search** to optimize finding the best floor to drop the egg from.\n  - The recurrence relation is:\n    `dp[i][j] = min(1 + max(dp[i - 1][mid - 1], dp[i][j - mid]))` for every floor `mid`.\n\n4. **Optimization with Binary Search:**\n- Instead of checking every floor linearly, we use binary search to minimize the number of moves, reducing the time complexity significantly.\n\nTIME & SPACE COMPLEXITY:\n- **Time:** O(k * n * log n), because for each combination of eggs and floors, we perform a binary search over the number of floors.\n- **Space:** O(k * n), for the DP table.\n\nDRY RUN / EXAMPLE:\nInput:\n- k = 3, n = 14\nStep 1: Initialize the DP table with base cases.\nStep 2: Start filling the table using DP and binary search.\nStep 3: The final answer is `dp[3][14]`.\nFinal Output: 4"
    },
                                        




    
  ],



  "java-basics": [
    {
      title: "Write a basic Java program that prints 'Hello World'.",
      answer: `public class JavaBasics {
    public static void main(String args[]) {
        System.out.print("Hello World");
    }
}`,
      },
      {
        title: "What is the difference between print and println in Java?",
        answer: `print displays output on the same line.
    println prints and moves the cursor to the next line.
    \\n can be used for a line break within print.`,

      },
      {
        title: "How do you declare variables in Java?",
        answer: `int a = 10;
    String name = "Ram";
    
    Always use the format: type variableName = value;`,

      },
      {
        title: "How is memory managed for variables in Java?",
        answer: "Variables are stored in memory blocks (RAM). Each variable has a data type that determines how much memory it uses."
      },
      {
        title: "What are the two main types of data types in Java?",
        answer: `Primitive: byte, short, int, long, float, double, boolean, char
    Non-Primitive: String, Array, Class, Object, Interface`,

      },
      {
        title: "Give the size and range of the byte data type.",
        answer: "Size: 1 byte (8 bits)\nRange: -128 to 127",

      },
      {
        title: "What values can a boolean hold?",
        answer: "true or false",

      },
      {
        title: "How do you write single-line and multi-line comments in Java?",
        answer: `Single-line: // this is a comment
    
    Multi-line:
    /* This is a 
       multi-line comment */`,

      },
      {
        title: "How do you take input using Scanner in Java?",
        answer: `import java.util.*;
    Scanner sc = new Scanner(System.in);
    String name = sc.nextLine();
    System.out.println(name);`,

      },
      {
        title: "What is type conversion in Java?",
        answer: `It's automatic when moving from a smaller to a larger data type:
    byte < short < int < float < long < double`,

      },
      {
        title: "What is explicit type casting in Java?",
        answer: `Manually converting a larger data type to a smaller one:
    
    float a = 25.9999f;
    int b = (int) a;  // Result: 25`,

      },
      {
        title: "What happens when a byte, short, or char is used in an expression?",
        answer: `Java promotes them to int during expression evaluation.
    
    Example:
    byte b = 5;
    byte c = (byte)(b * 2); // Need to cast back to byte`,

      },
      {
        title: "How does Java code run?",
        answer: `Java code goes through these steps:
      1. You write source code (.java file)
      2. Compiler changes it to bytecode (.class file)
      3. JVM runs the bytecode on any system.
      
      So:
      Source Code → Compilation → Bytecode → Execution by JVM`,

      },
      {
        title: "What is JVM, JRE, and JDK in Java?",
        answer: `- JVM: Runs Java programs (Java Virtual Machine)
      - JRE: JVM + Libraries (Java Runtime Environment)
      - JDK: JRE + Compiler + Developer Tools (Java Development Kit)`,

      },
      {
        title: "What are the different types of operators in Java?",
        answer: `- Binary: +, -, *, /, %, &&
      - Unary: ++, --, +a, -a
      - Relational: >, <, >=, <=, ==, !=
      - Logical: &&, ||, !
      - Assignment: =, +=, -=, *=`,

      },
      {
        title: "What is the difference between pre-increment and post-increment?",
        answer: `- Pre-Increment (++a): Value changes first, then used
      - Post-Increment (a++): Value used first, then changes
      
      Example:
      int a = 5;
      System.out.println(++a); // 6
      System.out.println(a++); // 6 (then a becomes 7)`,

      },
    ],




  
    "control-flow": [

      {
        title: "How to write an if-else statement in Java?",
        answer: `Example:
      int age = 22;
      if (age >= 18) {
        System.out.println("You can vote");
      } else {
        System.out.println("You cannot vote");
      }`,

      },
      {
        title: "How to use else if in Java?",
        answer: `You use else if to check more than one condition.
      
      Example:
      if (age < 18) {
        // child
      } else if (age < 60) {
        // adult
      } else {
        // senior`,

      },
      {
        title: "How to calculate income tax in Java?",
        answer: `Example:
      int income = 600000;
      int tax;
      
      if (income <= 500000) {
        tax = 0;
      } else if (income >= 500000 && income < 1000000) {
        tax = (int)(income * 0.2);
      }
      System.out.println("Tax is: " + tax);`,

      },
      {
        title: "How to find the largest of three numbers in Java?",
        answer: `Example:
      if (a >= b && a >= c) {
        // a is largest
      } else if (b >= c) {
        // b is largest
      } else {
        // c is largest
      }`,

      },
      {
        title: "What is a ternary operator in Java?",
        answer: `A short way to write if-else.
      
      Syntax:
      variable = (condition) ? value_if_true : value_if_false;
      
      Example:
      int large = (5 > 3) ? 5 : 3;`,

      },
      {
        title: "How to check even or odd using ternary operator?",
        answer: `Example:
      String type = (5 % 2 == 0) ? "even" : "odd";
      System.out.println(type);`,

      },
      {
        title: "How does a switch statement work in Java?",
        answer: `Example:
      int number = 1;
      switch (number) {
        case 1:
          System.out.println("Samosa");
          break;
        case 2:
          System.out.println("Burger");
          break;
        default:
          System.out.println("We wake up");
      }`,

      },
      {
        title: "What is a while loop in Java?",
        answer: `A while loop repeats code as long as the condition is true.
      
      Syntax:
      while (condition) {
        // do something
      }
      
      Example:
      int count = 0;
      while (count < 10) {
        System.out.println("Hello");
        count++;
      }`,

      },
      {
        title: "How to print numbers 1 to N using a while loop?",
        answer: `Example:
      int range = 5;
      int counter = 1;
      
      while (counter <= range) {
        System.out.print(counter + " ");
        counter++;
      }
      
      // Output: 1 2 3 4 5`,

      },
      {
        title: "How to calculate the sum of numbers using a while loop?",
        answer: `Example:
      int n = 5;
      int sum = 0;
      int i = 1;
      
      while (i <= n) {
        sum = sum + i;
        i++;
      }
      
      System.out.println(sum); // Output: 15`,

      },
      {
        title: "What is a for loop in Java?",
        answer: `A for loop is used when we know how many times to run the loop.
      
      Syntax:
      for (initialization; condition; update) {
        // do something
      }
      
      Example:
      for (int i = 1; i <= 5; i++) {
        System.out.println(i);
      }`,

      },
      {
        title: "How to print reverse of a number in Java?",
        answer: `Example:
      int n = 10899;
      int rev = 0;
      
      while (n > 0) {
        int lastDigit = n % 10;
        System.out.print(lastDigit + " ");
        rev = (rev * 10) + lastDigit;
        n = n / 10;
      }
      
      // Output: 9 9 8 0 1`,

      },
      {
        title: "What is a do-while loop in Java?",
        answer: `A do-while loop runs at least one time even if the condition is false.
      
      Syntax:
      do {
        // do something
      } while (condition);`,

      },
      {
        title: "What is the use of break statement in Java?",
        answer: `Break stops the loop when a condition is met.
      
      Example:
      do {
        int n = sc.nextInt();
        if (n % 10 == 0) {
          break;
        }
        System.out.println(n);
      } while (true);`,


      },
      {
        title: "What is the use of continue statement in Java?",
        answer: `Continue skips the current loop step and goes to the next one.
      
      Example:
      for (int i = 1; i <= 5; i++) {
        if (i == 3) {
          continue;
        }
        System.out.println(i);
      }
      
      // Output: 1 2 4 5 (3 is skipped)`,
  

      }
    ],






    "patterns":[
      {
        
        title: "How does a basic star pattern print work in Java?",
        answer: `To print a basic star pattern like a half pyramid, you need two loops:
    1. Outer loop for each line
    2. Inner loop for printing stars on that line
    
    Example:
    for (int line = 1; line <= 4; line++) {
        for (int star = 1; star <= line; star++) {
            System.out.print("* ");
        }
        System.out.println();
    }
    
    Output:
    * 
    * * 
    * * * 
    * * * *`
      },
    
      {
        
        title: "How to print an inverted star pattern in Java?",
        answer: `In an inverted pattern, stars decrease with each line.
    We start from total lines (n) and reduce the number of stars.
    
    Example:
    int n = 4;
    for (int line = 1; line <= n; line++) {
        for (int star = 1; star <= n - line + 1; star++) {
            System.out.print("* ");
        }
        System.out.println();
    }
    
    Output:
    * * * * 
    * * * 
    * * 
    *`
      },
    
      {
    
        title: "How to print a character pattern in Java?",
        answer: `Use character variables like 'A', 'B', etc., inside nested loops.
    
    Example:
    int n = 4;
    for (int line = 1; line <= n; line++) {
        char ch = 'A';
        for (int c = 1; c <= line; c++) {
            System.out.print(ch + " ");
            ch++;
        }
        System.out.println();
    }
    
    Output:
    A
    A B
    A B C
    A B C D`
      },

        {
        
          title: "How does the Zero-One Triangle pattern work in Java?",
          answer: `In this pattern, a triangle of 0s and 1s is printed such that the sum of row and column indexes determines what to print:
      - If (i + j) is even → print 1
      - Else → print 0
      
      Code:
      public static void zeroOneTriangle(int n) {
          for (int i = 1; i <= n; i++) {
              for (int j = 1; j <= i; j++) {
                  if ((i + j) % 2 == 0) {
                      System.out.print("1 ");
                  } else {
                      System.out.print("0 ");
                  }
              }
              System.out.println();
          }
      }
      
      Example Output for n = 5:
      1
      0 1
      1 0 1
      0 1 0 1
      1 0 1 0 1`
        },
      
        {
    
          title: "How does the Butterfly pattern work in Java?",
          answer: `Butterfly pattern is formed in two halves:
      - Top half: stars on left and right separated by spaces
      - Bottom half: mirror of top half
      
      Code:
      public static void butterfly(int n) {
          // Top half
          for (int i = 1; i <= n; i++) {
              // Left wing
              for (int j = 1; j <= i; j++) {
                  System.out.print("*");
              }
              // Spaces
              for (int j = 1; j <= 2 * (n - i); j++) {
                  System.out.print(" ");
              }
              // Right wing
              for (int j = 1; j <= i; j++) {
                  System.out.print("*");
              }
              System.out.println();
          }
      
          // Bottom half
          for (int i = n; i >= 1; i--) {
              // Left wing
              for (int j = 1; j <= i; j++) {
                  System.out.print("*");
              }
              // Spaces
              for (int j = 1; j <= 2 * (n - i); j++) {
                  System.out.print(" ");
              }
              // Right wing
              for (int j = 1; j <= i; j++) {
                  System.out.print("*");
              }
              System.out.println();
          }
      }
      
      Example Output for n = 4:
      *      *
      **    **
      ***  ***
      ********
      ********
      ***  ***
      **    **
      *      *`
        },
          {
      
            title: "How does the Solid Rhombus pattern work in Java?",
            answer: `A Solid Rhombus is a shifted rectangle made of stars.
        
        Logic:
        - First print (n - i) spaces for each row
        - Then print n stars
        
        Code:
        public static void solidRhombus(int n) {
            for (int i = 1; i <= n; i++) {
                // Spaces
                for (int j = 1; j <= n - i; j++) {
                    System.out.print(" ");
                }
                // Stars
                for (int j = 1; j <= n; j++) {
                    System.out.print("*");
                }
                System.out.println();
            }
        }
        
        Example Output (n = 5):
            *****
           *****
          *****
         *****
        *****`
          },
        
          {
      
            title: "How do you print a Hollow Rhombus in Java?",
            answer: `Hollow Rhombus is similar to a solid rhombus but with only borders filled.
        
        Code:
        public static void hollowRhombus(int n) {
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n - i; j++) {
                    System.out.print(" ");
                }
                for (int j = 1; j <= n; j++) {
                    if (i == 1 || i == n || j == 1 || j == n) {
                        System.out.print("*");
                    } else {
                        System.out.print(" ");
                    }
                }
                System.out.println();
            }
        }
        
        Example Output (n = 5):
            *****
           *   *
          *   *
         *   *
        *****`
          },
        
          {
          
            title: "How does the Diamond Pattern work in Java?",
            answer: `This pattern is symmetrical and formed in two parts (upper + lower triangles).
        
        Code:
        public static void diamond(int n) {
            // Upper half
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n - i; j++) {
                    System.out.print(" ");
                }
                for (int j = 1; j <= 2 * i - 1; j++) {
                    System.out.print("*");
                }
                System.out.println();
            }
        
            // Lower half
            for (int i = n; i >= 1; i--) {
                for (int j = 1; j <= n - i; j++) {
                    System.out.print(" ");
                }
                for (int j = 1; j <= 2 * i - 1; j++) {
                    System.out.print("*");
                }
                System.out.println();
            }
        }
        
        Example Output (n = 4):
           *
          ***
         *****
        *******
        *******
         *****
          ***
           *`
          },
      
    ],



  
    "functions-methods": [
      {
        title: "What is the basic syntax of a function in Java?",
        answer: `In Java, a function (method) has a return type, name, and body.
    
    Syntax:
    returnType functionName() {
        // code
        return value; // if not void
    }
    
    Example:
    public static void printHelloWorld() {
        System.out.println("Hello world");
    }`,

      },
    
      {
        title: "What is a function with parameters in Java?",
        answer: `You can pass values to functions using parameters.
    
    Syntax:
    returnType functionName(type param1, type param2) {
        // code
        return something;
    }
    
    Example:
    public static int calculateSum(int a, int b) {
        int sum = a + b;
        return sum;
    }
    
    public static void main(String[] args) {
        int sum = calculateSum(2, 3);
        System.out.println("Sum is: " + sum);
    }`,
    

      },
    
      {
        title: "How does swapping using a function work in Java?",
        answer: `Java always uses call by value. So original variables don't change when passed to functions.
    
    Example:
    public static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
        System.out.println("Swapped inside function: a = " + a + ", b = " + b);
    }
    
    public static void main(String[] args) {
        int a = 5, b = 10;
        swap(a, b);
        System.out.println("After swap: a = " + a + ", b = " + b); // values remain 5 and 10
    }`,
  

      },
        {
      
          title: "What does the 'factorial' method do in Java?",
          answer: "It calculates the factorial of a number using a loop.\n\nExample:\nint result = factorial(4); // returns 24"
        },
        {
          
          title: "How is factorial implemented in Java?",
          answer: "Using a loop:\nint f = 1;\nfor(int i = 1; i <= n; i++) {\n  f *= i;\n}\nreturn f;"
        },
        {
          
          title: "What is a binomial coefficient?",
          answer: "It is a value calculated using the formula C(n, r) = n! / (r! * (n-r)!)\n\nUsed in combinations and probability."
        },
        {
          
          title: "How is the binomial coefficient implemented in Java?",
          answer: "By calling the factorial function for n, r, and (n - r) and returning the result as:\nint bincoeff = factn / (factr * factnr);"
        },
        {
        
          title: "What is function overloading in Java?",
          answer: "It allows multiple methods with the same name but different parameter types or counts.\n\nExample:\nvoid multiply(int a, int b) {}\nvoid multiply(float a, float b) {}"
        },
        {
  
          title: "What are the rules for function overloading in Java?",
          answer: "Overloaded functions must differ by:\n- Number of parameters\n- Type of parameters\nReturn type alone is not sufficient."
        },
        {
    
          title: "How to check if a number is prime in Java?",
          answer: "Use a method that returns false if any number between 2 and n-1 divides n.\n\nExample:\nboolean isPrime(int n) {...}"
        },
        {
    
          title: "What is the logic behind the 'isPrime' function in Java?",
          answer: "If n is less than or equal to 1, it's not prime. Else, check for divisibility from 2 to n-1.\nIf any i divides n, return false."
        },
        {
          
          title: "How to print all prime numbers up to a number in Java?",
          answer: "Use a loop from 1 to n and call isPrime(i). If true, print the number.\n\nExample:\nfor (int i = 1; i <= n; i++) {\n  if (isPrime(i)) System.out.print(i + \" \");\n}"
        },
        {
  
          title: "How does 'primesInRange' work in the code?",
          answer: "It loops from 1 to n and calls isPrime on each number. If true, it prints the number."
        },
        {
    
          title: "What does the 'binToDec' method do?",
          answer: "It converts a binary number (as an integer) into its decimal equivalent.\n\nExample:\nbinToDec(1011); // Output: 11"
        },
        {
  
          title: "How does the 'binToDec' method work internally?",
          answer: "It repeatedly extracts the last digit of the binary number using % 10, multiplies it with powers of 2, and adds it to the result.\n\nIt uses:\n- Math.pow(2, pow)\n- (int) type casting\n- Updates binum by binum / 10"
        },
        {
  
          title: "Why is (int) casting used in 'binToDec'?",
          answer: "Because Math.pow() returns a double, so we need to cast it to int before using it in integer addition."
        },
        {
    
          title: "What is 'scope' in Java?",
          answer: "Scope defines where a variable can be accessed or modified in a program. It can be:\n- Block Scope\n- Method Scope\n- Class Scope"
        },
        {
        
          title: "What is block scope in Java?",
          answer: "Variables declared inside a block {} are accessible only within that block.\n\nExample: Inside for loops or if statements."
        },
        {
      
          title: "What is method scope in Java?",
          answer: "Variables declared inside a method are only accessible within that method. They are destroyed once the method completes."
        },
      
  
    ],



  
    "java-arrays-strings": [
      {
        "title": "What is an array in Java?",
        "answer": "An array is a container object that holds a fixed number of elements of a single type, indexed starting from 0."
      },
      {
        "title": "How do you declare an array in Java?",
        "answer": "Syntax: `int[] arr;` or `int arr[];`"
      },
      {
        "title": "How do you create an array in Java?",
        "answer": "Example: `int[] arr = new int[5];` creates an array of 5 integers with default values."
      },
      {
        "title": "Can array size be changed after declaration?",
        "answer": "No. Arrays in Java have a fixed size once initialized."
      },
      {
        "title": "What is the default value of elements in an int array?",
        "answer": "0 for int, 0.0 for float/double, null for objects, false for boolean."
      },
      {
        "title": "What is the time complexity of accessing an array element?",
        "answer": "O(1) — direct access using index."
      },
      {
        "title": "How do you iterate over an array?",
        "answer": "Using for loop, enhanced for loop (`for-each`), or streams (Java 8+)."
      },
      {
        "title": "What is a multidimensional array?",
        "answer": "An array of arrays. Example: `int[][] matrix = new int[3][3];`"
      },
      {
        "title": "What is the difference between int[] and int[][]?",
        "answer": "int[] is a 1D array; int[][] is a 2D array (matrix or table)."
      },
      {
        "title": "How do you copy an array in Java?",
        "answer": "Use `System.arraycopy()`, `Arrays.copyOf()`, or a loop."
      },
      {
        "title": "How do you sort an array in Java?",
        "answer": "Use `Arrays.sort(array);` for ascending order."
      },
      {
        "title": "How do you reverse an array?",
        "answer": "Swap elements from start and end using a loop or use `Collections.reverse()` for lists."
      },
      {
        "title": "What is the Arrays class?",
        "answer": "It is a utility class in `java.util` that provides methods like sort(), copyOf(), equals(), toString(), etc."
      },
      {
        "title": "What is the difference between Arrays.equals() and ==?",
        "answer": "`==` compares references; `Arrays.equals()` compares contents of arrays."
      },
      {
        "title": "How do you find the length of an array?",
        "answer": "Use `array.length` (note: it’s a field, not a method)."
      },
      {
        "title": "What is a jagged array?",
        "answer": "A multidimensional array where rows have different lengths. Example: `int[][] arr = new int[2][];`"
      },
      {
        "title": "What is the difference between Array and ArrayList?",
        "answer": "Array is fixed-size and faster. ArrayList is resizable and part of Java Collections."
      },
      {
        "title": "Can you store different types in a single array?",
        "answer": "Only if you use Object[] type, but not recommended due to type safety issues."
      },
      {
        "title": "What is a string in Java?",
        "answer": "A string is an object of the String class that represents a sequence of characters, stored in a char array internally."
      },
      {
        "title": "Are strings mutable in Java?",
        "answer": "No. Strings are immutable. Any modification creates a new object."
      },
      {
        "title": "How do you create a string in Java?",
        "answer": "`String s = \"hello\";` or `String s = new String(\"hello\");`"
      },
      {
        "title": "What is the difference between == and .equals() in strings?",
        "answer": "`==` compares references; `.equals()` compares actual content of the strings."
      },
      {
        "title": "What is the String pool in Java?",
        "answer": "It is a memory area in heap that stores string literals to optimize memory by reusing immutable strings."
      },
      {
        "title": "How do you concatenate strings?",
        "answer": "Using `+` operator or `String.concat()` method. For many concatenations, use `StringBuilder`."
      },
      {
        "title": "What is StringBuilder?",
        "answer": "A mutable class for efficient string modification. Preferred for repeated concatenation."
      },
      {
        "title": "What is the difference between StringBuilder and StringBuffer?",
        "answer": "StringBuffer is thread-safe (synchronized), StringBuilder is faster but not thread-safe."
      },
      {
        "title": "How do you convert a string to a character array?",
        "answer": "`str.toCharArray()`"
      },
      {
        "title": "How do you convert a character array to string?",
        "answer": "`new String(charArray)`"
      },
      {
        "title": "How do you split a string in Java?",
        "answer": "Use `str.split(delimiter)` which returns a String array."
      },
      {
        "title": "How do you compare strings alphabetically?",
        "answer": "Use `str1.compareTo(str2)`. Returns 0 if equal, <0 if str1<str2, >0 if str1>str2."
      },
      {
        "title": "How do you check if a string contains a substring?",
        "answer": "Use `str.contains(\"substring\")` or `str.indexOf(\"substring\") >= 0`."
      },
      {
        "title": "How do you reverse a string in Java?",
        "answer": "Use `StringBuilder(str).reverse().toString()` or loop through characters in reverse order."
      },
      {
        "title": "What is substring in Java?",
        "answer": "A portion of the string. Use `str.substring(start, end)`."
      },
      {
        "title": "How do you remove whitespace from a string?",
        "answer": "Use `str.trim()` to remove leading/trailing spaces, or `str.replaceAll(\"\\s\", \"\")` to remove all."
      },
      {
        "title": "How to convert a string to integer?",
        "answer": "Use `Integer.parseInt(str)` or `Integer.valueOf(str)`."
      },
      {
        "title": "How to convert an integer to string?",
        "answer": "Use `String.valueOf(num)` or `Integer.toString(num)`."
      },
      {
        "title": "What does the `intern()` method do?",
        "answer": "It returns a canonical representation of the string from the string pool."
      },
      {
        "title": "What is the use of `charAt()`?",
        "answer": "It returns the character at the specified index. Example: `str.charAt(0)`."
      },
      {
        "title": "What is the use of `length()` in strings?",
        "answer": "Returns the number of characters in the string."
      },
      {
        "title": "How do you replace characters in a string?",
        "answer": "Use `str.replace('a', 'b')` or `str.replaceAll(regex, replacement)`."
      },
      {
        "title": "What is immutability in strings?",
        "answer": "Once created, a string object cannot be changed. All modifications create new objects."
      },
      {
        "title": "Can strings be compared with ==?",
        "answer": "Yes, but it compares memory references, not content. Use `.equals()` for content comparison."
      },
      {
        "title": "Is string thread-safe?",
        "answer": "Yes. Strings are immutable, so they are inherently thread-safe."
      },
      {
        "title": "Can a string be null or empty?",
        "answer": "Yes. `null` means no object. `\"\"` is an empty string with 0 characters."
      },
      {
        "title": "What is the time complexity of string concatenation using + in loop?",
        "answer": "O(n²) due to repeated object creation. Use StringBuilder for O(n)."
      },
      {
        "title": "How do you count vowels in a string?",
        "answer": "Loop through the string and check if each character is in {a, e, i, o, u}."
      },
      {
        "title": "How to remove duplicate characters from a string?",
        "answer": "Use a HashSet to track seen characters and build a result string without duplicates."
      }
    ],


    "oop":[
      {
        title: "What is Object-Oriented Programming (OOP)?",
        answer: "OOP is a programming paradigm that organizes code using objects, combining data (fields) and behavior (methods). Example: A Pen object with color and tip attributes and methods like setColor()."
      },
      {
        title: "What is a class and object?",
        answer: "A class is a blueprint or template that defines the structure and behavior (variables and methods) of objects. An object is a real-world instance of a class.\n\nJava Example:\n```java\nclass Pen {\n  String color;\n  int tip;\n\n  Pen(String color, int tip) {\n    this.color = color;\n    this.tip = tip;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Pen pen1 = new Pen(\"blue\", 1); // pen1 is an object of class Pen\n    System.out.println(pen1.color); // Output: blue\n  }\n}\n```\n\nExplanation:\n- `Pen` is a class (template)\n- `pen1` is an object created from that class\n- Each object has its own copy of the class's fields (like `color`, `tip`)"
      },      
      {
        title: "What is encapsulation?",
        answer: "Encapsulation is one of the key principles of Object-Oriented Programming. It means bundling data (fields) and methods (functions) that operate on that data into a single unit — a class. It also involves hiding the internal details of objects from outside access using access modifiers like `private`.\n\nJava Example:\n```java\nclass Account {\n  private String password;\n\n  public Account(String pwd) {\n    this.password = pwd;\n  }\n\n  public void setPassword(String pwd) {\n    this.password = pwd;\n  }\n\n  public String getPassword() {\n    return this.password;\n  }\n}\n```\n\nExplanation:\n- The field `password` is marked `private`, so it can't be accessed directly from outside the class.\n- Instead, it's accessed and modified using `getPassword()` and `setPassword()` methods.\n- This is encapsulation: protecting data by restricting direct access and exposing it only through controlled methods."
      },      
      {
        title: "What does the 'this' keyword do?",
        answer: "The `this` keyword refers to the current object — the instance whose method or constructor is being executed. It helps distinguish between class fields and parameters with the same name.\n\nJava Example:\n```java\nclass Student {\n  String name;\n\n  Student(String name) {\n    this.name = name; // 'this.name' refers to the class field\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Student s = new Student(\"Alice\");\n    System.out.println(s.name); // Output: Alice\n  }\n}\n```\n\nExplanation:\n- Inside the constructor, `this.name` refers to the field, and `name` refers to the constructor parameter.\n- `this` is used to avoid confusion when names are the same."
      },      
      {
        title: "What are access modifiers?",
        answer: "Access modifiers in Java define the visibility or accessibility of classes, methods, and variables.\n\nTypes:\n- **private**: Accessible only within the same class.\n- **default** (no modifier): Accessible within the same package.\n- **protected**: Accessible within the same package and in subclasses (even outside the package).\n- **public**: Accessible from anywhere.\n\nJava Example:\n```java\npublic class Example {\n  private int a = 10;      // only inside this class\n  int b = 20;              // default: only in same package\n  protected int c = 30;    // package + subclasses\n  public int d = 40;       // everywhere\n}\n```\n\nExplanation:\n- Use **private** to hide internal details.\n- Use **public** for open access.\n- Use **protected** for inheritance-related access.\n- **Default** is package-limited and used when no modifier is written."
      },      
      {
        title: "How do access modifiers behave?",
        answer: "| Modifier   | Class | Package | Subclass | Other |\n|------------|-------|---------|----------|--------|\n| private    | ✓     | ✗       | ✗        | ✗      |\n| default    | ✓     | ✓       | ✗        | ✗      |\n| protected  | ✓     | ✓       | ✓        | ✗      |\n| public     | ✓     | ✓       | ✓        | ✓      |"
      },
      {
        title: "What are getters and setters?",
        answer: "Getters and setters are methods used to access (get) and update (set) the values of private fields in a class. They help implement encapsulation by controlling how data is accessed and modified.\n\nJava Example:\n```java\nclass Pen {\n  private String color;\n\n  // Getter\n  public String getColor() {\n    return this.color;\n  }\n\n  // Setter\n  public void setColor(String c) {\n    this.color = c;\n  }\n}\n```\n\nExplanation:\n- `color` is private, so it cannot be accessed directly from outside.\n- `getColor()` lets you read the value.\n- `setColor()` lets you safely update the value.\n- This approach follows the principle of encapsulation."
      },      
      {
        title: "What is a constructor?",
        answer: "A constructor is a special method in a class that is automatically called when an object is created. It has the same name as the class and does not have a return type (not even void).\n\nJava Example:\n```java\nclass Student {\n  String name;\n\n  // Constructor\n  Student(String n) {\n    this.name = n;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Student s = new Student(\"Alice\");\n    System.out.println(s.name); // Output: Alice\n  }\n}\n```\n\nExplanation:\n- `Student(String n)` is the constructor.\n- It runs automatically when `new Student(\"Alice\")` is called.\n- It sets the initial value of the `name` field."
      },      
      {
        title: "What are constructor types?",
        answer: "1. Non-parameterized\n2. Parameterized\n3. Copy constructor"
      },
      {
        title: "What is a non-parameterized constructor?",
        answer: "A non-parameterized constructor (also called a default constructor) is a constructor that takes no arguments. It is used to create objects with default values.\n\nJava Example:\n```java\nclass Student {\n  String name;\n\n  // Non-parameterized constructor\n  Student() {\n    System.out.println(\"Constructor called\");\n    name = \"Unknown\";\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Student s = new Student();\n    System.out.println(s.name); // Output: Unknown\n  }\n}\n```\n\nExplanation:\n- The constructor `Student()` takes no parameters.\n- It runs automatically when an object is created with `new Student()`."
      },      
      {
        title: "What is a parameterized constructor?",
        answer: "A parameterized constructor is a constructor that accepts arguments to initialize object properties with specific values at the time of creation.\n\nJava Example:\n```java\nclass Student {\n  String name;\n\n  // Parameterized constructor\n  Student(String name) {\n    this.name = name;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Student s = new Student(\"Alice\");\n    System.out.println(s.name); // Output: Alice\n  }\n}\n```\n\nExplanation:\n- The constructor `Student(String name)` takes a parameter.\n- When we create an object with `new Student(\"Alice\")`, it sets the `name` field to \"Alice\".\n- This is useful when you want to initialize objects with specific values."
      },      
      {
        title: "What is a copy constructor?",
        answer: "A copy constructor is a special constructor used to create a new object by copying the fields of another object of the same class.\n\nJava Example:\n```java\nclass Student {\n  String name;\n  int roll;\n\n  // Parameterized constructor\n  Student(String name, int roll) {\n    this.name = name;\n    this.roll = roll;\n  }\n\n  // Copy constructor\n  Student(Student s) {\n    this.name = s.name;\n    this.roll = s.roll;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Student s1 = new Student(\"Alice\", 101);\n    Student s2 = new Student(s1); // copy constructor called\n    System.out.println(s2.name + \" \" + s2.roll); // Output: Alice 101\n  }\n}\n```\n\nExplanation:\n- `Student(Student s)` is the copy constructor.\n- It copies the values of `name` and `roll` from an existing object `s` to the new object."
      },      
      {
        title: "What is a deep copy?",
        answer: "A deep copy creates a completely independent copy of an object, including all objects or arrays it refers to. Changes made to the copied object do not affect the original.\n\nJava Example:\n```java\nclass Student {\n  String name;\n  int[] marks;\n\n  // Deep copy constructor\n  Student(Student s) {\n    this.name = s.name;\n    this.marks = new int[s.marks.length];\n    for (int i = 0; i < s.marks.length; i++) {\n      this.marks[i] = s.marks[i];\n    }\n  }\n}\n```\n\nExplanation:\n- Instead of copying just the reference to `marks`, we create a new array and copy each value.\n- This ensures that modifying `marks` in one object does not affect the other.\n\n✅ Use deep copy when you want full separation between two objects' internal data."
      },      
      {
        title: "What is a destructor?",
        answer: "A destructor releases memory. In Java-like languages, garbage collection is automatic."
      },
      {
        title: "What is inheritance?",
        answer: "Inheritance is an OOP concept where one class (child/subclass) can access the properties and methods of another class (parent/superclass). It promotes code reusability.\n\nJava Example:\n```java\nclass Animal {\n  void eat() {\n    System.out.println(\"Eating...\");\n  }\n}\n\nclass Fish extends Animal {\n  void swim() {\n    System.out.println(\"Swimming...\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Fish f = new Fish();\n    f.eat();  // inherited method\n    f.swim(); // own method\n  }\n}\n```\n\nExplanation:\n- `Fish` inherits from `Animal` using the `extends` keyword.\n- It can use both `eat()` from `Animal` and its own method `swim()`."
      },      
      {
        title: "What is multilevel inheritance?",
        answer: "Multilevel inheritance is a type of inheritance where a class inherits from a subclass, which in turn inherits from another superclass. It forms a chain of inheritance.\n\nJava Example:\n```java\nclass Animal {\n  void eat() {\n    System.out.println(\"Eating...\");\n  }\n}\n\nclass Mammal extends Animal {\n  void walk() {\n    System.out.println(\"Walking...\");\n  }\n}\n\nclass Dog extends Mammal {\n  void bark() {\n    System.out.println(\"Barking...\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog d = new Dog();\n    d.eat();  // from Animal\n    d.walk(); // from Mammal\n    d.bark(); // from Dog\n  }\n}\n```\n\nExplanation:\n- `Dog` inherits from `Mammal`, and `Mammal` inherits from `Animal`.\n- So `Dog` can access methods from both its parent and grandparent classes.\n- This is called **multilevel inheritance**."
      },      
      {
        title: "What is hierarchical inheritance?",
        answer: "Hierarchical inheritance is a type of inheritance where **multiple child classes inherit from a single parent class**. It helps reuse the common code from the base class.\n\nJava Example:\n```java\nclass Animal {\n  void eat() {\n    System.out.println(\"Eating...\");\n  }\n}\n\nclass Dog extends Animal {\n  void bark() {\n    System.out.println(\"Barking...\");\n  }\n}\n\nclass Cat extends Animal {\n  void meow() {\n    System.out.println(\"Meowing...\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog d = new Dog();\n    d.eat(); d.bark();\n\n    Cat c = new Cat();\n    c.eat(); c.meow();\n  }\n}\n```\n\nExplanation:\n- `Animal` is the base class.\n- Both `Dog` and `Cat` inherit from it.\n- This is called **hierarchical inheritance**.\n\nVisual:\n```\n      Animal\n      /   \\\n   Dog   Cat\n```"
      },      
      {
        title: "What is hybrid inheritance?",
        answer: "Hybrid inheritance is a combination of two or more types of inheritance (e.g., multilevel + hierarchical). Java does not support hybrid inheritance with classes due to the diamond problem, but it can be achieved using interfaces.\n\nJava Example:\n```java\ninterface A {\n  void show();\n}\n\ninterface B {\n  void display();\n}\n\nclass C implements A, B {\n  public void show() {\n    System.out.println(\"Show from A\");\n  }\n\n  public void display() {\n    System.out.println(\"Display from B\");\n  }\n}\n\nclass D extends C {\n  void print() {\n    System.out.println(\"Print from D\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    D obj = new D();\n    obj.show();\n    obj.display();\n    obj.print();\n  }\n}\n```\n\nExplanation:\n- `A` and `B` are interfaces (multiple inheritance)\n- `C` implements both (hierarchical)\n- `D` extends `C` (multilevel)\n- Together, this forms a **hybrid inheritance structure**\n\nVisual:\n```\n  A     B  (interfaces)\n   \\   /\n     C     (implements A, B)\n     |\n     D     (extends C)\n```"
      },      
      {
        title: "What is polymorphism?",
        answer: "Polymorphism means 'many forms'. It allows the same method name to behave differently based on the context.\n\nTypes of Polymorphism:\n1. **Compile-time Polymorphism (Method Overloading)**\n   - Multiple methods with the same name but different parameters.\n   - Resolved at compile time.\n\n2. **Runtime Polymorphism (Method Overriding)**\n   - A child class provides its own version of a method from the parent class.\n   - Resolved at runtime using dynamic method dispatch.\n\nJava Example:\n```java\n// Compile-time Polymorphism\nclass Calculator {\n  int add(int a, int b) {\n    return a + b;\n  }\n  int add(int a, int b, int c) {\n    return a + b + c;\n  }\n}\n\n// Runtime Polymorphism\nclass Animal {\n  void sound() {\n    System.out.println(\"Animal sound\");\n  }\n}\nclass Dog extends Animal {\n  void sound() {\n    System.out.println(\"Bark\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Calculator calc = new Calculator();\n    System.out.println(calc.add(2, 3));       // Output: 5\n    System.out.println(calc.add(2, 3, 4));    // Output: 9\n\n    Animal a = new Dog(); // Runtime polymorphism\n    a.sound();            // Output: Bark\n  }\n}\n```\n\nExplanation:\n- Overloading → same method name, different parameters (compile-time)\n- Overriding → child overrides parent method (runtime)"
      },      
      {
        title: "What is method overloading?",
        answer: "Multiple methods with the same name but different parameters.\nExample:\nclass Calc {\n  sum(a, b) { return a + b; }\n  sum(a, b, c) { return a + b + c; }\n}"
      },
      {
        title: "What is method overriding?",
        answer: "A child class redefines a method from the parent class.\nExample:\nclass A { show() {} }\nclass B extends A { show() {} }"
      },
      {
        title: "What is abstraction?",
        answer: "Abstraction means hiding complex internal details and showing only essential features to the user. It helps reduce complexity and improve code clarity.\n\nIn Java, abstraction is implemented using:\n1. **Abstract classes** (can have both abstract and concrete methods)\n2. **Interfaces** (can only have abstract methods by default, until Java 8+)\n\nJava Example 1: Using Abstract Class\n```java\nabstract class Animal {\n  abstract void sound(); // abstract method\n  void sleep() {\n    System.out.println(\"Sleeping...\");\n  }\n}\n\nclass Dog extends Animal {\n  void sound() {\n    System.out.println(\"Bark\");\n  }\n}\n```\n\nJava Example 2: Using Interface\n```java\ninterface Vehicle {\n  void start(); // abstract method\n}\n\nclass Car implements Vehicle {\n  public void start() {\n    System.out.println(\"Car starting...\");\n  }\n}\n```\n\nExplanation:\n- You don't need to know how `sound()` or `start()` work internally — you just use them.\n- This hides unnecessary details and exposes only what's needed."
      },      
      {
        title: "What is the difference between interface and abstract class?",
        answer: "Both abstract classes and interfaces are used to achieve abstraction in Java, but they differ in key ways:\n\n**Key Differences:**\n- **Abstract class:** Can have method implementations (concrete + abstract methods), constructors, and instance variables.\n- **Interface:** Can only have abstract methods (Java < 8). From Java 8 onward, it can also have default and static methods.\n- **Inheritance:** A class can extend only one abstract class but can implement multiple interfaces.\n- **Usage:** Use abstract class when providing base behavior. Use interface to define capability or contract.\n\nJava Example:\n```java\n// Abstract class example\nabstract class Animal {\n  abstract void sound();\n  void sleep() {\n    System.out.println(\"Sleeping...\");\n  }\n}\n\nclass Dog extends Animal {\n  void sound() {\n    System.out.println(\"Bark\");\n  }\n}\n\n// Interface example\ninterface Flyable {\n  void fly();\n}\n\nclass Bird implements Flyable {\n  public void fly() {\n    System.out.println(\"Flying...\");\n  }\n}\n```\n\n✅ Summary:\n- Abstract Class = partial abstraction (can have logic)\n- Interface = full abstraction (only method signatures)\n- Use interface for flexibility and multiple inheritance."
      },      
      {
        title: "What is the static keyword?",
        answer: "The `static` keyword in Java means that a method or variable belongs to the class, not to any specific object. It can be accessed without creating an object.\n\nUse cases:\n- Static variables are shared across all objects.\n- Static methods can be called using the class name directly.\n\nJava Example:\n```java\nclass Counter {\n  static int count = 0; // shared across all objects\n\n  Counter() {\n    count++;\n    System.out.println(\"Object created. Total: \" + count);\n  }\n\n  static void showCount() {\n    System.out.println(\"Count: \" + count);\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    new Counter(); // Object 1\n    new Counter(); // Object 2\n    Counter.showCount(); // Access static method via class\n  }\n}\n```\n\nOutput:\n```\nObject created. Total: 1\nObject created. Total: 2\nCount: 2\n```\n\n✅ Summary:\n- `static` makes members belong to the class.\n- Use `ClassName.member` to access without creating objects."
      },      
      {
        title: "What is the final keyword?",
        answer: "The `final` keyword in Java is used to restrict modification. It can be applied to variables, methods, and classes.\n\nUsage:\n1. **final variable** → value cannot be changed once assigned.\n2. **final method** → cannot be overridden in subclasses.\n3. **final class** → cannot be extended/inherited.\n\nJava Example:\n```java\nfinal class Vehicle {\n  final int maxSpeed = 120;\n\n  final void display() {\n    System.out.println(\"Max speed: \" + maxSpeed);\n  }\n}\n\n// class Car extends Vehicle {} // ❌ Error: Cannot extend final class\n\npublic class Main {\n  public static void main(String[] args) {\n    Vehicle v = new Vehicle();\n    // v.maxSpeed = 150; // ❌ Error: Cannot assign a value to final variable\n    v.display(); // ✅ Allowed\n  }\n}\n```\n\n✅ Summary:\n- `final` variable = constant\n- `final` method = no overriding\n- `final` class = no inheritance\n- Helps improve security and stability of code"
      },      
      {
        title: "What is the instanceof operator?",
        answer: "The `instanceof` operator in Java is used to check whether an object is an instance of a specific class or implements a specific interface.\n\nIt returns `true` if the object is of the specified type, else `false`.\n\nJava Example:\n```java\nclass Animal {}\nclass Dog extends Animal {}\n\npublic class Main {\n  public static void main(String[] args) {\n    Animal a = new Dog();\n\n    System.out.println(a instanceof Dog);    // true\n    System.out.println(a instanceof Animal); // true\n    System.out.println(a instanceof Object); // true\n  }\n}\n```\n\n✅ Summary:\n- Helps in **type checking** before casting.\n- Prevents **ClassCastException**.\n- Works with **classes** and **interfaces**.\n\nTip: Always use `instanceof` before downcasting to avoid runtime errors."
      },      
      {
        title: "What are Object class methods?",
        answer: "In Java, every class implicitly inherits from the `Object` class — the root class of the Java class hierarchy.\n\n✅ Common methods inherited from `Object`:\n- `toString()` → returns a string representation of the object\n- `equals(Object obj)` → compares two objects for equality\n- `hashCode()` → returns hash code of the object (used in hashing structures)\n- `clone()` → creates and returns a copy of the object (requires `Cloneable` interface)\n- `getClass()` → returns runtime class of the object\n\nJava Example:\n```java\nclass Student {\n  String name;\n  Student(String name) {\n    this.name = name;\n  }\n\n  public String toString() {\n    return \"Student name: \" + name;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Student s1 = new Student(\"Aman\");\n    System.out.println(s1.toString()); // Output: Student name: Aman\n    System.out.println(s1.getClass()); // Output: class Student\n  }\n}\n```\n\n✅ Summary:\n- `Object` class methods provide basic functionality to all Java objects.\n- You can override methods like `toString()` and `equals()` to customize behavior."
      },      
      {
        title: "What is a real-world example of OOP?",
        answer: "A real-world example of Object-Oriented Programming (OOP) is a **Car**:\n- A **class** defines the blueprint: what properties (data) and actions (methods) a car has.\n- An **object** is an actual car created from that blueprint.\n\n✅ Example:\n- Properties: color, speed, model\n- Behaviors: drive(), brake(), honk()\n\nJava Example:\n```java\nclass Car {\n  String color;\n  int speed;\n\n  void drive() {\n    System.out.println(\"Driving...\");\n  }\n\n  void brake() {\n    System.out.println(\"Braking...\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Car myCar = new Car();\n    myCar.color = \"Red\";\n    myCar.speed = 100;\n    myCar.drive(); // Output: Driving...\n  }\n}\n```\n\n✅ Summary:\n- **Class** = Car (blueprint)\n- **Object** = myCar (real instance)\n- OOP models real-world entities by combining data + behavior"
      },      
      {
        title: "What is a package in Java?",
        answer: "A **package** in Java is a namespace that organizes classes, interfaces, and sub-packages into a structured group. It helps avoid name conflicts and makes large codebases more manageable.\n\n✅ Key Benefits:\n- Prevents naming collisions (e.g., two classes with the same name in different packages)\n- Organizes related classes together\n- Provides access control and visibility rules\n\n✅ Java Syntax:\n```java\n// Defining a package\npackage myutilities;\n\npublic class Calculator {\n  public int add(int a, int b) {\n    return a + b;\n  }\n}\n```\n\n```java\n// Using a package in another file\nimport myutilities.Calculator;\n\npublic class Main {\n  public static void main(String[] args) {\n    Calculator calc = new Calculator();\n    System.out.println(calc.add(3, 4));\n  }\n}\n```\n\n✅ Summary:\n- Use `package` keyword to define a package.\n- Use `import` to access classes from other packages.\n- Common packages: `java.util`, `java.io`, `java.lang` (auto-imported)."
      },      
      {
        title: "What is abstraction in OOP?",
        answer: "Abstraction is an Object-Oriented Programming (OOP) principle that involves hiding internal implementation details and exposing only the necessary functionality to the user.\n\n✅ Real-Life Analogy:\n- When you drive a car, you use the steering wheel and pedals — but you don’t need to know how the engine works internally.\n\n✅ In Java, abstraction is achieved using:\n1. **Abstract classes** (partial abstraction)\n2. **Interfaces** (total abstraction)\n\nJava Example:\n```java\ninterface Remote {\n  void turnOn(); // abstract method\n}\n\nclass TV implements Remote {\n  public void turnOn() {\n    System.out.println(\"TV turned on\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Remote r = new TV();\n    r.turnOn();\n  }\n}\n```\n\n✅ Summary:\n- Abstraction simplifies code for users.\n- It helps in managing complexity by focusing on **what an object does**, not **how it does it**."
      },      
      {
        title: "How do abstract classes support abstraction?",
        answer: "Abstract classes support **partial abstraction** in Java. They allow you to define a common structure for subclasses, hiding certain details while providing others.\n\n✅ Key Points:\n- Can contain **abstract methods** (declared without body)\n- Can also contain **concrete methods** (with full implementation)\n- Cannot be instantiated directly\n- Subclasses must implement abstract methods\n\nJava Example:\n```java\nabstract class Animal {\n  abstract void makeSound(); // abstract method\n\n  void sleep() {             // concrete method\n    System.out.println(\"Sleeping...\");\n  }\n}\n\nclass Cat extends Animal {\n  void makeSound() {\n    System.out.println(\"Meow\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Cat c = new Cat();\n    c.makeSound(); // Output: Meow\n    c.sleep();     // Output: Sleeping...\n  }\n}\n```\n\n✅ Summary:\n- Abstract classes help hide **implementation details**.\n- They enforce a structure while allowing **shared code reuse**."
      },      
      {
        title: "Can you create an object of an abstract class?",
        answer: "No. You **cannot create an instance** of an abstract class directly in Java. Attempting to do so results in a **compile-time error** because abstract classes are incomplete by design.\n\nHowever, you can use abstract class references to point to objects of subclasses.\n\nJava Example:\n```java\nabstract class Animal {\n  abstract void sound();\n}\n\nclass Dog extends Animal {\n  void sound() {\n    System.out.println(\"Bark\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    // Animal a = new Animal(); // ❌ Error: Cannot instantiate the type Animal\n\n    Animal a = new Dog(); // ✅ Allowed (polymorphism)\n    a.sound(); // Output: Bark\n  }\n}\n```\n\n✅ Summary:\n- You cannot create an object of an abstract class.\n- But you **can use its reference** to store a subclass object and call overridden methods (runtime polymorphism)."
      },      
      {
        title: "What features can abstract classes have?",
        answer: "Abstract classes in Java are used to provide a base structure and partial abstraction. They can have the following features:\n\n✅ Features:\n- Abstract methods (without body) — must be implemented by subclasses\n- Non-abstract methods (with body) — can be inherited directly\n- Constructors — used to initialize fields when a subclass is created\n- Instance variables and static variables\n- Access modifiers (public, protected, etc.)\n\nJava Example:\n```java\nabstract class Animal {\n  String color;\n\n  Animal() {\n    color = \"brown\";\n    System.out.println(\"Animal constructor called\");\n  }\n\n  abstract void sound(); // abstract method\n\n  void sleep() {\n    System.out.println(\"Sleeping...\");\n  }\n}\n\nclass Dog extends Animal {\n  void sound() {\n    System.out.println(\"Bark\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog d = new Dog();\n    d.sound();\n    d.sleep();\n  }\n}\n```\n\n✅ Summary:\n- Abstract classes support both **abstraction** and **code reuse**.\n- They help define common behavior across multiple related classes."
      },      
      {
        title: "Give an example of an abstract class and its implementation.",
        answer: "An abstract class can have both abstract (without body) and concrete (with body) methods. A subclass must implement all abstract methods.\n\nJava Example:\n```java\nabstract class Animal {\n  void eat() {\n    System.out.println(\"Animal eats\");\n  }\n\n  abstract void walk();\n}\n\nclass Horse extends Animal {\n  void walk() {\n    System.out.println(\"Horse walks on 4 legs\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Horse h = new Horse();\n    h.eat();\n    h.walk();\n  }\n}\n```\n\nOutput:\n```\nAnimal eats\nHorse walks on 4 legs\n```\n\n✅ Summary:\n- `eat()` is a concrete method (has a body)\n- `walk()` is abstract and must be implemented in `Horse`\n- You cannot create an object of `Animal`, but its constructor and methods are used by subclasses"
      },      
      {
        title: "Can an abstract class have a constructor?",
        answer: "Yes, an abstract class in Java **can have a constructor**. Although you cannot instantiate an abstract class directly, its constructor is called when an object of a subclass is created.\n\nThe constructor is useful for initializing fields that the abstract class defines.\n\nJava Example:\n```java\nabstract class Animal {\n  String color;\n\n  Animal() {\n    color = \"brown\";\n    System.out.println(\"Animal constructor: color set to \" + color);\n  }\n}\n\nclass Dog extends Animal {\n  Dog() {\n    System.out.println(\"Dog constructor\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog d = new Dog();\n  }\n}\n```\n\nOutput:\n```\nAnimal constructor: color set to brown\nDog constructor\n```\n\n✅ Summary:\n- Abstract classes **can** have constructors.\n- They are called when a subclass object is created.\n- Useful for initializing common properties."
      },      
      {
        title: "How do subclasses use constructors of abstract classes?",
        answer: "In Java, when a subclass extends an abstract class, the constructor of the abstract class is automatically called first — even though the abstract class cannot be instantiated directly.\n\nThis ensures proper initialization of the superclass before the subclass's constructor runs.\n\nJava Example:\n```java\nabstract class Animal {\n  Animal() {\n    System.out.println(\"Animal constructor called\");\n  }\n\n  abstract void sound();\n}\n\nclass Horse extends Animal {\n  Horse() {\n    super(); // optional, called implicitly if not written\n    System.out.println(\"Horse constructor called\");\n  }\n\n  void sound() {\n    System.out.println(\"Neigh\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Horse h = new Horse();\n  }\n}\n```\n\nOutput:\n```\nAnimal constructor called\nHorse constructor called\n```\n\n✅ Summary:\n- Abstract class constructors are called **automatically**.\n- Ensures parent class logic executes before child-specific logic."
      },      
      {
        title: "What is an interface in Java?",
        answer: "An interface in Java is a blueprint for classes. It is used to achieve **total abstraction** by defining method signatures without implementation (until Java 7). From Java 8 onward, it can also include **default** and **static** methods with bodies.\n\n✅ Key Points:\n- All methods are `public` and `abstract` by default (Java ≤ 7).\n- All variables are `public static final` by default.\n- Interfaces support multiple inheritance.\n\nJava Example:\n```java\ninterface Animal {\n  void sound(); // abstract method\n}\n\nclass Dog implements Animal {\n  public void sound() {\n    System.out.println(\"Bark\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog d = new Dog();\n    d.sound(); // Output: Bark\n  }\n}\n```\n\n✅ Summary:\n- Interfaces define a contract.\n- The implementing class must provide definitions for all methods.\n- Interfaces enable total abstraction and support multiple inheritance in Java."
      },      
      {
        title: "What are the characteristics of interface methods and variables?",
        answer: "In Java interfaces:\n\n✅ **Methods:**\n- All methods are **public** and **abstract** by default (until Java 7).\n- From Java 8 onward, interfaces can also have **default** and **static** methods with implementations.\n\n✅ **Variables:**\n- All variables are **public**, **static**, and **final** by default (i.e., constants).\n- Must be initialized at declaration.\n\nJava Example:\n```java\ninterface Info {\n  int MAX = 100; // public static final by default\n\n  void show(); // public abstract by default\n}\n\nclass Display implements Info {\n  public void show() {\n    System.out.println(\"MAX is: \" + MAX);\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Display d = new Display();\n    d.show(); // Output: MAX is: 100\n  }\n}\n```\n\n✅ Summary:\n- You don’t need to write `public static final` or `public abstract` explicitly—they are implicit.\n- All interface members are meant to be shared and implemented."
      },      
      {
        title: "What is total abstraction and how is it achieved?",
        answer: "Total abstraction means hiding all implementation details and exposing only method signatures. It is achieved using **interfaces**, where all methods are abstract by default (in Java < 8).\n\nIn contrast, abstract classes can provide partial abstraction (some methods may be implemented).\n\nJava Example:\n```java\ninterface Remote {\n  void powerOn();\n  void powerOff();\n}\n\nclass TVRemote implements Remote {\n  public void powerOn() {\n    System.out.println(\"TV is ON\");\n  }\n\n  public void powerOff() {\n    System.out.println(\"TV is OFF\");\n  }\n}\n```\n\n✅ Summary:\n- **Total abstraction** = no method body in the interface.\n- Achieved using **interfaces**.\n- The implementing class must define all methods."
      },      
      {
        title: "Can interfaces be used for multiple inheritance?",
        answer: "Yes. In Java, a class can implement multiple interfaces, which allows multiple inheritance. This helps avoid the diamond problem because interfaces only contain method signatures (no implementation).\n\nJava Example:\n```java\ninterface Herbivore {\n  void eatPlants();\n}\n\ninterface Carnivore {\n  void eatMeat();\n}\n\nclass Bear implements Herbivore, Carnivore {\n  public void eatPlants() {\n    System.out.println(\"Bear eats plants\");\n  }\n\n  public void eatMeat() {\n    System.out.println(\"Bear eats meat\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Bear b = new Bear();\n    b.eatPlants();\n    b.eatMeat();\n  }\n}\n```\n\n✅ Summary:\n- A class can implement **multiple interfaces**.\n- Each interface defines a capability.\n- This is Java's way to achieve **multiple inheritance safely**."
      },      
      {
        title: "Give an example of interface implementation.",
        answer: "In Java, an interface defines a contract (method signatures), and a class implements the interface by providing method definitions.\n\nJava Example:\n```java\ninterface ChessPlayer {\n  void moves();\n}\n\nclass Queen implements ChessPlayer {\n  public void moves() {\n    System.out.println(\"Moves: up, down, left, right, diagonal\");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Queen q = new Queen();\n    q.moves();\n  }\n}\n```\n\n✅ Summary:\n- `interface ChessPlayer` defines a rule.\n- `class Queen` implements that rule by defining the `moves()` method.\n- Interfaces are great for defining capabilities like `Flyable`, `Drivable`, etc."
      },      
      {
        title: "What is the 'static' keyword used for in Java?",
        answer: "The `static` keyword in Java is used to define members that belong to the class instead of any instance. It allows sharing the same method or variable across all objects.\n\nIt can be applied to:\n- **Static variables** (shared property)\n- **Static methods** (can be called without objects)\n- **Static blocks** (runs once when class is loaded)\n- **Static nested classes** (can exist without outer class instance)\n\nJava Example:\n```java\nclass Example {\n  static int count = 0;            // static variable\n\n  static void showCount() {        // static method\n    System.out.println(\"Count: \" + count);\n  }\n\n  static {\n    System.out.println(\"Static block called\");\n  }\n\n  static class Inner {\n    void greet() {\n      System.out.println(\"Hello from static nested class\");\n    }\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Example.count = 5;\n    Example.showCount();\n\n    Example.Inner obj = new Example.Inner();\n    obj.greet();\n  }\n}\n```\n\n✅ Summary:\n- `static` allows access without creating an object.\n- Useful for shared data, utility methods, and grouping logic."
      },      
      {
        title: "How does static variable sharing work?",
        answer: "A static variable belongs to the class, not to any individual object. This means all instances (objects) of that class share the same static variable. If one object changes the static variable, it affects all others.\n\nJava Example:\n```java\nclass Student {\n  static String schoolName;\n  String name;\n\n  Student(String name) {\n    this.name = name;\n  }\n\n  void show() {\n    System.out.println(name + \" studies at \" + schoolName);\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Student.schoolName = \"JMV\";\n\n    Student s1 = new Student(\"Alice\");\n    Student s2 = new Student(\"Bob\");\n\n    s1.show(); // Alice studies at JMV\n    s2.show(); // Bob studies at JMV\n  }\n}\n```\n\n✅ Summary:\n- Static variables are **class-level**, not object-level.\n- All objects refer to the same memory location for that variable.\n- Commonly used for shared values like `schoolName`, `companyName`, etc."
      },      
      {
        title: "What is the 'super' keyword used for?",
        answer: "The `super` keyword in Java refers to the immediate parent class. It is used to:\n1. Access parent class **variables**\n2. Call parent class **methods**\n3. Call parent class **constructors** (using `super()`)\n\nJava Example:\n```java\nclass Animal {\n  String type = \"Animal\";\n\n  Animal() {\n    System.out.println(\"Animal constructor\");\n  }\n\n  void sound() {\n    System.out.println(\"Generic sound\");\n  }\n}\n\nclass Dog extends Animal {\n  Dog() {\n    super(); // calls parent constructor\n    System.out.println(\"Dog constructor\");\n  }\n\n  void display() {\n    System.out.println(super.type); // access parent variable\n    super.sound();                  // call parent method\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Dog d = new Dog();\n    d.display();\n  }\n}\n```\n\nOutput:\n```\nAnimal constructor\nDog constructor\nAnimal\nGeneric sound\n```\n\n✅ Summary:\n- `super` is used to refer to parent members when overridden.\n- Must be the first statement in constructor if calling `super()`."
      }
      
    ],



  
    "collections": [
      {
        "title": "What is the Java Collections Framework?",
        "answer": "Java Collections Framework is a set of classes and interfaces that implement commonly reusable data structures like lists, sets, maps, and queues."
      },
      {
        "title": "What are the main interfaces in the Collections Framework?",
        "answer": "The main interfaces are:\n1. Collection\n2. List\n3. Set\n4. Queue\n5. Map"
      },
      {
        "title": "What is the difference between Collection and Collections?",
        "answer": "Collection is an interface. Collections is a utility class that provides static methods for collection operations like sorting and searching."
      },
      {
        "title": "What is List in Java?",
        "answer": "List is an interface that represents an ordered collection that allows duplicate elements. Examples: ArrayList, LinkedList."
      },
      {
        "title": "What is Set in Java?",
        "answer": "Set is an interface that represents a collection of unique elements. Examples: HashSet, TreeSet, LinkedHashSet."
      },
      {
        "title": "What is Map in Java?",
        "answer": "Map is an interface that stores key-value pairs. Keys are unique. Examples: HashMap, TreeMap, LinkedHashMap."
      },
      {
        "title": "What is the difference between ArrayList and LinkedList?",
        "answer": "ArrayList is backed by a dynamic array (fast access, slow insertion/deletion). LinkedList uses a doubly linked list (fast insertion/deletion, slow access)."
      },
      {
        "title": "What is the difference between HashSet and TreeSet?",
        "answer": "HashSet is unordered and faster. TreeSet maintains sorted order but is slower as it uses a Red-Black tree."
      },
      {
        "title": "What is the difference between HashMap and TreeMap?",
        "answer": "HashMap is unordered and faster. TreeMap maintains keys in sorted order and is slower."
      },
      {
        "title": "What is the default initial capacity of ArrayList?",
        "answer": "10"
      },
      {
        "title": "What is the time complexity of get() in ArrayList?",
        "answer": "O(1) — because it's based on an array."
      },
      {
        "title": "What is the time complexity of remove() in LinkedList?",
        "answer": "O(1) if node reference is known; O(n) if index is given."
      },
      {
        "title": "Can List contain duplicate elements?",
        "answer": "Yes, List allows duplicate elements."
      },
      {
        "title": "Can Set contain null values?",
        "answer": "HashSet allows one null, TreeSet does not allow null because it needs to compare elements."
      },
      {
        "title": "Can Map contain null keys?",
        "answer": "HashMap allows one null key. TreeMap does not (throws NullPointerException if comparator is used)."
      },
      {
        "title": "What is Iterator in Java?",
        "answer": "Iterator is an interface used to iterate over collections. It provides methods like hasNext(), next(), and remove()."
      },
      {
        "title": "What is ListIterator?",
        "answer": "ListIterator is used to iterate both forward and backward over a list. Only used with List."
      },
      {
        "title": "What is the difference between Iterator and Enumeration?",
        "answer": "Enumeration is legacy (read-only). Iterator is more modern and allows element removal."
      },
      {
        "title": "What is fail-fast behavior?",
        "answer": "A fail-fast iterator throws ConcurrentModificationException if the collection is modified during iteration."
      },
      {
        "title": "What is fail-safe iterator?",
        "answer": "It doesn’t throw ConcurrentModificationException because it works on a clone (e.g., CopyOnWriteArrayList)."
      },
      {
        "title": "What is the purpose of Collections.sort()?",
        "answer": "To sort a list of Comparable elements in ascending order. Uses TimSort (a hybrid of merge + insertion sort)."
      },
      {
        "title": "How to sort a List in descending order?",
        "answer": "Use: Collections.sort(list, Collections.reverseOrder())"
      },
      {
        "title": "What is the use of Comparator?",
        "answer": "Comparator allows custom sorting logic by defining compare(a, b)."
      },
      {
        "title": "What is the use of Comparable interface?",
        "answer": "It defines the natural ordering of objects using compareTo()."
      },
      {
        "title": "How do you synchronize a collection?",
        "answer": "Use Collections.synchronizedList(), or use concurrent collections like CopyOnWriteArrayList."
      },
      {
        "title": "What is the difference between HashMap and Hashtable?",
        "answer": "HashMap is not thread-safe and faster. Hashtable is synchronized but slower and legacy."
      },
      {
        "title": "What is LinkedHashMap?",
        "answer": "A HashMap that maintains insertion order using a linked list of buckets."
      },
      {
        "title": "What is PriorityQueue in Java?",
        "answer": "A queue based on a heap data structure. Elements are ordered based on natural ordering or custom comparator."
      },
      {
        "title": "What is the time complexity for insertion in HashMap?",
        "answer": "O(1) on average. Worst case O(n) when many collisions occur."
      },
      {
        "title": "What is the load factor in HashMap?",
        "answer": "Load factor is a threshold (default 0.75). When exceeded, the map resizes (rehashes)."
      },
      {
        "title": "How do you make a Map thread-safe?",
        "answer": "Use ConcurrentHashMap or wrap HashMap with Collections.synchronizedMap()."
      },
      {
        "title": "What is the difference between poll() and remove() in Queue?",
        "answer": "poll() returns null if queue is empty; remove() throws NoSuchElementException."
      },
      {
        "title": "What is Stack in Java?",
        "answer": "Stack is a class (extends Vector) implementing LIFO behavior using push() and pop()."
      },
      {
        "title": "What is Deque in Java?",
        "answer": "A double-ended queue that allows insertion/removal from both ends. Implemented by ArrayDeque."
      },
      {
        "title": "What is NavigableMap?",
        "answer": "An extension of SortedMap with navigation methods like lowerKey(), ceilingKey(), floorEntry()."
      },
      {
        "title": "What is ConcurrentHashMap?",
        "answer": "A thread-safe Map that allows concurrent read/write operations with segment locking."
      },
      {
        "title": "What is TreeMap implemented as?",
        "answer": "It’s implemented using a Red-Black Tree — a type of self-balancing binary search tree."
      },
      {
        "title": "What is EnumSet?",
        "answer": "A high-performance Set implementation for enum types."
      },
      {
        "title": "What is the difference between remove() and clear()?",
        "answer": "remove(obj) deletes a single element; clear() removes all elements from the collection."
      },
      {
        "title": "How do you convert a List to a Set?",
        "answer": "Use: `Set<T> set = new HashSet<>(list);`"
      },
      {
        "title": "Can you store duplicate keys in a Map?",
        "answer": "No. Maps cannot contain duplicate keys; values can be duplicated."
      },
      {
        "title": "What is ArrayDeque?",
        "answer": "An implementation of Deque interface using resizable array, faster than Stack/LinkedList for stack/queue operations."
      },
      {
        "title": "What is WeakHashMap?",
        "answer": "A Map where entries are removed automatically by garbage collector when key is no longer used elsewhere."
      },
      {
        "title": "What is the benefit of LinkedHashSet?",
        "answer": "It maintains insertion order and avoids duplicates."
      },
      {
        "title": "What is CopyOnWriteArrayList?",
        "answer": "A thread-safe variant of ArrayList where all mutative operations make a fresh copy of the array."
      },
      {
        "title": "What is the difference between peek() and poll() in Queue?",
        "answer": "peek() retrieves the head without removing it; poll() retrieves and removes the head."
      },
      {
        "title": "How do you create an unmodifiable collection?",
        "answer": "Use: `Collections.unmodifiableList(list)`"
      },
      {
        "title": "What is Spliterator in Java?",
        "answer": "Spliterator is used to iterate and split elements for parallel processing (supports streams)."
      },
      {
        "title": "Can you sort a Map by values?",
        "answer": "Yes, by converting to a List of entries and sorting with a custom comparator."
      }
    ],


    "divide-conquer-and-two-pointer":[
      {
        "title": "What is the Divide and Conquer strategy?",
        "answer": "Divide and Conquer is a problem-solving approach where the problem is divided into subproblems, each solved independently, and the results are combined."
      },
      {
        "title": "What are the main steps of Divide and Conquer?",
        "answer": "1. Divide the problem into smaller parts\n2. Conquer (solve) each part recursively\n3. Combine the results"
      },
      {
        "title": "What is the time complexity of Divide and Conquer algorithms?",
        "answer": "It depends on the recurrence relation. Many follow T(n) = 2T(n/2) + O(n), which resolves to O(n log n)."
      },
      {
        "title": "What is the Master Theorem?",
        "answer": "It is a tool to determine time complexity for divide-and-conquer algorithms with recurrence: T(n) = aT(n/b) + f(n)."
      },
      {
        "title": "What are some classic Divide and Conquer algorithms?",
        "answer": "Merge Sort, Quick Sort, Binary Search, Karatsuba Multiplication, Strassen Matrix Multiplication"
      },
      {
        "title": "How does Merge Sort use Divide and Conquer?",
        "answer": "It splits the array into halves, sorts each half recursively, then merges them into a sorted array."
      },
      {
        "title": "How does Quick Sort use Divide and Conquer?",
        "answer": "It chooses a pivot, partitions the array around it, then recursively sorts the subarrays."
      },
      {
        "title": "Is Binary Search a Divide and Conquer algorithm?",
        "answer": "Yes, because it divides the search space in half at each step and solves one half."
      },
      {
        "title": "What is the benefit of Divide and Conquer?",
        "answer": "It simplifies complex problems and often reduces time complexity significantly."
      },
      {
        "title": "What is the drawback of Divide and Conquer?",
        "answer": "It can increase space complexity due to recursion or temporary arrays (e.g., in Merge Sort)."
      },
      {
        "title": "What is the time complexity of Merge Sort using Master Theorem?",
        "answer": "T(n) = 2T(n/2) + O(n) → O(n log n)"
      },
      {
        "title": "What is Karatsuba algorithm?",
        "answer": "A fast multiplication algorithm that uses Divide and Conquer to multiply two numbers in less than O(n²) time."
      },
      {
        "title": "What is the use of Divide and Conquer in matrix multiplication?",
        "answer": "Strassen’s Algorithm uses this technique to multiply matrices faster than O(n³)."
      },
      {
        "title": "What is a recurrence relation?",
        "answer": "It expresses the time complexity of a recursive algorithm in terms of the size of its subproblems."
      },
      {
        "title": "What are problems not suitable for Divide and Conquer?",
        "answer": "Problems with overlapping subproblems — better solved using Dynamic Programming."
      },
      {
        "title": "What is the space complexity of Merge Sort?",
        "answer": "O(n), because it uses extra space for temporary arrays."
      },
      {
        "title": "What is the space complexity of Quick Sort?",
        "answer": "O(log n) for average case recursion stack."
      },
      {
        "title": "What is the difference between Divide & Conquer and DP?",
        "answer": "Divide & Conquer solves subproblems independently. DP stores and reuses solutions to overlapping subproblems."
      },
      {
        "title": "What is the Two Pointers technique?",
        "answer": "It involves using two indices (pointers) that move through an array to solve problems efficiently."
      },
      {
        "title": "What kind of problems use Two Pointers?",
        "answer": "1. Sorted array problems\n2. Pairs with target sum\n3. Removing duplicates\n4. Sliding windows"
      },
      {
        "title": "What are the types of Two Pointers?",
        "answer": "1. Opposite direction: Start and end pointers moving toward each other\n2. Same direction: Both move forward"
      },
      {
        "title": "How does Two Pointers solve sorted array problems?",
        "answer": "You start one pointer at the beginning and one at the end, and adjust based on the sum/condition."
      },
      {
        "title": "What is the time complexity of most Two Pointer algorithms?",
        "answer": "O(n) — both pointers traverse the array only once."
      },
      {
        "title": "Can Two Pointers be used on unsorted arrays?",
        "answer": "Yes, but often requires sorting first. Otherwise, logic may fail unless constraints are carefully handled."
      },
      {
        "title": "What’s the Two Pointers approach for ‘Pair Sum = target’ in a sorted array?",
        "answer": "Use one pointer at start and one at end. If sum is too small, move start; if too big, move end."
      },
      {
        "title": "How do you use Two Pointers for removing duplicates from a sorted array?",
        "answer": "Use a slow pointer to track unique values and a fast pointer to explore new elements."
      },
      {
        "title": "How does Two Pointers solve the container with most water problem?",
        "answer": "Start with pointers at both ends. Move the pointer with the shorter height to potentially find a taller one."
      },
      {
        "title": "How is Two Pointers used in palindrome checking?",
        "answer": "Use one pointer at the start and one at the end, compare characters while moving inward."
      },
      {
        "title": "What is sliding window vs two pointers?",
        "answer": "Sliding window is a type of two-pointer method where the window (range) size is fixed or adjusted as needed."
      },
      {
        "title": "Can Two Pointers be used for strings?",
        "answer": "Yes. It’s often used for problems involving substring comparison, palindromes, or character matching."
      },
      {
        "title": "What is the difference between Brute Force and Two Pointers?",
        "answer": "Brute force checks all pairs: O(n²). Two pointers can solve many such problems in O(n) by reducing redundant checks."
      },
      {
        "title": "How do you use Two Pointers for Dutch National Flag problem?",
        "answer": "Use three pointers (low, mid, high) to partition the array in a single pass."
      },
      {
        "title": "What is the time complexity of finding 3Sum using Two Pointers?",
        "answer": "O(n²). Fix one element and use two pointers to find remaining pair."
      },
      {
        "title": "Can you use Two Pointers in linked lists?",
        "answer": "Yes. Common use case: slow and fast pointers to find cycle or middle of the list."
      },
      {
        "title": "How to use Two Pointers to reverse an array?",
        "answer": "Start one pointer at the start and one at the end. Swap elements and move inward until they meet."
      },
      {
        "title": "What is the two-pointer method for longest substring without repeating characters?",
        "answer": "Use one pointer to start and one to expand the window, using a set or map to track characters."
      },
      {
        "title": "Is two pointer technique used in binary search problems?",
        "answer": "Sometimes. Modified binary search problems may use two pointers to limit the search space."
      },
      {
        "title": "What is the space complexity of Two Pointers?",
        "answer": "O(1) — since it only uses a few pointer variables regardless of input size."
      },
      {
        "title": "Can Two Pointers be used to merge two sorted arrays?",
        "answer": "Yes. Use one pointer for each array and merge them by comparing elements step-by-step."
      },
      {
        "title": "What’s the difference between Divide and Conquer and Two Pointers?",
        "answer": "Divide and Conquer solves recursively and combines results. Two Pointers solves sequentially in linear time."
      },
      {
        "title": "Can you combine Divide and Conquer with Two Pointers?",
        "answer": "Yes. Example: in Merge Sort, the merge step uses Two Pointers to merge two halves efficiently."
      },
      {
        "title": "How is Two Pointers used in finding the intersection of two sorted arrays?",
        "answer": "Use one pointer for each array, advance whichever has the smaller element until matches are found."
      },
      {
        "title": "What is a common pitfall in Two Pointers approach?",
        "answer": "Forgetting to update both pointers correctly or handling duplicates improperly."
      },
      {
        "title": "When should you avoid Two Pointers?",
        "answer": "When the array is unsorted and you can't sort it, or when a more structured approach (like hashing or DP) is better."
      }
    ],


    "complexity": [
      {
        "title": "What is time complexity?",
        "answer": "Time complexity represents the amount of time an algorithm takes to run as a function of the input size (n)."
      },
      {
        "title": "What is space complexity?",
        "answer": "Space complexity measures the amount of memory or space required by an algorithm during execution."
      },
      {
        "title": "Why is time complexity important?",
        "answer": "It helps analyze and compare the efficiency of algorithms without relying on actual execution time, which varies by hardware."
      },
      {
        "title": "What is Big O notation?",
        "answer": "Big O describes the upper bound (worst-case) time or space complexity of an algorithm."
      },
      {
        "title": "What is the difference between O(1) and O(n)?",
        "answer": "O(1) means constant time — doesn’t depend on input size.\nO(n) means time grows linearly with input size."
      },
      {
        "title": "What is the time complexity of accessing an element in an array?",
        "answer": "O(1), because arrays allow random access via index."
      },
      {
        "title": "What is the time complexity of searching in an unsorted array?",
        "answer": "O(n), because you may have to check every element."
      },
      {
        "title": "What is the time complexity of Binary Search?",
        "answer": "O(log n), since it halves the search space each time."
      },
      {
        "title": "What does O(n²) mean?",
        "answer": "The algorithm’s time grows quadratically with input size. If n doubles, time becomes 4×."
      },
      {
        "title": "What is the best-case, worst-case, and average-case?",
        "answer": "Best: fastest scenario\nWorst: slowest scenario\nAverage: expected time over all cases"
      },
      {
        "title": "What is the time complexity of nested loops?",
        "answer": "Multiply the iterations. For two loops from 0 to n: O(n²)."
      },
      {
        "title": "What is logarithmic time complexity?",
        "answer": "O(log n) means the time grows very slowly with input size. Common in divide-and-conquer algorithms."
      },
      {
        "title": "What is linearithmic complexity?",
        "answer": "O(n log n). Used in efficient sorts like Merge Sort and Heap Sort."
      },
      {
        "title": "What is exponential time complexity?",
        "answer": "O(2ⁿ), where time doubles with every additional input. Seen in brute-force recursive solutions like naive Fibonacci."
      },
      {
        "title": "What is factorial time complexity?",
        "answer": "O(n!) — extremely slow. Occurs in problems like generating all permutations."
      },
      {
        "title": "What is constant time complexity?",
        "answer": "O(1) — time doesn't change with input size. Example: checking if a number is even."
      },
      {
        "title": "What is amortized time complexity?",
        "answer": "It averages the cost over a sequence of operations. Example: dynamic array resize has occasional O(n) but average O(1)."
      },
      {
        "title": "What is the time complexity of HashMap operations?",
        "answer": "Average: O(1) for insert/search/delete. Worst: O(n) (due to collisions)."
      },
      {
        "title": "What is the time complexity of Linked List insert at head?",
        "answer": "O(1) — you simply update a pointer."
      },
      {
        "title": "What is the time complexity of Linked List search?",
        "answer": "O(n) — may need to traverse the entire list."
      },
      {
        "title": "What is the space complexity of recursive functions?",
        "answer": "O(n) — due to call stack frames for each recursive call."
      },
      {
        "title": "What is tail recursion?",
        "answer": "A recursive function where the recursive call is the last operation. Can be optimized to use O(1) space."
      },
      {
        "title": "What is time complexity of Merge Sort?",
        "answer": "O(n log n) — divides the array and merges it efficiently."
      },
      {
        "title": "What is time complexity of Quick Sort?",
        "answer": "Best/Average: O(n log n), Worst: O(n²) — if pivots are poorly chosen."
      },
      {
        "title": "What is the time complexity of Bubble Sort?",
        "answer": "Worst and Average: O(n²), Best (optimized): O(n) if already sorted."
      },
      {
        "title": "What is space complexity of Merge Sort?",
        "answer": "O(n) — due to temporary arrays used during merge."
      },
      {
        "title": "What is space complexity of Quick Sort?",
        "answer": "O(log n) — due to recursion stack (on average)."
      },
      {
        "title": "What is the time complexity of BFS?",
        "answer": "O(V + E), where V = vertices and E = edges."
      },
      {
        "title": "What is the time complexity of DFS?",
        "answer": "O(V + E), like BFS — each edge and vertex is visited once."
      },
      {
        "title": "How to find time complexity from code?",
        "answer": "Analyze loops, recursion, and operations. Add/multiply complexities of independent/combined parts."
      },
      {
        "title": "What is Big Ω (Omega) notation?",
        "answer": "It describes the best-case time complexity of an algorithm."
      },
      {
        "title": "What is Big Θ (Theta) notation?",
        "answer": "It defines the tight bound — both upper and lower — meaning the exact time complexity."
      },
      {
        "title": "Why is O(n log n) better than O(n²)?",
        "answer": "Because it grows much slower. For n = 1000, O(n²) = 1M ops; O(n log n) ≈ 10,000 ops."
      },
      {
        "title": "Which is faster: O(n) or O(log n)?",
        "answer": "O(log n) is faster than O(n), especially as n becomes large."
      },
      {
        "title": "What is the time complexity of generating all subsets of an array?",
        "answer": "O(2ⁿ), since each element can be included or excluded."
      },
      {
        "title": "What is the time complexity of checking if a string is a palindrome?",
        "answer": "O(n), where n is the length of the string."
      },
      {
        "title": "What is the time complexity of matrix multiplication?",
        "answer": "O(n³) for naive method. Optimized algorithms exist but are complex."
      },
      {
        "title": "What is time complexity of finding duplicates using HashSet?",
        "answer": "O(n) — each insert and check takes average O(1)."
      },
      {
        "title": "Why is constant time not always better?",
        "answer": "An algorithm with O(1) may have higher actual runtime than O(n) for small inputs. Big O ignores constants."
      },
      {
        "title": "What is the complexity of inserting in a Binary Search Tree?",
        "answer": "Average: O(log n); Worst: O(n) — if the tree becomes skewed."
      },
      {
        "title": "What is the complexity of accessing elements in a Hash Table?",
        "answer": "Average: O(1), Worst: O(n) in case of many collisions."
      },
      {
        "title": "What is the time complexity of reversing a linked list?",
        "answer": "O(n) — visit each node once and reverse pointers."
      },
      {
        "title": "Can a function have two different time complexities?",
        "answer": "Yes. For example, Best: O(1), Worst: O(n). You can also analyze average case separately."
      },
      {
        "title": "What is the time complexity of checking if two strings are anagrams?",
        "answer": "O(n), using character counts or sorting (O(n log n) if sorted)."
      },
      {
        "title": "What is cache complexity?",
        "answer": "It measures how well an algorithm uses CPU cache. Not covered by Big O but important in practice."
      },
      {
        "title": "Why do we ignore constants in Big O?",
        "answer": "Because they don’t significantly affect scalability as input size grows large."
      },
      {
        "title": "What does T(n) = T(n/2) + 1 imply?",
        "answer": "Time complexity is O(log n). It halves the problem at each step."
      }
    ],
    "recursion-and-backtracking": [
      {
        "title": "What is recursion?",
        "answer": "Recursion is a technique where a function calls itself to solve a smaller subproblem until a base case is reached."
      },
      {
        "title": "What are the components of recursion?",
        "answer": "1. Base Case: When to stop recursion\n2. Recursive Case: Function calling itself with a smaller input"
      },
      {
        "title": "What is the base case in recursion?",
        "answer": "It is the condition where the recursion ends. Without it, the function would call itself indefinitely."
      },
      {
        "title": "What is the time complexity of recursion?",
        "answer": "It depends on the number of recursive calls and work per call. Often analyzed with recurrence relations."
      },
      {
        "title": "What is stack overflow in recursion?",
        "answer": "When recursive calls exceed the call stack limit, causing the program to crash."
      },
      {
        "title": "How is recursion implemented under the hood?",
        "answer": "Using the call stack. Each call adds a new stack frame; once complete, it pops from the stack."
      },
      {
        "title": "What is the difference between recursion and iteration?",
        "answer": "Recursion uses the call stack, may be more elegant. Iteration uses loops and is generally more memory-efficient."
      },
      {
        "title": "What is tail recursion?",
        "answer": "A recursive function where the recursive call is the last operation. Some languages can optimize tail calls to O(1) space."
      },
      {
        "title": "How do you convert recursion to iteration?",
        "answer": "Use a stack or queue to simulate recursive behavior in iterative form."
      },
      {
        "title": "What is the time complexity of recursive factorial?",
        "answer": "O(n), since it makes n recursive calls."
      },
      {
        "title": "What is backtracking?",
        "answer": "Backtracking is a problem-solving method that explores possible solutions and abandons (backtracks) if a path fails."
      },
      {
        "title": "What is the difference between recursion and backtracking?",
        "answer": "Backtracking is a form of recursion that undoes choices when a dead end is reached. Recursion alone doesn’t imply backtracking."
      },
      {
        "title": "What are problems commonly solved using backtracking?",
        "answer": "N-Queens, Sudoku Solver, Rat in a Maze, Subset Generation, Permutations, Word Search"
      },
      {
        "title": "What is the general structure of a backtracking algorithm?",
        "answer": "1. Choose\n2. Explore (recursive call)\n3. Un-choose (backtrack)"
      },
      {
        "title": "Why is backtracking used?",
        "answer": "To explore all potential solutions and find the correct one, especially for combinatorial problems."
      },
      {
        "title": "What is the time complexity of backtracking algorithms?",
        "answer": "Often exponential (e.g., O(2ⁿ) or O(n!)) because all combinations or permutations are explored."
      },
      {
        "title": "Is backtracking brute force?",
        "answer": "Not exactly. It’s a refined brute-force approach that prunes invalid paths early."
      },
      {
        "title": "How is the N-Queens problem solved using backtracking?",
        "answer": "Try placing queens one by one in each row and backtrack if they conflict."
      },
      {
        "title": "What is memoization?",
        "answer": "Storing results of subproblems to avoid recomputation. Used in recursion to reduce time complexity."
      },
      {
        "title": "What is the recursive solution for Fibonacci numbers?",
        "answer": "fib(n) = fib(n-1) + fib(n-2). Base cases: fib(0)=0, fib(1)=1. Time: O(2ⁿ) without memoization."
      },
      {
        "title": "Why is recursion not always preferred?",
        "answer": "It can lead to high memory use due to call stack, and be slower if not optimized with memoization."
      },
      {
        "title": "What is a recursive tree?",
        "answer": "A conceptual structure that represents all recursive calls made by a function."
      },
      {
        "title": "What is pruning in backtracking?",
        "answer": "Skipping over choices that can’t lead to a valid or better solution to reduce time complexity."
      },
      {
        "title": "What is the backtracking approach for generating subsets?",
        "answer": "At each index, choose to include or exclude the current element, and recurse accordingly."
      },
      {
        "title": "How is backtracking used in permutations?",
        "answer": "Fix one element at a time, recursively generate permutations of remaining elements."
      },
      {
        "title": "What is the role of recursion in DFS traversal?",
        "answer": "DFS uses recursion to visit nodes depth-first and backtracks when a node has no unvisited neighbors."
      },
      {
        "title": "What is a real-life example of recursion?",
        "answer": "Matryoshka dolls, function call stacks, directory tree traversal."
      },
      {
        "title": "Can all recursive problems be solved iteratively?",
        "answer": "Yes, using explicit data structures like stacks or queues, but it might be more complex to write."
      },
      {
        "title": "What is the recursive depth?",
        "answer": "The number of times a function calls itself before reaching the base case."
      },
      {
        "title": "How do you avoid TLE (Time Limit Exceeded) in recursion?",
        "answer": "Use memoization, prune unnecessary calls, or convert to DP/iterative solution."
      },
      {
        "title": "How is Sudoku solved using backtracking?",
        "answer": "Try placing digits 1–9 in empty cells, check validity, and backtrack if invalid."
      },
      {
        "title": "Can recursion be used with strings?",
        "answer": "Yes. Examples: reverse string, generate substrings, pattern matching."
      },
      {
        "title": "How to detect infinite recursion?",
        "answer": "If there’s no base case or wrong logic causes recursion to never stop, it results in stack overflow."
      },
      {
        "title": "What is the call stack?",
        "answer": "A structure that keeps track of active function calls in recursion. Each call gets a new stack frame."
      },
      {
        "title": "How is recursion visualized?",
        "answer": "As a tree where each node represents a function call and branches are recursive calls."
      },
      {
        "title": "How to debug recursive functions?",
        "answer": "Use print statements for entry/exit of calls, add parameters to track state, or use a debugger."
      },
      {
        "title": "What is mutual recursion?",
        "answer": "When two or more functions call each other in a recursive cycle."
      },
      {
        "title": "What is the difference between top-down and bottom-up recursion?",
        "answer": "Top-down: start from the main problem and go to base case.\nBottom-up: build from base case up (common in DP)."
      },
      {
        "title": "Can recursion be used in binary trees?",
        "answer": "Yes. Traversals like inorder, preorder, postorder, and operations like height and diameter use recursion."
      },
      {
        "title": "What is the recursive time complexity of Tower of Hanoi?",
        "answer": "O(2ⁿ - 1) where n is the number of disks."
      },
      {
        "title": "Is backtracking always recursive?",
        "answer": "Most backtracking solutions use recursion, but it can also be implemented iteratively using stacks."
      },
      {
        "title": "How to find all valid parentheses combinations using backtracking?",
        "answer": "Add '(' if open < n, add ')' if close < open, and recurse. Use backtracking to explore valid combinations."
      },
      {
        "title": "What is the space complexity of recursive binary tree traversal?",
        "answer": "O(h), where h is the height of the tree due to call stack."
      },
      {
        "title": "How is backtracking used in maze problems?",
        "answer": "Move in all directions from current cell, mark path, and backtrack if dead end is hit."
      },
      {
        "title": "What is the recursive case in backtracking?",
        "answer": "Where you make a choice, explore further, and then undo the choice (backtrack)."
      },
      {
        "title": "How is recursion used in parsing or evaluating expressions?",
        "answer": "Break the expression based on operators, recursively solve left and right parts, and combine results."
      },
      {
        "title": "Can recursion be slower than loops?",
        "answer": "Yes. Recursion adds call stack overhead, which loops avoid."
      }
    ],

    "arrays-and-strings": [
      {
        "title": "What is an array?",
        "answer": "An array is a linear data structure that stores elements of the same type in contiguous memory locations."
      },
      {
        "title": "What is the time complexity for accessing an element in an array?",
        "answer": "O(1), because arrays allow random access using indices."
      },
      {
        "title": "What is the time complexity of inserting at the end of an array?",
        "answer": "O(1) in amortized time if there’s space, but O(n) if resizing is needed in dynamic arrays."
      },
      {
        "title": "What is the time complexity of inserting in the middle of an array?",
        "answer": "O(n), because elements need to be shifted."
      },
      {
        "title": "What is the difference between static and dynamic arrays?",
        "answer": "Static arrays have fixed size. Dynamic arrays (like vectors in C++ or ArrayList in Java) resize as needed."
      },
      {
        "title": "What is a 2D array?",
        "answer": "A 2D array is an array of arrays, used to represent matrices, grids, and tables."
      },
      {
        "title": "What are common operations on arrays?",
        "answer": "Access, Insert, Delete, Traverse, Search, Sort, and Update."
      },
      {
        "title": "How do you find the maximum element in an array?",
        "answer": "Iterate through the array and track the maximum. Time complexity: O(n)."
      },
      {
        "title": "How do you reverse an array?",
        "answer": "Use two pointers — start from both ends and swap until they meet. O(n) time, O(1) space."
      },
      {
        "title": "What is the sliding window technique?",
        "answer": "A method to solve array problems by maintaining a window over elements and sliding it to update result."
      },
      {
        "title": "What is the prefix sum array?",
        "answer": "An array where each element at index i stores the sum of all elements from index 0 to i. Useful for range sum queries."
      },
      {
        "title": "How do you remove duplicates from a sorted array?",
        "answer": "Use two pointers: one for writing unique elements, another for scanning through the array."
      },
      {
        "title": "How do you rotate an array by k steps?",
        "answer": "Reverse entire array, reverse first k elements, reverse remaining elements. Time: O(n), Space: O(1)."
      },
      {
        "title": "What is a string in programming?",
        "answer": "A string is a sequence of characters. In many languages, strings are arrays of characters."
      },
      {
        "title": "What is the time complexity to reverse a string?",
        "answer": "O(n), where n is the length of the string."
      },
      {
        "title": "Are strings mutable in most programming languages?",
        "answer": "Strings are immutable in Java, Python, and JavaScript, but mutable in C/C++ (char arrays)."
      },
      {
        "title": "What are common string operations?",
        "answer": "Concatenation, Substring, Reverse, Compare, Replace, Search, Split, Trim."
      },
      {
        "title": "What is the time complexity of string concatenation?",
        "answer": "O(n) for each concatenation. Use StringBuilder in Java or join in Python for efficiency."
      },
      {
        "title": "What is a palindrome?",
        "answer": "A string that reads the same forward and backward. Example: 'madam'"
      },
      {
        "title": "How do you check if two strings are anagrams?",
        "answer": "Sort both strings or compare character frequencies using a hashmap. Time: O(n log n) or O(n)."
      },
      {
        "title": "What is the difference between String and StringBuilder in Java?",
        "answer": "String is immutable. StringBuilder is mutable and more efficient for repeated concatenations."
      },
      {
        "title": "What is a character array?",
        "answer": "An array of characters, often used to represent strings in low-level languages like C."
      },
      {
        "title": "How do you count character frequencies in a string?",
        "answer": "Use a hashmap or an array of size 26 (for lowercase letters)."
      },
      {
        "title": "What is the two-pointer technique used in string problems?",
        "answer": "It uses two indices (start and end) to scan or compare parts of the string, commonly used in palindrome or substring problems."
      },
      {
        "title": "What is string pattern matching?",
        "answer": "Finding whether a smaller string (pattern) exists within a larger string (text)."
      },
      {
        "title": "What is the naive string matching approach?",
        "answer": "Check each substring of text for match with the pattern. Time complexity: O(m*n)"
      },
      {
        "title": "What is the KMP algorithm?",
        "answer": "Knuth-Morris-Pratt algorithm uses a prefix table to efficiently search for patterns. Time complexity: O(n)."
      },
      {
        "title": "What is the Rabin-Karp algorithm?",
        "answer": "A string matching algorithm using hash values for pattern comparison. Time: O(n) average, O(nm) worst."
      },
      {
        "title": "What is a substring?",
        "answer": "A contiguous part of a string. Example: 'abc' is a substring of 'abcd'."
      },
      {
        "title": "What is the difference between substring and subsequence?",
        "answer": "Substring = contiguous characters.\nSubsequence = can skip characters while preserving order."
      },
      {
        "title": "How do you find the longest palindromic substring?",
        "answer": "Expand around center approach or use Dynamic Programming. Time: O(n²)."
      },
      {
        "title": "How do you find the longest common prefix among strings?",
        "answer": "Sort the array, then compare the first and last string character-by-character."
      },
      {
        "title": "How do you implement strstr() or indexOf()?",
        "answer": "Use sliding window or KMP to check if pattern exists in the text."
      },
      {
        "title": "What is the time complexity to sort an array?",
        "answer": "Depends on algorithm:\nMerge/Quick/Heap: O(n log n),\nBubble/Selection/Insertion: O(n²)"
      },
      {
        "title": "What is the difference between array and list?",
        "answer": "Array: fixed size, contiguous memory.\nList: dynamic size, may use linked structure."
      },
      {
        "title": "How do you find the majority element in an array?",
        "answer": "Use the Boyer-Moore Voting Algorithm. Time: O(n), Space: O(1)."
      },
      {
        "title": "What is the maximum subarray sum problem?",
        "answer": "Find the contiguous subarray with the maximum sum. Solved using Kadane’s algorithm. Time: O(n)."
      },
      {
        "title": "How do you rotate a string?",
        "answer": "Concatenate the string to itself and check if the rotated string is a substring of the result."
      },
      {
        "title": "How do you validate if a string has balanced parentheses?",
        "answer": "Use a stack to push opening brackets and pop when closing brackets match."
      },
      {
        "title": "How to convert a character to integer and vice versa?",
        "answer": "char → int: subtract '0'.\nint → char: add '0'. Example: '5' - '0' = 5."
      },
      {
        "title": "What is lexicographical order in strings?",
        "answer": "It means dictionary order — 'apple' < 'banana' because 'a' comes before 'b'."
      },
      {
        "title": "What is a ragged array?",
        "answer": "An array of arrays where inner arrays have different lengths."
      },
      {
        "title": "How do you find the longest common subsequence (LCS)?",
        "answer": "Use dynamic programming. Time: O(m*n), where m and n are lengths of the two strings."
      },
      {
        "title": "How do you check if a string is a rotation of another?",
        "answer": "Concatenate one string with itself. If the other is a substring of it, it's a rotation."
      },
      {
        "title": "How do you reverse a string without using library functions?",
        "answer": "Convert to character array and swap start and end using a loop."
      },
      {
        "title": "What is the time complexity of checking if all characters are unique?",
        "answer": "O(n) using a Set or array to track characters."
      }
    ],

    "linked-list": [
      {
        "title": "What is a linked list?",
        "answer": "A linked list is a linear data structure where elements (nodes) are stored in non-contiguous memory and connected using pointers."
      },
      {
        "title": "What are the types of linked lists?",
        "answer": "1. Singly Linked List\n2. Doubly Linked List\n3. Circular Linked List"
      },
      {
        "title": "What is a node in a linked list?",
        "answer": "Each node contains data and a reference (or pointer) to the next node in the list."
      },
      {
        "title": "What is the head of a linked list?",
        "answer": "The head is the first node of the linked list. It’s used as the entry point to traverse the list."
      },
      {
        "title": "What is the tail of a linked list?",
        "answer": "The tail is the last node in the linked list whose next pointer is null (in singly) or points to head (in circular)."
      },
      {
        "title": "What is a singly linked list?",
        "answer": "A singly linked list has nodes connected in one direction, where each node points to the next node only."
      },
      {
        "title": "What is a doubly linked list?",
        "answer": "Each node has two pointers — one to the next node and one to the previous node. It allows bidirectional traversal."
      },
      {
        "title": "What is a circular linked list?",
        "answer": "A circular linked list connects the last node to the head, forming a loop. Can be singly or doubly circular."
      },
      {
        "title": "What is the time complexity of inserting at the head?",
        "answer": "O(1) — directly create a new node and point its next to the current head."
      },
      {
        "title": "What is the time complexity of inserting at the end in singly linked list?",
        "answer": "O(n) — you must traverse the entire list to reach the last node."
      },
      {
        "title": "What is the time complexity of deleting the head?",
        "answer": "O(1) — just move the head pointer to the next node."
      },
      {
        "title": "What is the time complexity of deleting the last node in singly linked list?",
        "answer": "O(n) — must traverse to the second last node."
      },
      {
        "title": "Why is linked list preferred over arrays?",
        "answer": "Linked lists are dynamic in size and allow efficient insertions/deletions, unlike arrays which are static and costly to resize."
      },
      {
        "title": "What are drawbacks of linked lists?",
        "answer": "1. Extra memory for pointers\n2. No random access (O(n) to access middle elements)"
      },
      {
        "title": "What is a dummy node?",
        "answer": "A placeholder node used to simplify edge cases in insertion and deletion (especially at head or tail)."
      },
      {
        "title": "What is a sentinel node?",
        "answer": "A special dummy node that doesn’t hold real data but simplifies boundary conditions."
      },
      {
        "title": "What is the difference between stack and linked list?",
        "answer": "Stack uses LIFO, and can be implemented with arrays or linked lists. Linked list is a generic linear data structure."
      },
      {
        "title": "Can linked list be used to implement stack and queue?",
        "answer": "Yes. Stack: use head for push/pop. Queue: insert at tail and remove from head."
      },
      {
        "title": "How do you reverse a linked list?",
        "answer": "Iteratively change each node’s next pointer to point to its previous node. Takes O(n) time and O(1) space."
      },
      {
        "title": "How do you find the length of a linked list?",
        "answer": "Traverse from head and count nodes until null. Time complexity: O(n)."
      },
      {
        "title": "How to find the middle of a linked list?",
        "answer": "Use two pointers: slow (moves 1 step), fast (moves 2 steps). When fast reaches end, slow is at middle."
      },
      {
        "title": "How to detect a cycle in a linked list?",
        "answer": "Use Floyd’s cycle detection algorithm (slow and fast pointers). If they meet, a cycle exists."
      },
      {
        "title": "How to remove a loop in a linked list?",
        "answer": "Use Floyd’s algorithm to find the loop node, then disconnect it by finding the previous node pointing to it."
      },
      {
        "title": "How to find the Nth node from the end?",
        "answer": "Use two pointers. Move the first pointer N steps, then move both together until the first hits the end."
      },
      {
        "title": "What is the time complexity to search for an element?",
        "answer": "O(n), as we must traverse each node until the value is found or list ends."
      },
      {
        "title": "What is the difference between singly and doubly linked list?",
        "answer": "Singly uses one pointer per node (next), doubly uses two (prev and next), enabling backward traversal."
      },
      {
        "title": "What is a circular doubly linked list?",
        "answer": "A doubly linked list where the last node points to the head and the head's prev points to the last node."
      },
      {
        "title": "Can we sort a linked list?",
        "answer": "Yes. Use Merge Sort or Insertion Sort since they don't require random access."
      },
      {
        "title": "How to merge two sorted linked lists?",
        "answer": "Use a dummy node and iterate both lists, picking the smaller node each time to build the merged list."
      },
      {
        "title": "What is the use of linked list in real life?",
        "answer": "Used in memory management, undo functionality, file systems, adjacency lists in graphs."
      },
      {
        "title": "How to delete a node without head pointer?",
        "answer": "Copy the data from the next node to current and delete the next node. Doesn’t work for last node."
      },
      {
        "title": "How do you check if a linked list is palindrome?",
        "answer": "Find middle, reverse the second half, and compare both halves."
      },
      {
        "title": "What is the best sorting algorithm for linked list?",
        "answer": "Merge Sort is preferred because it works well with sequential access and gives O(n log n) time."
      },
      {
        "title": "What is the space complexity of linked list operations?",
        "answer": "O(1) for insert/delete. Total memory used is O(n) for n nodes."
      },
      {
        "title": "What is the difference between array and linked list?",
        "answer": "Arrays offer fast access but are fixed-size. Linked lists are dynamic but offer only sequential access."
      },
      {
        "title": "How is memory managed in linked list?",
        "answer": "Each node is allocated dynamically on the heap. It must be explicitly deleted (in languages like C/C++)."
      },
      {
        "title": "What is a self-referential structure?",
        "answer": "A struct that contains a pointer to another struct of the same type. Used to build linked lists."
      },
      {
        "title": "What happens when you delete a node twice?",
        "answer": "It causes undefined behavior or segmentation fault because you're accessing freed memory."
      },
      {
        "title": "Can a linked list be circular and doubly at the same time?",
        "answer": "Yes. The last node points to the head, and each node has both next and prev pointers."
      },
      {
        "title": "What is memory leak in linked lists?",
        "answer": "It occurs if we lose reference to nodes without freeing them, preventing garbage collection or deallocation."
      },
      {
        "title": "What is the difference between NULL and nullptr?",
        "answer": "In C++, NULL is a macro; nullptr is a type-safe pointer literal (introduced in C++11). Use nullptr in modern code."
      },
      {
        "title": "How is a linked list different from stack/queue?",
        "answer": "Linked lists allow insertions/deletions anywhere. Stack/queue have LIFO/FIFO restrictions and can be implemented using linked lists."
      },
      {
        "title": "Can you traverse a singly linked list backward?",
        "answer": "No, unless you use extra memory (like stack) or convert to a doubly linked list."
      },
      {
        "title": "Can a linked list be implemented recursively?",
        "answer": "Yes, operations like insert, reverse, and traversal can be done using recursive functions."
      },
      {
        "title": "What is flattening of a multilevel linked list?",
        "answer": "It refers to converting a nested list structure (each node may have a child) into a single linear list."
      },
      {
        "title": "How is linked list used in hash tables?",
        "answer": "Used for separate chaining to handle collisions — each bucket is a linked list of entries."
      },
      {
        "title": "How do you rotate a linked list?",
        "answer": "Connect the list into a circle, move to the (n-k)th node, and break the circle there."
      },
      {
        "title": "What is a skip list?",
        "answer": "A layered linked list with pointers that skip over nodes to allow faster search (O(log n))."
      }
    ],
    "stack-and-queue": [
      {
        "title": "What is a stack in DSA?",
        "answer": "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. The last element added is the first to be removed."
      },
      {
        "title": "What are common operations on a stack?",
        "answer": "1. push(x): Add element x to the top\n2. pop(): Remove the top element\n3. top()/peek(): Return the top element\n4. isEmpty(): Check if stack is empty"
      },
      {
        "title": "What is the time complexity of stack operations?",
        "answer": "All stack operations — push, pop, peek — take O(1) time."
      },
      {
        "title": "How is a stack implemented?",
        "answer": "Stacks can be implemented using arrays or linked lists."
      },
      {
        "title": "What is a queue in DSA?",
        "answer": "A queue is a linear data structure that follows the First In First Out (FIFO) principle. The first element added is the first to be removed."
      },
      {
        "title": "What are common operations on a queue?",
        "answer": "1. enqueue(x): Add element x to the rear\n2. dequeue(): Remove element from the front\n3. front(): Get the front element\n4. isEmpty(): Check if queue is empty"
      },
      {
        "title": "What is the time complexity of queue operations?",
        "answer": "All basic queue operations — enqueue and dequeue — take O(1) time."
      },
      {
        "title": "How is a queue implemented?",
        "answer": "Queues can be implemented using arrays, linked lists, or circular arrays."
      },
      {
        "title": "What is the difference between stack and queue?",
        "answer": "Stack: LIFO, insertion and deletion at one end.\nQueue: FIFO, insertion at rear and deletion at front."
      },
      {
        "title": "What is a circular queue?",
        "answer": "A circular queue connects the end to the beginning to reuse space and avoid shifting elements."
      },
      {
        "title": "What is a deque?",
        "answer": "Deque (Double-Ended Queue) allows insertion and deletion from both front and rear ends."
      },
      {
        "title": "What is a priority queue?",
        "answer": "A priority queue removes elements based on priority rather than order of insertion. Usually implemented using heaps."
      },
      {
        "title": "What is stack overflow?",
        "answer": "Stack overflow occurs when elements are pushed onto a full stack without enough memory space."
      },
      {
        "title": "What is stack underflow?",
        "answer": "Stack underflow occurs when pop() is called on an empty stack."
      },
      {
        "title": "What is queue overflow?",
        "answer": "Queue overflow occurs when enqueue is attempted on a full queue (in array-based implementation)."
      },
      {
        "title": "What is queue underflow?",
        "answer": "Queue underflow occurs when dequeue is called on an empty queue."
      },
      {
        "title": "What are real-world examples of stacks?",
        "answer": "Browser back button, undo functionality, expression evaluation, function call stack."
      },
      {
        "title": "What are real-world examples of queues?",
        "answer": "Printer queue, customer service lines, task scheduling in OS, BFS traversal."
      },
      {
        "title": "What is the use of stacks in expression evaluation?",
        "answer": "Stacks are used to convert and evaluate infix, prefix, and postfix expressions."
      },
      {
        "title": "What is infix, prefix, and postfix?",
        "answer": "Infix: A + B\nPrefix: +AB\nPostfix: AB+"
      },
      {
        "title": "How do you convert infix to postfix using stack?",
        "answer": "Use a stack to hold operators and output operands directly. Apply precedence and associativity rules."
      },
      {
        "title": "How are function calls managed using stack?",
        "answer": "Function calls use a call stack to track the return address and local variables of each function."
      },
      {
        "title": "What is the auxiliary stack?",
        "answer": "An additional stack used to support operations like getMin() or sort in a stack."
      },
      {
        "title": "How to implement a queue using two stacks?",
        "answer": "Use two stacks:\n- Push elements in one\n- Pop by reversing into the other when needed."
      },
      {
        "title": "How to implement a stack using two queues?",
        "answer": "Push to one queue. For pop, dequeue all except the last element and enqueue back to the other queue."
      },
      {
        "title": "What is monotonic stack?",
        "answer": "A stack where elements are in non-increasing or non-decreasing order. Useful in problems like Next Greater Element."
      },
      {
        "title": "What is Next Greater Element (NGE)?",
        "answer": "For each element, find the next element that is greater. Solved using a stack in O(n)."
      },
      {
        "title": "What is sliding window maximum using deque?",
        "answer": "Maintain a deque of indices in decreasing order of values. The front gives the max for the current window."
      },
      {
        "title": "How is stack used in DFS traversal?",
        "answer": "DFS uses a stack to backtrack nodes as it explores deep into the graph."
      },
      {
        "title": "How is queue used in BFS traversal?",
        "answer": "BFS uses a queue to explore nodes level by level."
      },
      {
        "title": "What is the space complexity of stack and queue?",
        "answer": "Both stack and queue use O(n) space where n is the number of elements stored."
      },
      {
        "title": "What is the time complexity of reversing a stack?",
        "answer": "Using recursion or an extra stack, it takes O(n) time."
      },
      {
        "title": "What is a bounded queue?",
        "answer": "A queue with fixed maximum size. Once full, enqueue is blocked or fails."
      },
      {
        "title": "What is an unbounded queue?",
        "answer": "A dynamically resizable queue with no fixed size limit."
      },
      {
        "title": "What is the role of queue in OS process scheduling?",
        "answer": "Processes are stored in ready queues, waiting queues, etc., and handled based on their scheduling algorithm."
      },
      {
        "title": "Can stack be used to reverse a string?",
        "answer": "Yes. Push each character and pop them one by one to reverse the string."
      },
      {
        "title": "How can you implement min stack?",
        "answer": "Use two stacks — one for elements, one for the current minimum at each level."
      },
      {
        "title": "What is a circular buffer?",
        "answer": "A fixed-size buffer implemented as a circular queue to reuse memory efficiently."
      },
      {
        "title": "How is a queue different from a linked list?",
        "answer": "A queue enforces FIFO operations, while a linked list allows insert/delete at any position."
      },
      {
        "title": "What is the advantage of using deque over stack/queue?",
        "answer": "Deque supports all operations of both stack and queue with constant time complexity from both ends."
      },
      {
        "title": "How to check balanced parentheses using stack?",
        "answer": "Push opening brackets. On closing, pop and match. If stack is empty at end, it’s balanced."
      },
      {
        "title": "What is multi-level queue scheduling?",
        "answer": "Processes are divided into multiple queues based on priority and each queue is scheduled separately."
      },
      {
        "title": "What is tail pointer in a queue?",
        "answer": "Tail points to the last element where new insertions happen in the queue."
      },
      {
        "title": "What is the difference between ArrayQueue and LinkedListQueue?",
        "answer": "ArrayQueue has fixed size and may waste space. LinkedListQueue grows dynamically but uses extra memory for pointers."
      },
      {
        "title": "What is a blocking queue?",
        "answer": "A thread-safe queue where enqueue/dequeue waits if the queue is full/empty (used in producer-consumer problems)."
      },
      {
        "title": "Can we use a stack to simulate recursion?",
        "answer": "Yes. Recursion uses the system call stack internally to store function calls and variables."
      },
      {
        "title": "What is amortized analysis in stacks or queues?",
        "answer": "It averages the time over a sequence of operations (e.g., implementing dynamic array stack)."
      }
    ],

    "binary-and-BST": [
      {
        "title": "What is a binary tree?",
        "answer": "A binary tree is a tree data structure where each node has at most two children, referred to as left and right child."
      },
      {
        "title": "What is the difference between a binary tree and a binary search tree?",
        "answer": "In a binary tree, node placement has no specific order. In a BST, the left child is smaller and the right child is greater than the node."
      },
      {
        "title": "What is the root in a binary tree?",
        "answer": "The root is the topmost node of the tree. It has no parent and is the entry point to the tree."
      },
      {
        "title": "What is a leaf node?",
        "answer": "A leaf node is a node with no children."
      },
      {
        "title": "What is the height of a binary tree?",
        "answer": "Height is the number of edges in the longest path from the root to a leaf."
      },
      {
        "title": "What is the depth of a node?",
        "answer": "The depth is the number of edges from the root to that node."
      },
      {
        "title": "What is a full binary tree?",
        "answer": "A full binary tree is a tree where every node has either 0 or 2 children."
      },
      {
        "title": "What is a complete binary tree?",
        "answer": "In a complete binary tree, all levels are filled except possibly the last, which is filled from left to right."
      },
      {
        "title": "What is a perfect binary tree?",
        "answer": "A perfect binary tree is a full binary tree in which all leaf nodes are at the same level."
      },
      {
        "title": "What is a balanced binary tree?",
        "answer": "A tree where the height difference between left and right subtrees of any node is at most 1."
      },
      {
        "title": "What is a skewed binary tree?",
        "answer": "A tree where all nodes are either only on the left (left-skewed) or only on the right (right-skewed), forming a linked list."
      },
      {
        "title": "What is in-order traversal?",
        "answer": "In-order: Left → Root → Right.\nIn BST, this gives values in sorted order."
      },
      {
        "title": "What is pre-order traversal?",
        "answer": "Pre-order: Root → Left → Right.\nUsed to create a copy of the tree."
      },
      {
        "title": "What is post-order traversal?",
        "answer": "Post-order: Left → Right → Root.\nUsed to delete the tree."
      },
      {
        "title": "What is level-order traversal?",
        "answer": "Also called BFS. Nodes are visited level by level using a queue."
      },
      {
        "title": "How is a binary tree implemented?",
        "answer": "It can be implemented using classes/structures with pointers or using arrays for complete trees."
      },
      {
        "title": "What is the time complexity for tree traversals?",
        "answer": "All basic traversals (in-order, pre-order, post-order, level-order) take O(n) time."
      },
      {
        "title": "What is a Binary Search Tree (BST)?",
        "answer": "A BST is a binary tree where the left child has smaller value and the right child has greater value than the parent."
      },
      {
        "title": "Why use BSTs?",
        "answer": "They allow fast insertion, deletion, and lookup in O(log n) time on average (if balanced)."
      },
      {
        "title": "What is the time complexity of searching in BST?",
        "answer": "Average: O(log n); Worst-case (unbalanced tree): O(n)"
      },
      {
        "title": "How to insert a node in BST?",
        "answer": "Compare the new value with root. Recursively insert to left if smaller, right if greater."
      },
      {
        "title": "How to delete a node in BST?",
        "answer": "Cases:\n1. Leaf: remove it\n2. One child: replace node with child\n3. Two children: replace with inorder successor or predecessor"
      },
      {
        "title": "What is the inorder successor in BST?",
        "answer": "The next higher node (smallest node in the right subtree)."
      },
      {
        "title": "What is the inorder predecessor in BST?",
        "answer": "The previous smaller node (largest node in the left subtree)."
      },
      {
        "title": "How to find the minimum in a BST?",
        "answer": "Traverse left till the end. Leftmost node is the minimum."
      },
      {
        "title": "How to find the maximum in a BST?",
        "answer": "Traverse right till the end. Rightmost node is the maximum."
      },
      {
        "title": "What is a balanced BST?",
        "answer": "A BST where the height difference between left and right subtree is minimal, ensuring O(log n) operations."
      },
      {
        "title": "What is AVL Tree?",
        "answer": "An AVL tree is a self-balancing BST where the height difference between left and right subtrees is at most 1."
      },
      {
        "title": "What is a Red-Black Tree?",
        "answer": "A self-balancing BST where each node is colored red or black and follows specific rules to keep the tree balanced."
      },
      {
        "title": "What is Morris Traversal?",
        "answer": "A space-optimized traversal technique that uses threads (modified pointers) to perform in-order traversal without recursion or stack."
      },
      {
        "title": "What is BST property?",
        "answer": "All left descendants ≤ node < all right descendants for each node."
      },
      {
        "title": "Can a BST have duplicate elements?",
        "answer": "Typically no, but in some implementations duplicates are allowed in left/right consistently."
      },
      {
        "title": "What is the space complexity of a binary tree?",
        "answer": "O(n), where n is the number of nodes. For recursive traversals, stack space may also be used."
      },
      {
        "title": "How are binary trees used in expression evaluation?",
        "answer": "Expression trees represent operands as leaves and operators as internal nodes.\nUsed in compilers and calculators."
      },
      {
        "title": "What is a threaded binary tree?",
        "answer": "A binary tree where null pointers are used to store in-order predecessor or successor for faster traversal."
      },
      {
        "title": "What is a binary heap?",
        "answer": "A binary heap is a complete binary tree used to implement priority queues.\nNot a BST — follows heap property instead."
      },
      {
        "title": "What is the difference between heap and BST?",
        "answer": "BST maintains full order (in-order traversal gives sorted list). Heap maintains partial order based on min/max at root."
      },
      {
        "title": "What is lowest common ancestor (LCA) in BST?",
        "answer": "It’s the deepest node that is an ancestor of both given nodes.\nBST logic: if both values are < node, go left; if > node, go right."
      },
      {
        "title": "What is serialization of binary tree?",
        "answer": "Converting a binary tree to a string format to store/transfer, and then rebuild (deserialize) it."
      },
      {
        "title": "How can you build a BST from preorder traversal?",
        "answer": "Use a stack to keep track of node bounds. Recursively insert values maintaining min and max range."
      },
      {
        "title": "How is a binary tree used in Huffman encoding?",
        "answer": "It builds a prefix tree (Huffman tree) using frequencies to create efficient binary encodings."
      },
      {
        "title": "What is vertical order traversal?",
        "answer": "It prints nodes vertically from leftmost to rightmost columns using level + horizontal distances."
      },
      {
        "title": "What is boundary traversal in binary tree?",
        "answer": "Traversal that prints left boundary, leaves, and right boundary in anti-clockwise order."
      },
      {
        "title": "What is diameter of a binary tree?",
        "answer": "The longest path between any two nodes (not necessarily through root). Calculated as max of left height + right height + 1."
      },
      {
        "title": "How do you mirror a binary tree?",
        "answer": "Swap left and right subtrees recursively."
      },
      {
        "title": "What is the time complexity for BST insert, search, delete?",
        "answer": "Average: O(log n); Worst (skewed tree): O(n). Balanced trees maintain O(log n)."
      },
      {
        "title": "What is flattening a binary tree?",
        "answer": "Transforming a binary tree to a linked list in-place using preorder traversal."
      }
    ],

    "hashing-and-heaps": [
        {
          "title": "What is hashing in DSA?",
          "answer": "Hashing is a technique to convert data (like keys) into a fixed-size value (called hash code) using a hash function, typically used for fast data retrieval."
        },
        {
          "title": "What is a hash function?",
          "answer": "A hash function maps input data to a specific index in a hash table. A good hash function minimizes collisions and distributes keys uniformly."
        },
        {
          "title": "What is a hash table?",
          "answer": "A hash table is a data structure that stores key-value pairs using a hash function to calculate index for each key."
        },
        {
          "title": "What is a collision in hashing?",
          "answer": "A collision occurs when two different keys produce the same hash index. This must be handled to avoid overwriting values."
        },
        {
          "title": "How are collisions handled?",
          "answer": "Common techniques include:\n1. Chaining (linked lists at each index)\n2. Open Addressing (like Linear or Quadratic Probing)"
        },
        {
          "title": "What is linear probing?",
          "answer": "In linear probing, if a collision occurs, we linearly check the next available index to place the value."
        },
        {
          "title": "What is quadratic probing?",
          "answer": "Quadratic probing resolves collision by checking i² distance away on each attempt.\nExample: h(k) + 1², h(k) + 2², etc."
        },
        {
          "title": "What is double hashing?",
          "answer": "Double hashing uses a second hash function to calculate step size during collisions, reducing clustering."
        },
        {
          "title": "What is load factor in a hash table?",
          "answer": "Load factor = number of entries / size of table. It helps determine when to resize the hash table."
        },
        {
          "title": "What happens when load factor is high?",
          "answer": "Too many collisions. Performance drops. Solution: rehash into a bigger table."
        },
        {
          "title": "What is rehashing?",
          "answer": "Rehashing is resizing the hash table and re-inserting all keys using a new hash function or size."
        },
        {
          "title": "What is the time complexity of hash table operations?",
          "answer": "Average: O(1) for insert/search/delete\nWorst: O(n) (if collisions are poorly handled)"
        },
        {
          "title": "What are practical applications of hashing?",
          "answer": "Hash maps, password storage (using cryptographic hash), symbol tables, caching, indexing databases."
        },
        {
          "title": "What is a perfect hash function?",
          "answer": "A perfect hash function maps keys to unique indices with no collisions — ideal but hard to construct."
        },
        {
          "title": "What is a cryptographic hash function?",
          "answer": "Used in security, it should be deterministic, fast, irreversible, collision-resistant (e.g., SHA-256)."
        },
        {
          "title": "What is a map in C++ or HashMap in Java?",
          "answer": "These are implementations of hash tables to store key-value pairs. They offer O(1) average time operations."
        },
        {
          "title": "What is unordered_map in C++?",
          "answer": "It is a hash table-based map. Provides average O(1) time for insert/search/delete unlike map (which is O(log n))."
        },
        {
          "title": "What is a multimap or multihashmap?",
          "answer": "It allows multiple values for the same key."
        },
        {
          "title": "How is hashing used in problems like 'Two Sum'?",
          "answer": "Hash the required complement and check if it exists. Makes the solution O(n) instead of O(n²)."
        },
        {
          "title": "What is a heap in DSA?",
          "answer": "A heap is a special tree-based structure that satisfies the heap property (Max-Heap or Min-Heap)."
        },
        {
          "title": "What is a Min-Heap?",
          "answer": "A Min-Heap is a binary tree where each parent node is less than or equal to its children.\nRoot is the minimum element."
        },
        {
          "title": "What is a Max-Heap?",
          "answer": "A Max-Heap is a binary tree where each parent node is greater than or equal to its children.\nRoot is the maximum element."
        },
        {
          "title": "What is the use of heaps?",
          "answer": "Used for priority queues, scheduling tasks, heapsort, median finding, Dijkstra’s algorithm, etc."
        },
        {
          "title": "What is a priority queue?",
          "answer": "It is a queue where elements are served based on priority, implemented using heaps."
        },
        {
          "title": "What are heap operations and their time complexities?",
          "answer": "Insert: O(log n)\nDelete: O(log n)\nPeek/Top: O(1)"
        },
        {
          "title": "What is heapify?",
          "answer": "Heapify converts an arbitrary array into a heap structure in O(n) time."
        },
        {
          "title": "What is the space complexity of a heap?",
          "answer": "O(n) – proportional to the number of elements stored."
        },
        {
          "title": "How is heap represented in an array?",
          "answer": "For index i:\nLeft child: 2i+1\nRight child: 2i+2\nParent: (i-1)/2"
        },
        {
          "title": "What is heapsort?",
          "answer": "A comparison-based sorting algorithm that builds a heap and repeatedly extracts max/min.\nTime: O(n log n)"
        },
        {
          "title": "What is the difference between BST and heap?",
          "answer": "BST maintains full ordering (left < root < right).\nHeap maintains only heap property (not complete order)."
        },
        {
          "title": "What is a d-ary heap?",
          "answer": "A generalization of binary heap where each node has d children instead of 2."
        },
        {
          "title": "What is a Fibonacci heap?",
          "answer": "An advanced heap that supports very fast decrease-key and merge operations, used in Dijkstra and Prim’s."
        },
        {
          "title": "What is a lazy deletion in heap?",
          "answer": "Instead of removing an element immediately, it's marked deleted and skipped later to save time."
        },
        {
          "title": "What is the median in a stream problem and how are heaps used?",
          "answer": "Two heaps (maxHeap + minHeap) track the lower and upper halves to efficiently find median in O(log n) time."
        },
        {
          "title": "What is the advantage of using heap for top-k elements?",
          "answer": "Maintain a min-heap of size k. Helps track top k largest/smallest elements in O(n log k)."
        },
        {
          "title": "How does heap help in Dijkstra's algorithm?",
          "answer": "A min-heap stores nodes with the shortest tentative distance for efficient retrieval in O(log n)."
        },
        {
          "title": "Can we use heaps for sorting strings?",
          "answer": "Yes, we can use heaps to sort any comparable objects, including strings."
        },
        {
          "title": "What is the difference between stack/queue and heap?",
          "answer": "Stack/queue operate on order of insertion. Heap gives access based on priority (min/max value)."
        },
        {
          "title": "Why are heaps preferred for real-time systems?",
          "answer": "Because they support quick access to highest/lowest priority tasks in O(1) or O(log n) time."
        },
        {
          "title": "What is a complete binary tree?",
          "answer": "A binary tree where all levels are completely filled except possibly the last, which is filled from left to right.\nHeaps are always complete binary trees."
        },
        {
          "title": "What is the difference between complete and full binary tree?",
          "answer": "Full binary tree has 0 or 2 children per node. Complete binary tree fills all levels except last from left to right."
        },
        {
          "title": "How is heap deletion performed?",
          "answer": "Remove root, place last element at root, then heapify down to restore heap property."
        },
        {
          "title": "What happens when we insert into a heap?",
          "answer": "The element is added at the bottom-most, right-most position, then heapify-up is used to maintain the heap."
        },
        {
          "title": "Can heap have duplicate values?",
          "answer": "Yes. Heap structure only ensures the order between parent and child, not uniqueness."
        },
        {
          "title": "Why is a heap not used to find all k smallest elements directly?",
          "answer": "Because for unsorted extraction, sorting or a better data structure may be more efficient than repeated minHeap extraction."
        },
        {
          "title": "What is min-heapify and max-heapify?",
          "answer": "They are functions that correct a single violation of the heap property in a subtree rooted at a node."
        }
      
    ],
    "dp": [
        {
          "title": "What is Dynamic Programming?",
          "answer": "Dynamic Programming (DP) is an optimization technique used to solve complex problems by breaking them into simpler overlapping subproblems and solving each subproblem only once, storing the results."
        },
        {
          "title": "When should you use Dynamic Programming?",
          "answer": "Use DP when a problem has both overlapping subproblems and optimal substructure.\nExample: Fibonacci, where f(n) = f(n-1) + f(n-2)"
        },
        {
          "title": "What is the difference between DP and recursion?",
          "answer": "Recursion solves subproblems again and again, leading to exponential time. DP stores the result of subproblems to avoid recomputation, resulting in polynomial time."
        },
        {
          "title": "What is memoization?",
          "answer": "Memoization is a top-down DP technique where you store the result of subproblems in a map or array to avoid recomputation."
        },
        {
          "title": "What is tabulation?",
          "answer": "Tabulation is a bottom-up DP approach where you solve all subproblems iteratively and store their results in a table (usually an array)."
        },
        {
          "title": "How do you identify if a problem can be solved with DP?",
          "answer": "Check for overlapping subproblems and optimal substructure. If solving a bigger problem depends on solutions to smaller repeated subproblems, DP can be used."
        },
        {
          "title": "What are overlapping subproblems?",
          "answer": "Overlapping subproblems mean the same subproblem is solved multiple times.\nExample: Fibonacci – f(5) calls f(4) and f(3); f(4) again calls f(3)."
        },
        {
          "title": "What is optimal substructure?",
          "answer": "Optimal substructure means the optimal solution to a problem is built using optimal solutions of its subproblems.\nExample: Shortest path in a graph."
        },
        {
          "title": "What are some classic DP problems?",
          "answer": "Fibonacci, Knapsack, Longest Common Subsequence, Longest Increasing Subsequence, Matrix Chain Multiplication, Edit Distance."
        },
        {
          "title": "What is the time complexity of memoized Fibonacci?",
          "answer": "O(n), because each state f(i) is computed once and stored."
        },
        {
          "title": "Why does plain recursion fail for large inputs?",
          "answer": "It recomputes the same subproblems many times, leading to exponential time and stack overflow for large inputs."
        },
        {
          "title": "What is a DP state?",
          "answer": "A DP state is a representation of a subproblem using parameters.\nExample: dp[i][j] could represent the solution for i-th and j-th elements."
        },
        {
          "title": "How do you define the state transition?",
          "answer": "State transition shows how to compute a state using previously computed states.\nExample: dp[i] = dp[i-1] + dp[i-2]"
        },
        {
          "title": "What is space optimization in DP?",
          "answer": "If only a few previous values are needed, reduce space by storing only those instead of the whole DP array.\nExample: Fibonacci with O(1) space."
        },
        {
          "title": "What is the base case in DP?",
          "answer": "It is the simplest subproblem which can be solved directly.\nExample: dp[0] = 0 in Fibonacci."
        },
        {
          "title": "Why is bottom-up DP generally more efficient than top-down?",
          "answer": "It avoids function call overhead and ensures every subproblem is solved only once in a known order."
        },
        {
          "title": "What is a 1D DP?",
          "answer": "When only one parameter is required to represent the state, we use a 1D array.\nExample: dp[i] for climbing stairs."
        },
        {
          "title": "What is a 2D DP?",
          "answer": "When two parameters are needed to define a state.\nExample: dp[i][j] for LCS between two strings."
        },
        {
          "title": "What is the subset sum problem?",
          "answer": "Check if a subset of the array sums up to a target. Use dp[i][sum] = true/false."
        },
        {
          "title": "How does DP help in solving the 0/1 Knapsack problem?",
          "answer": "It stores maximum value for each item and weight capacity, avoiding recomputation.\nExample: dp[i][w] = max of including or excluding item i."
        },
        {
          "title": "What is the difference between 0/1 and fractional knapsack?",
          "answer": "0/1 requires DP as items are either picked or not. Fractional uses greedy approach."
        },
        {
          "title": "What is the Longest Common Subsequence (LCS) problem?",
          "answer": "Find the length of the longest subsequence common to two strings.\nDP state: dp[i][j] = LCS of s1[0..i-1] and s2[0..j-1]"
        },
        {
          "title": "What is the time complexity of LCS using DP?",
          "answer": "O(n × m), where n and m are lengths of the two strings."
        },
        {
          "title": "What is the Longest Increasing Subsequence (LIS)?",
          "answer": "Find the longest increasing subsequence in an array.\nNaive DP: O(n²); Optimized: O(n log n)"
        },
        {
          "title": "How is Matrix Chain Multiplication solved using DP?",
          "answer": "Use DP to minimize total cost of matrix multiplication by dividing at all possible points and storing the best."
        },
        {
          "title": "What is the Edit Distance problem?",
          "answer": "Find minimum operations (insert, delete, replace) to convert one string to another.\nState: dp[i][j] = cost to convert s1[0..i-1] to s2[0..j-1]"
        },
        {
          "title": "What is topological order used for in DP?",
          "answer": "In DAG-based DP, solving in topological order ensures subproblems are solved before dependent problems."
        },
        {
          "title": "What is bitmask DP?",
          "answer": "Use a bitmask (binary number) to represent subsets in problems like TSP or set cover.\nExample: dp[mask][i] = shortest path ending at i using mask set."
        },
        {
          "title": "What is digit DP?",
          "answer": "Digit DP solves problems involving digits of numbers with constraints, like counting valid numbers below N."
        },
        {
          "title": "What is sliding window DP?",
          "answer": "Use a fixed-size window over the array and update the state efficiently to reduce space or time."
        },
        {
          "title": "What is the difference between DP and Greedy?",
          "answer": "Greedy picks locally optimal choices without looking ahead. DP checks all subproblems and guarantees optimal global solution."
        },
        {
          "title": "Can you use DP for all optimization problems?",
          "answer": "No, only problems with overlapping subproblems and optimal substructure can be solved with DP."
        },
        {
          "title": "Why is memoization called top-down?",
          "answer": "Because the main problem is solved first, and smaller subproblems are computed only when needed."
        },
        {
          "title": "Why is tabulation called bottom-up?",
          "answer": "Because it solves the smallest subproblems first and builds up to the final solution."
        },
        {
          "title": "What are the typical steps to solve a DP problem?",
          "answer": "1. Identify states\n2. Define transitions\n3. Set base cases\n4. Use memoization or tabulation\n5. Return final state value"
        },
        {
          "title": "What is unbounded knapsack?",
          "answer": "You can use each item multiple times.\nState: dp[i][w] = max(dp[i][w], val[i] + dp[i][w - wt[i]])"
        },
        {
          "title": "What is the coin change problem?",
          "answer": "Find minimum number of coins to make up a value.\nState: dp[amount] = min(dp[amount - coin] + 1)"
        },
        {
          "title": "How is the climbing stairs problem solved using DP?",
          "answer": "It’s like Fibonacci: dp[i] = dp[i-1] + dp[i-2], representing steps to reach stair i."
        },
        {
          "title": "Can DP be applied to games?",
          "answer": "Yes, many 2-player games with turn-based logic and score differences can be solved using DP with minimax or DP states."
        },
        {
          "title": "What is palindromic substring DP?",
          "answer": "You check if s[i..j] is palindrome based on s[i+1..j-1] and whether s[i] == s[j].\nState: dp[i][j] = true if s[i..j] is palindrome."
        },
        {
          "title": "Can DP work with graphs?",
          "answer": "Yes, especially in DAGs using topological order, or with memoization over visited states."
        },
        {
          "title": "How do you debug a DP solution?",
          "answer": "Print your DP table, check base cases, and verify transitions step-by-step."
        },
        {
          "title": "Why does DP use a table?",
          "answer": "To store results of subproblems so that each is solved only once."
        },
        {
          "title": "What are multiple state DP problems?",
          "answer": "Problems where each state has multiple components like dp[i][j][k].\nUsed in games, path problems, or knapsack variants."
        },
        {
          "title": "What is the frog jump problem in DP?",
          "answer": "Find minimum cost for frog to jump from 0 to n-1 index with 1 or 2 jumps.\ndp[i] = min(dp[i-1] + cost, dp[i-2] + cost)"
        },
        {
          "title": "Why is thinking recursively helpful in DP?",
          "answer": "Because defining a problem in terms of smaller subproblems (recursion) helps identify the DP state and transition."
        },
        {
          "title": "What are some famous contests/problems using DP?",
          "answer": "Problems like Tiling, Partition, Rod Cutting, Ninja Training, House Robber, and Leetcode’s Decode Ways."
        }
  
    ],



    "graphs": [
        {
          "title": "What is a graph in DSA?",
          "answer": "A graph is a collection of nodes (vertices) connected by edges. It is used to represent pairwise relationships like roads, networks, or dependencies."
        },
        {
          "title": "What are the types of graphs?",
          "answer": "Graphs can be directed (edges have direction) or undirected (edges have no direction), and weighted (edges have cost) or unweighted."
        },
        {
          "title": "What is a directed graph?",
          "answer": "A directed graph (digraph) has edges with direction, meaning from one node to another. Example: A → B"
        },
        {
          "title": "What is an undirected graph?",
          "answer": "An undirected graph has bidirectional edges. Example: A—B means both A is connected to B and vice versa."
        },
        {
          "title": "What is a weighted graph?",
          "answer": "A graph where each edge has a weight or cost associated with it.\nExample: A—(3)—B means weight between A and B is 3."
        },
        {
          "title": "What is an adjacency matrix?",
          "answer": "It’s a 2D array used to represent a graph. If there’s an edge from i to j, matrix[i][j] = 1 (or the weight if weighted)."
        },
        {
          "title": "What is an adjacency list?",
          "answer": "It stores a list of neighbors for each node.\nExample: graph[0] = [1, 2] means node 0 connects to 1 and 2."
        },
        {
          "title": "Which is better: adjacency list or matrix?",
          "answer": "Adjacency list is better for sparse graphs (few edges), while adjacency matrix is better for dense graphs (many edges)."
        },
        {
          "title": "What is the degree of a vertex?",
          "answer": "In undirected graphs, it’s the number of edges connected to it. In directed graphs, we have in-degree and out-degree."
        },
        {
          "title": "What is a path in a graph?",
          "answer": "A path is a sequence of vertices connected by edges.\nExample: A → B → C is a path from A to C."
        },
        {
          "title": "What is a cycle in a graph?",
          "answer": "A cycle is a path where the first and last nodes are the same, and no edge or vertex is repeated (except the start/end)."
        },
        {
          "title": "What is a connected graph?",
          "answer": "An undirected graph is connected if there's a path between every pair of nodes."
        },
        {
          "title": "What is a strongly connected graph?",
          "answer": "A directed graph is strongly connected if there's a path from every node to every other node in both directions."
        },
        {
          "title": "What is Breadth-First Search (BFS)?",
          "answer": "BFS is a traversal algorithm that explores neighbors level by level using a queue."
        },
        {
          "title": "What is Depth-First Search (DFS)?",
          "answer": "DFS explores as deep as possible before backtracking, using recursion or a stack."
        },
        {
          "title": "What data structure is used in BFS?",
          "answer": "A queue is used to store the next nodes to visit."
        },
        {
          "title": "What data structure is used in DFS?",
          "answer": "A stack is used, or recursion with an implicit call stack."
        },
        {
          "title": "What is the time complexity of BFS or DFS?",
          "answer": "O(V + E), where V is number of vertices and E is number of edges."
        },
        {
          "title": "How do you detect a cycle in an undirected graph?",
          "answer": "Use DFS or Union-Find. If a visited node is encountered again (excluding the parent), there’s a cycle."
        },
        {
          "title": "How do you detect a cycle in a directed graph?",
          "answer": "Use DFS with a recursion stack. If a node is visited again while still on the call stack, it’s a cycle."
        },
        {
          "title": "What is a topological sort?",
          "answer": "Topological sort is a linear ordering of vertices such that for every directed edge u → v, u appears before v."
        },
        {
          "title": "Which graph must be used for topological sort?",
          "answer": "Only Directed Acyclic Graphs (DAGs) can be topologically sorted."
        },
        {
          "title": "What is Kahn’s algorithm?",
          "answer": "Kahn’s algorithm uses BFS and in-degrees to perform topological sorting of a DAG."
        },
        {
          "title": "What is the difference between a tree and a graph?",
          "answer": "A tree is a special kind of graph with no cycles and exactly one path between any two nodes."
        },
        {
          "title": "What is a spanning tree?",
          "answer": "A spanning tree is a subset of a graph that includes all vertices and is a tree (no cycles)."
        },
        {
          "title": "What is a minimum spanning tree (MST)?",
          "answer": "It’s a spanning tree with the smallest possible total edge weight."
        },
        {
          "title": "Which algorithms are used for MST?",
          "answer": "1. Prim’s Algorithm\n2. Kruskal’s Algorithm"
        },
        {
          "title": "What is Prim’s Algorithm?",
          "answer": "Prim’s algorithm grows the MST by adding the smallest edge from the already-built MST using a priority queue."
        },
        {
          "title": "What is Kruskal’s Algorithm?",
          "answer": "Kruskal’s algorithm sorts all edges and adds the smallest ones that don’t form a cycle, using Union-Find."
        },
        {
          "title": "What is the Union-Find data structure?",
          "answer": "Union-Find (Disjoint Set Union) is used to track connected components. Supports union() and find() operations."
        },
        {
          "title": "What is path compression in Union-Find?",
          "answer": "It optimizes the find() operation by flattening the structure, making future queries faster."
        },
        {
          "title": "What is Dijkstra’s algorithm?",
          "answer": "Dijkstra finds the shortest path from a source node to all other nodes in a weighted graph without negative weights."
        },
        {
          "title": "What data structure is used in Dijkstra’s algorithm?",
          "answer": "A priority queue (min-heap) is used to always process the closest node first."
        },
        {
          "title": "What is Bellman-Ford algorithm?",
          "answer": "It finds shortest paths from a source node and works with negative weights. It can also detect negative cycles."
        },
        {
          "title": "What is the difference between Dijkstra and Bellman-Ford?",
          "answer": "Dijkstra is faster but doesn’t work with negative weights. Bellman-Ford handles negatives and detects negative cycles."
        },
        {
          "title": "What is Floyd-Warshall algorithm?",
          "answer": "It finds shortest paths between all pairs of vertices in a graph using dynamic programming."
        },
        {
          "title": "What is a bipartite graph?",
          "answer": "A graph whose vertices can be divided into two sets such that no edge connects vertices within the same set."
        },
        {
          "title": "How to check if a graph is bipartite?",
          "answer": "Use BFS or DFS and try to color the graph with two colors. If successful, it's bipartite."
        },
        {
          "title": "What is a bridge in a graph?",
          "answer": "An edge is a bridge if removing it increases the number of connected components."
        },
        {
          "title": "What is an articulation point?",
          "answer": "A node is an articulation point if removing it increases the number of connected components."
        },
        {
          "title": "What is a DAG?",
          "answer": "A Directed Acyclic Graph has no cycles and all edges have direction. Used in scheduling and task ordering."
        },
        {
          "title": "What is a shortest path?",
          "answer": "The path between two nodes with the minimum sum of edge weights."
        },
        {
          "title": "What is the difference between DFS and BFS?",
          "answer": "DFS goes deep first, uses a stack or recursion. BFS explores neighbors first, uses a queue. BFS is better for shortest path in unweighted graphs."
        },
        {
          "title": "What is transitive closure of a graph?",
          "answer": "It shows reachability: whether a path exists between every pair of nodes. Floyd-Warshall can compute it."
        },
        {
          "title": "What is a Hamiltonian path?",
          "answer": "A path that visits every vertex exactly once. Unlike Euler path, it focuses on visiting vertices, not edges."
        },
        {
          "title": "What is an Eulerian path?",
          "answer": "A path that uses every edge exactly once. Eulerian circuit ends at the starting vertex."
        },
        {
          "title": "What is a graph traversal?",
          "answer": "It means visiting all nodes in a graph in some order — BFS or DFS are common traversal techniques."
        },
        {
          "title": "What is a self-loop in a graph?",
          "answer": "It is an edge that connects a vertex to itself.\nExample: A → A"
        },
        {
          "title": "How are graphs used in real life?",
          "answer": "Graphs are used in GPS navigation, social networks, network routing, job scheduling, and game theory."
        }
      
    ],
    "bit-manipulation": [
      {
        title: "What are bitwise operators in Java?",
        answer: "Bitwise operators operate on bits and perform bit-by-bit operations. Common operators include:\n- AND (&)\n- OR (|)\n- XOR (^)\n- NOT (~)\n- Left Shift (<<)\n- Right Shift (>>)"
      },
      {
        title: "What is the binary one's complement operator (~)?",
        answer: "The binary one's complement operator (~) is a bitwise NOT operator. It inverts each bit of a number:\n- 1 becomes 0\n- 0 becomes 1\n\nJava uses 32-bit signed integers in two's complement form. When you apply ~ to a number, the result often becomes negative due to how negative numbers are stored.\n\nExample 1: ~5\n- 5 in binary (32-bit): 00000000 00000000 00000000 00000101\n- ~5 becomes:          11111111 11111111 11111111 11111010 (this is -6 in two's complement)\nSo, ~5 = -6\n\nExample 2: ~0\n- 0 in binary:         00000000 00000000 00000000 00000000\n- ~0 becomes:          11111111 11111111 11111111 11111111 (this is -1 in two's complement)\nSo, ~0 = -1\n\nSummary:\n~n = -(n + 1)"
      },      
      {
        title: "What does the left shift operator (<<) do?",
        answer: "It shifts bits to the left and appends 0s at the right. It multiplies the number by 2ⁿ.\nExample:\n5 << 2 = 20 (5 * 2²)"
      },
      {
        title: "What does the right shift operator (>> or >>>) do?",
        answer: "It shifts bits to the right. It divides the number by 2ⁿ.\nExample:\n6 >> 1 = 3 (6 / 2)"
      },
      {
        title: "How can you check if a number is even or odd using bitwise operators?",
        answer: "Use the expression (n & 1):\n- If result is 0 → Even number\n- If result is 1 → Odd number\nExample:\n3 & 1 = 1 → Odd,\n4 & 1 = 0 → Even"
      },
      {
        title: "Give an example program to check odd/even using bitwise operator.",
        answer: "java\npublic static void oddOrEven(int n) {\n  int bitmask = 1;\n  if ((n & bitmask) == 0) {\n    System.out.println(\"even number\");\n  } else {\n    System.out.println(\"odd number\");\n  }\n}\nodOrEven(3); // Output: odd number\n"
      },   
      {
        title: "How do you get the i-th bit of a number?",
        answer: "Use a bitmask to check if the i-th bit (0-indexed from right) is 1 or 0.\n\nApproach:\n- Create a bitmask by left-shifting 1 by i positions: `int bitmask = 1 << i;`\n- Use bitwise AND with the number: `(n & bitmask)`\n- If the result is 0, then the i-th bit is 0; else it's 1.\n\nJava Example:\n```java\nint n = 13; // binary: 1101\nint i = 2;  // we want the 2nd bit (counting from 0 on right)\nint bitmask = 1 << i; // 1 << 2 = 4 = 0100\n\nif ((n & bitmask) == 0)\n    System.out.println(\"0\");\nelse\n    System.out.println(\"1\");\n```\n\nExplanation:\n- n = 13 → binary = 1101\n- i = 2 → checking 3rd bit from right (which is 1)\n- bitmask = 0100\n- n & bitmask = 1101 & 0100 = 0100 ≠ 0 ⇒ bit is 1\n\nSo, output will be: `1`"
      },      
      {
        title: "How do you set the i-th bit of a number?",
        answer: "To set the i-th bit of a number (make it 1), use the bitwise OR `|` operator with a bitmask.\n\nApproach:\n- Create a bitmask by left-shifting 1 by i positions: `int bitmask = 1 << i;`\n- Use OR: `n | bitmask` — this sets the i-th bit to 1 (even if it was 0 before).\n\nJava Example:\n```java\nint n = 9; // binary: 1001\nint i = 1; // we want to set the 2nd bit (index 1)\nint bitmask = 1 << i; // 1 << 1 = 2 = 0010\nint result = n | bitmask; // 1001 | 0010 = 1011 = 11\nSystem.out.println(result);\n```\n\nExplanation:\n- n = 9 → binary: 1001\n- i = 1 → targeting the second bit from right\n- bitmask = 0010\n- n | bitmask = 1001 | 0010 = 1011 = 11\n\nSo, the output will be: `11`"
      },      
      {
        title: "How do you clear the i-th bit of a number?",
        answer: "To clear the i-th bit (i.e., set it to 0), use the bitwise AND `&` operator with the **inverse** (NOT) of a bitmask.\n\nApproach:\n- Create a bitmask: `1 << i`\n- Invert the bitmask: `~(1 << i)` — this has 0 at i-th position and 1s elsewhere\n- Use AND with the number: `n & ~bitmask` — this clears the i-th bit to 0, other bits remain the same.\n\nJava Example:\n```java\nint n = 13; // binary: 1101\nint i = 2;  // we want to clear the 3rd bit (index 2)\nint bitmask = ~(1 << i); // ~(1 << 2) = ~00000100 = 11111011\nint result = n & bitmask; // 1101 & 1011 = 1001 = 9\nSystem.out.println(result);\n```\n\nExplanation:\n- n = 13 → binary: 1101\n- i = 2 → targeting the 3rd bit (from right), which is 1\n- After clearing: the 3rd bit becomes 0 → result = 1001 = 9\n\nSo, output will be: `9`"
      },      
      {
        title: "How do you update the i-th bit to a specific value?",
        answer: "To update the i-th bit of a number to either 0 or 1, use a combination of **clearing** and **setting** logic based on the value you want.\n\nApproach:\n- If `newBit` is 0 → clear the i-th bit\n- If `newBit` is 1 → set the i-th bit\n\nJava Code:\n```java\n// Function to update the i-th bit to newBit (0 or 1)\nint updateIthBit(int n, int i, int newBit) {\n    int bitmask = 1 << i;\n    n = n & ~bitmask; // clear the i-th bit\n    return n | (newBit << i); // set i-th bit if newBit is 1\n}\n```\n\nExample:\n```java\nint n = 13;     // binary: 1101\nint i = 1;\nint newBit = 0; // we want to set 2nd bit to 0\nint result = updateIthBit(n, i, newBit); // should become 1101 → 1101 & ~(0010) = 1101 & 1101 = 1101 → 1101 = 13\n```\n\nExplanation:\n- n = 13 → binary: 1101\n- i = 1 → target the 2nd bit (which is 1)\n- newBit = 0 → so we clear it\n- Result becomes 1101 → 1101 = 13\n\nNow if `newBit = 1`, it would ensure that bit is set to 1.\n\nSo, this method allows flexible bit updates: `0` to `1` or `1` to `0` as needed."
      },      
      {
        title: "How do you clear bits in a given range [i, j]?",
        answer: "To clear (set to 0) all bits from position i to j (inclusive), you can use a bitmask that has 0s in that range and 1s elsewhere.\n\nApproach:\n1. Create left part: all 1s from j+1 to MSB:\n   `int a = (~0) << (j + 1);`\n2. Create right part: all 1s from LSB to i-1:\n   `int b = (1 << i) - 1;`\n3. Combine both to get full bitmask:\n   `int bitmask = a | b;`\n4. Clear range: `n & bitmask`\n\nJava Code:\n```java\nint clearRangeIToJ(int n, int i, int j) {\n    int a = (~0) << (j + 1);\n    int b = (1 << i) - 1;\n    int bitmask = a | b;\n    return n & bitmask;\n}\n```\n\nExample:\nLet n = 31 → binary: 00011111\nLet i = 1, j = 3 → we want to clear bits from position 1 to 3\n\nStep-by-step:\n- a = (~0) << 4 = 11110000\n- b = (1 << 1) - 1 = 00000001\n- bitmask = a | b = 11110000 | 00000001 = 11110001\n- n & bitmask = 00011111 & 11110001 = 00010001 = 17\n\n✅ Final result = 17"
      },      
      {
        title: "How can you check if a number is a power of 2?",
        answer: "Use the expression:\n```java\nreturn (n > 0) && ((n & (n - 1)) == 0);\n```\n\nExplanation:\n- A number is a power of 2 only if it has exactly **one '1' bit** in its binary form (like 1, 10, 100, etc.).\n- Subtracting 1 flips all the bits after the only '1' bit.\n- Doing `n & (n - 1)` will result in 0 **only for powers of 2**.\n\nExample:\n```java\nint n = 8; // binary: 1000\nint result = (n & (n - 1)); // 1000 & 0111 = 0000\n```\nSo, `8` is a power of 2 → returns true.\n\nNote:\n- Always check `n > 0` to avoid false positives for 0 or negatives."
      },      
      {
        title: "How do you count the number of set bits (1s) in a number?",
        answer: "To count how many bits are set to 1 in the binary form of a number, use bitwise AND and right shift in a loop.\n\nJava Code:\n```java\nint count = 0;\nwhile (n > 0) {\n  if ((n & 1) != 0) count++; // check last bit\n  n = n >> 1; // right shift to check next bit\n}\nreturn count;\n```\n\nExample:\nLet `n = 13` → binary = `1101`\nStep-by-step:\n- 1101 & 0001 = 1 → count = 1\n- 110 → 110 & 1 = 0 → count = 1\n- 11 → 11 & 1 = 1 → count = 2\n- 1 → 1 & 1 = 1 → count = 3\n\n✅ Final count = 3 (because 1101 has three 1s)\n\nThis method is simple and works for any positive integer."
      },
      {
        title: "How do you calculate fast exponentiation using bit manipulation?",
        answer: "Fast exponentiation (also called exponentiation by squaring) uses bit manipulation to efficiently calculate `a^n` in O(log n) time.\n\nJava Code:\n```java\nint fastPower(int a, int n) {\n  int ans = 1;\n  while (n > 0) {\n    if ((n & 1) != 0) ans *= a; // if current bit is 1, multiply\n    a *= a;                    // square the base\n    n >>= 1;                   // right shift exponent\n  }\n  return ans;\n}\n```\n\nExample:\nLet a = 3, n = 5 → compute 3^5\nBinary of 5 = 101\nSteps:\n- n = 101: last bit is 1 → ans = ans * 3 = 3\n- a = 3 * 3 = 9, n >> 1 = 10\n- next bit is 0 → skip multiply\n- a = 9 * 9 = 81, n >> 1 = 1\n- bit is 1 → ans = 3 * 81 = 243\n\n✅ Final answer = 243\n\nThis method avoids repeated multiplication and is much faster for large exponents."
      }
      
    ],


  
    "binary-search-sorting": [
      {
        "title": "What is Binary Search?",
        "answer": "Binary Search is an efficient algorithm to find an element in a sorted array by repeatedly dividing the search space in half."
      },
      {
        "title": "What is the time complexity of Binary Search?",
        "answer": "O(log n), where n is the number of elements in the array."
      },
      {
        "title": "Can Binary Search be applied to unsorted arrays?",
        "answer": "No. Binary Search requires the array to be sorted."
      },
      {
        "title": "What is the space complexity of Binary Search?",
        "answer": "O(1) for iterative version and O(log n) for recursive version due to call stack."
      },
      {
        "title": "How does Binary Search work?",
        "answer": "1. Find mid = (low + high) / 2\n2. If target == mid → return\n3. If target < mid → search left\n4. Else → search right"
      },
      {
        "title": "How is Binary Search used in finding the lower/upper bound?",
        "answer": "Modify the condition to find the smallest/largest index where a value could be inserted without violating order."
      },
      {
        "title": "What is Binary Search on answer?",
        "answer": "It is a technique where Binary Search is applied on a range of answers instead of an array.\nExample: Minimize the max pages assigned in book allocation problem."
      },
      {
        "title": "What are some applications of Binary Search?",
        "answer": "Finding element in sorted data, peak element, square root, search in rotated array, parametric search."
      },
      {
        "title": "What is a Sorting Algorithm?",
        "answer": "A sorting algorithm arranges elements in a particular order (ascending/descending) to improve searchability or readability."
      },
      {
        "title": "What is Bubble Sort?",
        "answer": "Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order."
      },
      {
        "title": "What is the time complexity of Bubble Sort?",
        "answer": "Best: O(n) (if optimized), Worst: O(n²), Average: O(n²)"
      },
      {
        "title": "What is Insertion Sort?",
        "answer": "Insertion Sort builds the sorted array one element at a time by inserting current element into its correct position."
      },
      {
        "title": "What is the time complexity of Insertion Sort?",
        "answer": "Best: O(n), Worst: O(n²), Average: O(n²)"
      },
      {
        "title": "What is Selection Sort?",
        "answer": "Selection Sort repeatedly finds the minimum element and places it at the beginning of the array."
      },
      {
        "title": "What is the time complexity of Selection Sort?",
        "answer": "O(n²) for all cases. It performs well on small arrays but is inefficient for large data."
      },
      {
        "title": "What is Merge Sort?",
        "answer": "Merge Sort is a divide-and-conquer algorithm that divides the array into halves, sorts them, and merges the sorted halves."
      },
      {
        "title": "What is the time complexity of Merge Sort?",
        "answer": "O(n log n) for all cases. It’s stable and used for linked lists and external sorting."
      },
      {
        "title": "What is Quick Sort?",
        "answer": "Quick Sort is a divide-and-conquer algorithm that picks a pivot, partitions the array around it, and sorts the subarrays."
      },
      {
        "title": "What is the time complexity of Quick Sort?",
        "answer": "Best & Avg: O(n log n), Worst: O(n²) (happens with bad pivots)"
      },
      {
        "title": "What is Heap Sort?",
        "answer": "Heap Sort builds a max heap and repeatedly extracts the maximum to sort the array."
      },
      {
        "title": "What is the time complexity of Heap Sort?",
        "answer": "O(n log n) in all cases. It’s not stable but doesn’t require additional memory."
      },
      {
        "title": "What is Counting Sort?",
        "answer": "Counting Sort is a non-comparison-based algorithm that counts the frequency of elements and places them accordingly."
      },
      {
        "title": "When is Counting Sort useful?",
        "answer": "When input elements are integers within a limited range. Time complexity is O(n + k)."
      },
      {
        "title": "What is Radix Sort?",
        "answer": "Radix Sort processes elements digit by digit, starting from least significant to most significant digit using Counting Sort."
      },
      {
        "title": "What is the time complexity of Radix Sort?",
        "answer": "O(nk), where k is number of digits. It works best when numbers are small and have fixed digit length."
      },
      {
        "title": "What is Bucket Sort?",
        "answer": "Bucket Sort distributes elements into buckets and sorts each bucket individually, often using Insertion Sort."
      },
      {
        "title": "What are stable sorting algorithms?",
        "answer": "Sorting algorithms that maintain relative order of equal elements.\nExamples: Bubble, Merge, Insertion, Counting, Radix"
      },
      {
        "title": "Which sorting algorithms are unstable?",
        "answer": "Selection Sort, Heap Sort, Quick Sort (default)."
      },
      {
        "title": "Which sorting algorithms are comparison-based?",
        "answer": "Bubble, Insertion, Selection, Merge, Quick, Heap"
      },
      {
        "title": "Which sorting algorithms are not comparison-based?",
        "answer": "Counting Sort, Radix Sort, Bucket Sort — they use value/digit logic instead of comparisons."
      },
      {
        "title": "What is the lower bound for comparison-based sorting?",
        "answer": "Ω(n log n). Any algorithm based only on comparisons cannot be faster than this."
      },
      {
        "title": "Which sorting algorithm is best for small arrays?",
        "answer": "Insertion Sort is preferred for small or nearly sorted arrays due to low overhead."
      },
      {
        "title": "Which sorting algorithm is best for linked lists?",
        "answer": "Merge Sort is efficient for linked lists since it doesn’t require random access."
      },
      {
        "title": "When is Quick Sort preferred over Merge Sort?",
        "answer": "When space is limited and average-case performance is acceptable."
      },
      {
        "title": "What causes Quick Sort to perform badly?",
        "answer": "Poor pivot choices (e.g., smallest/largest element in sorted array) cause O(n²) time."
      },
      {
        "title": "How do you optimize Quick Sort?",
        "answer": "Use randomized pivot or median-of-three technique."
      },
      {
        "title": "What is hybrid sorting?",
        "answer": "A mix of algorithms (e.g., Tim Sort in Python/Java uses Merge + Insertion Sort for real-world efficiency)."
      },
      {
        "title": "Which sorting algorithm is used by Java?",
        "answer": "Java uses Tim Sort for objects (stable, based on Merge + Insertion Sort)."
      },
      {
        "title": "What is Shell Sort?",
        "answer": "Shell Sort is a generalization of Insertion Sort that allows comparison and swapping at far distances."
      },
      {
        "title": "Is Merge Sort in-place?",
        "answer": "No, it uses extra space for temporary arrays."
      },
      {
        "title": "Is Heap Sort in-place?",
        "answer": "Yes, it sorts without requiring extra memory (O(1) space)."
      },
      {
        "title": "What sorting algorithm works well with external memory (e.g., disk)?",
        "answer": "Merge Sort, because it accesses data sequentially."
      },
      {
        "title": "Which sorting algorithm is best for real-time systems?",
        "answer": "Heap Sort — predictable O(n log n) performance and in-place."
      },
      {
        "title": "What is the difference between stable and unstable sorting?",
        "answer": "Stable sort keeps order of equal elements unchanged.\nUnstable sort may change their relative order."
      },
      {
        "title": "What is Tim Sort?",
        "answer": "A hybrid sorting algorithm combining Merge and Insertion Sort for practical efficiency in real-world data."
      },
      {
        "title": "How is Binary Insertion Sort different from normal Insertion Sort?",
        "answer": "It uses Binary Search to find the correct position but still shifts elements.\nTime: O(n log n) comparisons but O(n²) moves."
      },
      {
        "title": "Which sorting algorithm minimizes number of swaps?",
        "answer": "Selection Sort makes the minimum number of swaps — O(n) swaps in worst case."
      },
      {
        "title": "Which sorting algorithm is best in worst case?",
        "answer": "Merge Sort and Heap Sort offer consistent O(n log n) time in worst case."
      }
    ],
    "disjoint-set": [
      {
        "title": "What is a Disjoint Set?",
        "answer": "A Disjoint Set, also known as Union-Find, is a data structure used to keep track of a set of elements partitioned into non-overlapping subsets."
      },
      {
        "title": "What are the main operations in Disjoint Set?",
        "answer": "1. Find(x): Determines the representative (parent) of the set containing x.\n2. Union(x, y): Merges the sets containing x and y."
      },
      {
        "title": "What is the use of Disjoint Set in algorithms?",
        "answer": "Disjoint Set is used in Kruskal’s MST algorithm, cycle detection in graphs, connected components, and network connectivity problems."
      },
      {
        "title": "What is Find operation?",
        "answer": "Find determines the root or representative of the set a particular element belongs to."
      },
      {
        "title": "What is Union operation?",
        "answer": "Union merges two disjoint sets into one, connecting two elements' parent nodes."
      },
      {
        "title": "What is Path Compression?",
        "answer": "Path Compression is an optimization for the Find operation. It flattens the structure of the tree by making every node point directly to the root."
      },
      {
        "title": "What is Union by Rank?",
        "answer": "It is an optimization that attaches the smaller tree under the root of the deeper tree to keep the tree shallow."
      },
      {
        "title": "What is the time complexity of Union-Find with optimizations?",
        "answer": "O(α(n)), where α(n) is the inverse Ackermann function — nearly constant for all practical purposes."
      },
      {
        "title": "What does 'disjoint' mean?",
        "answer": "It means the sets do not share any elements. Each element belongs to exactly one set."
      },
      {
        "title": "What is the initial state of Disjoint Set?",
        "answer": "Each element is its own parent; each is in its own set."
      },
      {
        "title": "How is Disjoint Set represented in memory?",
        "answer": "Using an array or map where each index points to its parent. If an element is its own parent, it's the root."
      },
      {
        "title": "Why is Path Compression important?",
        "answer": "It speeds up future Find operations by reducing the height of the tree structure."
      },
      {
        "title": "How does Union by Rank improve performance?",
        "answer": "By always attaching the smaller tree to the larger one, it keeps the tree height small, leading to faster operations."
      },
      {
        "title": "Is Disjoint Set a tree-based data structure?",
        "answer": "Yes, it internally uses trees where each node points to a parent."
      },
      {
        "title": "How is Disjoint Set different from a HashSet?",
        "answer": "Disjoint Set supports union and find operations across sets, while HashSet is used only for unique elements and membership checking."
      },
      {
        "title": "What are some real-world applications of Disjoint Set?",
        "answer": "1. Kruskal’s MST\n2. Network connectivity\n3. Image processing\n4. Social networks\n5. Cycle detection"
      },
      {
        "title": "Can Disjoint Set be used in dynamic connectivity problems?",
        "answer": "Yes, it is ideal for tracking connected components in a dynamic graph."
      },
      {
        "title": "What is the inverse Ackermann function?",
        "answer": "A very slowly growing function. Even for n up to 10^80, α(n) ≤ 5. That's why Union-Find is considered nearly constant time."
      },
      {
        "title": "Can you implement Disjoint Set using linked lists?",
        "answer": "Yes, but it’s inefficient. Trees with path compression and union by rank are much faster."
      },
      {
        "title": "What data structure is typically used for Disjoint Set?",
        "answer": "An array or hashmap to store parent links and optionally ranks or sizes."
      },
      {
        "title": "How is cycle detection done using Union-Find?",
        "answer": "For every edge, check if the two vertices belong to the same set using Find. If yes, a cycle exists."
      },
      {
        "title": "What is the difference between rank and size in Union-Find?",
        "answer": "Rank is the tree height. Size is the number of elements in the set. Either can be used for union optimization."
      },
      {
        "title": "What happens if we don’t use path compression?",
        "answer": "The tree can become skewed and tall, making Find operations slower — up to O(n) in worst case."
      },
      {
        "title": "What is the base case in Find function?",
        "answer": "If the element is its own parent, then it is the representative (root) of its set."
      },
      {
        "title": "Is Union-Find an online algorithm?",
        "answer": "Yes, because it can handle operations dynamically and incrementally as input arrives."
      },
      {
        "title": "Is Union-Find recursive?",
        "answer": "Find is often implemented recursively for path compression, but it can also be iterative."
      },
      {
        "title": "What is the space complexity of Disjoint Set?",
        "answer": "O(n), where n is the number of elements."
      },
      {
        "title": "How is Union-Find used in Kruskal’s Algorithm?",
        "answer": "It helps determine whether adding an edge would form a cycle by checking if two vertices belong to the same set."
      },
      {
        "title": "What is the output of Find operation?",
        "answer": "The representative or root element of the set to which the input element belongs."
      },
      {
        "title": "Can Disjoint Set handle string elements?",
        "answer": "Yes, with a HashMap-based implementation instead of arrays."
      },
      {
        "title": "Can two sets be merged more than once?",
        "answer": "No, once merged, they become a single set. Repeated unions will have no additional effect."
      },
      {
        "title": "Is Disjoint Set suitable for Directed Graphs?",
        "answer": "Primarily used in undirected graphs. For directed graphs, other algorithms like DFS, Union by Rank + DSU can be customized."
      },
      {
        "title": "How is union by size different from union by rank?",
        "answer": "Union by size merges smaller sized set under the larger one, rather than comparing ranks (tree height)."
      },
      {
        "title": "Can Disjoint Set support rollback operations?",
        "answer": "Not by default. Persistent or undoable DSU (advanced technique) can support rollback."
      },
      {
        "title": "Can you track number of disjoint sets?",
        "answer": "Yes, initialize count = n and decrement when union is successful."
      },
      {
        "title": "What is the role of Disjoint Set in maze generation?",
        "answer": "Used to ensure each cell belongs to one connected region without cycles."
      },
      {
        "title": "How can Disjoint Set detect redundant connections?",
        "answer": "By checking if the two nodes of an edge are already connected using Find. If yes, it's a redundant connection."
      },
      {
        "title": "What is DSU on Tree?",
        "answer": "An advanced optimization using Union-Find to solve subtree queries efficiently in tree data structures."
      },
      {
        "title": "Can Disjoint Set store extra info per set?",
        "answer": "Yes, with union by size or attaching metadata to root nodes like count, sum, min/max."
      },
      {
        "title": "What is the worst-case time complexity of naive Union-Find?",
        "answer": "O(n) per operation, due to tall trees. That’s why optimizations are important."
      },
      {
        "title": "Is Disjoint Set a greedy algorithm?",
        "answer": "No, but it is commonly used in greedy algorithms like Kruskal’s."
      },
      {
        "title": "How to handle dynamic addition of elements in Disjoint Set?",
        "answer": "Use HashMap to lazily initialize elements as needed."
      },
      {
        "title": "Can Disjoint Set be used in social network problems?",
        "answer": "Yes. It can model communities or friend groups by merging users who are connected."
      },
      {
        "title": "What happens if Union is called on two elements already in the same set?",
        "answer": "The operation has no effect. They're already connected."
      },
      {
        "title": "What is union by depth?",
        "answer": "Another name for union by rank — prioritizing smaller height trees to reduce total tree height."
      },
      {
        "title": "Can DSU be parallelized?",
        "answer": "It’s challenging due to shared structure updates, but possible using concurrent DSU in specialized cases."
      },
      {
        "title": "Can Disjoint Set be applied to grid-based problems?",
        "answer": "Yes. It’s commonly used in island counting, percolation, and connectivity in 2D matrices."
      }
    ],
    "trie": [
      {
        "title": "What is a Trie?",
        "answer": "A Trie is a tree-like data structure used to store strings efficiently for operations like insert, search, and prefix matching."
      },
      {
        "title": "What is the main use of Trie?",
        "answer": "Tries are mainly used for autocomplete, spell checking, IP routing, and prefix-based search."
      },
      {
        "title": "What are the components of a Trie node?",
        "answer": "Each node usually contains:\n- A map/array of children\n- A boolean flag to indicate end of word (isEndOfWord)"
      },
      {
        "title": "What is the time complexity of inserting a word in Trie?",
        "answer": "O(L), where L is the length of the word."
      },
      {
        "title": "What is the time complexity of searching in Trie?",
        "answer": "O(L), where L is the length of the word."
      },
      {
        "title": "What is the time complexity of prefix search in Trie?",
        "answer": "O(L), where L is the length of the prefix."
      },
      {
        "title": "How does Trie improve performance over HashMap for prefix queries?",
        "answer": "HashMap doesn't support prefix matching efficiently. Trie shares common prefixes and enables fast lookup."
      },
      {
        "title": "What is the space complexity of a Trie?",
        "answer": "O(N * L), where N is the number of words and L is average word length. Space depends on total unique characters used."
      },
      {
        "title": "Can Trie handle Unicode characters?",
        "answer": "Yes, if implemented using HashMap or dictionary instead of a fixed-size array."
      },
      {
        "title": "How is Trie different from HashMap?",
        "answer": "HashMap provides O(1) lookup for exact keys but not for prefixes. Trie supports fast prefix-based operations."
      },
      {
        "title": "What is isEndOfWord in Trie?",
        "answer": "A boolean flag that marks whether a complete word ends at the current node."
      },
      {
        "title": "How do you delete a word from a Trie?",
        "answer": "Recursively unmark isEndOfWord and delete unnecessary child nodes if they are no longer needed."
      },
      {
        "title": "How do you implement autocomplete using Trie?",
        "answer": "After reaching the prefix node, perform DFS from there to find all words that start with that prefix."
      },
      {
        "title": "What is a compressed Trie?",
        "answer": "Also called Radix Trie. It compresses single-child paths into one node, reducing memory and improving speed."
      },
      {
        "title": "What is a Suffix Trie?",
        "answer": "A Trie that stores all possible suffixes of a string. Useful in string matching problems like substring search."
      },
      {
        "title": "What is a Ternary Search Tree?",
        "answer": "A hybrid between a Binary Search Tree and Trie where each node has 3 pointers: less, equal, and greater."
      },
      {
        "title": "What are real-world applications of Trie?",
        "answer": "Autocomplete, spell checker, DNS lookup, IP routing, T9 predictive text, and dictionary implementations."
      },
      {
        "title": "How is Trie used in search engines?",
        "answer": "For fast lookup and ranking of keywords and prefix-based search suggestions."
      },
      {
        "title": "What are pros of using Trie?",
        "answer": "Fast prefix matching, lexicographic ordering, avoids key collisions unlike hash maps."
      },
      {
        "title": "What are cons of using Trie?",
        "answer": "High space complexity due to many null children in sparse datasets."
      },
      {
        "title": "How is Trie implemented in C++?",
        "answer": "Using arrays of size 26 for lowercase a–z or using unordered_map<char, TrieNode*> for general characters."
      },
      {
        "title": "How do you search for a prefix in Trie?",
        "answer": "Traverse nodes for each character in the prefix. If traversal completes, prefix exists."
      },
      {
        "title": "Can Trie be used for palindrome pair detection?",
        "answer": "Yes. Use reverse word Trie and check for prefix-suffix palindrome conditions during insert/search."
      },
      {
        "title": "What is the difference between Trie and BST?",
        "answer": "BST compares full keys; Trie splits key by characters and shares common prefixes, making prefix search faster."
      },
      {
        "title": "Can Trie be used for pattern matching with wildcards?",
        "answer": "Yes, you can modify DFS to handle '.' or '*' wildcards during search."
      },
      {
        "title": "How do you print all words in a Trie?",
        "answer": "Perform DFS or backtracking from the root while building the path string along the way."
      },
      {
        "title": "Can you implement a spell checker using Trie?",
        "answer": "Yes. Trie can be used to suggest valid words when a typo or prefix is entered."
      },
      {
        "title": "How to find the longest common prefix of words using Trie?",
        "answer": "Insert all words. Then from the root, move down while only one child exists and isEndOfWord is false."
      },
      {
        "title": "What is the difference between Trie and HashSet for word dictionary?",
        "answer": "HashSet is efficient for exact matches; Trie supports prefix-based operations and memory-efficient storage of similar keys."
      },
      {
        "title": "What is Trie pruning?",
        "answer": "Removing unnecessary branches (nodes) after deletion or when they are no longer used."
      },
      {
        "title": "How do you count total words in a Trie?",
        "answer": "Do a DFS traversal and count nodes with isEndOfWord = true."
      },
      {
        "title": "How is Trie useful in IP routing?",
        "answer": "Binary Trie or Patricia Trie stores binary representations of IP addresses for fast longest prefix matching."
      },
      {
        "title": "What is a Patricia Trie?",
        "answer": "A compressed Trie where nodes with only one child are merged. Used in IP lookup and memory optimization."
      },
      {
        "title": "Can Trie be used for substring search?",
        "answer": "Yes, by building a Suffix Trie with all possible suffixes of the text."
      },
      {
        "title": "Is Trie a dynamic data structure?",
        "answer": "Yes. Nodes are dynamically created as new strings are inserted."
      },
      {
        "title": "What is the maximum number of children for a Trie node?",
        "answer": "Depends on the character set. For lowercase English: 26; For ASCII: 128; For Unicode: up to 65536."
      },
      {
        "title": "Can Trie support delete operation?",
        "answer": "Yes, but it requires careful backtracking to remove unused nodes while preserving other words."
      },
      {
        "title": "What is the use of Trie in competitive programming?",
        "answer": "Used in string-related problems involving dictionary, prefix queries, pattern search, and substring checks."
      },
      {
        "title": "Why does Trie perform better than HashMap for autocomplete?",
        "answer": "Trie shares common prefixes, reducing redundant comparisons and space when handling many similar strings."
      },
      {
        "title": "How do you design a Trie class?",
        "answer": "Design methods like insert(word), search(word), startsWith(prefix) and a nested TrieNode class with children and end flag."
      },
      {
        "title": "What are edge cases to consider in Trie operations?",
        "answer": "Empty strings, null characters, deletion of words that are prefixes of other words."
      },
      {
        "title": "What is a wildcard Trie search?",
        "answer": "Allows characters like '.' to match any character in the word. Needs recursive DFS with branching at wildcard."
      },
      {
        "title": "Can Trie be used for Leetcode Word Search II?",
        "answer": "Yes. Use a Trie to store all words, then perform backtracking DFS on board using the Trie for pruning."
      },
      {
        "title": "What is Trie optimization with reference counts?",
        "answer": "Each node keeps track of how many words pass through it, allowing efficient prefix deletions and word counts."
      },
      {
        "title": "How do you count number of words with a given prefix?",
        "answer": "Traverse Trie for the prefix, then count all isEndOfWord=true nodes below using DFS."
      },
      {
        "title": "What is the Leetcode implementation of Trie?",
        "answer": "Leetcode-style Trie has three functions: insert(), search(), startsWith(). It uses nested TrieNode classes and fixed arrays/maps."
      },
      {
        "title": "Why is Trie faster for word search than Set?",
        "answer": "Trie avoids full string comparison and enables early pruning, especially when searching multiple words at once."
      }
    ],

    "greedy":[
      {
        "title": "What is a Greedy Algorithm?",
        "answer": "A greedy algorithm builds up a solution step by step by choosing the locally optimal option at each stage, hoping it leads to a globally optimal solution."
      },
      {
        "title": "When is the greedy approach effective?",
        "answer": "It works well when a problem exhibits both Greedy Choice Property and Optimal Substructure."
      },
      {
        "title": "What is the Greedy Choice Property?",
        "answer": "It means a locally optimal choice at each step leads to a globally optimal solution."
      },
      {
        "title": "What is Optimal Substructure?",
        "answer": "A problem has optimal substructure if an optimal solution to the problem contains optimal solutions to its subproblems."
      },
      {
        "title": "What are examples of greedy algorithms?",
        "answer": "1. Activity Selection\n2. Huffman Encoding\n3. Fractional Knapsack\n4. Prim’s MST\n5. Dijkstra’s Algorithm"
      },
      {
        "title": "How does Greedy differ from Dynamic Programming?",
        "answer": "Greedy makes decisions one by one and never reconsiders them. DP solves all subproblems and chooses the best. Greedy is faster but not always correct."
      },
      {
        "title": "How is Greedy different from Brute Force?",
        "answer": "Greedy optimizes at each step using a heuristic. Brute Force explores all possible solutions."
      },
      {
        "title": "What is the time complexity of a greedy algorithm?",
        "answer": "Varies by problem, but typically O(n log n) when sorting is involved, or O(n) when a single pass suffices."
      },
      {
        "title": "What is the Fractional Knapsack problem?",
        "answer": "It allows breaking items and selecting fractions. Greedy by value/weight ratio gives optimal result."
      },
      {
        "title": "Why doesn’t greedy work for 0/1 Knapsack?",
        "answer": "You can’t take fractions. Greedy may pick high ratio but miss the optimal subset. DP is needed for correctness."
      },
      {
        "title": "What is the Activity Selection problem?",
        "answer": "Select the maximum number of non-overlapping activities. Sort by end time and use greedy selection."
      },
      {
        "title": "What is a classic greedy algorithm used in graphs?",
        "answer": "Prim’s and Kruskal’s algorithms for Minimum Spanning Tree are classic greedy graph algorithms."
      },
      {
        "title": "What is Kruskal’s algorithm?",
        "answer": "Sort all edges by weight and pick the smallest edge that doesn’t form a cycle. Use Union-Find for efficiency."
      },
      {
        "title": "What is Prim’s algorithm?",
        "answer": "Start from any node, greedily pick the smallest adjacent edge connecting to the MST. Use a min heap for optimization."
      },
      {
        "title": "What is Huffman Encoding?",
        "answer": "It is a greedy algorithm used to compress data by assigning shorter codes to more frequent characters."
      },
      {
        "title": "What is the greedy strategy for coin change?",
        "answer": "Pick the largest denomination less than the amount repeatedly. Works only for specific coin systems (canonical systems)."
      },
      {
        "title": "Why doesn’t greedy coin change work for all denominations?",
        "answer": "Because it may miss the optimal combination. Example: For coins {1, 3, 4}, greedy fails for amount = 6."
      },
      {
        "title": "What is the greedy approach for job sequencing?",
        "answer": "Sort jobs by profit in descending order and schedule each job in the latest available slot before its deadline."
      },
      {
        "title": "What is Interval Scheduling?",
        "answer": "Select the maximum number of non-overlapping intervals. Greedy strategy: sort by end time and select compatible intervals."
      },
      {
        "title": "What is the greedy approach in Dijkstra’s algorithm?",
        "answer": "Select the closest unvisited node and update distances of its neighbors. Uses a greedy strategy with a priority queue."
      },
      {
        "title": "What is the greedy approach for minimum platforms problem?",
        "answer": "Sort arrival and departure times, use two pointers to track platforms needed at each time."
      },
      {
        "title": "What is the greedy method for gas station problem?",
        "answer": "Always travel to the farthest reachable gas station from the current fuel, minimizing refills."
      },
      {
        "title": "Can greedy algorithms be recursive?",
        "answer": "Yes, but most greedy algorithms are implemented iteratively for simplicity and performance."
      },
      {
        "title": "What is a matroid and how is it related to greedy?",
        "answer": "Matroids are mathematical structures where greedy algorithms always yield optimal results. Many greedy algorithms work on problems modeled as matroids."
      },
      {
        "title": "Is greedy optimal for all optimization problems?",
        "answer": "No. It works only when the problem satisfies greedy choice and optimal substructure properties."
      },
      {
        "title": "Can greedy algorithms be used with backtracking?",
        "answer": "Rarely. Backtracking explores all options. Greedy commits early decisions, while backtracking undoes them if needed."
      },
      {
        "title": "What is the greedy solution to the minimum number of coins?",
        "answer": "Pick the largest coin less than the remaining amount. Continue until the amount becomes 0."
      },
      {
        "title": "What are common characteristics of greedy problems?",
        "answer": "1. Sorted order\n2. Irrevocable choices\n3. Local optimization leads to global optimization"
      },
      {
        "title": "What is the greedy approach for Egyptian fraction?",
        "answer": "Keep subtracting the largest unit fraction smaller than the remaining value until the remainder is zero."
      },
      {
        "title": "What is the greedy solution to merge overlapping intervals?",
        "answer": "Sort intervals by start time, then merge overlapping ones while traversing the list."
      },
      {
        "title": "What’s the greedy idea behind Rope Joining (Minimize Cost)?",
        "answer": "Always join the two smallest ropes first. Use a min heap to do this efficiently (like Huffman encoding)."
      },
      {
        "title": "What is the greedy solution to the ‘Jump Game’?",
        "answer": "From each index, greedily jump to the farthest reachable position until you reach the end."
      },
      {
        "title": "Is it possible to convert a DP problem to greedy?",
        "answer": "Sometimes. If a DP problem exhibits greedy choice property, you can simplify it with a greedy solution."
      },
      {
        "title": "What is the greedy strategy in minimizing absolute difference pairs?",
        "answer": "Sort both arrays and pair corresponding elements. This minimizes overall absolute differences."
      },
      {
        "title": "What is greedy coloring in graphs?",
        "answer": "Assign the smallest possible color to each vertex such that no two adjacent vertices share the same color."
      },
      {
        "title": "What is greedy string compression?",
        "answer": "Greedily merge substrings with highest compression potential first to reduce string length."
      },
      {
        "title": "What is the greedy idea behind scheduling lectures with deadlines?",
        "answer": "Use a priority queue to always schedule lectures with the highest profit and valid deadlines."
      },
      {
        "title": "Can greedy be used in recursive tree problems?",
        "answer": "Yes, if at each node, a local decision (like maximum sum or minimum cost) leads to a correct global result."
      },
      {
        "title": "Is greedy always faster than DP?",
        "answer": "Usually yes, because it avoids solving all subproblems. But correctness must be ensured."
      },
      {
        "title": "What is a common mistake when using greedy?",
        "answer": "Assuming local optimum always leads to global optimum. Always verify conditions before applying greedy."
      },
      {
        "title": "Can greedy and DP both solve the same problem?",
        "answer": "Yes. Greedy is faster but only works for specific cases. DP is more general but slower."
      },
      {
        "title": "What’s the greedy solution for maximum number of non-overlapping meetings?",
        "answer": "Sort by end times and pick meetings that start after the last selected one ends."
      },
      {
        "title": "Why is sorting important in greedy problems?",
        "answer": "Sorting helps order elements to make optimal local choices (e.g., by deadline, value, cost)."
      },
      {
        "title": "What is a two-pointer greedy technique?",
        "answer": "Use two pointers moving from opposite ends to make greedy decisions, commonly in arrays and intervals."
      },
      {
        "title": "How to prove a greedy solution is correct?",
        "answer": "1. Show Greedy Choice Property\n2. Show Optimal Substructure\n3. Use counterexamples for invalid approaches"
      },
      {
        "title": "What are limitations of greedy algorithms?",
        "answer": "They are problem-specific. If applied blindly, they can lead to incorrect results."
      },
      {
        "title": "Why is greedy preferred in real-time systems?",
        "answer": "Greedy is fast and uses less memory. It’s ideal for approximate or heuristic solutions under time constraints."
      },
    ],

    "queen-suduko":[
      {
        title: "What is the N-Queens problem?",
        answer: "It is a classic backtracking problem where the goal is to place N queens on an N×N chessboard such that no two queens threaten each other."
      },
      {
        title: "What is the base condition in the N-Queens recursive function?",
        answer: "The base case is when the current row equals the board size. It means all queens are placed correctly.\njava\nif(row == board.length) return true;"
      },
      {
        title: "How does the 'isSafe' function work in N-Queens?",
        answer: "isSafe checks for three conditions:\n1. Same column (upward)\n2. Upper-left diagonal\n3. Upper-right diagonal\nIf any of these have a queen, return false."
      },
      {
        title: "How do you backtrack in N-Queens?",
        answer: "After placing a queen and checking further, if no solution is found, the queen is removed (backtracked):\njava\nboard[row][j] = 'X';"
      },
      {
        title: "What is the time complexity of the N-Queens algorithm?",
        answer: "Time Complexity: O(N!) in the worst case because each queen has N possible positions and we try all combinations."
      },
      {
        title: "How do you count total solutions in the N-Queens problem?",
        answer: "Use a global/static counter variable. Increment it in the base case where all queens are successfully placed."
      },
      {
        title: "Write a function call to start solving the N-Queens problem.",
        answer: "java\nnQueens(board, 0);\n"
      },
      {
        title: "How to print the chess board in the N-Queens program?",
        answer: "java\nfor(int i=0;i<board.length;i++){\n  for(int j=0;j<board.length;j++){\n    System.out.print(board[i][j] + \" \");\n  }\n  System.out.println();\n}"
      },
      {
        title: "How do you modify the N-Queens code to return only 1 solution?",
        answer: "Change the recursive method to return true if a solution is found, and stop further recursive calls after that."
      },
      {
        title: "How do you check if a solution is possible in N-Queens?",
        answer: "In the main function, check if nQueens(board, 0) returns true or false and print accordingly:\njava\nif(nQueens(board, 0))\n  System.out.println(\"Solution is possible\");\nelse\n  System.out.println(\"Not possible\");"
      },
      {
        title: "Check if placing a digit is safe (row only)",
        answer: `
  function isRowSafe(sudoku, row, digit) {
      for (let j = 0; j < 9; j++) {
          if (sudoku[row][j] === digit) {
              return false;
          }
      }
      return true;
  }`
      },
      {
        title: "Check if placing a digit is safe (column only)",
        answer: `
  function isColSafe(sudoku, col, digit) {
      for (let i = 0; i < 9; i++) {
          if (sudoku[i][col] === digit) {
              return false;
          }
      }
      return true;
  }`
      },
      {
        title: "Check if digit can be placed in 3x3 grid",
        answer: `
  function isGridSafe(sudoku, row, col, digit) {
      const sr = Math.floor(row / 3) * 3;
      const sc = Math.floor(col / 3) * 3;
      for (let i = sr; i < sr + 3; i++) {
          for (let j = sc; j < sc + 3; j++) {
              if (sudoku[i][j] === digit) {
                  return false;
              }
          }
      }
      return true;
  }`
      },
      {
        title: "Combine all three checks in isSafe method",
        answer: `
  function isSafe(sudoku, row, col, digit) {
      return isRowSafe(sudoku, row, digit) &&
             isColSafe(sudoku, col, digit) &&
             isGridSafe(sudoku, row, col, digit);
  }`
      },
      {
        title: "Print Sudoku board",
        answer: `
  function printBoard(sudoku) {
      for (let i = 0; i < 9; i++) {
          let row = '';
          for (let j = 0; j < 9; j++) {
              row += sudoku[i][j] + ' ';
          }
          console.log(row.trim());
      }
  }`
      },
      {
        title: "Solve Sudoku (Backtracking)",
        answer: `
  function sudokuSolver(sudoku, row = 0, col = 0) {
      if (row === 9) {
          return true;
      }
  
      const nextRow = (col === 8) ? row + 1 : row;
      const nextCol = (col + 1) % 9;
  
      if (sudoku[row][col] !== 0) {
          return sudokuSolver(sudoku, nextRow, nextCol);
      }
  
      for (let digit = 1; digit <= 9; digit++) {
          if (isSafe(sudoku, row, col, digit)) {
              sudoku[row][col] = digit;
              if (sudokuSolver(sudoku, nextRow, nextCol)) {
                  return true;
              }
              sudoku[row][col] = 0; // backtrack
          }
      }
  
      return false;
  }`
      }
    ]
  
  };
  
  export default questionsData;