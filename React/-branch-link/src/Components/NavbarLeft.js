import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faFolderOpen,
    faList,
    faUsers,
    faUser,
} from "@fortawesome/free-solid-svg-icons";


function NavbarLeft() {
    return (
        <Nav defaultActiveKey="/home" className="flex-column" style={{ "padding-left": "25px", "width": " 400px", "margin": "0" }}>
            <Nav.Link href="/home" style={{ color: "gray" }}>
                <FontAwesomeIcon icon={faHome} />   Inicio
            </Nav.Link>
            <Nav.Link href="/NewProject" style={{ color: "gray" }}>
                <FontAwesomeIcon icon={faFolderOpen} />   Proyectos
            </Nav.Link>
            <Nav.Link href="MyProjects" style={{ color: "gray" }}>
                <FontAwesomeIcon icon={faList} />   Mis Proyectos
            </Nav.Link>
            <Nav.Link eventKey="link-3" style={{ color: "gray" }}>
                <FontAwesomeIcon icon={faUsers} />   Tu Red
            </Nav.Link>
            <Nav.Link eventKey="link-4" style={{ color: "gray" }}>
                <FontAwesomeIcon icon={faUser} />   Perfil
            </Nav.Link>
        </Nav>
    );
}

export default NavbarLeft;
