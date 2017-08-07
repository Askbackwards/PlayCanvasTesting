<?php
    header('Content-Type: application/javascript');
    readfile("../scripts/" . $_GET['script']);
?>