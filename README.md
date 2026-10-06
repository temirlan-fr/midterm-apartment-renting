midterm-apartment-renting
QONYS — Apartment Renting Website

(image.png)

Project Topic
QONYS is a responsive website about apartment renting in Almaty and Astana. It helps visitors explore sample apartments, compare rental prices and complete a demonstration enquiry form.

Group Members
Temirlan Bolat

Kairatuly Miras

Akshit Khokher

Project Description
The website contains five connected pages: Home, Apartments, Prices, About Us and Contact. Dark blue and warm brown colours create a consistent appearance that matches the apartment renting theme. The website uses simple HTML and CSS techniques covered in our course, together with Bootstrap.

Pages and Features
The Home page introduces the website, explains the apartment selection process, presents a featured apartment and includes frequently asked questions.

The Apartments page displays three sample apartments with photographs, locations, room counts, floor areas and monthly prices. Each apartment has a button linking to the enquiry form on the Contact page.

(image-1.png)

The Prices page contains a comparison table showing apartment names, cities, room counts, areas, monthly rents and deposits. It also explains additional expenses and includes a sample first-month budget calculation.

(image-2.png)

The About Us page explains the project idea, its values and the main considerations when choosing an apartment.

The Contact page contains example contact information and a demonstration form with name, email, apartment selection and message fields.

(image-3.png)

Navigation and Page Structure
All five pages include a header with the QONYS logo and a navigation menu. The navigation links connect all pages, and the current page is highlighted.
Each page has a main element containing content specific to that page. Every page also includes a footer with contact information, copyright text and social media links.
Semantic HTML5 elements include header, nav, main, section, article and footer. The code is organised with consistent indentation.

HTML Features
The website uses headings, paragraphs, ordered and unordered lists, links and images. Each page has one main h1 heading, with h2 and h3 headings organising the remaining content.
Images include descriptive alt text. Div elements group content for layout, while span elements style smaller parts of text, including prices and the logo.
The Prices page includes a table with caption, thead, tbody, th and td elements. Scope attributes identify column and row headings.
The Contact page includes a form with labels, inputs, a select element, a textarea and a submit button. Labels are connected to their fields through matching for and id attributes.

CSS Features
Custom styles are stored in an external stylesheet. The required final location is css/style.css, linked from all five HTML pages. No inline styles or internal style elements are used.
Selectors control colours, fonts, spacing, borders and alignment consistently. Classes style reusable elements such as cards and buttons. IDs such as request and demo identify specific sections and are also used for styling.
Flexbox is used in the header, navigation, button groups and apartment cards. CSS Grid is used for the main introductory section, apartment collection and footer.
Relative and absolute positioning place labels over images.
Hover styles change link and button colours. Focus styles highlight interactive elements for keyboard navigation.
The nth-child(even) pseudo-class applies alternating background colours to table rows.
Three CSS variables are defined in :root: --navy, --brown and --cream.
Roboto is loaded through Google Fonts, with Arial and sans-serif as fallback fonts.
Images below the initial screen use loading="lazy".

Responsive Design
The website follows a desktop-first approach. Two custom media queries use maximum widths of 992px and 576px to adapt the layout for tablets and mobile phones.

[📸 ВСТАВИТЬ СКРИНШОТ: Мобильная версия сайта (ширина до 576px). Покажите, как шапка перестраивается вертикально, а карточки квартир выстраиваются в одну колонку]

On smaller screens, the header changes to a vertical layout, navigation links wrap and grid sections use fewer columns. On mobile screens, apartment cards are displayed in one column. Font sizes, spacing and padding are adjusted for smaller viewports.
Bootstrap grid classes such as row, col-md-4, col-md-6 and col-md-7 arrange page sections.
Bootstrap utility and component classes include container, g-4, g-5, mb-3, mt-4, text-center, align-items-center and btn.
The price table is placed inside a table-responsive container so it can scroll horizontally on narrow screens.

Design and Usability
The apartment renting theme is maintained across all pages through consistent colours, typography, images and navigation.
Buttons use simple styling and clear labels. Apartment buttons open the Contact form, where visitors select their preferred apartment manually.
Frequently asked questions use the HTML details and summary elements. No JavaScript is required.

Technologies Used
HTML5 provides the page structure and form elements.

CSS3 provides colours, typography, spacing, Flexbox, Grid, positioning and media queries.

Bootstrap 5.3.3 CSS provides the responsive grid, utility classes and basic components.

Google Fonts provides the Roboto font.

No JavaScript or backend is used.

Form Behaviour
The form demonstrates built-in browser validation through required fields, minlength and type="email".
After successful validation, the browser navigates to the demonstration message on the Contact page.
The form does not send messages, store personal information or create bookings. Form fields intentionally do not have name attributes, so their contents are not included in the submission URL.

Project Files
index.html contains the Home page.

apartments.html contains the apartment listings.

prices.html contains the comparison table and budget example.

about.html contains the project description and values.

contact.html contains the contact information and form.

css/style.css contains the custom stylesheet.

hs1.jpg, hs2.jpg and hs3.jpg contain the local apartment images.

README.md contains the project documentation.

Bootstrap is currently linked through a CDN. A local Bootstrap CSS file must also be included in the submission folder to meet the requirement for Bootstrap files, with the HTML links updated accordingly.

How to Run
Open index.html in a browser while keeping the project folder structure unchanged.
Internet access is needed for Bootstrap while it is loaded through the CDN, Google Fonts and any photographs that still use external links.

Individual Contributions
Temirlan Bolat : Create index, apartment and price pages

Akshit Khokher : Create About and contact pages

Kairatuly Miras: Create whole css style for the site

Each member should record only the work they actually completed. Each member must also understand the entire project, including sections developed by other group members.

Testing
The submitted ZIP was checked for the presence of all five pages, navigation targets, local file references, section anchors, form labels and basic HTML structure. No broken local references or duplicate IDs were found in that version.
After the final edits, browser testing must confirm that all pages open, images load, buttons lead to the correct destinations and the form rejects missing required fields and invalid email addresses.
The final layout must also be checked at desktop, tablet and mobile widths. Keyboard navigation should confirm that links, buttons and form fields have visible focus styles.

Publication
Published website URL: https://temirlan-fr.github.io/midterm-apartment-renting/

GitHub repository URL: https://github.com/temirlan-fr/midterm-apartment-renting

Publication is not confirmed until the deployed website is accessible and its pages have been checked.

Content and Image Credits
Apartment names, prices and contact information are examples created for this student project. Photographs illustrate interiors and do not represent verified rental listings.
The contact email uses an example domain. Social media links lead to general platform pages rather than official QONYS accounts.
The original photo sources used in the provided template were Clay Banks on Unsplash, Curtis Adams on Pexels and Furkan Tumer on Pexels. If the local images have been replaced, update these credits to match the images actually used.
