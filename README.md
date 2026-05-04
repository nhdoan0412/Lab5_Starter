# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

- Beckham Yeoh
- Nick Doan Nhan 

1. Would you use a unit test to test the "message" feature of a messaging application? Why or why not?

No. The feature involves a user writing a message, the app sending it over a network, and another user receiving it. This kind of cross-component interaction is better suited for integration or end-to-end testing. A unit test is for testing one part of the logic, so it can't  verify that the whole message feature works correctly.

2. Would you use a unit test to test the "max message length" feature of a messaging application? Why or why not?

Yes. The feature is a single piece of logic. It just checks whether the length of a string exceeds a maximum number characters. It can be verified with simple inputs and expected outputs and does not need anything else.

