class PersonList extends React.Component {

  constructor(props){
    super(props);
  }

  setPerson(element){
    const targetId = element.target.id;
    this.props.onChange(targetId);
  }

  render() {
    return (
      <div>
        <ul>
           { this.props.people.map(person => {
             return <li onClick={this.setPerson.bind(this)} id={person._id} key={person._id}>{person.name}</li>
           }) }
        </ul>
      </div>
    )
  }
}
