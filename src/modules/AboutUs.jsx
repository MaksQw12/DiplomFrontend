import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../styles/AboutUs.css';
const AboutUs = () => {
  return (
    <div className="content-acardion-body">
      <div className="content-acardion">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0" className="acordion-item">
            <Accordion.Header>Почему мы</Accordion.Header>
            <Accordion.Body>
              Мы предлагаем не просто товары, а источник вдохновения и уверенности. Наша команда
              стремится к безупречному качеству продукции и обслуживания, чтобы каждая ваша покупка
              стала приятным и запоминающимся опытом.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className="acordion-item">
            <Accordion.Header>Наша миссия и ценности</Accordion.Header>
            <Accordion.Body>
              {' '}
              Мы не просто торгуем товарами, мы стремимся изменить мир к лучшему. Наша миссия —
              делать качественные товары доступными каждому, сохраняя при этом этичность и
              ответственность перед нашими клиентами.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2" className="acordion-item">
            <Accordion.Header>Наши преимущества</Accordion.Header>
            <Accordion.Body>
              {' '}
              В мире бесконечного выбора мы выделяемся качеством, надежностью и индивидуальным
              подходом к каждому клиенту. Наш опыт и профессионализм гарантируют, что вы получите
              именно то, что искали, а может быть, даже больше.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3" className="acordion-item">
            <Accordion.Header>Качество и надежность</Accordion.Header>
            <Accordion.Body>
              В мире быстро меняющихся трендов и потребностей, наш магазин остается стабильной
              точкой качества и надежности. Мы тщательно отбираем каждый продукт, чтобы убедиться,
              что он соответствует самым высоким стандартам. Покупая у нас, вы можете быть уверены в
              том, что получаете товары, на которые можно полагаться.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
export default AboutUs;
