console.log("App.js is running!");
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//Create app object title/subtitle
// user title/subtitle in the template
// render template
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a Computer',
    options: []
};

//JSX - JavaScript XML

const onFormSubmit = (e) => {
    e.preventDefault(); //stop page auto-reload
    
    const option = e.target.elements.option.value;
    
    if(option) {
        app.options.push(option);
       //clear inputs
        e.target.elements.option.value = '';
        templateRender();
    }
};
//create ''Remove all'' button above list
//on click -> wipe the array -> rerender
const wipe = () => {
    app.options = [];
    templateRender();
};
const appRoot = document.getElementById('app');
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};


const templateRender = () => {
    const template = (
        <div>
           <h1>{app.title}</h1>  
           <p>{app.subtitle}</p>
           <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
           <button onClick = {wipe}> Remove All</button>
         
           <ol>
               {/*map over app.options getting back an array of lis 
                (Set key and text*/}
                {
                 app.options.map((option) => <li key = {option}>Option: {option} </li>)
                }
            </ol>
          <form onSubmit = {onFormSubmit}>
                <input type='text' name='option'/>
                <button > Add Option </button>
           </form>
         </div>
    );
ReactDOM.render(template,appRoot);
}

templateRender();
/*
const templateTitle = (
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p> {app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : "There's no options"} </p>
    </div>
);
*/

//Create render function that render new jsx
//Call it right away
//Call it after options array added