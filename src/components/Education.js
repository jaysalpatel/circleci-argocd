import React from 'react'
import { Card, CardText, CardActions, Button, CardTitle } from 'react-mdl'
class Education extends React.Component {
    render() {
        return (
            <div>
                <Card shadow={2} style={{width: '900px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '10px', background: '/Users/jaysalpatel/Downloads/argocd_architecture.png'}}>Welcome</CardTitle>
                    <CardText>
                        <header>
                            <h1> Education </h1>
                        </header>
                    </CardText>
                
                    <CardActions>
                    </CardActions>
                </Card>
                    <br></br>
                <Card shadow={8} style={{width: '900px', margin: 'auto'}}>
                    
                    <CardText>
                        <h5>University of Mississippi</h5>
                        <br></br>
                        <hr></hr>
                        <p2>Completed 85 hours towards a bachelors degree in Management Information Systems</p2>
                    </CardText>
                
                    <CardActions>
                    </CardActions>
                </Card>
                <br></br>
               
                <Card shadow={2} style={{width: '900px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '10px', background: '/Users/jaysalpatel/Downloads/argocd_architecture.png'}}>Welcome</CardTitle>
                    <CardText>
                        <header>
                            <h1> Certifications </h1>
                        </header>
                    </CardText>
                
                    <CardActions>
                    </CardActions>
                </Card>
                <br></br>
                <Card shadow={8} style={{width: '900px', margin: 'auto'}}>
                    
                    <CardText>
                        <h5>AWS Solutions Architect Associate</h5>
                       
                        <hr></hr>
                        <p2>Validation Number: JLKS4FLKGN11Q9WR  </p2>
                        <br></br>
                        <h5> AWS Developer Associate</h5>
                        <p2>Validation Number: 3B2SRR6CGBV1163H </p2>
                    </CardText>
                
                    <CardActions>
                    </CardActions>
                </Card>
                
            </div>
        )
    }
}

export default Education