import Layout from "../components/Layout";

const Login = () => {
  return (
    <>
      <Layout>
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
            <htmlForm className="mt-8 space-y-6" action="#" method="POST">
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
                  />
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
                  />
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
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Si no tenes usuario crea una nueva cuenta.
                  </a>
                </div>
              </div>
            </htmlForm>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
