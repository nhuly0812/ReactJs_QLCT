import TableExpense from "../AdminExpense/TableExpense/TableExpense"
import TableUser from "../AdminUser/TableUser/TableUser"

function AdminPage() {
  return (
    <div>
      <TableUser/>
      <TableExpense/>

    </div>
  )
}

export default AdminPage