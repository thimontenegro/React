import React from 'react';


const ExpenseEditPage = (props) => {
    console.log(props);
    return (
        <div>
            Editigng the expense with id: of {props.match.params.id}
        </div>
    )
}

export default ExpenseEditPage;