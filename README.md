# Business On Bot: TASK - BACKEND
# Fetching Bank Details from the given "bank_branches.csv"
In this task, I created a REST service that can fetch bank details, using the data given in the API’s query parameters.

Deployed URL: https://bob-backend-fetch-details.vercel.app

## Main Page:

![image](https://user-images.githubusercontent.com/81455711/221828388-16faf479-d77f-42e1-a835-d71b187deeb1.png)


## Case 1:
Search API to return possible matches across all columns and all rows, ordered by IFSC code (ascending order) with limit and offset.

Request URL  - /api/search?q=Mumbai&limit=2&offset=1

My Deployed URL for CASE 1: https://bob-backend-fetch-details.vercel.app/api/search?q=Mumbai&limit=2&offset=1

## Output Screen for Case 1:

![image](https://user-images.githubusercontent.com/81455711/221828171-2b96e711-ecf6-4f06-a904-32c03f904cbb.png)


## Case 2:
Branch API to return possible matches based on the branch name ordered by IFSC code (descending order) with limit and offset

Request URL  - /api/branch?q=LONI&limit=1&offset=1 

My Deployed URL for CASE 2: https://bob-bank.vercel.app/api/branch?q=LONI&limit=1&offset=1

## Output Screen for Case 2:

![image](https://user-images.githubusercontent.com/81455711/221828095-03edc837-6160-466d-9cf6-9f4f165e072d.png)
