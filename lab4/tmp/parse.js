calc = function() {
  var x = $(this).attr('href').replace(/\//g, '').replace(/details/, '');
  return 'https://ia600302.us.archive.org/12/items/' + x + '/' + x + '_djvu.txt';
}
$('a.titleLink').map(calc).each(function(){ console.log("" + this) }); true

