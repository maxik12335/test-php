<?php 

function userAuthorization() {
  $user = [
    "login" => $_POST['login'],
    "pass" => $_POST['pass'],
    "connect" => new mysqli("localhost", "root", "", "users"),
    "valid" => [
      "login" => FALSE,
      "pass" => FALSE,
    ]
  ];

  $sql = "SELECT login, pass FROM `users_list` WHERE login='$user[login]'";
  $res = $user['connect']->query($sql);
  $row = $res->fetch_assoc();

  if(isset($row['login']) && $row['login'] === $user['login']) {
    $user['valid']['login'] = TRUE;
  } 

  if(!isset($row['login'])) {
    $user['valid']['login'] = FALSE;
  }

  if(isset($row['pass']) && $row['pass'] === $user['pass']) {
    $user['valid']['pass'] = TRUE;
  } 

  if(!isset($row['pass'])) {
    $user['valid']['pass'] = FALSE;
  }

  if($user['valid']['login'] && $user['valid']['pass']) {
    header("Location: ../templates/afterLogin/afterLogin.html"); 
  }

  if(!$user['valid']['login'] || !$user['valid']['pass']) {
    header("Location: ../templates/formLogin/formLogin.html"); 
  }

}

userAuthorization();

?>