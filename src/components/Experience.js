import React from 'react'
import { Card, CardText, Grid, Cell, CardTitle, CardActions } from 'react-mdl'

class Experience extends React.Component {
    render() {
        return (
            <div>
                <Card shadow={6} style={{width: '900px', margin: 'auto',  }}>
                    <CardTitle style={{color: '#fff', height: '20px', background: '/Users/jaysalpatel/Downloads/argocd_architecture.png'}}>Welcome</CardTitle>
                    <CardText>
                     <h4>PC Deskside Technician- IRS</h4>
                        <h5>IRS-ABBTECH</h5>
                        
                        <h6>Memphis, TN</h6>
                        <br></br>
                        <p4>November 2019- September 29th 2020</p4>
                        <hr></hr>
                    <u1>
                        <li>Perform loading of above-baseline software</li>
                        <li>Perform quality control steps to ensure the systems have the required configuration and software</li>
                        <li>Set systems up in preparation for imaging</li>
                        <li>Installing above-baseline software</li>
                        <li>Performing quality check</li>
                        <li>Packaging for shipment and preparing shipments</li>
                        <li>Receive shipments of equipment</li>
                        <li>Update asset management and inventory</li>
                        <li>Troubleshoot and repair hardware</li>
                    </u1>
                    </CardText>
                    <br></br>
                    <br></br>
                </Card>
                <Card shadow={6} style={{width: '900px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '30px'}}> hello</CardTitle>
                    <CardText>
                    <h4>IT Support I Student Worker </h4>
                        <h5>University of Mississippi Athletics IT</h5>
                        
                        <h6>Oxford, MS</h6>
                        <br></br>
                        <p4>October 2016 - July 2017</p4>
                        <hr></hr>
                    <u1>
                        <li>Setup and configuration of PC and Mac software, applications and operating systems</li>
                        <li>Troubleshooting and maintenance of Google Suite products</li>
                        <li>Perform customer service to users of campus technology</li>
                        <li>Troubleshoot and resolve issues for a wide range of technology support issues.</li>
                        <li>Installation desktop computers, software, printers, and other devices</li>
                        <li>Work with users to diagnose the problem and find the solution</li>
                        <li>System administration on the primary and secondary file servers</li>
                        <li>Replace hardware components such as hard drives, power supply, RAM, screens.</li>
                        <li>Troubleshoot and repair hardware</li>
                        <li>Basic TCP/IP Skills. Network Topography proficient</li>
                    </u1>
                    </CardText>

                </Card>
            </div>
        )
    }
}

export default Experience