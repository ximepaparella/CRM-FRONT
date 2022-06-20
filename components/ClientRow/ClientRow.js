import Button from "../Button/Button";
import Swal from "sweetalert2";
import { gql, useMutation } from "@apollo/client";

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id)
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

const ClientRow = ({ client }) => {
  //Mutation: Delete Client
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    update(cache) {
      const { getClientByVendor } = cache.readQuery({
        query: GET_CLIENTS_BY_USER,
      });

      cache.writeQuery({
        query: GET_CLIENTS_BY_USER,
        data: {
          getClientByVendor: getClientByVendor.filter(
            (actualClient) => actualClient.id !== id
          ),
        },
      });
    },
  });
  const { name, lastName, institutionName, email, id } = client;

  const editClient = () => {
    alert("Editando");
  };

  const deleteClientAlert = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-green-600 text-white text-center py-2 px-4 rounded hover:bg-green-700 ml-4",
        cancelButton:
          "bg-red-600 text-white text-center py-2 px-4 rounded hover:bg-red-700 ml-4",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "¿Estas seguro?",
        text: "Una vez eliminado el cliente no se podrá recuperar",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "No, cancelar",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          try {
            //Delete By ID
            const { data } = await deleteClient({
              variables: {
                id,
              },
            });

            //Show Alert
            swalWithBootstrapButtons.fire(
              "Eliminado!",
              data.deleteClient,
              "success"
            );
          } catch (error) {
            swalWithBootstrapButtons.fire(
              "Error",
              "Ha ocurrido un error inesperado, vuelva a intentarlo",
              "error"
            );
          }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelado",
            "No se ha realizado ninguna acción",
            "error"
          );
        }
      });
  };
  return (
    <>
      <tr>
        <td className="px-4 py-2 border">
          {name} {lastName}
        </td>
        <td className="px-4 py-2 border">{institutionName}</td>
        <td className="px-4 py-2 border">{email}</td>
        <td className="flex px-4 py-2 border">
          <Button
            text="Editar"
            className="flex w-full px-2 py-1 mr-2 text-sm text-white bg-green-600 rounded sm:w-auto hover:bg-green-700"
            onClick={() => editClient()}
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
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            }
          />
          <Button
            text="Eliminar"
            className="flex w-full px-2 py-1 text-sm text-white bg-red-600 rounded sm:w-auto hover:bg-red-700"
            onClick={() => deleteClientAlert(id)}
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
