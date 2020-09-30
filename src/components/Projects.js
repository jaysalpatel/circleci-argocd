import React from 'react'
import { Card, CardTitle, CardText, CardActions, Button, IconButton, CardMenu } from 'react-mdl'
import { Link } from 'react-router-dom'
import './circleci-argocd.png'
import './argocd.png'
import './App.css'
class Projects extends React.Component {
    render() {
        return (
            <div>
                <div>
                <Card shadow={8} style={{width: '1000px',  margin: 'auto', border: 'blue'}}>
                    <CardTitle style={{color: '#fff',  background: '/Users/jaysalpatel/Downloads/argocd_architecture.png'}}>Welcome</CardTitle>
                    <CardText>
                        <a href="https://github.com/jaysalpatel/circleci-argocd"> Code</a>
                        <p>GitOps Pipeline with CircleCI and ArgoCD</p>
                        <img className="circleci-argocd" src={require('./circleci-argocd.png')} />
                        
                    </CardText>                
                </Card>
               <br></br>
               <Card shadow={8} style={{width: '80000px',  margin: 'auto', border: 'blue'}}>
                    <CardTitle style={{color: '#fff',  background: '/Users/jaysalpatel/Downloads/argocd_architecture.png'}}>Welcome</CardTitle>
                    <CardText>
                        <a href="https://github.com/jaysalpatel/circleci-argocd"> Pipeline</a>
                        <p>GitOps Pipeline with CircleCI and ArgoCD</p>
                        <img className="circleci-argocd" src={require('./argocd.png')} />
                        
                    </CardText>                
                </Card>
            </div>
            </div>
        )
    }
}

export default Projects
