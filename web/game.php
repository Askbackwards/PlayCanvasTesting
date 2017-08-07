<?php
    header('Content-Type: text/javascript');
    readfile("../scripts/" . $_GET['script']);
?>