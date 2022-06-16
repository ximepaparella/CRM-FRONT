import Layout from "../components/Layout";
import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import Alert from "../components/Alert/alert";

const NEW_ACCOUNT = gql`
  mutation newUser($input: UserInput) {
    newUser(input: $input) {
      id
      name
      lastName
      email
      institutionName
    }
  }
`;

const Register = () => {
  //State for Error o Success Message.
  const [message, setMessage] = useState(null);
  //create new users
  const [newUser] = useMutation(NEW_ACCOUNT);

  //Routing
  const router = useRouter();

  // Form Validation
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      institutionName: "CRG",
      role: "editor",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("El nombre es obligatorio"),
      lastName: Yup.string().required("El apellido es obligatorio"),
      email: Yup.string()
        .email("El email no es válido")
        .required("El email es obligatorio"),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .min(6, "Debe contenter al menos 6 caracteres"),
    }),
    onSubmit: async (values) => {
      console.log("valores", values);

      // Destructuring of values to pass to the mutation
      const { name, lastName, email, password, institutionName } = values;
      try {
        const { data } = await newUser({
          variables: {
            input: {
              name,
              lastName,
              email,
              institutionName,
              password,
              role: "admin",
            },
          },
        });

        //User created succesfully
        setMessage(`Se creo correctamente el usuario: ${data.newUser.name}`);

        setTimeout(() => {
          setMessage(null);

          //redirect to login page
          router.push("/login");
        }, 3000);
      } catch (error) {
        //User already existent, error message
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
          <div className="w-full p-12 space-y-8 bg-white rounded lg:w-1/4">
            <div>
              <img
                className="w-auto h-12 mx-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-3xl font-light text-center text-gray-900">
                Crear cuenta
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm ">
                <div className="mb-3">
                  <label htmlFor="name" className="sr-only">
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Ingresá tu nombre"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                      {formik.errors.name}
                    </dd>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="sr-only">
                    Apellido
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Ingresá tu Apellido"
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                      {formik.errors.lastName}
                    </dd>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Ingresá tu e-mail"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                      {formik.errors.email}
                    </dd>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="sr-only">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Ingresá una contraseña"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                      {formik.errors.password}
                    </dd>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="sr-only">
                    Entidad
                  </label>
                  <input
                    id="institutionName"
                    name="institutionName"
                    type="institutionName"
                    value={formik.values.institutionName}
                    disabled
                    className="relative block w-full px-3 py-2 text-gray-300 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Register;
