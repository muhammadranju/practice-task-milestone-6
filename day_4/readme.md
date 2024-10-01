# Common Interview Questions

## 1. What is an API?

#### Answer: হলো এমন একটি মাধ্যম বা সিস্টেম, যার মাধ্যমে একটি অ্যাপ্লিকেশন (অ্যাপ/ওয়েবসাইট) আরেকটি অ্যাপ্লিকেশন বা সার্ভারের সাথে কথা বলে এবং তথ্য আদান-প্রদান করে।

## 2. What are the HTTP methods supported by REST?

#### Answer: Answer: REST (Representational State Transfer) API-গুলো HTTP (Hypertext Transfer Protocol) ব্যবহার করে ক্লায়েন্ট এবং সার্ভারের মধ্যে ডেটা এক্সচেঞ্জ করে। REST API-গুলো নিম্নলিখিত

## 3. Can you use GET request instead of PUT to create a response?

#### Answer: হ্যাঁ, আপনি GET request ব্যবহার করে একটি প্রতিক্রিয়া তৈরি করতে পারেন, তবে এটি সাধারণ নয় এবং কিছু পরিস্থিতিতে কাজ করতে পারে। GET request সাধারণত একটি সার্ভার থেকে তথ্য পেতে ব্যবহৃত হয়। এটি একটি নিরাপদ request, যার মানে এটি সার্ভারে কোনো পরিবর্তন করবে না। PUT request একটি সার্ভারে তথ্য আপডেট করতে বা নতুন তথ্য তৈরি করতে ব্যবহৃত হয়। এটি একটি অসুরক্ষিত request, যার মানে এটি সার্ভারে পরিবর্তন করবে।

## 4. What is the difference between PUT and POST?

#### Answer: PUT request একটি সার্ভারে একটি নির্দিষ্ট resource কে আপডেট করতে বা নতুন resource তৈরি করতে ব্যবহৃত হয়। এটি resource ঠিকানা নির্দিষ্ট করে এবং resource নতুন বা আপডেট করা মান প্রদান করে। PUT requestটি idempotent, যার মানে একই PUT request একাধিকবার পাঠানো হলেও resource উপর একই প্রভাব ফেলবে। POST request একটি সার্ভারে নতুন resourceতৈরি করতে ব্যবহৃত হয়। এটি resource ঠিকানা নির্দিষ্ট করে না, বরং resource নতুন মান প্রদান করে। POST requestটি non-idempotent, যার মানে একই POST request একাধিকবার পাঠানো হলে সার্ভারে নতুন resourceতৈরি হবে।

## 5. What is JSON?

#### Answer: JSON (JavaScript Object Notation) হল একটি সিনট্যাক্স যা মানুষ এবং কম্পিউটার উভয়ের জন্য পড়তে এবং লিখতে সহজ। এটি একটি lightweight, language-independent, data-interchange format। JSON ডেটা বস্তু এবং অ্যারের একটি ক্রমবদ্ধ সেট হিসাবে প্রতিনিধিত্ব করে।

## 6. What are CRUD operations?

#### Answer: CRUD (Create, Read, Update, Delete) হল একটি অ্যাক্রোনিয়াম যা চারটি প্রাথমিক অপারেশনকে বোঝায় যা একটি ডেটাবেসের সাথে ইন্টারঅ্যাক্ট করতে ব্যবহৃত হয়।

- Create: নতুন একটি resource তৈরি করা।
- Read: একটি resource এর তথ্য পড়া।
- Update: একটি resource এর তথ্য আপডেট করা।
- Delete: একটি resource মুছে ফেলা।

## HTTP Methods

- GET: একটি নির্দিষ্ট রিসোর্স সম্পর্কে তথ্য ফেরানোর জন্য ব্যবহৃত হয়।
- POST: একটি নতুন রিসোর্স তৈরি করার জন্য ব্যবহৃত হয়।
- PUT: একটি বিদ্যমান রিসোর্স আপডেট করার জন্য ব্যবহৃত হয়।
- PATCH: একটি বিদ্যমান রিসোর্সের কিছু নির্দিষ্ট অংশ আপডেট করার জন্য ব্যবহৃত হয়।
- DELETE: একটি বিদ্যমান রিসোর্স মুছে ফেলার জন্য ব্যবহৃত হয়।
- HEAD: GET-এর মতোই কাজ করে, তবে শুধুমাত্র হেডার ফেরায়।
- OPTIONS: কোনো কিছুতে সমর্থিত পদ্ধতিগুলো জানার জন্য ব্যবহৃত হয়।
