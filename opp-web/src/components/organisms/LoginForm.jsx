import { FormActions } from '@components/molecules/FormActions';
import { InputField } from '@components/molecules/InputField';
import { useForm } from '@hooks/useForm';

export const LoginForm = () => {
  const { form, loading, message, handleChange, handleSubmit } = useForm();

  return (
    <div className="lg:w-[350px] xl:w-[450px] p-6 lg:bg-light rounded-xl lg:shadow-md lg:absolute lg:-left-40 xl:-left-32">
      <h1 className="font-bold text-center mb-4 text-lg md:text-xl xl:text-2xl">
        Ingresa ahorre e invierta en la criptomoneda
      </h1>
      <form className="block">
        <InputField
          label="Correo electronico"
          type="email"
          placeholder="ejemplo@correo.com"
          value={form.email}
          onChange={handleChange}
        />
        <InputField
          label="Contraseña"
          type="password"
          placeholder="********"
          value={form.password}
          onChange={handleChange}
        />
        <FormActions onSubmit={handleSubmit} message={message} loading={loading} />
      </form>
    </div>
  );
};
