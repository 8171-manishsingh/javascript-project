# javascript-project
covid-19-api-exam
💻 Project Title: COVID-19 India State-wise Tracker This is a simple web application built with HTML, CSS (Bootstrap), and JavaScript that displays real-time state-wise COVID-19 data for India by fetching data from an open API.

🌐 HTML Structure Overview Document Type & Head Section:

Declares the HTML5 doctype and sets language to English.

Meta tags for character encoding and viewport settings ensure mobile responsiveness.

Imports Bootstrap 5.3.3 CSS and JavaScript via CDN.

A custom stylesheet style.css is also linked for additional styles.

Body Section:

A container (

) centers the content with margin and background styling.
A heading (

) displays the title.
A Bootstrap-styled table is used to list COVID-19 data.

The table headers define columns like: #, State, Indian Cases, Foreign Cases, Discharged, Deaths, and Total Cases.

The body of the table () is dynamically filled using JavaScript.

📜 JavaScript Functionality (main.js) Data Fetching:

The myFunction() fetches COVID-19 data from https://api.rootnet.in/covid19-in/stats/latest.

On successful fetch, it processes three key pieces of data:

regionalData: List of states and their COVID-19 stats.

summaryData: Overall summary of cases in India.

unofficialSummary: Additional unofficial summary information.

Data Display:

The display() function:

Iterates over each state in regionalData and appends a new row to the table with its respective data using the helper function show().

Appends an additional summary row displaying total Indian/foreign cases, discharges, deaths, and total confirmed cases.

Appends another summary row with unofficial data (like source, recovered, active, deaths, and total).

Helper Function - show():

Returns an HTML table row string for a given state's data.

📊 Features Live COVID-19 data for all Indian states.

Summary statistics for quick overview.

Clean, responsive UI with Bootstrap styling.

Highlights both official and unofficial statistics.



https://github.com/user-attachments/assets/6927b0ba-225d-4891-a63b-839b7a3e395c


