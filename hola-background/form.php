<?php
    header("Access-Control-Allow-Origin: *");
     header("Content-Type: application/json; charset=UTF-8");
     header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, FETCH, OPTIONS");
     $data = json_decode(file_get_contents('php://input'), true);
     echo json_encode($data);
    exit;