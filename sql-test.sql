-- Question No. 1
SELECT C.CUST_ID, COUNT(A.ACC_NUMBER) FROM CUSTOMER C 
LEFT JOIN ACCOUNT A ON A.ACC_OWNER = C.CUST_ID
GROUP BY C.CUST_ID;


-- Question No. 2
SELECT T.*, A.ACC_NUMBER, C.CUST_FIRSTNAME, C.CUST_LASTNAME 
  FROM TRANSACTION T 
  JOIN ACCOUNT A ON T.TRS_FROM_ACCOUNT = A.ACC_NUMBER 
  JOIN CUSTOMER C ON C.CUST_ID = A.ACC_OWNER
  WHERE T.CUST_FIRSTNAME = JOHN AND T.CUST_LASTNAME = MICHAEL
 ORDER BY A.ACC_NUMBER, T.TRS_DATE;