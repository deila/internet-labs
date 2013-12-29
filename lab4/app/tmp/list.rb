#!/usr/bin/env ruby

require 'json'

files = Dir.glob File.join 'books', '*'

books = []

files.each do |file|
  books << { url: "tmp/#{file}" }
end

File.open('books.json', 'w') do |f|
  f.write books.to_json
end


