#!/usr/bin/env ruby

require 'yaml'
require 'json'

puts 'rebuilding index..'

search_index = {}

files = Dir.glob File.join 'books', '*'
count = files.count

files.each_with_index do |file, index|
  fname = file.gsub /^books\//, ''
  puts [index, '/', count, '::', fname].join ' '
  contents = File.read file
  contents.split.each_with_index do |word, index|
    fword = word.downcase.gsub /[^a-z]/, ''
    scale = (5 * 5 - (7 - fword.length).abs ** 2)
    scale = 3 if index > 7500
    #if index < 12000
      search_index[fword] ||= {}
      search_index[fword][fname] ||= 0
      search_index[fword][fname] += scale
    #else
    #  break
    #end
  end
end

search_index.reject! { |word| word.length < 3 || word.length > 15 }

search_index.each do |word, books|
  books.reject! { |book| books[book] < 70 * books.count }
end

search_index.reject! { |word| search_index[word] == {} }

File.open('search.json', 'w') do |f|
  f.write search_index.to_json
end

