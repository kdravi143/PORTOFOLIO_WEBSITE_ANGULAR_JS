🧩 **Step 1: Get Your Project Ready**

Make sure your project folder looks something like this 👇

```
portfolio-angularjs/
│
├── index.html
├── about.html
├── contact.html
├── projects.html
├── js/
│   └── app.js
├── css/
│   └── style.css
├── images/
│   └── profile.png
└── README.md
```

✅ *Tip:*
Open it in **VS Code** (or your editor).
Make sure the project is working locally by opening `index.html` in your browser (or using **Live Server**).

🧭 **Step 2: Initialize Git**

Open **Terminal** in your project folder (you can use VS Code terminal).
```bash
git init
```

 🧱 **Step 3: Add Your Files**

Now, add all your project files to Git:

```bash
git add .
```

✅ This adds everything (HTML, CSS, JS, etc.) to the staging area.

💬 **Step 4: Commit Your Files**

Now make your first commit:

```bash
git commit -m "Initial commit - Portfolio Website using AngularJS"
```

✅ This saves your current version to Git history.

 🌐 **Step 5: Create a New Repository on GitHub**

1. Go to [https://github.com](https://github.com)
2. Click on **“New Repository”** (top-right + button).
3. Enter repository name — for example:

   ```
   portfolio-angularjs
   ```
4. Choose **Public**
5. Don’t add a README (you already have one locally).
6. Click **Create Repository** ✅

---

## 🔗 **Step 6: Connect Local Project to GitHub Repo**

After creating the repo, GitHub will show you a few commands.
Copy and paste these in your terminal (replace your username):

```bash
git remote add origin https://github.com/<your-username>/portfolio-angularjs.git
```

Example:

```bash
git remote add origin https://github.com/johndoe/portfolio-angularjs.git
```

Then push your files to GitHub:

```bash
git branch -M main
git push -u origin main
```

✅ Boom! 🎉 Your code is now on GitHub!

Go to your GitHub repo page — refresh it — you’ll see all your files uploaded.

---

## 🖥️ **Step 7: Add a README File (if not already)**

If you didn’t already have one, create it:

1. In your project folder, make a new file called `README.md`
2. Add this content (you can modify it):

```markdown
# 🌐 My Portfolio Website (AngularJS)

A responsive portfolio website built using AngularJS to showcase my skills, projects, and contact information.

## 🚀 Features
- Single Page Application (SPA)
- Dynamic project listing
- Responsive design
- AngularJS routing and controllers

## 🛠️ Technologies
- AngularJS
- HTML, CSS, JavaScript, Bootstrap

## ⚙️ Setup
1. Clone the repo:
```

git clone [https://github.com/](https://github.com/)<your-username>/portfolio-angularjs.git

```
2. Open in VS Code
3. Right-click `index.html` → Open with Live Server
```

Then commit and push it:

```bash
git add README.md
git commit -m "Added README"
git push
```

---

## 🌍 **Step 8: Host the Website on GitHub Pages**

Now let’s make it **live online** 🔥

1. Go to your **GitHub repository** → Click **Settings** ⚙️
2. In the left sidebar, click **Pages**
3. Under **Source**, choose:

   ```
   Branch: main
   Folder: /(root)
   ```
4. Click **Save**

Wait a few seconds ⏳
GitHub will give you a **public link** like this:

```
https://<your-username>.github.io/portfolio-angularjs/
```

 🧠 **Optional — Make It a Bit Cooler**

Add a `CNAME` file if you have your own domain, or customize your README with:

* Screenshots of your website
* Badges (like build status, stars, etc.)
* A link to your LinkedIn or resume

Example snippet:

```markdown
## 📸 Screenshots
![Home Page](screenshots/home.png)
![Projects](screenshots/projects.png)
```

💥 **Example Final Link Format**

🔗 **GitHub Repository:**
[https://github.com/yourusername/portfolio-angularjs](https://github.com/yourusername/portfolio-angularjs)

🌐 **Live Demo (GitHub Pages):**
[https://yourusername.github.io/portfolio-angularjs/](https://yourusername.github.io/portfolio-angularjs/)

