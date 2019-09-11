<?php
if ($_GET['randomId'] != "l8dAfYB4zVD4tlFK8EeTpKajMYExD5fm5cGPNKHWvbfMfeVJq0gwb0COdk4OFcND") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  
