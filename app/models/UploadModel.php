<?php

class UploadModel
{
    private $location;
    private $filename;
    public function __construct()
    {
        //
    }

    public function avatar($request)
    {
        /* Getting file name */
        $this->filename = $_FILES['file']['name'];

        /* Location */
        $this->location = BASE_URL . "assets/images/avatars/" . $this->filename;
        $uploadOk = 1;
        $imageFileType = pathinfo($this->location, PATHINFO_EXTENSION);

        /* Valid Extensions */
        $valid_extensions = array("jpg", "jpeg", "png");
        /* Check file extension */
        if (!in_array(strtolower($imageFileType), $valid_extensions)) {
            $uploadOk = 0;
        }

        if ($uploadOk == 0) {
            echo 0;
        } else {
            /* Upload file */
            if (move_uploaded_file($_FILES['file']['tmp_name'], $this->location)) {
                echo $this->location;
            } else {
                echo 0;
            }
        }
    }
}
