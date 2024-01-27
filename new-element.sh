#!/bin/bash

# Check if argument is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <new_element>"
  exit 1
fi

# Save the branch name from the command line argument
new_element=$1

# Step 1: Checkout the main branch
git checkout main

# Step 2: Pull changes from the origin main branch
git pull origin main

# Step 3: Create a new branch from the provided variable
git checkout -b "$new_element"

# Step 4: Clone the template folder to a folder named as the variable
template_folder="template"
new_folder_name="$new_element"

# Check if the folder already exists
if [ -d "$new_folder_name" ]; then
  echo "Error: Folder '$new_folder_name' already exists. Please choose a different branch name."
  exit 1
fi

# Clone the template folder to the new folder
cp -r ./template ./"$new_folder_name"

echo "Script executed successfully!"
