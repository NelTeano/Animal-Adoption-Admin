# Animal Adoption Website Admin Page using React + Vite


![animal-admin](https://github.com/NelTeano/Animal-Adoption-Admin/assets/108077205/e8979d45-41c3-4971-9bb2-e3a304431604)

# Features
<ul>
  <li>Login</li>
  <li>Dashboard</li>
  <li>Users Management (CRUD)</li>
  <li>Animals Data Management(CRUD)</li>
  <li>Inquiries</li>
  <li>See Messeges</li>
</ul>

# Dashboard UI
![dashboard](https://github.com/NelTeano/Animal-Adoption-Admin/assets/108077205/f214a6d1-3b38-4715-9233-1b1ce9b0ed4d)


# Inquiries UI

![inquiries](https://github.com/NelTeano/Animal-Adoption-Admin/assets/108077205/025dfaa6-218f-4778-9476-21e16d7d6835)
![inquriesmessege](https://github.com/NelTeano/Animal-Adoption-Admin/assets/108077205/47858e0a-a18f-4a9c-8da4-791060aa1d46)


# Users UI

![users](https://github.com/NelTeano/Animal-Adoption-Admin/assets/108077205/4c0db60e-6fbe-4804-b3f4-189e03b5d9fb)


# Animals UI

![animalsAdmin](https://github.com/NelTeano/Animal-Adoption-Admin/assets/108077205/52f72fb9-e9b5-4a43-9403-eeff252b59e9)



# HOW TO SETUP THE PROJECT

## Requirements

<ul>
  <li>NodeJS</li>
  <li>MongoDB</li>
</ul>


## Set up and test run the server in your local device.


1. **Download the project**

    Open a terminal and `cd` to the directory where you want to clone
    the project repository, then copy-paste the commands below in the
    terminal command line.

    ```cmd
    git clone https://github.com/NelTeano/Animal-Adoption-Admin.git
    npm install
    cd server
    npm install
    ```

2. **Create .env file**
  
Set up the environmental variables for the use of other packages especially the database it requires DATABASE_URL
Create a file called `.env` in the
`server` folder.<br>

 3. **Paste this values inside `.env` in `main` file :**

    ```js
    VITE_DATABASE_URI="<DATABASE CONNECTION URL(gets in MongoDB)>"
    ```

   
4. **Run the application**

    1. Open two terminal command lines.
    2. Open the project's **root** directory for each terminal.
    3. In the first terminal enter the command `npm run dev`.
    4. In the second terminal enter the command `cd server && npm run server`.
    5. Wait for both terminals to finish setting up.
  
6. **Access the application**

    Open the address `localhost:5174` on a browser

   

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
