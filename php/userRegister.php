<?php 
function setToken() {
  $dataIsAuth = [
    "h" => getdate()["hours"],
    "i" => getdate()["minutes"],
    "s" => getdate()["seconds"],
  ];

  return date("$dataIsAuth[h]:$dataIsAuth[i]:$dataIsAuth[s] d-m-20y");
}

function checkLoginOnUniqueness($userLogin, $connect) {

  $sql = "SELECT login FROM `users_list` WHERE login='$userLogin'";

  $res = $connect->query($sql);
  $row = $res->fetch_assoc();

  if(isset($row['login'])) {
    $verifiedLogin = "FALSE";
  }

  if(!isset($row['login'])) {
    $verifiedLogin = "TRUE";
  }

  return $verifiedLogin;

}


  function userRegister() {
    $user = [
      "login" => $_POST['login'],
      "pass" => $_POST['pass'],
      "token" => setToken(),
      "connect" => new mysqli("localhost", "root", "", "users")
    ];

    $sql = "INSERT INTO 
      users_list(id, login, pass, isAuth)
      VALUES(NULL, '$user[login]', '$user[pass]', '$user[token]')
    ";

    $verifiedLogin = checkLoginOnUniqueness($user['login'], $user['connect']);

    if($verifiedLogin === "TRUE") {
      $user['connect']->query($sql);
      header("Location: ../templates/formLogin/formLogin.html");
    }

    if($verifiedLogin === "FALSE") { 
      header("Location: ../templates/formReg/formReg.html");
    }
  }

  userRegister();
  date_default_timezone_set('UTC');
  date_default_timezone_set("Europe/Moscow");

  
  
  // $h = getdate()["hours"];
  // echo $d;
  // print_r(getdate());

  // echo date('h:i:s d-m-20y');
  

?>