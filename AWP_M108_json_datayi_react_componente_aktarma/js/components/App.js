class App extends React.Component {

  constructor(){
    super();
    this.data = GENERATED_DATA;
  }

  render() {
    return (
      <Content data={this.data}/>
    )
  }
}
