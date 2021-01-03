import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        const { name, value } = e.target
        this.setState({
            [name]:value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.title)
        this.setState({
            title:''
        })
    }
    

    render() {
        return (
            <form style={{display:'flex'}} onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    placeholder="Add Here..." 
                    name="title"
                    style={textStyle}
                    value={this.state.title}
                    onChange={this.onChange}/>
                <input 
                    type="submit"
                    value="SUBMIT"
                    className="btn"
                    style={btnStyle}
                    />
            </form>
        )
    }

}


const textStyle = {
    border:'none', 
    flex: '10', 
    padding:'10px'
}

const btnStyle = {
    flex:'1',
    border:'none',
    color: 'black'
}
export default AddTodo
