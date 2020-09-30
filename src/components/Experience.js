import React from 'react'
import { Card, CardText, Grid, Cell, CardTitle, CardActions } from 'react-mdl'

class Experience extends React.Component {
    render() {
        return (
            <div>
                <Card shadow={0} style={{width: '900px', margin: 'auto',  }}>
                    <CardTitle style={{color: '#fff', height: '20px', background: '/Users/jaysalpatel/Downloads/argocd_architecture.png'}}>Welcome</CardTitle>
                    <CardText>
                     <h4>PC Deskside Technician- IRS</h4>
                        <p1>IRS-ABBTECH</p1>
                        <p3>Memphis, TN</p3>
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
                </Card>
                <Card shadow={0} style={{width: '900px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '30px'}}> hello</CardTitle>
                    <CardText>
                    <h4>IT Support I Student Worker</h4>
                        <p1>University of Mississippi- Athletics \n Oxford, MS</p1>
                        <p3>Oxford, MS</p3>
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

                </Card>
            </div>
        )
    }
}

export default Experience