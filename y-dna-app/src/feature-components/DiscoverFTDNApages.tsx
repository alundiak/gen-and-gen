import { Col, Row } from 'reactstrap';
import { useProjectsData } from './common';
import { ListOfDiscoverPages } from '../base-components/ListOfDiscoverPages';

export function DiscoverFTDNApages() {
  const [myFtdnaProjects, otherFtdnaProjects] = useProjectsData();
  return <>
    <Row>
      <Col>
        <h3>Discover pages</h3>
        <section>
          <ListOfDiscoverPages data={myFtdnaProjects} />
        </section>
      </Col>
      <Col>
        <h3>Discover pages (not member)</h3>
        <section>
          <ListOfDiscoverPages data={otherFtdnaProjects} />
        </section>
      </Col>
    </Row>
  </>;
}
