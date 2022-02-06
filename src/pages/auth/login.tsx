import React from 'react';

import { GoogleOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import Button from 'components/Button/Button';
import FormItem from 'components/FormItem';
import Layout from 'components/Layout';
import NavLink from 'components/NavLink';

const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Index = () => {
  return (
    <Layout>
      <Row className="flex justify-around h-full flex-1">
        <Col className="flex flex-col justify-center w-96 text-center mb-48 md:mb-0">
          <h1 className="mb-0 text-4xl">Já tem uma conta?</h1>
          <span className="text-2xl font-light mb-5">
            Faça o login logo abaixo.
          </span>
          <Formik
            initialValues={{ username: 'Pedro' }}
            onSubmit={(v) => alert(JSON.stringify(v))}
            validationSchema={loginFormSchema}
          >
            <Form className="flex flex-col gap-6">
              <FormItem label="Email" id="email" placeholder="Nome" />
              <FormItem
                label="Senha"
                id="password"
                placeholder="Senha"
                type="password"
              />
              <div className="flex justify-between gap-3">
                <Button
                  className="w-80 flex items-center justify-center"
                  htmlType="submit"
                >
                  ENTRAR
                </Button>
                <Button
                  className="w-80 flex items-center"
                  icon={<GoogleOutlined />}
                >
                  ENTRE COM O GOOGLE
                </Button>
              </div>
              <NavLink href="/auth/register" Component={Button}>
                Criar uma conta
              </NavLink>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Layout>
  );
};

export default Index;
