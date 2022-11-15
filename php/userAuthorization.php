<?php 

function userAuthorization() {
  $userLogin = $_POST['login'];
  $userPass = $_POST['pass'];

  $connect = new mysqli("localhost", "root", "", "users");

  $sql = "SELECT login, pass FROM `users_list` WHERE login='$userLogin'";
  $resultQueryLogin = $connect->query($sql);
  print_r($sql);
  if($row = $resultQueryLogin->fetch_assoc()) {

    if($row['login'] === $userLogin && $row['pass'] === $userPass) {
      header("Location: ../templates/afterLogin/afterLogin.html"); 
      echo "ураа";
    } else {
      header("Location: ../templates/formLogin/formLogin.html"); 
      echo "бля";
    }

  } else {
    header("Location: ../templates/formLogin/formLogin.html"); 
  }

}

userAuthorization();

?>