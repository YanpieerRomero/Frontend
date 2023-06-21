import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NewProject from "./NewProject";
import { useState } from 'react';

function MyProjects() {
    const [showNewProject, setNewProject] = useState(false);

    const handleClick = () => {
        setNewProject(true);
    }

    const handleCloseModal = () => {
        showNewProject(false);
    }

    return (
        <div>
            <div style={{ "display": "flex", "flex-direction": "column", 'width': '60rem' }}>
                <Card>
                    <Card.Body>This is some Projects</Card.Body>
                    <Button onClick={handleClick} variant="outline-primary">Create New Project</Button>{showNewProject && <NewProject onClose={handleCloseModal} />}
                </Card>
                <br></br>

                <Card>
                    <Card.Header as="h5">Project 127681</Card.Header>
                    <Card.Body>
                        <div>
                            <Card.Title>Backend Developer</Card.Title>
                            <div style={{ 'display': 'flex', 'flex-direction': 'row' }}>
                                <Card.Img variant="top" src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/5c3b00a0d55ae49f1b76b9ad_images.png" style={{ 'width': '100px' }} />
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </div>

                        </div>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Header as="h5">Project 127681</Card.Header>
                    <Card.Body>
                        <div>
                            <Card.Title>Backend Developer</Card.Title>
                            <div style={{ 'display': 'flex', 'flex-direction': 'row' }}>
                                <Card.Img variant="top" src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/5c3b00a0d55ae49f1b76b9ad_images.png" style={{ 'width': '100px' }} />
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </div>

                        </div>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <br></br>
                <Card>
                    <Card.Header as="h5">Project 127681</Card.Header>
                    <Card.Body>
                        <div>
                            <Card.Title>Backend Developer</Card.Title>
                            <div style={{ 'display': 'flex', 'flex-direction': 'row' }}>
                                <Card.Img variant="top" src="https://d3ml3b6vywsj0z.cloudfront.net/company_images/5c3b00a0d55ae49f1b76b9ad_images.png" style={{ 'width': '100px' }} />
                                <Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                            </div>

                        </div>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default MyProjects;
