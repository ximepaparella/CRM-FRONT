import Button from "../Button/Button";

const ClientRow = ({ client }) => {
  const { name, lastName, institutionName, email } = client;
  return (
    <>
      {console.log(client)}
      <tr>
        <td className="px-4 py-2 border">
          {name} {lastName}
        </td>
        <td className="px-4 py-2 border">{institutionName}</td>
        <td className="px-4 py-2 border">{email}</td>
        <td className="px-4 py-2 border">
          <Button
            text="Eliminar"
            className="flex w-full px-2 py-1 text-sm text-white bg-red-600 rounded sm:w-auto hover:bg-red-700"
            action={() => logout()}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            }
          />
        </td>
      </tr>
    </>
  );
};

export default ClientRow;
