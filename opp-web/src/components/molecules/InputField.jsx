import { Input } from "@components/atoms/Input";
import { Label } from "@components/atoms/Label";

export const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <Label text={label} />
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  )
}
