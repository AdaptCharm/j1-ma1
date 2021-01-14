/*
The MA1 submission for Javascript 1.


Written by Jamie Isaksen for Noroff.


Comments:
+ Backticks are used so that you can use both single and double quotes in strings.
+ Code blocks `{}` in if statements are fine, but then the premise is that it is a necessity. An if statement without the "else" does not provide the necessity for brackets.
+ Although the ternary operator is not a replacement for if..else statements, it is indeed useful for simple conditionals. For situations that requires nested or chained ternaries, the traditional if..else's are used as it provides better readability.
+ Semicolons `;` aren't used to end each line. Reason for this is that the code looks a lot cleaner. Another advantage, is that it doesn't affect the quality of the code.
+ Asynchronous functions are used to prevent the execution thread from being blocked.
+ Custom Render function that replaces `innerHTML`, `cssText` and `classList.add()` - following the DRY principle.

*/


/********************************************* SETUP FUNCTIONS **********************************************/


/*
Renders content the React way.
+ Changes style of each element.
+ Adds class name to each element.
+ Appends content to each element.
*/
const render = async (content, nodes, props = {}) => {

  //List of all nodes.
  const elements = [...document.querySelectorAll(nodes)]

  //Handle each node.
  elements.forEach(e => {

    //Return nothing if node already is present.
    if (!e) return

    //Change the style of each node.
    if (props.style) e.style.cssText = props.style

    //Add class name to each node.
    if (props.class) e.classList.add(props.class)

    //Check if content should be appended.
    if (props.append) return e.innerHTML += content

    //Don't render if content is null.
    if (content !== null) return e.innerHTML = content
  })
}





/********************************************* QUESTION 1 **********************************************/


/*
The cat object.
*/
const cat = {
  complain: () => { console.log(`Meow!`) }
}





/********************************************* QUESTION 2 **********************************************/


//Update content of the h3 element.
render(`Updated heading`, `h3`)





/********************************************* QUESTION 3 **********************************************/


//Change font of the h3 element.
render(null, `h3`, { style: `font-size: 2em` })





/********************************************* QUESTION 4 **********************************************/


//Add a class to the h3 element.
render(null, `h3`, { class: `subheading` })






/********************************************* QUESTION 5 **********************************************/


//Change color of the paragraph element.
render(null, `p`, { style: `color: red` })





/********************************************* QUESTION 6 **********************************************/


//Render content and change background color of the element.
render(`<p>New paragraph</p>`, `.results`, { style: `background-color: yellow` })





/********************************************* QUESTION 7 **********************************************/


/*
List of cat objects.
*/
const cats = [
  { name: `Blob`, age: 10 },
  { name: `Harold` },
  { name: `Blurt`, age: 21 }
]



/*
Parse list, handle each property & console log.
*/
const parse = async list => list.forEach(l => console.log(l.name))

parse(cats)





/********************************************* QUESTION 8 **********************************************/


/*
Handles a list of all objects and returns the rendered content.
*/
const createCats = async cats => {

  //Handle each cat.
  cats.forEach(c => {

    //Render content & append it to cat container.
    return render(`
      <div>
        <h5>${c.name}</h5>
        <p>${c.age ? c.age : `Age unknown`}</p>
      </div>
    `, `.cat-container`, { append: true })
  })
}

createCats(cats)
