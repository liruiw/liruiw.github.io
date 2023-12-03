VIDEOS_DIR="./"

# Loop over each MP4 file in the directory
for video in "$VIDEOS_DIR"*.mp4; do
  # Extract the filename without the path and extension
  filename=$(basename -- "$video")
  filename="${filename%.*}"
  
  # Make a directory for the images, named after the video file
  mkdir -p "$VIDEOS_DIR/$filename"
  
  # Run ffmpeg to extract the images
  ffmpeg -i "$video" -r 5 -c:v libx264 -preset fast -c:a copy -strict experimental -y "${VIDEOS_DIR}/${filename}_s.mp4"

done