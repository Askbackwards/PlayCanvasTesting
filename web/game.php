<?php
    header('Content-Type: text/javascript');
    readfile("../scrpts/" . $_GET['script']);
?>