# JcprojectAssignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

To run the project firstly run: npm install and then npm start. It will by default open on the localhost:4200. Go to the broswer and open http://localhost:4200 to see the application.

Have Implemeted the table with following functionalities :

1. Display
   : Displaying the records after fetching the information from the API

2. Filtering
   : On the basis of country name
   : On the basis of subregion
   : On the basis of curreny
   : On the basis of language
   : Combination of all above
   : Reset button is there, clicking on which it will reset all the filters

3. Sorting
   : In Country Name (sorted ascending by default)

4. Displaying no of Records
   : If not filter is applied it will show the total no of countries otherwise it will show the filtered results in the format "Showing {filtered result count} out of {total records} countries

5. Pagination
   : By default 10 records are being displayed on the page which can be changed to either 5 or 10 (more values can also be added in config). It has arrows for previous and next page and also for the first and the last page.

6. Responsiveness
   : The table is responsive and works well on desktop, tablets as well as mobile devices. In mobile devices the table can be scrolled horizontally to see all the columns.

7. Refresh Icon with animation
   : Clicking on refresh icon, it will animate and rotate and also it will make the api call and reset all the filters present.

8. Filtering by clicking on Pills
   : On clicking the pills it gets added to the filter select dropdown and filtering is done based on that.
