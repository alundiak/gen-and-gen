import { Col, Row } from 'reactstrap';
import { ListOfPublicResults } from '../base-components/ListOfPublicResults';
import { useProjectsData } from './common';

export function PublicFTDNAresults() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();

  return <>
    <Row>
      <Col>
        <h3>Public DNA results</h3>
        <section>
          <ListOfPublicResults data={myFtdnaProjects} />
        </section>
      </Col>
      <Col>
        <h3>Public DNA results (not member)</h3>
        <section>
          <ListOfPublicResults data={otherFtdnaProjects} />
        </section>
      </Col>
    </Row>
  </>;
}
