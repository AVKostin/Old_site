<?php

/* https://api.telegram.org/bot5364775377:AAHRHPsGPlxmf6qbt74a84r_Rj-4O-4uulA/getUpdates */

$fname = $_POST['fname'];
$rating = $_POST['rating'];
$comment = $_POST['comment'];
$mess = $_POST['mess'];
$token = "5364775377:AAHRHPsGPlxmf6qbt74a84r_Rj-4O-4uulA";

$chat_id = "5350400304";//goroshenko

$arr = array(
  'Форма: ' => $fname,
  'Оцінка: ' => $rating,
  'Коментар: ' => $comment,  
);
$txt = '';
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};


function sendMessage($chatID, $message, $token) { 
  $url = "https://api.telegram.org/bot" . $token . "/sendMessage?chat_id=" . $chatID;  
  $url = $url . "&parse_mode=html&text=" . $message;
  $ch = curl_init();
  $optArray = array(
          CURLOPT_URL => $url,
          CURLOPT_RETURNTRANSFER => true
  );
  curl_setopt_array($ch, $optArray);
  $result = curl_exec($ch);
  curl_close($ch);
  file_get_contents($url);

}

sendMessage($chat_id, $txt, $token);

//Lamarel
$chat_id = "1367297643";
sendMessage($chat_id, $txt, $token);

//mgoroshenko
$chat_id = "5787739653";
sendMessage($chat_id, $txt, $token);


//$sendToTelegram = fopen("https://api.telegram.org/{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>