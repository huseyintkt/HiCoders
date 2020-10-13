
class Personal extends React.Component{

    constructor(){
        super();
        this.data = GENERATED_DATA;
    }

    render(){
        return (                                              
            <div>
                {
                this.data.map(person => {
                    return <div className="container">

                                <h2 className="title">Personal</h2>
                                <div className="row">                  
                                    <PersonalInfo data={person}/>
                                </div>  

                                <h2 className="title">Children</h2>
                                <div className="row">   
                                    {person.children.map(child => {
                                        return <Child data={child}/>                   
                                    })}
                                </div> 

                                <h2 className="title">Friends</h2>
                                <div className="row">     
                                    {person.friends.map(friend => {
                                        return <Friend data={friend}/>                    
                                    })}  
                                </div> 

                            </div>
                        })
                }           
            </div>                    
        );
    }
}