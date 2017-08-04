<?php
//header( 'Location: /index.html' ) ;

require 'aws.phar';

$bucket = getenv('S3_BUCKET_NAME');
$keyname = 'game.js';

//Instantiate the client
$s3 = S3Client::factory();

//Get an object
$result = $s3->getObject(array(
	'Bucket' => $bucket,
	'Key'	 => $keyname
));

// Display the object in the browser
header("Content-Type: {$result['ContentType']}");
echo $result['Body'];

?>
