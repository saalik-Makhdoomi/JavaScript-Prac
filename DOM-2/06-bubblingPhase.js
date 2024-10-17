let head = document.querySelector('#head');
head.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
});

head.parentNode.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
    head.parentNode.parentNode.style.backgroundColor = 'aliceblue';
});

head.parentNode.parentNode.addEventListener('click',function(event){
    alert("target = " + event.target.tagName + ", this=" + this.tagName);
});

// Sequence - span , h1 , div 


// Here is one more example illustrating all 3 phases:

// <!DOCTYPE html>
// <html>
//   <body>
//     <div id="parent">
//       <button id="targetButton">Click me</button>
//     </div>
//     <script>
//       const parent = document.getElementById('parent');
//       const button = document.getElementById('targetButton');

//       // Listener in capturing phase
//       parent.addEventListener('click', () => {
//         console.log('Parent capturing');
//       }, true);

//       // Listener in bubbling phase
//       parent.addEventListener('click', () => {
//         console.log('Parent bubbling');
//       }, false);

//       // Listener on the target element
//       button.addEventListener('click', () => {
//         console.log('Button clicked');
//       }, false);
//     </script>
//   </body>
// </html>
