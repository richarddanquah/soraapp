Create a new Next.js application, to read a list of items from an external file and sort them.

The items need to have 2 attributes: created at and filename.

The list of items need to be fetched from an API endpoint.

The list can be sorted in 3 different ways:
sort by created at ascendent
sort by filename ascendent
sort by filename descendent

For the filename ascendent and descendent we want a different sort, any digit into the filename needs to be converted to a number, the number should be sorted as well.

Use GitHub or GitLab to commit your code, the repository should have the name `su-fsd`, and Vercel to deploy it to a QA environment and then to the Demo/Stage environment
Example

const x = [`0010abc`, `1abc`]

// Normal sort
x.sort() // [`0010abc`, `1abc`]

// With the proposal we want
// [`1abc`, `0010abc`]
Layout
https://tailwindui.com/components/application-ui/elements/dropdowns
https://tailwindui.com/components/application-ui/lists/grid-lists


Initial values
2023-06-25 11:00;1abc.txt
2023-06-25 12:00;abc.txt
2023-06-25 13:00;01abc.txt
2023-06-25 14:00;0010abc.txt
2023-06-25 15:00;011abc.txt
2023-06-25 16:00;20-abc.txt
2023-06-25 17:00;021-abc.txt
2023-06-25 18:00;002-abc.txt
2023-06-25 19:00;cba.txt
2023-06-25 20:00;abc010.txt
2023-06-25 21:00;abc1.txt

// After the sort
2023-06-25 11:00;1abc.txt
2023-06-25 13:00;01abc.txt
2023-06-25 18:00;002-abc.txt
2023-06-25 14:00;0010abc.txt
2023-06-25 15:00;011abc.txt
2023-06-25 16:00;20-abc.txt
2023-06-25 17:00;021-abc.txt
2023-06-25 12:00;abc.txt
2023-06-25 21:00;abc1.txt
2023-06-25 20:00;abc010.txt
2023-06-25 19:00;cba.txt
