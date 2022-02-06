import React from 'react';

import { Input } from 'antd';
import { Field, useField, FieldConfig } from 'formik';

type IFormItemProps = {
  id: string;
  label: string;
  required?: boolean;
  name?: string;
  placeholder?: string;
};

const useInput = (type: string) => {
  switch (type) {
    case 'password':
      return Input.Password;
    default:
      return Input;
  }
};

const FormItem = (props: Omit<FieldConfig, 'name'> & IFormItemProps) => {
  const { label, type = '', name = props.id, required } = props;
  const [field, meta] = useField({ ...props, name });
  const CustomInput = useInput(type);

  return (
    <div className="flex flex-col">
      <label className="block text-left font-semibold" htmlFor={props.id}>
        {label}
        {required && <span className="text-red-700"> * </span>}
      </label>
      <Field component={CustomInput} {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="block text-left text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default FormItem;
