## knowify_res
Knowify coding challenge

# Installation Procedure

- Ensure Docker is installed on host computer and running
- `cd` into the root directory of the application
- Run `docker-compose up`
- Open a Google Chrome browser and go to http://localhost:3000

# Specification

The process of making an online reservation for a popular restaurant can produce much anxiety for the user, especially if availability changes during the reservation-making process. Developers of such systems must account for the competition that takes place and attempt to mitigate the user's anxiety as these changes occur.

**Create** a single page application that allows a user to make a reservation for a restaurant in which lots of potential patrons are interested, at a date and time that the user selects between July 24 and July 31. The application should gather information from the user through a series of prompts, and finally confirm for the user that the reservation is made. You can create this SPA with any modern JavaScript framework (see **Bonus options** below).

The restaurant takes reservations on every half-hour slot between 6 p.m. and 10 p.m., and it can accommodate parties of 12 or fewer people. There are 4 dining regions within the restaurant, each having unique constraints. (All regions are non-smoking unless otherwise noted.)

- *Main Hall:* Available for parties of 12 or fewer.
- *Bar:* Available for parties of 4 or fewer, excluding those with children*.*
- *Riverside:* Available for parties of 8 or fewer.
- *Riverside (smoking allowed):* Available for parties of 6 or fewer, excluding those with children.

The restaurant needs the following information to confirm a reservation:

- The date and time desired for the reservation
- The user's name
- A valid email address
- A valid phone number
- The size of the party
- The user's region preference
- The number of children in the party
- Whether any party member would like to smoke during dinner
- Whether anyone in the party is celebrating a birthday
    - *Optional: The name of the person celebrating a birthday*

Once the user has made all necessary selections, and all selections are confirmed as available, the application should present the user with a "review page" (just another view of the SPA) at which the user may review all of the reservation request details that they have provided. On this review page, a user may click a "Confirm" button to confirm the reservation, or they may click any reservation detail to return to the corresponding prompt and edit the response. If confirmation is successful, the application should present the user with a “confirmation page” that displays all of the reservation details.

The restaurant owner's objective is to secure a reservation from the user, even if the restaurant cannot accommodate the plans with which the user began the reservation process. (Remember, this is a popular restaurant.) In addition to offering the user only those options that are currently available, until the user reaches the 'confirmation page,' the application should continually reassess whether the restaurant can accommodate the user's current selections and present the user with alternatives as early as it becomes clear that a previous selection can no longer be accommodated.

---

# Bonus options

- **Create** a mock API that demonstrates that your application can support the user as other patrons confirm reservations that make confirmation of the user’s current reservation details impossible.
- **Implement** the application in Angular. If you are implementing the mock API, consider employing *HTTPInterceptor*. (double bonus!)

---

# Preparation and delivery

1. Create a GitHub repository for your implementation of this application.
2. When you have finished development, save your code in a StackBlitz ([https://stackblitz.com/](https://stackblitz.com/)) workspace. You can either upload the files from your computer or connect your repository with the workspace.
3. Send a link for that workspace and the repository to **developers@knowify.com**.