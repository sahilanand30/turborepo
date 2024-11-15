import { getFormProps, getInputProps, useForm } from '@conform-to/react';
import { parseWithZod } from '@conform-to/zod';
import { z } from 'zod';
import { useActionData, redirect, Form } from '@remix-run/react';
import { Field } from '../../packages/ui/FieldComponent';
import supabase from '~/utils/supabase';

const schema = z.object({
  username: z.string().min(2, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function action({ request }) {
  const formData = await request.formData();
  const submission = parseWithZod(formData, { schema });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const { username, password } = submission.value;

  const { data, error } = await supabase
    .from('users')
    .insert([{ id: Math.floor(Math.random() * 100) + 1, username, password }]);

  return redirect('/app/home');
}

export default function LoginForm() {
  const lastResult = useActionData();
  const [form, fields] = useForm({
    shouldValidate: 'onBlur',
    lastResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema });
    },
  });

  return (
    <Form
      method="POST"
      encType="multipart/form-data"
      {...getFormProps(form)}
      className="space-y-4 max-w-md mx-auto p-6 bg-white rounded shadow-md"
    >
      {form.errors?.formErrors && (
        <div className="text-red-600">{form.errors.formErrors}</div>
      )}

      <Field
        labelProps={{ htmlFor: fields.username.name, children: 'Username' }}
        inputProps={{
          ...getInputProps(fields.username, { type: "text" }),
          className: "w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500",
        }}
        errors={fields.username.errors} className={undefined} />

      <Field
        labelProps={{ htmlFor: fields.password.name, children: 'Password' }}
        inputProps={{
          ...getInputProps(fields.password, { type: "password" }),
          className: "w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500",
        }}
        errors={fields.password.errors} className={undefined} />

      <button
        type="submit"
        className="w-full py-2 px-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        Login
      </button>
    </Form>
  );
}
