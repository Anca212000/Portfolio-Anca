const info = [
    {
        id: 0,
        title:"Template homepage design",
        shortDescription:"Only a page created in HTML & CSS that has a dynamic sidebar on the left. Can be used for categories with some subcategories and has an original design, the menu being animated in CSS...",
        longDescription:"Only a page created in HTML & CSS that has a dynamic sidebar on the left. Can be used for categories with some subcategories and has an original design, the menu being animated in CSS.\
        Here is a design in CSS with animations, tranzactions of a sidebar. The background of the page is gradient and it's realized in CSS. It''s an interactive, creative sidebar that impress the viewer. The HTML and CSS code were fully created by me.",
        imageUrl: process.env.PUBLIC_URL + '/assets/temp-homepage/hist-sidebar.png',
        images: [
            "temp-homepage/hist.png",
            "temp-homepage/hist2.png",
            "temp-homepage/hist-sidebar.png"
        ],
        video: process.env.PUBLIC_URL + '/assets/video/PyrTemplVid.mp4',
        /** TO DO:
         * PUT THE LINK HEEREE
        */
        linkHosted: "https://anca212000.github.io/history-template/index.html"
    },
    {
        id: 1,
        title:"Medical website template",
        shortDescription:"This is a site created only in HTML and CSS (also being responsive) and it has a menu bar for main navigation (home, about, contact and so on) and a sidebar for each category of medical specialization...",
        longDescription:"This is a site created only in HTML and CSS (also being responsive) and it has a menu bar for main navigation (home, about, contact and so on) and a sidebar for each category of medical specialization (in my work I have chosen a dental criteria).\
        This is a simple site that has a representative design for a medical office, and it's realized in HTML & CSS. Has a navigation panel in the right-top of the page and a sidebar on the left of the page. Every button has a link to a new html page that provides informations about a specific category. The logo was created in the Inkscape program. Furthermore, the site is responsive. All of the html & css codes were created by me, not plagiarized.",
        imageUrl: process.env.PUBLIC_URL + '/assets/medical-web-temp/medTemp.png',
        images: [
            "medical-web-temp/medTemp.png",
            "medical-web-temp/medT2.png",
            "medical-web-temp/prof.png",
            "medical-web-temp/screen1.png",
            "medical-web-temp/screen2.png"
        ],
        video: process.env.PUBLIC_URL + '/assets/video/MedHexVideo.mp4',
        linkHosted: "https://anca212000.github.io/medical_template/index.html"
    },
    {
        id: 2,
        title:"Family Agenda",
        shortDescription:"This web app was created in HTML, CSS and JavaScript and can be used for family members to maintain their personal informations about plans, events that can occur in the next few days...",
        longDescription:"This web app was created in HTML, CSS and JavaScript and can be used for family members to maintain their personal informations about plans, events that can occur in the next few days from the current month. These plans can be related to some trips, vacations, shopping, a meeting with someone or hobby.\
        The app is opening through a login page, where the user must enter a specific name (a name that all members should know it) and the right password, too. When I created the app, I've already introduced a username and password \
        (username: 'familie', password: 'familie'), \
        IF THE TEXT FIELDS ARE EMPTY OR THE USER AND PASS ARE WRONG, THEN WILL APPEAR A MESSAGE BOX WITH AN ALERT IN THE TOP OF THE PAGE - these kind of alerts are created in JavaScript.\
        When the SUBMIT button is clicked, then it will be open a new page with a dynamic calendar (this will be changing every month of the year). Also it's an interactive calendar, the squares are changing their color when the cursors hover. The calendar was created in JavaScript and uses functions to call the date and manipulating it. In the same page can be inserted new plans from the curent month and visualize them too.\
        The images from the background run automatically, they are changing every 6 seconds (are 7 unrolled images).\
        For adding and viewing the new plans, it can be accessed these two buttons: Adauga un nou plan and Vezi un plan anterior. When the first button is accessed, it will appear a form with text fields, radio buttons and so on - here the person can introduce what plan he/she wants. At Vezi un plan anterior section it will appear the plans introduced by user (if it's not any plan, then a proper message will be shown).\
        All of the code, HTML & CSS, JavaScript functions and programming them were created by me, not plagiarized.",
        imageUrl: process.env.PUBLIC_URL + '/assets/fam-agenda/Fam.png',
        images: [
            "fam-agenda/agenda.png",
            "fam-agenda/bottom.png",
            "fam-agenda/Fam.png",
            "fam-agenda/loginAlert.png",
            "fam-agenda/plan.png",
            "fam-agenda/Untitled.png",
            "fam-agenda/WebFamApp.png",
        ],
        video: process.env.PUBLIC_URL + '/assets/video/FamAgVideo.mp4',
        linkHosted: "https://anca212000.github.io/Website_FamilyApp/"
    },
    {
        id: 3,
        title:"Dynamically Webpage Template",
        shortDescription:"This webpage has a modern design composed by multiple combinations of light or dark violet, grey, white or soft purple. It is created in HTML, CSS and jQuery...",
        longDescription:"This webpage has a modern design composed by multiple combinations of light or dark violet, grey, white or soft purple. It is created in HTML, CSS and jQuery. Also, can be used in whatever field the user wants by adding informations in text tags or paragraph tags or even changing the images. Not least, it’s a responsive page that’s work efficiently on mobile/tablet platforms.\
        In the 'Gallery' category, the contents are changing dynamically in the same page (with jQuery it was created all these operations for this effect).",
        imageUrl: process.env.PUBLIC_URL + '/assets/din-web-temp/webpagecities1.png',
        images: [
            "din-web-temp/webabout.png",
            "din-web-temp/webcity.png",
            "din-web-temp/webcity2.png",
            "din-web-temp/webcity3.png",
            "din-web-temp/webgallery.png",
            "din-web-temp/webgallery2.png",
            "din-web-temp/webgallery3.png",
            "din-web-temp/webpagecities1.png",
            "din-web-temp/webresponsive.png",
            "din-web-temp/webresponsive2.png"
        ],
        video: process.env.PUBLIC_URL + '/assets/video/WebCities.mp4',
        linkHosted: "https://anca212000.github.io/dynamic_webpage_template/"
    },
    {
        id: 4,
        title:"Save and Start Your Plans",
        shortDescription:"A Full Stack Web App created in Python using Oracle Database, Flask framework (Back-End) and HTML, SCSS framework, JavaScript (Front-End). This app is designed for being used in keeping the newly...",
        longDescription:"A Full Stack Web App created in Python using Oracle Database, Flask framework (Back-End) and HTML, SCSS framework, JavaScript (Front-End). This app is designed for being used in keeping the newly tasks, habits of the user and always the user can be up to date with the events that can occur in the nearest future. It’s more like a ‘To Do List’, ‘Reminder App’ where user can edit his own tasks, plans from his personal life.\
        If the user does not exist or the password is incorrect or none of the fields was completed yet, then it will appear an error message on the top of the page.\
        After clicking on ‘Sign Up’ button the user will be redirected on another page, where he/she can create an account.\
        Now, the newly user created can login and access the app. Here in the main page, the user can view his own tasks in the current day and also deleting them or adding new plans for that day or for the next few days.\
        More informations how the app works are in this video:",
        imageUrl: process.env.PUBLIC_URL + '/assets/todo-full-web-app/todo5.png',
        images: [
            "todo-full-web-app/todo1.png",
            "todo-full-web-app/todo2.png",
            "todo-full-web-app/todo3.png",
            "todo-full-web-app/todo4.png",
            "todo-full-web-app/todo5-resized.png",
            "todo-full-web-app/todo5.png",
            "todo-full-web-app/todo6.png",
            "todo-full-web-app/todo7.png",
            "todo-full-web-app/todo8.png",
            "todo-full-web-app/todo9.png",
        ],
        video: process.env.PUBLIC_URL + '/assets/video/SSyourPlansInstrSpeed.mp4',
        /** TO DO:
         * PUT THE LINK HEEREE
        */
        linkHosted: "https://github.com/Anca212000/Save-and-Start-your-plans.git"
    },
    {
        id: 5,
        title:"Travel App",
        shortDescription:"AI app that has a web interface and uses 2 algorithms (Uniform Cost Search and Bidirectional Search) that calculates the optimal route between 2 cities. The app was programmed in Python...",
        longDescription:"AI app that has a web interface and uses 2 algorithms (Uniform Cost Search and Bidirectional Search) that calculates the optimal route between 2 cities. The app was programmed in Python (with Bottle framework), the backend side (the informations about cities, the graph between them was stored into ‘txt’ files) and, on the frontend side, the app was coded in HTML and Sass framework.\
        When the app starts, it will appear on the page a form with 2 input fields, one from which we want to begin travel (implicitly, the routes are starting from Suceava to other 22 cities in this country) and the other one is for the destination city. The application works only if we introduce in the second field the name of these 22 towns : Botosani, Iasi, Piatra Neamt, Vatra Dornei, Bistrita, Satu Mare, Bacau, Miercurea Ciuc, Brasov, Galati, Constanta, Bucuresti, Craiova, Targu Jiu, Sibiu, Cluj-Napoca, Targu Mures, Alba Iulia, Hunedoara, Oradea, Arad, Timisoara.\
        On the same page, a bit lower from input fields are appearing the informations about:\
        (1) number of kilometers between Suceava and inserted city\
        (2) the hours and minutes to destination, \
        (3) for some cities will appear the optimal way, a directly route with a minimum of kilometers and the name of the cities where the driver can pass, \
        (4) still here, it will appear the name of the cities that national streets are passing through them, so the driver will know which cities has national streets, \
        (5) when the traveler arrives to destination, he can read a few info about the main sights of that town, thereby visit them. \
        Watch video to see how it's work:",
        imageUrl: process.env.PUBLIC_URL + '/assets/travel-ai-app/TravelApp2.png',
        images: [
            "travel-ai-app/TravelApp1.png",
            "travel-ai-app/TravelApp2.png",
            "travel-ai-app/TravelApp3.png",
            "travel-ai-app/TravelApp4.png",
            "travel-ai-app/TravelApp5.png",
            "travel-ai-app/TravelApp6.png",
            "travel-ai-app/TravelApp7.png",
            "travel-ai-app/TravelApp8.png",
            "travel-ai-app/TravelApp9.png",
        ],
        video: process.env.PUBLIC_URL + '/assets/video/TravelAppSpeed.mp4',
        linkHosted: "https://github.com/Anca212000/TravelApp.git"
    },
    {
        id: 6,
        title:"Photo Editor App",
        shortDescription:"This is an image processing app programmed in python language using GUI Libraries like Tkinter (tkinter, tkinter.ttk). For editing the photo I used OpenCV library that manipulates the color, size, intensity and...",
        longDescription:"This is an image processing app programmed in python language using GUI Libraries like Tkinter (tkinter, tkinter.ttk). For editing the photo I used OpenCV library that manipulates the color, size, intensity and other visual effects of image. The app is alike other mobile, online apps that edit a photo with all the effects, filters that user enjoys to apply them.\
        The desktop app is saved like an executable one (.exe) and when it’s open, the app provides 11 options over the manipulation of an image – these options are composed of following buttons:\
        NEW – load a new image from computer; \
        SAVE – save the processed image at that time; \
        SAVE AS – can save the photo on computer in any image type (jpg, png, bmp, tiff); \
        FILTER – here are some filters for image (negative, sepia, black white, emboss, gaussian blur, median blur); \
        ADJUST – change the colours of the image manipulating the RGB schema of the image (changing the redness of image or green shade or even the blue colour – the intensity of these are between 0 and 255); also, here can be adjusted the constrast, brightness and sharpness of the image; \
        IMAGE OVERLAY – this option opens from computer a new image (the opacity of this new image can be set between 0 and 1) that overlaps initial image and finally, obtain a merged image; \
        COLLAGE – create a collage structured of 2 images having the positions horizontally or vertically; \
        ADD TEXT – able to enter text , select the font (font-family, font-size), colour of the text using the RGB format and set the position of text on Ox axis and Oy axis (the center, O, of this axis being in the upper-left corner of the image); \
        ADD FRAME – add a frame/border around the photo and also can be set the RGB colour of the frame and more than this, can be set the thickness of the border; \
        DISCARD – erase all the modifications added over the image left it in initial state; \
        EXIT – close the app. \
        Furthermore, the app has an error message box that appears only when the user clicks the other buttons except for ‘NEW’ button. \
        For seeing how the app works, watch this video below (has some explanations):",
        imageUrl: process.env.PUBLIC_URL + '/assets/photo-editor/PhotoEdit.png',
        images: [
            "photo-editor/PhEditApp1.png",
            "photo-editor/photo.png",
            "photo-editor/PhotoEdit.png"
        ],
        video: process.env.PUBLIC_URL + '/assets/video/PhotoEditorAppInstructions.mp4',
        linkHosted: "https://replit.com/join/owdwhgszia-anca21"
    },
    {
        id: 7,
        title:"Realtime Chat App",
        shortDescription:"ReactJS, Node.js, Socket.io, SCSS App. This is an app that was programmed using React.js library, servers from Node.js and the realtime connections between these servers...",
        longDescription:"This is an app that was programmed using React.js library, servers from Node.js and the realtime connections between these servers was handled by Socket.io library. The design of the app was coded using SCSS framework. \
        Briefly explained, this is a web chat application where the users can be connected in the same time from different browsers by choosing the meeting room and finally there, they can text each other. Firstly, the user should choose what chatroom he/she wants to send messages and also, receive these from other online persons, by typing the name of the room and of course, his/her name. This thing can be easily done when the app is accessed and the first page is the login one. \
        In the above image is an example of two users that want to connect to the same chatroom. Then, after the both fields are completed, the newest users can send messages to each other. Also, the third person and the fourth person and much more than four persons can join the same meeting. \
        Furthermore, the users can text with emoji symbols 😉. \
        The application is hosted and you can see how it works by clicking on the button down on the page.",
        imageUrl: process.env.PUBLIC_URL + '/assets/realtime-chat-app/Chats.png',
        images: [
            "realtime-chat-app/Chats.png",
            "realtime-chat-app/chatapp1.png",
            "realtime-chat-app/chatapp2.png",
            "realtime-chat-app/chatapp3.png",
            "realtime-chat-app/chatapp4.png",
            "realtime-chat-app/chatapp5.png",
            "realtime-chat-app/chatapp6.png",
            "realtime-chat-app/chatapp7.png",
        ],
        video: process.env.PUBLIC_URL + '/assets/video/ChatAppReactjsSpeed.mp4',
        linkHosted: "https://613735c45228717701eae08d--flamboyant-leakey-27ed99.netlify.app/"
    },
];

export default info;