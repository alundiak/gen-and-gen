import { Col, Row } from 'reactstrap';
import { ListOfProjects } from '../base-components/ListOfProjects';
import { useProjectsData } from './common';

export function GroupFTDNApages() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();

  return <>
    <Row>
      <Col>
        <h3>Projects pages</h3>
        <section>
          <ListOfProjects data={myFtdnaProjects} />
        </section>
      </Col>
      <Col>

        <h3>Projects pages (not member)</h3>
        <section>
          <ListOfProjects data={otherFtdnaProjects} />
        </section>
      </Col>
    </Row>
  </>;
}
