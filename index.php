<?php
//header( 'Location: /index.html' ) ;

require 'aws.phar';

use Aws\S3\S3Client;
use Aws\S3\Exception\S3Exception;

$bucket = getenv('S3_BUCKET_NAME');
$keyname = 'game.js';

//Instantiate the client
$s3 = new Aws\S3\S3Client([
    'version' => 'latest',
    'region'  => 'us-east-2'
]);


try {
    // Get the object
    $game = $s3->getObject(array(
        'Bucket' => $bucket,
        'Key'    => $keyname
    ));

    // Run game script
    echo '<script type="text/javascript">', $game['body'], '</script>';
} catch (S3Exception $e) {
    echo $e->getMessage() . "\n";
}

?>