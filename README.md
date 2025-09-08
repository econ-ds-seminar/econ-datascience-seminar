# Online Seminar in Economics + Data Science

A static website for the online seminar series hosted at ETH Zürich.

## Files

- `index.html` - Main webpage with seminar schedule and information
- `styles.css` - CSS styling for the website
- `README.md` - This file

## How to Host on GitHub Pages

### Option 1: Create a New Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it something like `economics-data-science-seminar`
3. Upload the files (`index.html`, `styles.css`) to the repository
4. Go to repository Settings → Pages
5. Under "Source", select "Deploy from a branch"
6. Choose "main" branch and "/ (root)" folder
7. Click Save
8. Your site will be available at: `https://yourusername.github.io/economics-data-science-seminar`

### Option 2: Use GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Create a new repository in GitHub Desktop
3. Add these files to the repository folder
4. Commit and publish to GitHub
5. Follow steps 4-8 from Option 1

### Option 3: Command Line (if you have Git installed)

```bash
# Navigate to your project folder
cd /path/to/economics-data-science-seminar

# Initialize git repository
git init

# Add files
git add .

# Commit files
git commit -m "Initial website setup"

# Create repository on GitHub first, then:
git remote add origin https://github.com/yourusername/economics-data-science-seminar.git
git branch -M main
git push -u origin main
```

Then follow steps 4-8 from Option 1.

## Updating the Website

To update the schedule or add new talks:

1. Edit the `index.html` file
2. Commit and push changes to GitHub
3. GitHub Pages will automatically update your live site

## Customization

### Adding New Talks

Add new talk entries in the HTML like this:

```html
<div class="talk">
    <div class="talk-date">Date, Time CET</div>
    <div class="speaker-info">
        <strong>Speaker Name</strong>, Institution
    </div>
    <div class="talk-title">
        <em>"Talk Title"</em>
    </div>
</div>
```

### No Seminar Days

For days without seminars:

```html
<div class="no-seminar">
    <div class="talk-date">Date, no seminar</div>
</div>
```

### Updating Links

- Replace `#` in mailing list and other links with actual URLs
- Update the Zoom meeting ID in the header
- Update contact email if needed

## Design Features

- Responsive design that works on mobile and desktop
- Clean, academic appearance
- Easy to read schedule format
- Hover effects for interactive elements
- Print-friendly styles

## Browser Support

The website works on all modern browsers including:
- Chrome
- Firefox  
- Safari
- Edge

No JavaScript required - pure HTML/CSS for maximum compatibility and fast loading.
