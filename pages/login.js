import Layout from "../components/Layout";
import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { gql, useMutation } from "@apollo/client";
import Alert from "../components/Alert/alert";
import { useRouter } from "next/router";

const AUTH_USER = gql`
  mutation authUser($input: AuthInput) {
    authUser(input: $input) {
      token
    }
  }
`;

const Login = () => {
  //Mutation to authorice user login
  const [authUser] = useMutation(AUTH_USER);

  //State for Error o Success Message.
  const [message, setMessage] = useState(null);

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email no es válido")
        .required("Debe ingresar el email"),
      password: Yup.string().required("Debe ingresar la contraseña"),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      try {
        const { data } = await authUser({
          variables: {
            input: {
              email,
              password,
            },
          },
        });
        console.log(data);
        setMessage("Autenticando...");

        //Save token to localStorage
        const { token } = data.authUser;
        localStorage.setItem("token", token);

        setTimeout(() => {
          setMessage(null);
          router.push("/");
        }, 2000);
        //Redirect to Dashboard
      } catch (error) {
        setMessage(error.message.replace("GraphQL error:", ""));
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    },
  });

  const showMessage = () => {
    return <Alert message={message} />;
  };

  return (
    <>
      <Layout>
        {/* If the message exist invoque the function showMessage*/}
        {message && showMessage()}

        <div className="flex items-center justify-center w-full min-h-full px-4 py-12 sm:px-6 lg:px-8">
          <div className="p-12 space-y-8 bg-white rounded sm:w-1/4">
            <div>
              <img
                className="w-auto h-12 mx-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-light text-center text-gray-900">
                Iniciar sesión
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="-space-y-px rounded-md shadow-sm">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    E-mail
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Ingresá tu e-mail"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                      {formik.errors.email}
                    </dd>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Ingresá tu Contraseña"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                      {formik.errors.password}
                    </dd>
                  ) : null}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Ingresar
                </button>
              </div>

              <div className="flex flex-col items-center justify-between">
                <div className="text-sm">
                  <Link href="/register">
                    <a className="font-medium text-indigo-600 hover:text-indigo-500">
                      Si no tenes usuario crea una nueva cuenta.
                    </a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
