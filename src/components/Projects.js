import React from 'react'
import { Card, CardTitle, CardText, CardActions, Button, IconButton, CardMenu } from 'react-mdl'
import {Link} from 'react-router-dom'
import './circleci-argocd.png'
import './App.css'
class Projects extends React.Component {
    render() {
        return (
            <div>
                <div>
                <Card shadow={0} style={{width: '800px',  margin: 'auto'}}>
                    <CardTitle style={{color: '#fff',  background: '/Users/jaysalpatel/Downloads/argocd_architecture.png'}}>Welcome</CardTitle>
                    <CardText>
                        <a href="https://github.com/jaysalpatel/circleci-argocd"> Code</a>
                        <p>GitOps Pipeline with CircleCI and ArgoCD</p>
                        <img className="circleci-argocd" src={require('./circleci-argocd.png')} />
                        
                    </CardText>                
                    
                </Card>
            </div>
            </div>
        )
    }
}

export default Projects
