import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FormMyProjects() {
  return (
    <div style={{ width: "800px" }}>
      <Card style={{ width: "800px" }}>
        <Card.Header as="h5">Nuevo Proyecto</Card.Header>
        <Card.Body>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Nombre"
              className="mb-3"
            >
              <Form.Control placeholder="nameProject" />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Descripción Detallada"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <br></br>
            <Form.Select aria-label="Default select example">
              <option>Seleecione la empresa</option>
              <option value="Empresa 1">Empresa 1</option>
              <option value="Empresa 2">Empresa 2</option>
              <option value="Empresa 3">Empresa 3</option>
            </Form.Select>
            <br></br>
            <FloatingLabel
              controlId="floatingInput"
              label="Fecha de Inicio"
              className="mb-3"
            >
              <Form.Control placeholder="nameProject" />
            </FloatingLabel>
            <br></br>
            <FloatingLabel
              controlId="floatingInput"
              label="Fecha Final"
              className="mb-3"
            >
              <Form.Control placeholder="nameProject" />
            </FloatingLabel>
            <br></br>
            <FloatingLabel
              controlId="floatingInput"
              label="Costo Estimado"
              className="mb-3"
            >
              <Form.Control placeholder="nameProject" />
            </FloatingLabel>
            <br></br>
            <Form.Select aria-label="Default select example">
              <option>Seleecione las Tareas</option>
              <option value="Tarea 1">Tarea 1</option>
              <option value="Tarea 2">Tarea 2</option>
              <option value="EmpTarearesa 3">Tarea 3</option>
            </Form.Select>
            <br></br>
            <Form.Select aria-label="Default select example">
              <option>Seleecione el hito</option>
              <option value="Hito 1">Hito 1</option>
              <option value="Hito 2">Hito 2</option>
              <option value="Hito 3">Hito 3</option>
            </Form.Select>
            <br></br>
            <br></br>
            <Button variant="outline-secondary" size="lg">
              Guardar Proyecto
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default FormMyProjects;
