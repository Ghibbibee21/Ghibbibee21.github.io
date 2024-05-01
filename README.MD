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