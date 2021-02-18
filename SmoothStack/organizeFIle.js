# write your code in Bash

mkdir "images"
for file in *.png ; do
    mv "$file" images
done

mkdir "music"
for file in *.mp3 ; do
    mv -- "$file" music
done
for file in *.flac ; do
    mv -- "$file" music
done
for file in *.jpg ; do
    mv "$file" images
done

mkdir "videos"
for file in *.avi ; do
    mv "$file" videos
done
for file in *.mov ; do
    mv "$file" videos
done

for file in *.log
do
    rm "$file"
done
    