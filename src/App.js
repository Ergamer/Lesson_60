import React, {Component} from 'react';
import Chat from "./components/Chat"

class App extends Component {

    state = {
        messages: [],
        inputAuthor: '',
        inputData: ''

    };

    // addNewMessage = () => {
    //     const newMessage = {author: this.state.inputAuthor, message: this.state.inputData};
    //     const messages = [...this.state.messages];
    //     messages.push(newMessage);
    //
    //     this.setState({messages})
    // };

    changeNameAuthor = (event) => {
        this.setState({inputAuthor: event.target.value})
    };

    changeInputData = (event) => {
        this.setState({inputData: event.target.value})
    };


    sendMessage = () => {
        const url = 'http://146.185.154.90:8000/messages';
        const data = new URLSearchParams();
        data.append('message', this.state.inputData);
        data.append('author', this.state.inputAuthor);

        const config = {
            method: "POST",
            body: data
        };
        fetch(url, config);

        this.setState({inputData: '', inputAuthor: ''})
    };

    componentDidMount() {
        const url = 'http://146.185.154.90:8000/messages';
        fetch(url).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Something is wrong');
        }).then(message => {
            this.setState({messages: message});
            let newMessage = message[message.length - 1];
            setInterval(() => {
                fetch(url + '?datetime=' + newMessage.datetime).then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                }).then(start => {
                    if(start.length !== 0) {
                        newMessage = start[start.length - 1];
                        const finish = [...this.state.messages];
                        finish.push(...start);
                        this.setState({messages: finish});
                    }
                })
            }, 3000)
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className="App">
                <Chat click={this.sendMessage} author={this.changeNameAuthor}
                      message={this.changeInputData} messages={this.state.messages}
                      authorValue={this.state.inputAuthor} messageValue={this.state.inputData}/>
            </div>
        );
    }
}

export default App;
