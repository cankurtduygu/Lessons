-- Active: 1775634195963@@127.0.0.1@3306
SELECT * FROM Customer;

SELECT * FROM Invoice;

--? toplam fatura miktarlarini bulalim
SELECT SUM(Total) AS toplamFaturaTutari FROM Invoice;

--? En dusuk, en yüksek ve ortalama fatura miktarlarini getir

SELECT
    MIN(Total) AS minFatura,
    MAX(Total) AS maxFatura,
    ROUND(AVG(Total),2) AS avgFatura
FROM Invoice;

--? Fatura adres uzunluklarini listele
SELECT length(BillingAddress) FROM "Invoice";

SELECT * FROM "Track";

--? AC7DC GRUBUNUN EN KISA SÜREDE CALAN PARCASINI LISTELE
SELECT * 
FROM "Track" 
WHERE "Composer" = 'AC/DC' 
ORDER BY "Milliseconds" ASC
LIMIT 1;

--v1 En kisa süreli parcayi 
SELECT min(Milliseconds), * FROM "Track" WHERE "Composer"= 'AC/DC';

--v2 En uzun süreli parcayi max/min fn ile yada order by limit ile halledilir 
SELECT max(Milliseconds), * FROM "Track" WHERE "Composer"= 'AC/DC';

--# GROUP BY. Verileri gruplama

--? Faturalari ülkeye göre gurplama islemi
SELECT * FROM "Invoice" GROUP BY "BillingCountry";

SELECT 
    BillingCountry, 
    COUNT("InvoiceId") AS ToplamFaturaSayisi
FROM Invoice
GROUP BY BillingCountry;

SELECT 
    BillingCountry, 
    COUNT("InvoiceId") AS ToplamFaturaSayisi,
    SUM(Total) AS ToplamTutar
FROM Invoice
GROUP BY BillingCountry
ORDER BY "ToplamTutar";

SELECT
    BillingCountry,
    min(Total) 'min',
    max(Total) 'max'
FROM "Invoice"
GROUP BY "BillingCountry";

-- * having: group by ile birlikte kosul kullanmak

SELECT BillingCountry,sum(Total) 'Total Bill' 
FROM "Invoice"
GROUP BY "BillingCountry"
HAVING sum(total) > 100;

SELECT BillingCountry, count("InvoiceId") AS FaturaSayisi 
FROM "Invoice"
GROUP BY "BillingCountry"
HAVING COUNT(InvoiceId) > 7
ORDER BY FaturaSayisi;

SELECT BillingCountry, ROUND(AVG(Total), 2) AS OrtalamaFatura
FROM "Invoice"
GROUP BY BillingCountry
HAVING OrtalamaFatura > 5;

--* Subquery: ic ice sorgular kullanmak

SELECT round(avg(Total),2)
FROM "Invoice"

SELECT * 
FROM "Invoice"
WHERE Total > (
    SELECT round(avg(Total),2)
    FROM "Invoice"
)

--? 'Big Ones' albümünün parcalarini listele

SELECT *
FROM "Album"
WHERE "Title" = 'Big Ones'

SELECT *
FROM "Track"
WHERE "AlbumId" = 5

SELECT *
FROM "Track"
WHERE "AlbumId" = (
    SELECT "AlbumId"
    FROM "Album"
    WHERE "Title" = 'Big Ones'
)

SELECT *
FROM "Invoice"
WHERE "CustomerId" = (
    SELECT "CustomerId"
    FROM "Customer"
    WHERE "FirstName"= 'Mark' AND "LastName" = 'Philips'
);

SELECT CustomerId
FROM Invoice
GROUP BY CustomerId
ORDER BY SUM(Total) DESC
LIMIT 1;

SELECT *
FROM Customer
WHERE CustomerId = (
    SELECT CustomerId
    FROM Invoice
    GROUP BY CustomerId
    ORDER BY SUM(Total) DESC
    LIMIT 1
);

SELECT FirstName, LastName
FROM Customer
WHERE CustomerId = (
    SELECT CustomerId
    FROM Invoice
    GROUP BY CustomerId
    ORDER BY SUM(Total) DESC
    LIMIT 1
);

SELECT * FROM "Invoice"

 SELECT CustomerId
    FROM Invoice
    GROUP BY CustomerId
    ORDER BY SUM(Total) DESC

SELECT CustomerId, Total  
    From "Invoice"
    ORDER BY Total

SELECT Name, UnitPrice
FROM Track
ORDER BY UnitPrice DESC
LIMIT 1;

SELECT State, COUNT(CustomerId) AS MusteriSayisi
FROM Customer
WHERE State IS NOT NULL
GROUP BY State
ORDER BY MusteriSayisi DESC;

SELECT *  FROM "Customer"
GROUP BY "Country"

SELECT "Country", COUNT(CustomerId) AS MusteriSayisi
FROM "Customer"
GROUP BY "Country";

SELECT "FirstName", "LastName","Email"  FROM "Customer";

SELECT "FirstName", "LastName", "Country"
FROM "Customer"
WHERE "Country"= 'Germany';

SELECT "Name" FROM "Track"
ORDER BY "Name" ASC
LIMIT 10;

SELECT "Name", "UnitPrice" 
FROM "Track"
WHERE "UnitPrice" > 0.99
ORDER BY "UnitPrice" DESC;

SELECT "Name", "Milliseconds" FROM "Track"
WHERE "Milliseconds" < 200000 
ORDER BY "Milliseconds" ASC;