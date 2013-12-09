#!/bin/bash

a=1
for i in books/*.txt; do
  new=$(printf "books/%05d.txt" ${a})
  mv ${i} ${new}
  let a=a+1
done

