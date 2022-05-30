import Layout from "../components/Layout";
import { useFormik } from "formik";
import * as Yup from "yup";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      institutionName: "CRG",
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
    onSubmit: (values) => {
      console.log("Enviando...");
      console.log(values);
    },
  });
  return (
    <>
      <Layout>
        <div className="min-h-full w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white space-y-8 p-12 rounded w-1/4">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-light text-gray-900">
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
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Ingresá tu nombre"
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <dd className="mb-3 mt-1 ml-3 text-xs text-red-500">
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
                    className="appearance-none relative block  w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Ingresá tu Apellido"
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <dd className="mb-3 mt-1 ml-3 text-xs text-red-500">
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
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Ingresá tu e-mail"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <dd className="mb-3 mt-1 ml-3 text-xs text-red-500">
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
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Ingresá una contraseña"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <dd className="mb-3 mt-1 ml-3 text-xs text-red-500">
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
                    className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <input
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
