<!DOCTYPE html>
<html>
<head>
  <title>Password Strength Checker</title>
</head>
<body>
  <script>
    
    function strongPasswordChecker(password) {
      let steps = 0;
      let missingTypes = 3; // Number of missing character types: lowercase, uppercase, and digit
      let consecutiveRepeats = 0; // Number of consecutive repeating characters
      
      if (password.length < 6)
        steps += 6 - password.length;
      else if (password.length > 20)
        steps += password.length - 20;
      
   
      if (/[a-z]/.test(password))
        missingTypes--;
      if (/[A-Z]/.test(password))
        missingTypes--;
      if (/[0-9]/.test(password))
        missingTypes--;
      
  
      for (let i = 0; i < password.length; i++) {
        if (i > 1 && password[i] === password[i-1] && password[i] === password[i-2]) {
          consecutiveRepeats++;
          i += 2; // Skip the next two characters
        }
      }
      
      
      if (password.length < 6)
        steps += Math.max(missingTypes, consecutiveRepeats);
      else
        steps += Math.max(0, missingTypes - consecutiveRepeats);
      
      return steps;
    }

    // Unit tests
    console.log(strongPasswordChecker("a")); // Output: 5
    console.log(strongPasswordChecker("aA1")); // Output: 3
    console.log(strongPasswordChecker("1337C0d3")); 
  </script>
</body>
</html>