# MyNotes App

A simple web app for writing/taking down notes. This app uses [Firestore](https://firebase.google.com/products/firestore), a [NoSQL](https://en.wikipedia.org/wiki/NoSQL) [document](https://en.wikipedia.org/wiki/Document-oriented_database) [database](https://en.wikipedia.org/wiki/Database) from [Firebase](https://firebase.google.com), to create, update, delete and query notes. **MyNotes** was used during the **"Build MyNotes App with Firestore" Virtual Hands-on-Workshop** organized by Developer Student Clubs, Alex Ekwueme Federal University Ndufu Alike Ikwo (DSC AE-FUNAI), on Friday, 16th October 2020, from 8pm to 10:30pm GMT+1, on the [DSC AE-FUNAI WhatsApp Group](https://bit.ly/dscaefunaiwhatsapp). Know more about the event at https://dsc.community.dev/e/mgffeb/ 

## On Firestore
[Firestore](https://firebase.google.com/products/firestore) is a cloud-hosted, [NoSQL](https://en.wikipedia.org/wiki/NoSQL) database that your web and mobile apps can access directly. Firestore can be quickly setup in [Firebase](https://firebase.google.com), a platform developed by Google for creating mobile and web applications. 

Firestore is easy to use. You can easily store, synchronize and query data directly from your mobile and web apps. With Firestore, you structure and query data, the way you like. Data stored is in [key-value pair](https://en.wikipedia.org/wiki/Key%E2%80%93value_database) mechanism. As such, data is like the contents of the dictionary where you need a [key](https://en.wikipedia.org/wiki/Document-oriented_database#Keys) or language word, to get a value, or meaning of that word.

An entity is essentially a document. A document contains data in key-value pairs. For example, a single note, taken in the **MyNotes** app could contain the date, the subject, the topic and details (the note itself). This single note can be stored in Firestore as a document that contains key-value pairs of date, subject, topic and details with their values. 

Similar documents are grouped into collections. So, we will have a single *notes* collection, which will in turn contain note documents. A unique note document will then contain the data associated with one note. A document can also contain a collection. In other words, collections, each containing documents, can be nested in a document, contained in a top-level collection.

![structured data](structured-data.png)

In Firestore, like all other databases, data can be **C**reated, **R**ead (retrieved/queried), **U**pdated, and/or **D**eleted. These four [**CRUD**](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations can be quickly achieved in Firestore as implemented in **MyNotes**. You can create, query, edit, and delete notes. Well, if all the above is complex, just follow the below workshop instructions.

## Workshop Instructions 
1. Create a Firebase project.
  * Go to https://console.firebase.google.com
  * Create a new project, name it `MyNotes`
  * Customize the project ID as you wish. It will be the .web.app domain name, on which **MyNotes** will be available from.
  * Enable [Google Analytics](https://analytics.google.com/analytics/web/) so you can track website usage. 

2. Enable Firestore
  * In the Firebase project you just created, in the left hand menu, click Firestore.
  * Click Enable. Leave the default location and start in development mode. It will take a few minutes to be enabled. 

3. Setup Firebase on your computer.
  * Download and install NodeJS from https://nodejs.org/
  * In your terminal/command line, install Firebase, through NodeJS, by running the following command
    ```
    npm install -g firebase-tools
    ```
  * Login into your Firebase in your terminal/command line with your Google account by running the following command
    ```
    firebase login
    ```

3. Get the code
  * The website code to make **MyNotes** work is available in this repo at https://github.com/DSC-AEFUNAI/mynotes
  * Get the code by either [Cloning](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) (Recommended) or Downloading as ZIP
  * If you have [Git](https://git-scm.com/) installed on your computer, you can clone with the following command
    ```
    git clone https://github.com/DSC-AEFUNAI/mynotes
    ```

4. Deploy **MyNotes** with Firebase.
  * In your terminal/command line, change the current directory to the just cloned/downloaded `mynotes` folder. If you used the clone command above, run the following command to `mynotes` folder
    ```
    cd mynotes
    ```
    Else, if you downloaded as ZIP, extract the ZIP. Then copy or take note of the full path of the extracted `mynotes` folder. Run the following command to enter the `mynotes` folder in your terminal/command line. Replace FULL_PATH with the path you copied or took note of.
    ```
    cd FULL_PATH 
    ```
  * Run the following command to link your Firebase project with **MyNotes**. If you have more than one Firebase project, use up and down arrow keys to cycle through other projects. Press Enter to choose your project and when prompted for project alias, use `default`
    ```
    firebase use --add
    ```
  * Finally, deploy your **MyNotes** by running the following command
    ```
    firebase deploy
    ```

**MyNotes** is at YOUR-PROJECT-ID.web.app, as you will be shown by the terminal. Start writing/taking notes!!! After you must have written some notes, check back firestore in the Firebase console. Go to https://console.firebase.google.com/project/_/firestore and take note of the notes collection and the note documents you have created with **MyNotes**. Creating/Editing/Deleting notes from Firestore directly, will get them shown/updated/deleted in **MyNotes**. Same occurs the other way round, that is, changes in **MyNotes** will reflect in Firestore. This is another real-time power of Firestore.