import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Experience from './Experience'
import Projects from './Projects'
import Education from './Education'
import Homepage from './Homepage'
const Main = () => (
    <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/Education' component={Education}/>
        <Route path='/Experience' component={Experience}/>
        <Route path='/Projects' component={Projects}/>
    </Switch>
)

export default Main