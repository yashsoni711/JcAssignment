# JC Assignment

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6.

To run the project firstly run npm install and then npm start. It will by default open on the localhost:4200. Go to the browser and open http://localhost:4200 to see the application.

```
npm install
npm start
```

# Have implemented with the following functionalities :

1. **Display**
   : Displaying the records after fetching the information from the API

2. **Filtering**
   - On the basis of country name
   - On the basis of subregion
   - On the basis of currency
   - On the basis of language
   - Combination of all above
   - Reset button is there, clicking on which it will reset all the filters

3. **Sorting**
   : In Country Name (sorted ascending by default)

4. **Displaying no of Records**
   : If not filter is applied it will show the total no of countries otherwise it will show the filtered results in the format "Showing {filtered result count} out of {total records} countries

5. **Pagination**
   : By default 10 records are being displayed on the page which can be changed to either 5 or 10 (more values can also be added in config). It has arrows for previous and next page and also for the first and the last page.

6. **Responsiveness**
   : The table is responsive and works well on desktop, tablets as well as mobile devices. In mobile devices the table can be scrolled horizontally to see all the columns.

7. **Refresh Icon with animation**
   : Clicking on refresh icon, it will animate and rotate and also it will make the api call and reset all the filters present.

8. **Filtering by clicking on Pills**
   : On clicking the pills it gets added to the filter select dropdown and filtering is done based on that.

## Screenshots

![assignmentGif](https://user-images.githubusercontent.com/131767152/234667297-83a408aa-72ce-4e52-910d-0abb8f709b03.gif)

<img width="1512" alt="Screenshot 2023-04-26 at 10 31 53 PM" src="https://user-images.githubusercontent.com/131767152/234664686-74f06634-0ebc-44dc-a9c7-4213329b8022.png">
<img width="1506" alt="Screenshot 2023-04-26 at 10 32 25 PM" src="https://user-images.githubusercontent.com/131767152/234664702-b0248c0b-e747-4d3c-8363-1ed9afed2668.png">
<img width="1506" alt="Screenshot 2023-04-26 at 10 32 47 PM" src="https://user-images.githubusercontent.com/131767152/234664707-540c936b-1191-4ee7-bfee-a8c7ce75d7ba.png">
<img width="1506" alt="Screenshot 2023-04-26 at 10 32 56 PM" src="https://user-images.githubusercontent.com/131767152/234664712-1ebd13fa-2caf-4010-a42a-e265b2ad0ff9.png">
<img width="605" alt="Screenshot 2023-04-26 at 10 38 05 PM" src="https://user-images.githubusercontent.com/131767152/234664713-da7c65af-4ee5-4b65-82f6-b6efda66aa58.png">
