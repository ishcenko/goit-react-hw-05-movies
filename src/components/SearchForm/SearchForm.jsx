import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from './SearchForm.styled';

function SearchForm({ onSubmit, defayltValue }) {
  const searchRef = useRef();
  const handleSubmitForm = event => {
    event.preventDefault();
    onSubmit(searchRef.current.value);
  };
  return (
    <Form onSubmit={handleSubmitForm}>
      <Input defayltValue={defayltValue} ref={searchRef} type="text" required />
      <Button>Search</Button>
    </Form>
  );
}

SearchForm.propTypes = {
  defayltValue: PropTypes.string,
  onSubmit: PropTypes.func,
};

export default SearchForm;
