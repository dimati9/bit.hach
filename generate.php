<?php

//Подключаем библиотеку
require './phpword/autoload.php';
//создаем класс
$phpWord = new  \PhpOffice\PhpWord\PhpWord();
$_doc = new \PhpOffice\PhpWord\TemplateProcessor("template.docx");

$name = $_GET['name'];
$city = $_GET['city'];
$need = $_GET['need'];
$date = $_GET['date'];

$date = date_create($date);
$need = date_create($need);


$date = date_format($date, 'd-m-Y');
$need = date_format($need, 'd-m-Y');

$_doc->setValue('name', $name);
$_doc->setValue('city', $city);
$_doc->setValue('need', $need);
$_doc->setValue('date', $date);


$img_Dir_Str = "/files/";
$img_Dir = $_SERVER['DOCUMENT_ROOT']."/". $img_Dir_Str;
@mkdir($img_Dir, 0777);
$file = str_replace("/","-", "Заявление на отгул".date("d-m-Y")).".docx";
$_doc->saveAs($img_Dir.$file);





ob_end_clean();

$file = $img_Dir.$file;

header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename=' . basename($file));
header('Content-Transfer-Encoding: binary');
header('Content-Length: ' . filesize($file));

readfile($file);
exit();