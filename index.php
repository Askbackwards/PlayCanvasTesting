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
    $result = $s3->getObject(array(
        'Bucket' => $bucket,
        'Key'    => $keyname
    ));

    // Display the object in the browser
    header("Content-Type: {$result['ContentType']}");
    echo $result['Body'];
} catch (S3Exception $e) {
    echo $e->getMessage() . "\n";
}

?>