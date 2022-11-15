<?php 

function registerValidateLogin($userLogin, $connect) {

  $resValidate = "TRUE";
  $sqlLogin = "SELECT login FROM `users_list`";

  $res = $connect->query($sqlLogin);
  
  while($row = $res->fetch_assoc()) {
    $row['login'] === $userLogin ? $resValidate = "FALSE" : $resValidate = "TRUE";
  }

  return $resValidate;
}


?>