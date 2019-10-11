<?php

class Flash
{
    public function __construct()
    {
        // code ...
    }

    public static function setFlash($messageName, $message, $messageAlert)
    {
        $_SESSION['flash'] = [
            'name' => $messageName,
            'message' => $message,
            'type' => $messageAlert
        ];
    }

    public static function flash()
    {
        if (isset($_SESSION['flash'])) {
            echo    `<div class="alert alert-` . $_SESSION['flash']['type'] . ` alert-dismissible fade show" role="alert">
                        ` . $_SESSION['flash']['message'] . `
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>`;
            unset($_SESSION['flash']);
        }
    }
}
