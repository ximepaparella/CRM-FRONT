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

  4;
  return (
    <div className="flex items-center justify-between w-full p-4 mb-5 bg-white rounded shadow-md">
      <p className="mr-2">
        Hola {name} {lastName}
      </p>

      <Button
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        }
        text="Cerrar sesión"
        onClick={() => logout()}
        className="flex w-full px-2 py-1 text-sm text-white bg-blue-800 rounded sm:w-auto hover:bg-blue-900"
      />
    </div>
  );
};
export default Header;
