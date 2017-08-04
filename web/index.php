<?php
header( 'Location: /index.html' ) ;

/*require 'aws.phar';

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
    $gameText = $s3->getObject(array(
        'Bucket' => $bucket,
        'Key'    => $keyname,
    ));
    
    $game="game.js";
    file_put_contents($game, $gameText['Body']);
    
    chmod($game, 0600);
*/

    // Run game script
/*} catch (S3Exception $e) {
    echo $e->getMessage() . "\n";
}*/



?>