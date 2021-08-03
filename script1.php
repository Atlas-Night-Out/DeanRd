

<html>
<head>
<title>FORM PROCESSING TRIALS</title>
</head>
<body>

<?php

      print  "<BR>Thank you for submitting your form.\n";
      print  "<BR>The information received is shown below:\n";

      // Assign the form variables to local PHP variables

      $first = $_POST["firstname"];
      $last = $_POST["surname"];
      $birth = $_POST["dob"];

      // Print the content of the PHP variables back to the user

      print  "<BR><BR>First name = $first\n";
      print  "<BR>Last name  = $last\n";
      print  "<BR>Date of birth = $birth\n";

      print  "<BR><BR>";
  
	  fputs( $fptr , "Time/Date form submitted to web server = $now \n\n");      //  The backslash n generates a new line in the text file
	  fputs( $fptr ,  "First name = $first\n");
	  fputs( $fptr, "Last name = $last\n");
	  fputs( $fptr, "Date of birth = $birth\n");

	  // Close down the file channel
fclose( $fptr );
    ?>
</body>
</html>
