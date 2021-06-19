import React, {useState} from 'react';
import projects from '../data/projects.json';

import Carousel from 'react-bootstrap/Carousel'
import Nav from 'react-bootstrap/Nav'

const Projects = () => {
    // const  [projects, setProjects ] = use
    console.log(projects);
    console.log(Object.keys(projects));

    const [activeProject, setActiveProject ] = useState('mapbox');

    const handleNavClick = (entry) => {
        console.log(entry);

        setActiveProject(entry);
    }
    return(
        <div className="section container" id="projects">
            <div className="h3 title-header text-left mt-5 mb-0 mx-4">
                Projects
                <hr></hr>
            </div>
            

            <div className="section-body d-flex">
                <Nav defaultActiveKey="/home" className="flex-column">
                    { 
                        Object.keys(projects).map((entry, index) => (
                            <Nav.Link 
                                key={index.toString()} 
                                href={'#' + entry}
                                onClick={() => handleNavClick(entry)}
                            >
                                {entry}
                            </Nav.Link>
                        ))
                    }  
                </Nav>

                {/* carousel section */}
                <div className="">
                    {
                        Object.keys(projects).map((entry, index) =>(
                            <div 
                                key={index.toString()}
                                className={activeProject === entry ? "card-item" : "card-item d-none" } 
                                id={entry}
                            >
                                <ProjectItem 
                                    key={index.toString()}
                                    entry={entry}
                                    project={projects}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};


const ProjectItem = ({entry, project }) => {
    console.log(entry);
    const currentProject = project[entry];

    return(
    <>
        {
            currentProject.map(item => (
                <Carousel key={item.id}>
                    {
                        item.images.map((image, index) =>(
                            <Carousel.Item key={index.toString()}>
                                <img className="d-block w-100" src={image} alt="First slide"/>
                                <Carousel.Caption>
                                    <h3>{item.title}</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                    
                </Carousel>
            ))
        }
    </>
    )
}

export default Projects;