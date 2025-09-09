import { Button } from "@components/atoms/Button";

export const FormActions = ({ onSubmit, message, loading }) => {
  return (
    <div className="mt-4">
      <Button onClick={onSubmit} loading={loading} />
      {message && (
        <p className="text-sm mt-4 text-center text-red">
          {message}
        </p>
      )}
    </div>
  )
}
