import Layout from "../components/Layout/Layout";
import ClientRow from "../components/ClientRow/ClientRow";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";

const GET_CLIENTS_BY_USER = gql`
  query getClientByVendor {
    getClientByVendor {
      id
      name
      lastName
      email
      institutionName
    }
  }
`;
const Index = () => {
  const router = useRouter();

  // Apollo Query
  const { data, loading, error, client } = useQuery(GET_CLIENTS_BY_USER);

  if (loading) return "Loading...";

  if (!data.getClientByVendor) {
    client.clearStore();
    router.push("/login");
    return <p>Loading...</p>;
  }

  return (
    <>
      <Layout>
        <h1 className="text-2xl font-light text-grey-800">Clients</h1>
        <Link href="/new-client">
          <a className="inline-block px-5 py-2 mt-5 text-sm text-white bg-blue-800 rounded hover:bg-blue-900">
            Crear nuevo cliente
          </a>
        </Link>

        <table className="w-full mt-10 shadow-md table-auto w-lg">
          <thead className="bg-gray-700">
            <tr className="text-white ">
              <td className="w-1/5 px-4 py-2">Nombre Completo</td>
              <td className="w-1/5 px-4 py-2">Entidad</td>
              <td className="w-1/5 px-4 py-2">Email</td>
              <td className="w-1/5 px-4 py-2">Acciones</td>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.getClientByVendor.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  );
};

export default Index;
