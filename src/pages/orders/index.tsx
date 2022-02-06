import React from 'react';

import { Card, Col, Menu, Row, Select, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Search from 'antd/lib/input/Search';

import Layout from 'components/Layout';
import NavLink from 'components/NavLink';

// TODO: IMPLEMENT
interface Order {}

const { Option } = Select;
const { Text } = Typography;

const dataSource = [
  {
    order: '1',
    name: 'Relógio Gp',
    price: 32,
    trackingCode: 'ASDASDAS323ESSDSS',
    currency: '$',
  },
  {
    order: '2',
    name: 'Watch Gy',
    price: 2,
    trackingCode: 'ASDASVsaa3ASASAAS',
    currency: 'R$',
  },
];

const columns: ColumnsType<Order> = [
  {
    title: 'Número do pedido',
    dataIndex: 'order',
    key: 'order',
  },
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Preço',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Código de rastreio',
    dataIndex: 'trackingCode',
    key: 'trackingCode',
  },
  {
    title: 'Ações',
    render: () => (
      <div className="flex flex-col items-center">
        <a> Visualizar </a>
        <a> Comprar novamente </a>
      </div>
    ),
    align: 'center',
  },
];

const Index = () => {
  return (
    <Layout>
      <Row className="flex justify-around h-full flex-1">
        <Col className="flex flex-col px-5" span={6}>
          <Card
            title="Gerenciar pedidos"
            bodyStyle={{ padding: 0, paddingBottom: '14px', paddingTop: '1px' }}
          >
            <Menu
              defaultSelectedKeys={['allOrders']}
              className="flex-inline text-center border-transparent"
              inlineIndent={0}
            >
              <Menu.Item
                key="allOrders"
                className="flex-1 text-left"
                style={{ margin: 0 }}
              >
                <NavLink href="\orders">Todos os pedidos</NavLink>
              </Menu.Item>
              <Menu.Item className="flex-1 text-left" style={{ margin: 0 }}>
                <NavLink href="\orders">Pedidos excluídos</NavLink>
              </Menu.Item>
              <Menu.Item className="flex-1 text-left" style={{ margin: 0 }}>
                <NavLink href="\orders">Cartões e Contas</NavLink>
              </Menu.Item>
              <Menu.Item className="flex-1 text-left" style={{ margin: 0 }}>
                <NavLink href="\orders">Endereço de envio</NavLink>
              </Menu.Item>
            </Menu>
          </Card>
        </Col>
        <Col className="flex flex-col px-5" span={18}>
          <Row className="mb-5">
            <Col span={6}>
              <Search placeholder="Pedido por n°" style={{ width: 200 }} />
            </Col>
            <Col span={18} className="flex justify-end">
              <Select className="w-40" defaultValue="all">
                <Option value="all">Todo o período</Option>
                <Option value="lucy">Últimos 3 meses</Option>
              </Select>
            </Col>
          </Row>
          <Row className="flex gap-5 mb-5">
            <Col>
              <Text type="secondary">Aguardando Pagamento (0)</Text>
            </Col>
            <Col>
              <Text type="secondary">Aguardando Envio (0)</Text>
            </Col>
            <Col>
              <Text type="secondary">Aguardando Entrega (0)</Text>
            </Col>
          </Row>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Col>
      </Row>
    </Layout>
  );
};

export default Index;
