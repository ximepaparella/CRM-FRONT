import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Layout from "../components/Layout/Layout";
import Alert from "../components/Alert/alert";

const NEW_CLIENT = gql`
  mutation newClient($input: ClientInput) {
    newClient(input: $input) {
      id
      name
      lastName
      email
      institutionName
      country
      jobPosition
      status
      role
    }
  }
`;

const GET_CLIENTS_BY_USER = gql`
  query getClientByVendor {
    getClientByVendor {
      id
      name
      lastName
      email
    }
  }
`;

const NewClient = () => {
  //Mutation for new client
  const [newClient] = useMutation(NEW_CLIENT, {
    update(cache, { data: { newClient } }) {
      // Get the caché objetc that we need to update
      const { getClientByVendor } = cache.readQuery({
        query: GET_CLIENTS_BY_USER,
      });
      // Rewrite cache (never modify, always re write)
      cache.writeQuery({
        query: GET_CLIENTS_BY_USER,
        data: {
          getClientByVendor: [...getClientByVendor, newClient],
        },
      });
    },
  });
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      institutionName: "",
      institutionType: "",
      country: "",
      password: "",
      jobPosition: "",
      role: "User",
      status: "Pending",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Por favor ingrese el nombre"),
      lastName: Yup.string().required("Por favor ingrese el apellido"),
      institutionName: Yup.string().required("Por favor ingrese la entidad"),
      institutionType: Yup.string().required(
        "Por favor ingrese el tipo de entidad"
      ),
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .min(6, "Debe contenter al menos 6 caracteres"),
      jobPosition: Yup.string().required("Por favor ingrese la posición"),
      country: Yup.string().required("Por favor seleccione el país"),
      email: Yup.string()
        .email("El email no es válido")
        .required("Por favor seleccione el país"),
    }),
    onSubmit: async (values) => {
      console.log("valores", values);
      const {
        name,
        lastName,
        email,
        password,
        institutionName,
        institutionType,
        jobPosition,
        country,
      } = values;

      try {
        const { data } = await newClient({
          variables: {
            input: {
              name,
              lastName,
              email,
              institutionName,
              institutionType,
              country,
              password,
              jobPosition,
              role: "User",
              status: "Pending",
            },
          },
        });

        router.push("/"); // redirect to client
      } catch (error) {
        setMessage(error.message.replace("GraphQL error:", ""));
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    },
  });

  //State for Error o Success Message.
  const [message, setMessage] = useState(null);
  const showMessage = () => {
    return <Alert message={message} />;
  };

  return (
    <>
      <Layout>
        <h1 className="text-2xl font-light text-grey-800">
          Crear nuevo cliente
        </h1>

        {/* If the message exist invoque the function showMessage*/}
        {message && showMessage()}

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-lg">
            <form
              className="px-8 pt-6 pb-8 mb-4 space-y-4 bg-white shadow-md"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label className="block mb-1" htmlFor="name">
                  Nombre:
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ingrese el nombre del usuario"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.name}
                  </dd>
                ) : null}
              </div>
              <div>
                <label className="block mb-1" htmlFor="lastName">
                  Apellido:
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ingrese el apellido del usuario"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.lastName}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.lastName}
                  </dd>
                ) : null}
              </div>
              <div>
                <label className="block mb-1" htmlFor="email">
                  E-mail:
                </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ingrese el e-mail del usuario"
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
                <label htmlFor="password">Contraseña</label>
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
              <div>
                <label className="block mb-1" htmlFor="institutionName">
                  Entidad a la que pertenece:
                </label>
                <input
                  id="institutionName"
                  name="institutionName"
                  type="text"
                  required
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ej: CRG"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.institutionName}
                />
                {formik.touched.institutionName &&
                formik.errors.institutionName ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.institutionName}
                  </dd>
                ) : null}
              </div>
              <div>
                <label htmlFor="institutionType">Tipo de Entidad:</label>
                <input
                  id="institutionType"
                  name="institutionType"
                  type="text"
                  className="relative block w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ej: Entidad científica"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.institutionType}
                />
                {formik.touched.institutionType &&
                formik.errors.institutionType ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.institutionType}
                  </dd>
                ) : null}
              </div>
              <div>
                <label htmlFor="jobPosition">Posición laboral:</label>
                <input
                  id="jobPosition"
                  name="jobPosition"
                  type="text"
                  placeholder="Ej: Director"
                  className="relative block w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.jobPosition}
                />
                {formik.touched.jobPosition && formik.errors.jobPosition ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.jobPosition}
                  </dd>
                ) : null}
              </div>
              <div>
                <label htmlFor="country">País:</label>
                <select
                  id="country"
                  name="country"
                  type="text"
                  //value={formik.values.institutionName}
                  className="relative block w-full px-3 py-2 text-gray-300 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  values={formik.values.country}
                >
                  <option>Argentina</option>
                  <option>Francia</option>
                  <option>Otro país</option>
                </select>
              </div>
              <div>
                <input
                  type="submit"
                  value="Registrar usuario"
                  className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-800 border border-transparent rounded-md cursor-pointer group hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                />
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default NewClient;
