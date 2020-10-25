class Content extends React.Component {

  constructor(props){
    super(props);
    this.setId = this.setId.bind(this);
    this.state = { person : null};
  }

  setId(el){
    this.selectedId = el;
    const person = this.props.data.find(a => a._id == this.selectedId)
    this.setState({ person : person})
  }

  render() {
    return (
      <div className="content">
        <div>
          <PersonList onChange={this.setId} people={this.props.data}/>
        </div>
        <div>
           <PersonDetail value={this.state.person}/>
        </div>
      </div>
    )
  }
}
