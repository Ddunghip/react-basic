import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponents from './AddComponents';

class Mycomponent extends React.Component {

    //key:value
    state = {
        name: "hip",
        channel: "Tien Dung",

        arrJobs: [
            { id: 'Job1', title: 'dev', salary: '500' },
            { id: 'Job2', title: 'tester', salary: '400' },
            { id: 'Job3', title: 'ITsupport', salary: '600' }
        ]

    }

    addNewJob = (job) => {
        //let currentJobs = this.state.arrJobs
        console.log('>>check props:', job);
        // let currentjobs = this.state.arrJobs;
        // currentjobs.push(job)
        this.setState({
            arrJobs: [... this.state.arrJobs, job]
            // arrJobs: currentjobs
        })

    }
    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })

    }

    handleOnChangeName = (event) => {
        // console.log(event.target.value, 'event target: ', event.target, 'event object: ', event)
        this.setState({
            name: event.target.value
        })
    }
    handleClickButton = () => {
        console.log('hit the button');
        alert('click me')
    }
    // handleLink = () => {
    //     document.title = "facebook.com"
    // }
    componentDidUpdate(prevProps, prevState) {
        console.log('>> run didupdate: ', 'prev state: ', prevState, 'current state: ', this.state);
    }
    componentDidMount() {
        console.log('>>> run component did mount');
    }

    render() {
        console.log('>>> call render', this.state)
        let name = "tiendung";
        return (
            <>
                <AddComponents
                    addNewJob={this.addNewJob}
                />
                {/* <React.Fragment> */}
                {/* <div className="abc"> */}

                <div className="class 1">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    hello dung nhe, my name is {this.state.name}
                    {console.log("My name is:", name)}

                </div>
                <div className="class 2">
                    Ten toi la {this.state.channel}

                </div>
                <div className="class 3">
                    <button onClick={() => this.handleClickButton()} >
                        click me
                    </button>
                    {/* <link href="/" onClick={() => this.handleLink()}>
                        link here
                    </link> */}
                </div>
                {/* </div> */}
                {/* </React.Fragment> */}

                <ChildComponent

                    arjb={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}

                />


            </>
        )
    }
}

export default Mycomponent;