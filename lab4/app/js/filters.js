'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])
  
  .filter('wordSearch', function() {
    return function(books, query, index) {
      var res = [];
      var resBooks = {};
      var search_index = index = index || {};
      query = query || '';
      (query.split(' ') || []).forEach(function(word) {
          console.log(word);
          $.each(index[word] || [], function(book, score) {
          resBooks[book] = resBooks[book] || { url: '#/books/' + book, score: 0, name: book, hithash: {}, hits: [] };
          resBooks[book].score += score;
          resBooks[book].hithash[word] = 1;
        });
      });
      $.each(resBooks, function(index, book) {
        $.each(book.hithash, function(hit, _) { book.hits.push(hit); });
        book.hits = book.hits.join(' ');
        book.most = [];
        $.each(search_index, function(word, books) {
          if ((books[book.name] || 0) > 500) {
            book.most.push({ word: word, score: books[book.name] });
          }
        });
        book.most.sort(function(a, b) { return a.score - b.score });
        book.most = book.most.map(function(x) { return x.word }).slice(0, 10).join(' ');
        res.push(book);
      });
      return res;
    }
  });
