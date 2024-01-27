#!/bin/bash

# Check if argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <new_element>"
  exit 1
fi

# Save the branch name from the command line argument
new_element=$1

# Step 1: Prepare git barnch
git checkout main
git pull origin main
git checkout -b "$new_element"

# Step 2: Clone the template folder to a folder named as the variable
template_folder="template"
new_folder_name="$new_element"

# Check if the folder already exists
if [ -d "$new_folder_name" ]; then
  echo "Error: Folder '$new_folder_name' already exists. Please choose a different branch name."
  exit 1
fi

# Clone the template folder to the new folder
cp -r ./template ./"$new_folder_name"

# Step 3: Add to README.md file the new element as ## TITLE [Link to Item](https://mvera8.github.io/showroom/"$new_folder_name"/).
readme_file="README.md"

# Append a new element to the README.md file
echo "\n## TITLE\n[Link to Item](https://mvera8.github.io/showroom/$new_folder_name/)." >> "$readme_file"

echo "Script executed successfully!"
