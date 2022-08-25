<?php
     ini_set('display_errors', '1');
     ini_set('display_startup_errors', '1');
     error_reporting(E_ALL);
     header("Access-Control-Allow-Origin: *");
     header("Content-Type: application/json; charset=UTF-8");
     header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, FETCH, OPTIONS");
     header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
     $data = json_decode(file_get_contents('php://input'), true);
    // echo json_encode($data); // Así hay que esperar un jSon en el JS Fetch o type 'json' en jQuery
     echo '<ul><li>'.$data['nombre']. '</li><li>'.$datos['edad']; // Así, en el JS hay que esperar un text() o type: 'text' en jquery
    exit;