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
  quiz.outerHTML =  `<h2 class="quiz-question">Was that helpful?</h2>
    <input id="clickMe" type="button" value="Yes it was" onclick="loadQ7();" />
    <input id="clickMe" type="button" value="Not really..." onclick="loadQ4();" />`
}

function loadQ7(){
  quiz.outerHTML =  `<h2 class="quiz-question">Happy to hear! Now another question, would you like to see my website?</h2>
  <input id="clickMe" type="button" value="Sure sure" onclick="openWeb();" />
  <input id="clickMe" type="button" value="No thanks" onclick="closeTab();" />`
}
*/

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