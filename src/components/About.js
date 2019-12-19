import React from 'react'


export default function About() {
    return(
        <div>
            <h2>About Page:</h2>
            <h3>Booking System</h3>
            <p>The Booking System is designed to be a practical for a small business needs but also will allow the busness to scale with minimal fuss. It should be easy to navigate and simple use without little to no prior knowledge.</p>
            <p>To acheive these goals we decided as a group to build the project in 'React' as it allows the the developers runnning to app to scale it to the individual business's needs by only changing small amounts of code, in combination to React we used addtional modules to bolster the projects including:</p>
            <ul>
                <li>React Bootstrap - This allowed for a clean efficent design that works with both a mobile device and desktop (requires instalation)</li>
                <li>React Calendar - Initialy we attempted to build a calender from scratch but the code was becomeing bulky, so attempted to find alternative methods and so found a dynamic calender module online (requires instalation)</li>
                <li>React Browser-Router-Dom - This allows for quick navigation arround the app and allows for addition information to be displayed away from the main booking system, including a home and a facilities page(requires instalation)</li>
            </ul>
            <h4>Home Page:</h4>
            <p>The home page offers a space for the business to customise to their individual needs. This is a space to include the clients log and busness news as often it is practical to have helpful updates for staff members. It can include updates about the business changes or room closures or upcoming charity days.</p>
            <h4>About Page:</h4>
            <p>A simple page to outline what the user needs to know about the Booking system (it has also become a make shift readme for this project)</p>
            <h4>Calendar</h4>
            <p>Having the calender system next to the main booking system was proving visualy overloading and so it was moved to an easily navigatable second page. The calender function efficiently as it needs to but the limitations of not haveing a back end does mean that we where unable to fully link the calender to the booking system.</p>
            <h4>Booking System</h4>
            <p>The Main event of the app, the booking system. The Booking system is designed so that you can see what is going on in all rooms on any given day. Due to the busy nature of the business it is benefical to see what is booked and what is not so that the individual is able to adapt what is on offer. The facilites of the rooms where originaly displyed on a seperate page but it was decided to be more efficient of to have a summary of the facilities below each room. The facilites of the room are stores as bolion true and false statments to make them easy to alter to the changing needs of the business. </p>
            <p>The booking system has gone through a number of iterations as it was difficult to find a way to make the booking system easily readable and easy to use, for all rooms symataniously. Originaly concived to use the browser-router to create the booking system it was found to be more effective to create it in react bootstraps due to its mobile viability.</p>
            <p>The user is able to see what slots that are booked and able to choose which slot best suits them by clicking on the required time on the grid. The user is then asked to fill out a from to explain the purpose of their use of the room. If the room needs to be booked for more than the half an hour time slot the user does need to click on multiple time blocks but the page does autofill there inputs. In future it would be good to make this more efficient, perhaps using a drag method alocate time slots.</p>
            <p>Due to the lack of a data base it is difficult to create a system to remove items from the booking system, this is a task for future versions</p>
            <h4>Facilites:</h4>
            <p>A page to descibe the facilites in the rooms in more depth</p>
            
            <p>additonal features for future versions</p>
            <ul>
                <li>adding logic to the form so that the system knows when the user has input more than the capacity of the room</li>
                <li>adding logic to the booking system so that the curent time and date is understood so possibel options are grayed out and unavailable</li>
                <li>when you enter the duration it knows how to book out more than the half an hour slot. - Perhaps a drag method</li>
                <li>creating a solid and consistent style to the app. including Css on each page and styled components for the business to add articles too</li>
                <li>Adding Icons to the facility page to make them more interesting to look at</li>
            </ul>
            <h4>Thank You's</h4>
                <p>We would just like to say a big thank you from Robbie, Maarja, Hamzah, and Jay to Telmo for his react guidence and to the git hub god Dean</p>
      
      
      
      
        </div>
    );
}