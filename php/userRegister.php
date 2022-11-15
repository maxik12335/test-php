<?php 

  require ("registerValidateLogin.php");

  function userRegister() {
    $userLogin =  $_POST['login'];
    $userPass = $_POST['pass'];
    $userToken = mt_rand();
    $userTokenStr = "$userToken";

    $connect = new mysqli("localhost", "root", "", "users");

    $sql = "INSERT INTO 
      users_list(id, login, pass, isAuth)
      VALUES(NULL, '$userLogin', '$userPass', '$userTokenStr')
    ";

    $resValidateLogin = registerValidateLogin($userLogin, $connect);

    if($resValidateLogin === "TRUE") {
      $connect->query($sql);
      header("Location: ../templates/formLogin/formLogin.html");
    }

    if($resValidateLogin === "FALSE") { 
      header("Location: ../templates/formReg/formReg.html");
    }
  }

  userRegister();

?>