//VisibilityToggle - render, constructor, handleToggleVisibility
//visibility -> false
//
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
        return{
            visibility: !prevState.visibility
        };
        });
    }

    render() {
        return(
            <div>
                <h1>Visibility Toggle </h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'} 
                </button>
                {this.state.visibility && (
                    <div>
                        <p> Vc nao era pra ler isso</p>
                    </div>
                )}
            </div>
        );

    }
}



ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
/*
let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    templateRender();
};
const appRoot = document.getElementById('app');

const templateRender = () => {
        const template = (
            <div>
                <h1>Visibility Toggle </h1>
                <button onClick={toggleVisibility}>
                    {visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {visibility && (
                    <div>
                        <p>Hey. These are some details you can now see. </p>
                    </div>
                )}
            </div>
        );

    ReactDOM.render(template,appRoot);
};

templateRender();
*/