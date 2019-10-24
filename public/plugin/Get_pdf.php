<?php
require_once 'dompdf/lib/html5lib/Parser.php';
require_once 'dompdf/lib/php-font-lib/src/FontLib/Autoloader.php';
require_once 'dompdf/lib/php-svg-lib/src/autoload.php';
require_once 'dompdf/src/Autoloader.php';
Dompdf\Autoloader::register();

// reference the Dompdf namespace
use Dompdf\Dompdf;
use Dompdf\Options;

class Get_pdf
{
	function __construct($dir, $namaDokumen, $jsonData, $kertas = 'A4', $posisi = 'landscape')
	{

		ob_start();
		$html = require_once($dir);
		$options = new Options();
		$options->set('isJavascriptEnabled', TRUE);
		// instantiate and use the dompdf class
		$dompdf = new Dompdf($options);
		$dompdf->loadHtml(ob_get_clean());

		// (Optional) Setup the paper size and orientation
		$dompdf->setPaper($kertas, $posisi);

		// Render the HTML as PDF
		$dompdf->render();

		// Output the generated PDF to Browser
		$dompdf->stream($namaDokumen, array("Attachment" => false));

		exit(0);
	}
}
