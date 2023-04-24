<?php

$servidor = "localhost";
$basededatos = "pollos_asados";
$usuario = "root";
$password = "Sobrecarga2*";

$con = mysqli_connect($servidor,$usuario,$password,$basededatos) or die("no se pudo conectar a localhost");
$consulta = "select * from pedidos";

$registros = mysqli_query($con,$consulta) or die ("asd");

$result = mysqli_fetch_all($registros,MYSQLI_ASSOC);

mysqli_close($con);
echo json_encode($result);
?>