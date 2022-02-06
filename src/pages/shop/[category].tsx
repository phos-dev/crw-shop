import React, { useEffect, useState } from 'react';

import { Checkbox, Col, Divider, Input, Rate, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import { useRouter } from 'next/router';

import Button from 'components/Button/Button';
import Layout from 'components/Layout';

const { Search } = Input;
const Index = () => {
  const router = useRouter();
  const [category, setCategory] = useState<String>();
  const brands = ['Xiaomi', 'Samsung', 'Nokia', 'Apple', 'Garmin', 'Atrio'];
  const categories = ['digital'];
  const products = Array(10).fill(10);

  useEffect(() => {
    if (router.isReady) {
      const foundCategory = categories.find(
        (categ) => categ === (router.query?.category as string)
      );
      if (foundCategory) {
        setCategory(foundCategory);
      } else {
        router.push('/shop');
      }
    }
  }, [router]);

  return (
    <Layout>
      <Row className="flex justify-around h-full flex-1">
        <Col className="flex flex-col px-5 pr-0" span={3}>
          <Text strong className="mb-2">
            Marca
          </Text>
          {brands?.map((brand, index) => (
            <Checkbox key={index} style={{ margin: 0 }} onChange={() => {}}>
              {brand}
            </Checkbox>
          ))}
          <Text strong className="mb-2 mt-3">
            Avaliação dos clientes
          </Text>
          {[2, 3, 4, 5].map((rate, index) => (
            <div key={index} className="flex">
              <Rate disabled defaultValue={rate} className="text-sm mr-1" />
              <Text>e acima</Text>
            </div>
          ))}
          <Text strong className="mb-2 mt-3">
            Lançamentos
          </Text>
          <Text>Últimos 90 dias</Text>
          <Text strong className="mb-2 mt-3">
            Preço
          </Text>
          <Text>Até R$50</Text>
          <Text>R$50 a R$150</Text>
          <Text>R$150 a R$300</Text>
        </Col>
        <Col span={1} className="flex justify-center">
          <Divider type="vertical" style={{ height: '100%' }} />
        </Col>
        <Col className="" span={20}>
          <div className="flex justify-between mx-5 mr-10 mb-5 items-center">
            <h1 className="mb-0 text-4xl">{category}</h1>
            <Search
              placeholder="Pesquisar item"
              onSearch={() => {}}
              style={{ width: 300 }}
            />
          </div>
          <div className="flex flex-wrap mx-5 gap-5">
            {products.map((_, index) => (
              <div
                key={index}
                className="h-80 w-72 flex relative flex-col gap-2"
              >
                <div
                  className="bg-no-repeat bg-center bg-cover rounded h-5/6 hover:opacity-70"
                  style={{
                    backgroundImage: `url(https://wallpaperaccess.com/full/2067364.jpg)`,
                  }}
                />
                <Button
                  className="absolute uppercase text-white bg-black bg-opacity-70 top-3/4 left-2/4 w-3/4 h-12 font-bold transform -translate-x-1/2 -translate-y-3/4"
                  onClick={() => {}}
                >
                  Adicionar ao carrinho
                </Button>
                <div className="flex h-3.5 justify-between items-center">
                  <span className="text-xl font-normal">Relógio</span>
                  <span className="font-light text-xl">R$2</span>
                </div>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Layout>
  );
};

export default Index;
