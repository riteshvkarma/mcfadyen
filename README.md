Magento community-edition:2.4.6 

SQL file
https://drive.google.com/file/d/1Rh_ks5-znw5E2_vQYUmd-X6-xc8SZdqr/view?usp=drive_link


Magento Project Setup Guide

This guide will help you download the Magento project from GitHub, configure it, and get it up and running on your local development environment.

Prerequisites

Make sure the following prerequisites are met before starting the setup:

	1.	System Requirements:
	•	PHP 7.4 or later
	•	Composer
	•	MySQL 5.7 or 8.1 or later
	•	Apache or Nginx
	•	Node.js and npm
	•	Git
	2.	Tools Required:
	•	A code editor (e.g., VS Code, PhpStorm)
	•	Database management tool (e.g., phpMyAdmin, MySQL Workbench)
	•	Magento CLI

Step 1: Clone the Project from GitHub

	1.	Open your terminal or Git Bash.
	2.	Clone the repository using the following command:

git clone git@github.com:riteshvkarma/mcfadyen.git


	3.	Navigate to the project directory:

cd mcfadyen



Step 2: Set Up Your Local Environment

2.1. Configure .env File

	1.	Duplicate the .env.example file and rename it to .env.
	2.	Update the .env file with your local database settings, paths, and other configurations.

2.2. Install Composer Dependencies

Run the following command to install all the required PHP packages:

composer install

2.3. Install Node.js Dependencies

To build and manage static content, install the Node.js dependencies:

npm install

Step 3: Set Up the Database

	1.	Create a new database in MySQL for the project, e.g., mcfadyen_db.
	2.	Import the database dump (if provided) using a tool like phpMyAdmin or the MySQL command line:

mysql -u username -p mcfadyen_db < path_to_dump.sql

Replace username with your MySQL username and path_to_dump.sql with the path to the database dump.

Step 4: Configure Magento

4.1. Update app/etc/env.php

Update the app/etc/env.php file with your local database credentials and settings:

	•	host, dbname, username, password

4.2. Run Magento Setup Commands

Run the following commands to set up the Magento environment:

php bin/magento setup:upgrade
php bin/magento setup:di:compile
php bin/magento setup:static-content:deploy -f
php bin/magento indexer:reindex
php bin/magento cache:clean

Step 5: Set Permissions (Linux/Mac)

Set proper permissions to ensure the Magento file system can be accessed correctly:

find var generated vendor pub/static pub/media app/etc -type f -exec chmod u+w {} \;
find var generated vendor pub/static pub/media app/etc -type d -exec chmod u+w {} \;

Step 6: Configure Web Server

Configure your web server (Apache or Nginx) to point to the pub directory as the document root.

Apache Configuration Example

<VirtualHost *:80>
    ServerName local.vpsmage.local
    DocumentRoot /path_to_project/vpsmage/pub

    <Directory "/path_to_project/vpsmage/pub">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>

	•	Add the above configuration to your Apache configuration file and restart the server.
	•	Update your /etc/hosts file to include:

127.0.0.1 vpsmage.local



Step 7: Access the Magento Admin and Frontend

	1.	Open your web browser and navigate to http://vpsmage.local/.
	2.	Access the Magento Admin by appending /admin to the URL, check .env file for this e.g., http://vpsmage.local/admin.

Troubleshooting

	•	If you encounter permission issues, ensure the file and folder permissions are correctly set.
	•	Clear the Magento cache using:

php bin/magento cache:flush


	•	If you see any errors related to the database, double-check your database credentials in the app/etc/env.php file.

Notes for Development

	•	Use git pull to keep your local repository up to date with changes from the remote repository.
	•	When making changes, create a new branch for each feature or bug fix.
	•	Follow Magento coding standards and commit your changes using meaningful commit messages.

