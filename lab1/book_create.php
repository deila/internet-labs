<?php

ob_start();

function book($field) {
  return $_POST["book"][$field];
}

function get_id() {
  $expire = time() + 10 * 60; // 10 minutes
  if (!isset($_COOKIE['book_max_id'])) {
    $book_max_id = 1;
  } else {
    $book_max_id = $_COOKIE['book_max_id'] + 1;
  }
  setcookie('book_max_id', "$book_max_id", $expire, null, null, false, false);
  return $book_max_id;
}

$book_id = get_id();

?>

<meta charset="utf-8">

<title>Книга №<?= $book_id ?></title>

<h1>Книга №<?= $book_id ?></h1>

<table>
  <thead>
    <tr><th align="right">Поле</th><td>Значение</td></tr>
  </thead>
  <tbody>
    <tr><th align="right">№ записи</th><td><?= $book_id ?></td></tr>
    <tr><th align="right">Название книги</th><td><?= book('title') ?></td></tr>
    <tr><th align="right">Тематика</th><td><?= book('theme') ?></td></tr>
    <tr><th align="right">ФИО автора(ов)</th><td><?= book('author') ?></td></tr>
    <tr><th align="right">Год издания</th><td><?= book('year') ?></td></tr>
    <tr><th align="right">Издательство</th><td><?= book('publisher') ?></td></tr>
  </tbody>
</table>

<hr/>

<strong>POST запрос:</strong>
<pre>
<? var_dump($_POST) ?>
</pre>

<style>
th + td {
  padding-left: 10px;
}
</style>

