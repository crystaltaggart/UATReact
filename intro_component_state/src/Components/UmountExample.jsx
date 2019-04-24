import React, {Component} from "react";
const carddata = [
    {key:1 ,name: 'Card A',visible:true},
    {key:2 ,name: 'Card B',visible:true}
];

class CardItem extends Component {
    state = {};
    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.props.destroy(this.props.id)
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render() {
        return (
            <div>
                Card
                <button onClick={this.handleClick} >delete</button>
            </div>

        )
    }
}
class CardContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {data: carddata};
        this.destroy = this.destroy.bind(this);
    }
    destroy(elementKey){
        console.log(elementKey);
        let result = this.state.data.filter(item=> item.key !==elementKey);
        this.setState({data: result});

    }
    render()
    {
        return (<div>
            <hr/>
            <h1>Unmount Example: Card Container</h1>
            {this.state.data.map((card,index) => {
                return <CardItem key={card.key} id={card.key} name={card.name} destroy={this.destroy}/>
            })
            }
        </div>)
    }

}

export default CardContainer;