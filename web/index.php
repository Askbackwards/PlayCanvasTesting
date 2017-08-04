<?php
//header( 'Location: /index.html' ) ;

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

    function requireToVar($file) {
        ob_start();
        require($file);
        return ob_get_clean();
    }

    $game = requireToVar('scripts/game.js');

    // Run game script
    echo "<!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <title>PlayCanvas Hello Cube</title>
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' />
        <style>
            body {
                margin: 0;
                overflow: hidden;
            }
        </style>
        <script src='https://code.playcanvas.com/playcanvas-stable.min.js'></script>
    </head>
    <body>
        <canvas id='application'></canvas>
        <script type='text/javascript' src=$game></script>
        </body>
        </html>";
/*} catch (S3Exception $e) {
    echo $e->getMessage() . "\n";
}*/



?>