import React from "react";

class AddComponents extends React.Component {

    state = {
        title: "",
        salary: "",
    }
    handleChangetitileJob = (event) => {
        this.setState({
            title: event.target.value
        })

    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })

    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('==> check data', this.state);
        //alert('click me')
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }

    render() {
        return (
            <form action="/action_page.php">
                <label htmlFor="fname">Job's title:</label><br />
                <input
                    type="text" value={this.state.title}
                    onChange={(event) => this.handleChangetitileJob(event)}
                /><br />
                <label htmlFor="lname">Salary:</label><br />
                <input
                    type="text" value={this.state.salary}
                    onChange={(event) => this.handleChangesalary(event)}
                />

                <br /><br />
                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)}
                />
            </form>

        )
    }
}
export default AddComponents;