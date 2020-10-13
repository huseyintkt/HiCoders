
class PersonalInfo extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>   
                <div className="box personal">
                    <p><img src={this.props.data.avatar} /> </p>
                    <p>Children : <span>{this.props.data.children.length}</span></p>
                    <p>Friends : <span>{this.props.data.friends.length}</span></p>         
                </div>
                <div>
                    <div className="p-info"><b>First Name :</b> <span>{this.props.data.first_name}</span></div>
                    <div className="p-info"><b>Last Name :</b> <span>{this.props.data.last_name}</span></div>
                    <div className="p-info"><b>Address :</b> <span>{this.props.data.address}</span></div>
                    <div className="p-info"><b>Salary :</b> <span>{this.props.data.salary}</span></div>
                    <div className="p-info"><b>Gender :</b> <span>{this.props.data.gender}</span></div>
                    <div className="p-info"><b>Email :</b> <span>{this.props.data.email}</span></div>
                </div>  
            </div>
        )
    }
}
