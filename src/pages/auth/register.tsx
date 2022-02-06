import React from 'react';

import { Col, Row } from 'antd';
import { Form, Formik } from 'formik';
import * as yup from 'yup';

import Button from 'components/Button/Button';
import FormItem from 'components/FormItem';
import Layout from 'components/Layout';
import NavLink from 'components/NavLink';

const registerFormSchema = yup.object().shape({
  displayName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Index = () => {
  return (
    <Layout>
      <Row className="flex justify-around h-full flex-1">
        <Col className="flex flex-col justify-center text-center">
          <h1 className="text-4xl">
            Precisamos só de alguns dados para começar
          </h1>
          <Formik
            initialValues={{ username: 'Pedro' }}
            onSubmit={(v) => alert(JSON.stringify(v))}
            validationSchema={registerFormSchema}
          >
            <Form className="flex flex-col gap-4 w-96 mx-auto mt-8">
              <FormItem id="displayName" label="Nome" required />
              <FormItem id="email" label="Email" required />
              <FormItem id="password" label="Senha" type="password" required />
              <FormItem
                id="confirmPassword"
                label="Confirme a senha"
                type="password"
                required
              />
              <Button
                className=" w-full flex items-center justify-center ml-auto"
                htmlType="submit"
              >
                REGISTRAR
              </Button>
              <NavLink href="/auth/login">Já tenho uma conta</NavLink>
            </Form>
          </Formik>
        </Col>
      </Row>
    </Layout>
  );
};

export default Index;
