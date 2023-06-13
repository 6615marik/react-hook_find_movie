import { useState } from 'react';
import { Button, Input, Form } from './styled.module';

const FormMovies = props => {
  //   console.log(searchQuery);
  const [word, setWord] = useState('');
  const searchQuery = e => {
    setWord(e.target.value);
  };

  const onSearch = e => {
    e.preventDefault();
    props.searchQuery(word);
  };

  return (
    <Form onSubmit={onSearch}>
      <Input type="text" value={word} onChange={searchQuery} />
      <Button type="submit">Search</Button>
    </Form>
  );
};
export default FormMovies;
