
<?php 

require_once 'lib/html5lib/Parser.php';
require_once 'lib/php-font-lib/src/FontLib/Autoloader.php';
require_once 'lib/php-svg-lib/src/autoload.php';
require_once 'src/Autoloader.php';
Dompdf\Autoloader::register();

// reference the Dompdf namespace
use Dompdf\Dompdf;

ob_start();
$html = require_once('dokumen.php');

// instantiate and use the dompdf class
$dompdf = new Dompdf();
$dompdf->loadHtml(ob_get_clean());
$dompdf->set_option('defaultFont', 'Arial Narrow');

// (Optional) Setup the paper size and orientation
$dompdf->setPaper('A4', 'potrait');

// Render the HTML as PDF
$dompdf->render();

// Output the generated PDF to Browser
$dompdf->stream("SPRINDIK-".date('YmdHis'), array("Attachment" => false));

exit(0);


 ?>