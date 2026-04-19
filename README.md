# FREE RESOURCES FOR DEVS

![License](https://img.shields.io/badge/license-MIT-blue.svg)

A collection of **free resources** for developers. This project aims to gather the best free tools, learning platforms, design resources, icons, courses, and more — all in one place.

This repository is also designed to be **beginner-friendly**, making it a perfect place for your first open source contribution on GitHub.

##  Features

- Real-time search by tags or resource name
- Hover effects and modern card layout
- Easy to contribute and add new resources
- Built with React

##  Technologies Used

- React.js (JSX)
- CSS3 (Flexbox & Grid)
- GitHub Pages

##  How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/tu-usuario/free-resources-for-devs.git
2. Navigate to the project folder:
   ```bash
   cd free-resources-for-devs
3. Install dependencies:
  
    npm install
4. Start the development server:
    ```bash
   npm start

## How to Contribute
We welcome contributions from everyone! Whether you're a beginner or an experienced developer.

### Adding a New Resource

1. Fork this repository
2. Clone your fork and create a new branch:

   ```bash
    git checkout -b add-new-resource
   ```
4. Open src/App.js
5. Find the <div className="cards-container">
6. Add your resource using this structure:
```bash
{shouldShowCard(
          "Name of the resource",
          "write the tag here/write the tag here",
        ) && (
          <Card
            title="Name of the resource"
            desc="writte a description of the resource"
            tags="write the tag here / write the tag here "
            link="put the resource link here"
          />
        )}
```

Note: Separate multiple tags with / (slash)

6. Commit your changes and push them:
```bash
git commit -m "Add: New Resource Name"
git push origin add-new-resource
```
7. Open a Pull Request to the main branch.

## Other Contributions

You can also contribute by:
  - Improving the UI/UX design
  - Fixing bugs
  - Enhancing the search functionality
  - Improving documentation
  - Adding new features

Feel free to open an issue first if you want to discuss a bigger change.

## What Kind of Resources Are Accepted?

We accept 100% free resources such as:

-  Development tools and editors
-  Learning platforms and free courses
-  UI/UX design tools
-  Icon libraries, illustrations, and stock images
-  Documentation and cheat sheets
-  Open-source libraries

## Made with love  for the developer community Thank you for contributing!







  
