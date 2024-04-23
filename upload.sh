git init
git add .
git commit -m "Upload via upload.sh"
git branch -M main
git commit -m "Removed node_modules"
git remote add origin https://github.com/gvbvdxx/gvbvdxx-pack-2.git
git push -f origin main