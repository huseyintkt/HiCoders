
class Friend extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="box">
                <p><img src={this.props.data.avatar} /></p>
                <p>First Name : <span>{this.props.data.firstName}</span></p>
                <p>Last Name : <span>{this.props.data.lastName}</span></p>
                <p>Gender : <span>{this.props.data.gender}</span></p>
                <p>Phone : <span>{this.props.data.phone}</span></p>
            </div>
        )
    }
}
