#!/bin/bash

# Specify the input folder where your videos are located
input_folder="align-block-zone"
cp -r input_folder "$input_folder_cp"
input_folder="$input_folder_cp"
# Specify the output folder where you want to save the compressed videos
output_folder=$input_folder

# Set the desired video codec and bitrate for compression
video_codec="libx264"  # You can choose another codec if needed
bitrate="1000k"        # Adjust the bitrate as per your preference

# Loop through the videos in the input folder
for input_file in "$input_folder"/*.mp4; do
    # Get the filename without extension
    filename=$(basename "$input_file" .mp4)
    
    # Compose the output file path
    output_file="$output_folder/${filename}_compressed.mp4"
    
    # Use FFmpeg to compress the video
    ffmpeg -i "$input_file" -c:v "$video_codec" -b:v "$bitrate" "$output_file"
    
    echo "Compressed: $input_file -> $output_file"
done

echo "Compression completed."
