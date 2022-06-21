import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
const EditClient = () => {
  // get actual ID
  const router = useRouter();
  const {
    query: { id },
  } = router;
  return (
    <>
      <Layout>
        <h1 className="text-2xl font-light text-grey-800">Editar cliente</h1>

        <div className="flex justify-center mt-5">
          <div className="w-full max-w-lg">
            <form
              className="px-8 pt-6 pb-8 mb-4 space-y-4 bg-white shadow-md"
              // onSubmit={formik.handleSubmit}
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
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // values={formik.values.name}
                />
                {/* {formik.touched.name && formik.errors.name ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.name}
                  </dd>
                ) : null} */}
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
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // values={formik.values.lastName}
                />
                {/* {formik.touched.lastName && formik.errors.lastName ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.astName}l
                  </dd>
                ) : null} */}
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
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // values={formik.values.email}
                />
                {/* {formik.touched.email && formik.errors.email ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.email}
                  </dd>
                ) : null} */}
              </div>
              <div>
                <label htmlFor="password">Contraseña</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ingresá una contraseña"
                />
                {/* {formik.touched.password && formik.errors.password ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.password}
                  </dd>
                ) : null} */}
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
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // values={formik.values.institutionName}
                />
                {/* {formik.touched.institutionName &&
                formik.errors.institutionName ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.institutionName}
                  </dd>
                ) : null} */}
              </div>
              <div>
                <label htmlFor="institutionType">Tipo de Entidad:</label>
                <input
                  id="institutionType"
                  name="institutionType"
                  type="text"
                  className="relative block w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ej: Entidad científica"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // values={formik.values.institutionType}
                />
                {/* {formik.touched.institutionType &&
                formik.errors.institutionType ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.institutionType}
                  </dd>
                ) : null} */}
              </div>
              <div>
                <label htmlFor="jobPosition">Posición laboral:</label>
                <input
                  id="jobPosition"
                  name="jobPosition"
                  type="text"
                  placeholder="Ej: Director"
                  className="relative block w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // values={formik.values.jobPosition}
                />
                {/* {formik.touched.jobPosition && formik.errors.jobPosition ? (
                  <dd className="mt-1 mb-3 ml-3 text-xs text-red-500">
                    {formik.errors.jobPosition}
                  </dd>
                ) : null} */}
              </div>
              <div>
                <label htmlFor="country">País:</label>
                <select
                  id="country"
                  name="country"
                  type="text"
                  //value={formik.values.institutionName}
                  className="relative block w-full px-3 py-2 text-gray-300 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // values={formik.values.country}
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

export default EditClient;
