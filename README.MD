- For my final project, Im doing a little quiz that leads to my website if the visitor wants to peep it
- I started off with a code I found for a [buzzfeed style quiz](https://codepen.io/Tyronita/pen/GBopMG)
- Here's what the previous html looked like
``` html
<div class="quiz">

  <h2 class="quiz-question">Q1: How do you spell "Red"?</h2>
  <ul data-quiz-question="1">
    <li class="quiz-answer" data-quiz-answer="a">a. Red</li>
    <li class="quiz-answer" data-quiz-answer="b">b. Reed</li>
    <li class="quiz-answer" data-quiz-answer="c">c. Req</li>
    <li class="quiz-answer" data-quiz-answer="d">d. Sed</li>
  </ul>

  <h2 class="quiz-question">Q2: How do you spell "Green"?</h2>
  <ul data-quiz-question="2">
    <li class="quiz-answer" data-quiz-answer="a">a. Greeen</li>
    <li class="quiz-answer" data-quiz-answer="b">b. Green</li>
    <li class="quiz-answer" data-quiz-answer="c">c. Gren</li>
    <li class="quiz-answer" data-quiz-answer="d">d. Grenn</li>
  </ul>

  <h2 class="quiz-question">Q3: How do you spell "Blue"?</h2>
  <ul data-quiz-question="3">
    <li class="quiz-answer" data-quiz-answer="a">a. Bluue</li>
    <li class="quiz-answer" data-quiz-answer="b">b. Bluee</li>
    <li class="quiz-answer" data-quiz-answer="c">c. Btue</li>
    <li class="quiz-answer" data-quiz-answer="d">d. Blue</li>
  </ul>

  <h2 class="quiz-question">Q4: How do you spell "HTML"?</h2>
  <ul data-quiz-question="4">
    <li class="quiz-answer" data-quiz-answer="a">a. MLTH</li>
    <li class="quiz-answer" data-quiz-answer="b">b. LMTH</li>
    <li class="quiz-answer" data-quiz-answer="c">c. HTML</li>
    <li class="quiz-answer" data-quiz-answer="d">d. HMTL</li>
  </ul>

  <h2 class="quiz-question">Q5: How do you spell "CSS"?</h2>
  <ul data-quiz-question="5">
    <li class="quiz-answer" data-quiz-answer="a">a. ASS</li>
    <li class="quiz-answer" data-quiz-answer="b">b. CAA</li>
    <li class="quiz-answer" data-quiz-answer="c">c. ASA</li>
    <li class="quiz-answer" data-quiz-answer="d">d. CSS</li>
  </ul>

  <h2 class="quiz-question">Q6: How do you spell "JavaScript"?</h2>
  <ul data-quiz-question="6">
    <li class="quiz-answer" data-quiz-answer="a">a. ScriptJava</li>
    <li class="quiz-answer" data-quiz-answer="b">b. JavaScript</li>
    <li class="quiz-answer" data-quiz-answer="c">c. JabaHutt</li>
    <li class="quiz-answer" data-quiz-answer="d">d. jQuery</li>
  </ul>
</div>

<div class="quiz-result"></div>
```
- And here's what I modified it into
``` html
<div class="quiz">

    <h2 class="quiz-question">How are you doing?</h2>
    <ul data-quiz-question="1">
      <li class="quiz-answer" data-quiz-answer="a">a. Great!</li>
      <li class="quiz-answer" data-quiz-answer="b">b. Okay!</li>
      <li class="quiz-answer" data-quiz-answer="c">c. Meh</li>
      <li class="quiz-answer" data-quiz-answer="d">d. Bad...</li>
    </ul>

    <h2 class="quiz-question">That's great to hear! wanna check out my website?</h2>
    <ul data-quiz-question="2">
      <li class="quiz-answer" data-quiz-answer="a">a. Sure!</li>
      <li class="quiz-answer" data-quiz-answer="b">b. No thanks!</li>
    </ul>

    <h2 class="quiz-question">That's good to hear, would you like to peep my website?</h2>
    <ul data-quiz-question="3">
      <li class="quiz-answer" data-quiz-answer="a">a. Sure, I'm down!</li>
      <li class="quiz-answer" data-quiz-answer="b">b. No thanks I'm good for now</li>
    </ul>

    <h2 class="quiz-question">Fair enough, would you like to see my website?</h2>
    <ul data-quiz-question="4">
      <li class="quiz-answer" data-quiz-answer="a">a. Sure</li>
      <li class="quiz-answer" data-quiz-answer="b">b. No</li>
    </ul>

    <h2 class="quiz-question">I'm sorry to hear that mate, want a funny little vid to cheer you up?</h2>
    <ul data-quiz-question="5">
      <li class="quiz-answer" data-quiz-answer="a">a. Yes please...</li>
      <li class="quiz-answer" data-quiz-answer="b">b. Nah, I think I'll be fine</li>
    </ul>

    <h2 class="quiz-question">Was that helpful?</h2>
    <ul data-quiz-question="6">
      <li class="quiz-answer" data-quiz-answer="a">a. Yes it was</li>
      <li class="quiz-answer" data-quiz-answer="b">b. Not really</li>
    </ul>

    <h2 class="quiz-question">Happy to hear! Now another question, would you like to see my website?</h2>
    <ul data-quiz-question="6">
      <li class="quiz-answer" data-quiz-answer="a">a. Sure sure</li>
      <li class="quiz-answer" data-quiz-answer="b">b. No thanks</li>
    </ul>
  </div>

  <div class="quiz-result"></div>
  ```
  - Next I started messing with the css profile using [the same starter code](https://codepen.io/Tyronita/pen/GBopMG)

  ``` css
  body {
  margin:0;
  padding:20px;
}
.quiz {
  padding:0 30px 20px 30px;
  max-width:960px;
  margin:0 auto;

  ul {
    list-style:none;
    padding:0;
    margin:0;
  }
}
.quiz-question {
  font-weight:bold;
  display:block;
  padding:30px 0 10px 0;
  margin:0;
}
.quiz-answer {
  margin:0;
  padding:10px;
  background:#f7f7f7;
  margin-bottom:5px;
  cursor: pointer;

  &:hover {
    background:#eee;
  }

  &:before {
    content:"";
    display:inline-block;
    width:15px;
    height:15px;
    border:1px solid #ccc;
    background:#fff;
    vertical-align:middle;
    margin-right:10px;
  }

  &.active {
    &:before {
      background-color:#333;
      border-color:#333;
    }
  }
  &.correct {
    &:before {
      background-color:green;
      border-color:green;
    }
  }
  &.incorrect {
    &:before {
      background-color:red;
      border-color:red;
    }
  }
  &.active.correct {
    &:before {
      outline: 2px solid green;
      outline-offset: 2px;
    }
  }
}
.quiz-result {
  max-width:960px;
  margin:0 auto;
  font-weight:bold;
  text-align:center;
  color: #fff;
  padding:20px;

  &.good {
    background: green;
  }
  &.mid {
    background: orange;
  }
  &.bad {
    background: red;
  }
}
```
- Then I just gutted the bits about right and wrong answers.
``` CSS
body {
    margin:0;
    padding:20px;
  }
  .quiz {
    padding:0 30px 20px 30px;
    max-width:960px;
    margin:0 auto;

    ul {
      list-style:none;
      padding:0;
      margin:0;
    }
  }
  .quiz-question {
    font-weight:bold;
    display:block;
    padding:30px 0 10px 0;
    margin:0;
  }
  .quiz-answer {
    margin:0;
    padding:10px;
    background:#f7f7f7;
    margin-bottom:5px;
    cursor: pointer;

    &:hover {
      background:#eee;
    }

    &:before {
      content:"";
      display:inline-block;
      width:15px;
      height:15px;
      border:1px solid #ccc;
      background:#fff;
      vertical-align:middle;
      margin-right:10px;
    }

    &.active {
      &:before {
        background-color:#333;
        border-color:#333;
      }
      }
    }
  ```
  
- Next, I turned all the answer options into buttons
```html
<div class="quiz">
  
    <h2 class="quiz-question">How are you doing?</h2>
    <ul data-quiz-question="1">
      <input id="clickMe" type="button" value="Great!" onclick="doFunction();" />
      <input id="clickMe" type="button" value="Okay!" onclick="doFunction();" />
      <input id="clickMe" type="button" value="Meh" onclick="doFunction();" />
      <input id="clickMe" type="button" value="Bad..." onclick="doFunction();" />
    </ul>
    
    <h2 class="quiz-question">That's great to hear! wanna check out my website?</h2>
    <ul data-quiz-question="2">
      <input id="clickMe" type="button" value="Sure!" onclick="doFunction();" />
      <input id="clickMe" type="button" value="No Thanks!" onclick="doFunction();" />
    </ul>
    
    <h2 class="quiz-question">That's good to hear, would you like to peep my website?</h2>
    <ul data-quiz-question="3">
      <input id="clickMe" type="button" value="Sure, I'm down!" onclick="doFunction();" />
      <input id="clickMe" type="button" value="No thanks, I'm good for now!" onclick="doFunction();" />
    </ul>
    
    <h2 class="quiz-question">Fair enough, would you like to see my website?</h2>
    <ul data-quiz-question="4">
      <input id="clickMe" type="button" value="Sure" onclick="doFunction();" />
      <input id="clickMe" type="button" value="No" onclick="doFunction();" />
    </ul>
    
    <h2 class="quiz-question">I'm sorry to hear that mate, want a funny little vid to cheer you up?</h2>
    <ul data-quiz-question="5">
      <input id="clickMe" type="button" value="Yes please..." onclick="doFunction();" />
      <input id="clickMe" type="button" value="Nah, I think I'll be fine" onclick="doFunction();" />
    </ul>
    
    <h2 class="quiz-question">Was that helpful?</h2>
    <ul data-quiz-question="6">
      <input id="clickMe" type="button" value="Yes it was" onclick="doFunction();" />
      <input id="clickMe" type="button" value="Not really..." onclick="doFunction();" />
    </ul>

    <h2 class="quiz-question">Happy to hear! Now another question, would you like to see my website?</h2>
    <ul data-quiz-question="7">
      <input id="clickMe" type="button" value="Sure sure" onclick="doFunction();" />
      <input id="clickMe" type="button" value="No thanks" onclick="doFunction();" />
    </ul>
  </div>
  
  <div class="quiz-result"></div>
```
- I found out how via [this website](https://stackoverflow.com/questions/1947263/using-an-html-button-to-call-a-javascript-function)
- For the javascript stuff, I got help from my buddy Jason.
- We looked up a bunch of stuff about javascript and we landed on the following stackoverflow/gomakethings links
- [1](https://gomakethings.com/four-different-ways-to-inject-text-and-html-into-an-element-with-vanilla-javascript/)
- [2](https://stackoverflow.com/questions/4426184/how-to-go-from-one-page-to-another-page-using-javascript)
- [3](https://stackoverflow.com/questions/69629809/automatically-close-html-page)
- In the end this is the javascript code that was made

``` javascript

function loadQ2(){
  let quiz=document.querySelector('.quiz');
  quiz.outerHTML =  `
  <h2 class="quiz-question">
  That's great to hear! wanna check out my website?</h2>
  <input id="clickMe" type="button" value="Sure!" onclick="openWeb();" />
  <input id="clickMe" type="button" value="No Thanks!" onclick="closeTab();" />
  `
}

function loadQ3(){

  let quiz=document.querySelector('.quiz');
  quiz.outerHTML =  `<h2 class="quiz-question">That's good to hear, would you like to peep my website?</h2>
    <input id="clickMe" type="button" value="Sure, I'm down!" onclick="openWeb();" />
    <input id="clickMe" type="button" value="No thanks, I'm good for now!" onclick="closeTab();" />`
}

function loadQ4(){

  let quiz=document.querySelector('.quiz');
  quiz.outerHTML =  `<h2 class="quiz-question">Fair enough, would you like to see my website?</h2>
    <input id="clickMe" type="button" value="Sure" onclick="openWeb();" />
    <input id="clickMe" type="button" value="No" onclick="closeTab();" />`
}

function loadQ5(){

  let quiz=document.querySelector('.quiz');
  quiz.outerHTML =  `
    <h2 class="quiz-question">I'm sorry to hear that mate, want a website to cheer you up?</h2>
    <input id="clickMe" type="button" value="Yes please..." onclick="openWeb();" />
    <input id="clickMe" type="button" value="Nah, I think I'll be fine" onclick="closeTab();" />`
}

//Found out that you can't nest load functions in javascript :(
/*function loadQ6(){

  let quiz=document.querySelector('.quiz');
  quiz.outerHTML =  `<h2 class="quiz-question">Was that helpful?</h2>
    <input id="clickMe" type="button" value="Yes it was" onclick="loadQ7();" />
    <input id="clickMe" type="button" value="Not really..." onclick="loadQ4();" />`
}

function loadQ7(){

  let quiz=document.querySelector('.quiz');
  quiz.outerHTML =  `<h2 class="quiz-question">Happy to hear! Now another question, would you like to see my website?</h2>
  <input id="clickMe" type="button" value="Sure sure" onclick="openWeb();" />
  <input id="clickMe" type="button" value="No thanks" onclick="closeTab();" />`
}*/

function openWeb(){
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

function closeTab(){
  window.open('', '_self', '');
  window.close();
}

/*function showVid(){
  console.log ('legos')
}*/
```
- Now there's the issue of the stylesheet
- Truth be told, I ended up just scrapping the stylesheet from earlier 
- Instead, I opted to just reference the [class example website](https://github.com/rdwrome/rdwrome.github.io/blob/master/index.html) for the css profile stuff
- I also had to change my html to this
```html
<head>
  <script type = "text/javascript" src="app.js"></script>
  <link href="styles.css" rel="stylesheet">
</head>
<body>
<div class="quiz">
  <h2 class="quiz-question">How are you doing?</h2>
    <input id="clickMe" type="button" value="Great!" onclick="loadQ2();" />
    <input id="clickMe" type="button" value="Okay!" onclick="loadQ3();" />
    <input id="clickMe" type="button" value="Meh" onclick="loadQ4();" />
    <input id="clickMe" type="button" value="Bad..." onclick="loadQ5();" />
</div>

</body>
```