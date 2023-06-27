<!DOCTYPE html>
<html>
<head>
  <title>Minimum Absolute Difference</title>
</head>
<body>
  <script>
    // Function to calculate the minimum absolute difference
    function minimumAbsoluteDifference(nums) {
      const n = nums.length / 2;
      const sum = nums.reduce((acc, num) => acc + num, 0);
      const targetSum = sum / 2;
      const dp = Array.from({ length: n + 1 }, () => Array(targetSum + 1).fill(false));
      
      dp[0][0] = true;

      for (let i = 1; i <= 2 * n; i++) {
        for (let j = n; j >= 1; j--) {
          for (let k = targetSum; k >= nums[i - 1]; k--) {
            dp[j][k] = dp[j][k] || dp[j - 1][k - nums[i - 1]];
          }
        }
      }

      let diff = Infinity;
      
      for (let k = targetSum; k >= 0; k--) {
        if (dp[n][k]) {
          diff = Math.min(diff, sum - 2 * k);
        }
      }
      
      return diff;
    }

    // Test cases
    console.log(minimumAbsoluteDifference([3, 9, 7, 3])); // Output: 2
    console.log(minimumAbsoluteDifference([-36, 36])); // Output: 72
    console.log(minimumAbsoluteDifference([2, -1, 0, 4, -2, -9])); // Output: 0
  </script>
</body>
</html>