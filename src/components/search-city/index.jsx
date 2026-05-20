import { useState } from 'react';
import { Input } from '@/components/ui/input';

const SearchCity = ({ placeholder, onSearch }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputValue.trim()) {
      onSearch(inputValue.trim()); // Передаємо чисте значення наверх
      setInputValue(''); // Очищаємо інпут після відправки
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
      />
    </form>
  );
};

export default SearchCity;