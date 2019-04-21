
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []//'Thing One', 'Thing two', 'Thing three']
        };
    }
    
    handleDeleteOptions(){

        this.setState(() => ({
            options: []
        }));
    }

    handlePick(){
        const option = Math.floor(Math.random() * this.state.options.length);
        const result = this.state.options[option];
        alert(result);
    }

    handleAddOption(option){
        if(!option) {
            return 'Enter a valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        else {
        this.setState((prevState) => {
            return{
                options: prevState.options.concat([option])
            };
        });
    }
    }
    //handlePick - pass down Action and - bind here - and setup - onClick
    //randomly pick an option and alert it
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header title ={title} subtitle = {subtitle}/>
                <Action hasOptions={this.state.options.length > 0}
                        handlePick = {this.handlePick}        
                />
                <Options options = {this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}/>
                <AddOption 
                handleAddOption =  {this.handleAddOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}
const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle} </h2>}
        </div>
    );
}
Header.defaultProps = {
  title: 'Indecision'   
};
/*
class Header extends React.Component {
    render(){

        return(
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.subtitle} </h2>
            </div>

        )
    }
}
*/
const Action = (props) => {
        return (
            <div>
                <button onClick ={props.handlePick} 
                disabled = {!props.hasOptions}> What should I do?</button>
            </div>
        );

} /*
class Action extends React.Component {
    render() {
        return (
            <div> 
                <button 
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                What should I do?</button>
            </div>
        );
    }
}
*/
class Options extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (<div>
            {
                this.props.options.map((option) => <Option key={option}  optionText = {option} />)
            }
            <button onClick = {this.props.handleDeleteOptions}>Delete Options</button>

        </div>
        );
    }
}

//Option -> Option component here
const Option = (props) => {
    return(
        <div>{props.optionText}</div>
    );
}
/*
class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        );
    }
}
*/
//1. Setup the form with the text input and submit button
//2 . Wire up onSubmit
//3. handleAddOption -> fetch the value type, if value, then alert;

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    handleAddOption(e){
        e.preventDefault();
        
        const newOption = e.target.elements.option.value.trim();
        
        const error = this.props.handleAddOption(newOption);
        
        this.setState(() => ({
            error
        }));
        
    }
    
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p> }
                <form onSubmit={this.handleAddOption}>
                    <input type = 'text' name = 'option'/>
                    <button> Add new Option</button>
                </form>
            </div>
        );
    }
}

/*
const User = (props) => {
    return(
        <div>
            <p>Name:  {props.name} </p>
            <p>Age: {props.age} </p>
        </div>
    );
};
*/
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
