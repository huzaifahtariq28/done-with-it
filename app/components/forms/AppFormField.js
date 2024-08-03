import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, ...otherProps }) {
  const { handleBlur, handleChange, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
