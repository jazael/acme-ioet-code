## Exercise description

The company ACME offers their employees the flexibility to work the hours they want. But due to some external circumstances they need to know what employees have been at the office within the same time frame

The goal of this exercise is to output a table containing pairs of employees and how often they have coincided in the office.

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our examples below:

## Example 1:

## INPUT
- RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00- 21:00
- ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00
- ANDRES=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00


## OUTPUT
ASTRID-RENE: 2
ASTRID-ANDRES: 3
RENE-ANDRES: 2

## Example 2:

## INPUT
- RENE=MO10:15-12:00,TU10:00-12:00,TH13:00-13:15,SA14:00-18:00,SU20:00-21:00
- ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00

## OUTPUT
RENE-ASTRID: 3

## Solution
For the elaboration of the solution we used Node.js, which is a server-side JavaScript environment.

The following files were created.
readfile.js which performs the reading of the file returning an array of key and value object, the key represents the name of the employee and the value represents his day or work schedule.

Initially there is a function {group_in_pairs} utilities that allows to group in pairs the schedules of the workers using the slice and iterating. For a list of two elements we proceeded to add them directly using the ternary operator, since by logic it is a pair of elements (pairs).
In the employeefrequency.js file there are 2 functions, one handles the printing of results {calculatorScheduleFrequency}, while the other function {count_similarities} performs the analysis of the frequencies where initially indexOf is used for frequencies with 100% similarity, in case of not matching a filter by abbreviation is applied to iterate only the values that match [MO, TH, SU, TU], then we have a function that checks if the value is within the range of schedules returning a true or false value.

## Step prior to the execution of the project and the tests
Clone the repository and run `yarn install` for the download of the dependency used for the execution of the tests.

## Steps to execute the tests
For the elaboration of the tests, Jest is used. To run the tests use the following command: 
`yarn test`

![image](https://user-images.githubusercontent.com/11983683/146312577-3c425720-e714-4fb8-bf14-8164d969d2b2.png)

## Steps to execute the code
To execute the project use the following command:
`yarn start`

## Result number one

![image](https://user-images.githubusercontent.com/11983683/146313017-ad8c87a0-5915-47da-bb54-37ccb69163b7.png)

![image](https://user-images.githubusercontent.com/11983683/146312674-e0905292-68c8-4039-8b48-a51e169187f4.png)

## Result number two

![image](https://user-images.githubusercontent.com/11983683/146312783-38857393-8168-4c5c-a71e-c18e2be3b0a2.png)

![image](https://user-images.githubusercontent.com/11983683/146313056-73f9808c-1273-4f5e-bd2a-bbb72e25367d.png)

