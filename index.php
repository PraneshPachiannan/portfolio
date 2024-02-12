<?php
if(isset($_POST['submit'])){
    $to = "praneshp1129@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $message = "Name: " . $name . "\n\n" . "Message: " . $_POST['message'];
    $headers = "From:" . $from;

    if(mail($to,$subject,$message,$headers)){
        echo "<p>Your message has been sent successfully!</p>";
    } else{
        echo "<p>Oops! Something went wrong. Please try again later.</p>";
    }
}
?>
