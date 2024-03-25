import { useState } from "react"
import { useDispatch } from 'react-redux';
import FormControl from "./base/form/FormControl"
import FormLabel from "./base/form/FormLabel"
import InputText from "./base/form/InputText"
import Textarea from "./base/form/Textarea";
import { createProduct } from '@/services/products';
import { fetchProducts } from '@/store/productsSlice';

function CreateProductForm({
  children,
  onSubmitSuccess,
}) {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const onChange = (field) => ({ target }) => {
    const updatedData = {
      ...formData,
      [field]: target.value
    };

    setFormData(updatedData);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      ...formData,
      price: +formData.price ?? 0,
    }

    createProduct(body).then(() => {
      dispatch(fetchProducts());
      onSubmitSuccess && onSubmitSuccess();
    });
  }

  return (
    <form
      className="flex flex-col gap-y-4"
      onSubmit={onSubmit}
    >
      <FormControl>
        <FormLabel htmlFor="name">Nombre*</FormLabel>
        <InputText
          id="name"
          value={formData.name}
          onChange={onChange('name')}
          placeholder="Nombre de producto"
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="description">Description*</FormLabel>
        <Textarea
          id="description"
          value={formData.description}
          onChange={onChange('description')}
          rows={4}
          placeholder="Descripción del producto"
          required
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="price">Precio*</FormLabel>
        <InputText
          id="price"
          type="number"
          value={formData.price}
          onChange={onChange('price')}
          placeholder="Precio del producto"
          min={1}
          required
        />
      </FormControl>
      {children}
    </form>
  )
}

export default CreateProductForm