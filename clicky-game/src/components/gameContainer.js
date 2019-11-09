import React, {Component}  from "react";
import ImageRender from "./renderImages"
import images from "../images.json"

const styling = {
    scoreBoard:{
    paddingRight: 100,
    paddingLeft: 10,
    backgroundColor: "#D8e0BB",
    },
    MessageText: {
        textAlign: 'center'
    },
    nav:{
        backgroundColor: "#B6CEC7",
        
    },
    body:{
        backgroundColor: "#7268A6"
    }
};
class GameContainer extends Component{
    state = {
        images,
        message: "Click one of the pictures to get started!",
        score: 0,
        topScore: 0
    };

    handleClick = (id, clicked) =>{
        const imagePosition = this.state.images;
        console.log(id)

        if(clicked){
            imagePosition.forEach((image, i) => {
                imagePosition[i].clicked=false;
            }); 
            return this.setState({
                image: imagePosition.sort(() => Math.random() - 0.5),
                message: "You guessed incorrectly, try again!",
                score: 0
            });
        }
        else{
            imagePosition.forEach((image, i) => {
                if(id === image.id){
                imagePosition[i].clicked = true;
                };
            });

            const {topScore, score} =this.state;
            const newScore = score +1;
            const newTopScore = newScore > topScore ? newScore : topScore;

            return this.setState({
                image: imagePosition.sort(() => Math.random()-0.5),
                message: "You guessed correctly!",
                score: newScore,
                topScore: newTopScore,
            });
        };
    };
    render(){
        return(
            <div style={styling.body}>
                <div style={styling.nav} className="navbar">
                    <h1 style={{marginLeft:"20px"}}>Clicky Paws</h1>
                    <p style={styling.MessageText}>
                        {this.state.message}
                    </p>
                    <div style={styling.scoreBoard}>
                        <h3 >Score: {this.state.score}</h3>
                        <h3 >Top Score: {this.state.topScore}</h3>
                    </div>
                </div>
                    
                <div style={styling.body}className="row">
                    {
                        this.state.images.map(image =>(
                            <ImageRender
                                key = {image.id}
                                id = {image.id}
                                name = {image.name}
                                clicked = {image.clicked}
                                image = {image.image}
                                handleClick = {this.handleClick}
                            />
                        ))
                    }
                </div>
            </div>
        );
    };
};
export default GameContainer;