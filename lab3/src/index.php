<style>
td {
  border: 1px solid #999;
  padding-left: 5px;
  padding-right: 5px;
}
</style>

<meta charset="utf-8">

<?php

require '/app/www/lab3/vendor/autoload.php';

$url = 'http://finance.i.ua/fuel';
$html = file_get_html($url);

$encoding = 'CP1251';

echo "<h1>Цены на топливо на АЗС Украины</h1>";

$tables = $html->find('table');
echo mb_convert_encoding($tables[0], 'UTF-8', $encoding);

?>

А по вопросу парсинга html при помощи регулярных выражений можно почитать
<a href="http://www.codinghorror.com/blog/2009/11/parsing-html-the-cthulhu-way.html" target="_blank">
Парсинг html — методика Ктулху (на английском)
</a>


