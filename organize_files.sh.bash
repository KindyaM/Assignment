#                             Online Bash Shell.
#                 Code, Compile, Run and Debug Bash script online.
# Write your code in this editor and press "Run" button to execute it.
 filenames=("text.txt" "media.jpg" "doc.pdf" "assignment.html")
 for file in "${filenames[@]}"
 do
 if [[ $file  == *.txt ]]
 then
 echo "Moving text.txt to Text_files folder"
 elif [[ $file  == *.jpg ]]
 then
 echo "Moving media.jpg to Image folder"
 elif [[ $file  == *.pdf ]]
 then
 echo "Moving doc.pdf to Document folder"
 else [[ $file  == *.html ]]
 echo "Moving assignment.html to Html folder"
 exit
 fi 
 done