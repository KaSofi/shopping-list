import { Component } from "react";
import image from './shoppingBag.jpg'

export class Grocerylist extends Component {
    state = {
        userInput: '',
        Grocerylist: []
    }
    
    onChangeEvent(e) {
        this.setState({userInput: e});
        console.log(e)
    }

    addItem(input) {
        if (input === '') {
            alert('enter the item, please.');
        } else {
            let listArray = this.state.Grocerylist;
            listArray.push (input);
            this.setState({Grocerylist:listArray, userInput: ''})
        }
    }

    deleteItem() {
        let listArray = this.state.Grocerylist;
        listArray = [];
        this.setState({Grocerylist: listArray})
    }

    crossWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type='text'
                    placeholder="Что нужно купить?"
                    onChange={(e) => {this.onChangeEvent (e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div>
                    <button onClick={() => this.addItem (this.state.userInput)} className='addButton'>ДОБАВИТЬ</button>
                </div>
                <ul> {this.state.Grocerylist.map((item, index) => (
                    <li onClick={this.crossWord} key = {index}>
                        <img src={image} alt='shopping bag' width='15px' />
                        {item}
                    </li>
                    ))}
                </ul>
                <div>
                    <button onClick={() => this.deleteItem()} className='deleteButton'>УДАЛИТЬ</button>
                </div>
                </form>
            </div>
        )
    }
}