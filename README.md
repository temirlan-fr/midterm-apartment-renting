QONYS Apartment Renting Website

Project Topic
Apartment renting in Almaty and Astana.

Group Members
Temirlan Bolat
Kairatuly Miras
Akshit Khokher

Project Description
QONYS is a student website that helps visitors explore sample apartments, compare rental prices and try enquiry and registration forms. The endterm project extends the original five pages with JavaScript features. Dark blue and warm brown colours keep the original apartment renting theme.

Pages and Features
Home introduces the project, explains how to choose an apartment and includes a featured apartment and frequently asked questions.

Apartments displays three sample apartments with images, locations, room counts, areas and monthly rents. Live search matches apartment names and locations without depending on letter case. City buttons filter Almaty and Astana listings. Search and city filters work together and show the number of matching apartments. A gallery uses Bootstrap columns and a lightbox with previous, next and close buttons. Keyboard arrows change images and Escape closes the lightbox. jQuery fade effects animate the gallery.

Prices includes a rental comparison table, extra expenses and a first-month budget example. My Viewing Shortlist lets visitors add apartments, edit table rows, save or cancel edits and delete entries after confirmation. JavaScript updates the table without reloading the page. The shortlist is stored in memory and resets when the page reloads.

About Us explains the project idea, values and apartment selection considerations.

Contact includes example contact information, the original demonstration enquiry form and a registration form. Registration checks the name, email, message, password and password confirmation. Empty fields and invalid email formats are rejected. Password strength updates while typing. Medium passwords have at least eight characters with a letter and a number. Strong passwords have at least ten characters with lowercase letters, uppercase letters and numbers. Password confirmation must match. Invalid submission is blocked and feedback appears beside each field. Successful validation displays a message and resets the form. No account is created and no password is saved.

Navigation and HTML
All five pages share a header, logo, navigation and footer. The current page is highlighted. Each page uses a main element for its main content. Semantic elements include header, nav, main, section, article and footer.
The website uses headings, paragraphs, lists, links and images with alternative text. Tables use captions, column headings and table bodies. Form labels are connected to their controls. Div and span elements group and style content.

CSS and Responsive Design
Custom CSS is stored in css/style.css and css/gallery.css. Flexbox arranges the header, navigation and button groups. CSS Grid arranges introductory content, apartment cards and the footer. Positioning places labels over images. Hover and focus styles highlight interactive controls. Alternating table rows use nth-child. The root defines navy, brown and cream CSS variables. Roboto is loaded through Google Fonts with fallback fonts. Images below the first screen use lazy loading.
Media queries at 992px and 576px adjust the layout for tablets and phones. Bootstrap containers, rows, columns, spacing utilities and buttons support the responsive layout. On small screens navigation wraps, sections stack and text sizes and spacing adjust. Responsive table containers allow wide tables to scroll within the page.

Technologies Used
HTML5
CSS3
Bootstrap 5.3.3
JavaScript
jQuery 3.7.1
Google Fonts
No backend is used.

Project Files
index.html contains the Home page.
apartments.html contains apartment listings, search, filters and the gallery.
prices.html contains rental prices, the budget example and the viewing shortlist.
about.html contains the project description and values.
contact.html contains contact details, enquiry and registration forms.
css/style.css contains shared styles.
css/gallery.css contains gallery and lightbox styles.
js/script.js handles registration validation and password strength.
js/apartments.js handles live search, city filtering and the jQuery gallery.
js/prices.js handles shortlist creation, display, inline editing and confirmed deletion.
hs1.jpg, hs2.jpg and hs3.jpg contain local apartment images.
README.md contains project documentation.

How to Run
Open index.html in a browser or use Live Server in VS Code. Keep the folder structure unchanged. Internet access is needed for Bootstrap, jQuery, Google Fonts and externally linked images. Bootstrap and jQuery are currently loaded through CDNs.

Individual Contributions
The recorded original project contributions are listed below.
Temirlan Bolat created the Home, Apartments and Prices pages.
Akshit Khokher created the About Us and Contact pages.
Kairatuly Miras created the shared CSS styles.
Endterm contributions
Akshit Khokher developed the renter registration form, email validation, password confirmation, strength meter and live field feedback.
Temirlan Bolat developed apartment search, city filters, the responsive photo gallery and the lightbox with jQuery fade effects.
Miras Kairatuly developed the viewing shortlist, inline editing, confirmed deletion and project documentation. Each member should understand the whole project and be able to explain the code during the defence.

Testing
Local browser checks cover shortlist creation, editing, cancellation and confirmed deletion, registration validation, password strength, combined search and city filters, gallery navigation and closing, and page layouts at 390px, 768px and 1440px.
Functional checks use local copies of the same Bootstrap and jQuery versions when external network access is unavailable. External image and font loading and the published website still need an online check.

Publication
Published website URL: https://temirlan-fr.github.io/midterm-apartment-renting/
GitHub repository URL: https://github.com/temirlan-fr/midterm-apartment-renting
Continue using the original repository for the endterm project.

Content and Image Credits
Apartment names, prices and contact details are examples for a student project. Photos do not represent verified rental listings. The contact email uses an example domain and social links lead to general platforms.
The original template photo sources were Clay Banks on Unsplash, Curtis Adams on Pexels and Furkan Tumer on Pexels. If photos are replaced, update the credits to match the images used.

Project Screenshots

<img width="1448" height="923" alt="image" src="https://github.com/user-attachments/assets/76ccc59a-1e8c-4ed3-acce-53ddc446930e" />

<img width="970" height="888" alt="image" src="https://github.com/user-attachments/assets/e71661d8-00a0-426c-9ebe-3494d9b613bc" />

<img width="1406" height="751" alt="image" src="https://github.com/user-attachments/assets/1b43ba39-5102-4179-8fb3-9cbc80943946" />

<img width="1337" height="884" alt="image" src="https://github.com/user-attachments/assets/c90cf212-74e2-4c09-89d9-60021146260a" />

<img width="1407" height="396" alt="image" src="https://github.com/user-attachments/assets/3ed8b24b-4cb0-48b8-9339-ecf6f937f240" />

<img width="1386" height="640" alt="image" src="https://github.com/user-attachments/assets/76cd1f4d-960c-4bf4-b30d-faee46c4f643" />
