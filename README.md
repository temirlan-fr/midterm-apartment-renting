QONYS Apartment Renting Website

Project topic

QONYS is a student website for exploring and comparing sample rental apartments in Almaty and Astana. Our endterm project extends the original midterm website in the same repository.

<img width="1448" height="923" alt="image" src="https://github.com/user-attachments/assets/76ccc59a-1e8c-4ed3-acce-53ddc446930e" />

Team members and contributions

Akshit Khokher developed the renter registration form, email validation, password confirmation, strength meter and live field feedback.

<img width="970" height="888" alt="image" src="https://github.com/user-attachments/assets/e71661d8-00a0-426c-9ebe-3494d9b613bc" />

<img width="1406" height="751" alt="image" src="https://github.com/user-attachments/assets/1b43ba39-5102-4179-8fb3-9cbc80943946" />


Temirlan Bolat developed apartment search, city filters, the responsive photo gallery and the lightbox with jQuery fade effects.

<img width="1337" height="884" alt="image" src="https://github.com/user-attachments/assets/c90cf212-74e2-4c09-89d9-60021146260a" />

<img width="1407" height="396" alt="image" src="https://github.com/user-attachments/assets/3ed8b24b-4cb0-48b8-9339-ecf6f937f240" />

Miras Kairatuly developed the viewing shortlist, inline editing, confirmed deletion and project documentation.

<img width="1386" height="640" alt="image" src="https://github.com/user-attachments/assets/76cd1f4d-960c-4bf4-b30d-faee46c4f643" />


Website

The website has five pages: Home, Apartments, Prices, About Us and Contact. Visitors can explore furnished apartments, compare monthly rent and deposits, and practise completing an enquiry. The original navigation, contact form, price comparison table and responsive design remain in place.

Registration

The registration form checks the name, email, password, password confirmation and message before completion. It checks email format with a regular expression and gives feedback as the visitor types. A meter displays weak, medium and strong passwords. The passwords must match. Invalid entries prevent completion. The demonstration does not create an account or save passwords.

Apartment search

Visitors can search by apartment name, city or district. Search ignores letter case and updates the apartment cards without reloading the page. The All, Almaty and Astana buttons work together with the search field. The page displays the number of matches or a message when no apartments match.

Viewing shortlist

The Prices page contains a dynamic table separate from the original rental price comparison. Visitors can add apartments, read the current records, edit values directly in a row and delete a record after confirmation. Cancelling an edit or deletion preserves the original information. The shortlist resets when the page is reloaded.

Photo gallery

The Apartments page displays photographs in a responsive Bootstrap grid. Selecting a photograph opens a larger view with previous and next arrows. jQuery fade effects animate opening, closing and switching photographs. Visitors can also use the arrow keys and Escape.

Technologies

HTML5 provides the page structure. External CSS, Flexbox, CSS Grid, Bootstrap and media queries provide the layout and responsive design. JavaScript handles form validation, searching and shortlist records. jQuery handles the gallery events and fade effects.

Running the project

Open index.html in a browser. Internet access is required for libraries, fonts and images linked from external sources. Apartment details and prices are examples rather than verified rental offers.

Repository

https://github.com/temirlan-fr/midterm-apartment-renting

Published website
