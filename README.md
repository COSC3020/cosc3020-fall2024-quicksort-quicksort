# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

Looking back at this code. The results of the time complexity will be theta(n^2). The n represents the number of elements in the array. This time complexity will occur when the quicksort has to do a descending order and it will cause the arr[] < low function to become unbalanced and it will cause it to keep looping cause it can not find the pivot function it is looking for the pivot. This is why the worst case is theta(n^2) 

Sources:
I looked at other people's code because I wanted to make sure. I did not get into trouble for copying someone's code because I just followed what the lecture said and then went on my own to make it into one function. I also used ChatGPT because I could not figure out why it was not allowing me to return an empty array but it ended up being specific wording. 

Plagarism Statement:
“I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”

