import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import Button from "../Button/Button";

const GET_USER = gql`
  query getUser {
    getUser {
      id
      name
      lastName
      institutionName
      role
      email
    }
  }
`;

const Header = () => {
  //Apollo Query
  const { data, loading, error, client } = useQuery(GET_USER);
  const router = useRouter();

  // Access to data after get results
  if (loading) return null;

  if (!data) {
    client.clearStore();
    router.push("/login");
    return <p>Loading...</p>;
  }

  const { name, lastName } = data.getUser;

  const logout = () => {
    localStorage.removeItem("token");
    return router.push("/login");
  };
  return (
    <div className="flex items-center justify-between w-full p-4 mb-5 bg-white rounded shadow-md">
      <p className="mr-2">
        Hola {name} {lastName}
      </p>

      <Button text="Cerrar sesión" onClick={() => logout()} className="w-full px-2 py-1 text-sm text-white bg-blue-800 rounded sm:w-auto hover:bg-blue-900" />
    </div>
  );
};
export default Header;