import { useState, useEffect } from 'react';
import { Button, Container, Col, Row, Spinner } from 'react-bootstrap';
import Beer from './Beer';
import { getBeer } from '../../services';

const Content = () => {
  const [listBeer, setListBeer] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberOfBeer, setNumberOfBeer] = useState(0);

  const onClickBack = () => {
    if (numberOfBeer !== 0) setNumberOfBeer(prevState => prevState-1)
  }

  const onClickNext = () => {
    setNumberOfBeer(prevState => prevState+1)
    if (!listBeer[numberOfBeer+1]) {
      onGetBeer()
      setLoading(true)
    }
  };

  const onGetBeer = async () => {
    const res = await getBeer()
    if (res.ok) {
      const data = await res.json()
      setListBeer(prevState => [...prevState, data])
    }
    setLoading(false)
  }

  const isDisabledBack = numberOfBeer === 0

  useEffect(() => {
    onGetBeer()
  }, [])

  return (
    <Container>
      <div style={{ height: 620, justifyContent: 'center', alignSelf: 'center', display: 'flex' }}>
        {
          listBeer[numberOfBeer] || !loading ? <Beer beer={listBeer[numberOfBeer]} /> : <Spinner style={{ alignSelf: 'center' }} animation='border' variant='warning' />
        }
      </div>
      <br />
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <Row>
          <Col xs={6}>
            <Button variant='outline-danger' onClick={onClickBack} disabled={loading || isDisabledBack}>Back</Button>
          </Col>
          <Col xs={6}>
            <Button variant='success' onClick={onClickNext} disabled={loading}>Next</Button>
          </Col>
        </Row>
      </div>

    </Container>
  );
}

export default Content;
