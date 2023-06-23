/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-lines-per-function */
import { filter } from 'lodash'
import { Icon } from '@iconify/react'
// import { sentenceCase } from 'change-case'
import { useState, useEffect } from 'react'
import plusFill from '@iconify/icons-eva/plus-fill'
// material
import {
  Card,
  Table,
  Stack,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  TableContainer,
  TablePagination,
  CircularProgress,
} from '@mui/material'

// redux
// import { RootState, useDispatch, useSelector } from '../../redux/store'
// import { getuserList, deleteUser } from '../../redux/slices/user'
// routes
// hooks
// @types
// components
import { useAppDispatch, useAppSelector } from '../../shared/utils/reduxHook'
import { usersFetch } from '../../shared/slices/userSlice'
import { User } from '../../shared/common/types'

import Scrollbar from './sections/Scrollbar'
import ListToolbar from './sections/ListToolbar'
import ListHeader from './sections/ListHeader'
// import ListMoreMenu from './sections/ListMoreMenu'
import SearchNotFound from './sections/SearchNotFound'
import AdminSideNavBar from './components/AdminSideNavBar'
import HeaderBreadcrumbs from './components/HeaderBreadcrumbs'
import UserCoursesModal from './components/UserCoursesModal'

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: '_id', label: 'Id', alignRight: false },
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'courses', label: 'Courses', alignRight: false },
]

// ----------------------------------------------------------------------

type Anonymous = Record<string | number, string>;

function descendingComparator(a: Anonymous, b: Anonymous, orderBy: string) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function getComparator(order: string, orderBy: string) {
  return order === 'desc'
    ? (a: Anonymous, b: Anonymous) => descendingComparator(a, b, orderBy)
    : (a: Anonymous, b: Anonymous) => -descendingComparator(a, b, orderBy)
}

function applySortFilter(
  array: User[],
  comparator: (a: any, b: any) => number,
  query: string
) {
  const stabilizedThis = array.map((el, index) => [el, index] as const)
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  if (query) {
    return filter(
      array,
      (_user) => _user.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
  }
  return stabilizedThis.map((el) => el[0])
}

export default function UsersManagement() {
  // const theme = useTheme()
  const dispatch = useAppDispatch()
  const reduxState = useAppSelector((state) => state)
  const usersLoading = reduxState.user.usersLoading
  const userList = reduxState.user.userList
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [selected, setSelected] = useState<string[]>([])
  const [orderBy, setOrderBy] = useState('title')
  const [filterName, setFilterName] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [currentModal, setCurrentModal] = useState<'courses' | 'payments'>(
    'courses'
  )
  const [currentUser, setCurrentUser] = useState<User>({
    purchasedCourses: [],
    _id: '',
    name: '',
    email: '',
    role: '',
    courses: [],
    payments: [],
    __v: 0,
  })
  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)
  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (checked: boolean) => {
    if (checked) {
      const newSelecteds = userList.map((n) => n.name)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (title: string) => {
    const selectedIndex = selected.indexOf(title)
    let newSelected: string[] = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, title)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleFilterByName = (filterName: string) => {
    setFilterName(filterName)
  }

  const handleDeleteUser = async (UserId: string) => {
    // await dispatch(deleteUser(UserId))
    // dispatch(usersFetch())
  }

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userList.length) : 0

  const filteredUsers = applySortFilter(
    userList,
    getComparator(order, orderBy),
    filterName
  )

  const isUserNotFound = filteredUsers.length === 0

  useEffect(() => {
    dispatch(usersFetch())
  }, [dispatch])

  return (
    <>
      <AdminSideNavBar />
      <Container maxWidth={'xl'}>
        <HeaderBreadcrumbs
          heading="User List"
          links={[{ name: 'Home', href: '/' }, { name: 'User Management' }]}
          //   action={
          // <Button
          //   variant="contained"
          //   startIcon={<Icon icon={plusFill} />}
          //   onClick={() => {
          //     setUpdatedUser(null)
          //     handleOpenModal()
          //   }}
          // >
          //   New User
          // </Button>
          //   }
        />
        {/* <CreateUser
          isOpen={isOpenModal}
          handleClose={handleCloseModal}
          updatedUser={updatedUser}
        /> */}
        {currentModal === 'courses' ? (
          <UserCoursesModal
            user={currentUser}
            isOpen={isOpenModal}
            handleClose={handleCloseModal}
          />
        ) : (
          <></>
        )}
        <Card>
          <ListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            searchPlaceholder="Search user by email"
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, overflowX: 'clip' }}>
              <Table>
                <ListHeader
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={userList.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                <TableRow>
                    <TableCell align="center" sx={{ py: 3 }}>
                      {usersLoading && (
                        <CircularProgress sx={{ color: 'primary.main' }} />
                      )}
                    </TableCell>
                  </TableRow>
                  {filteredUsers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { _id, name, email, role, courses, payments } = row
                      const isItemSelected = selected.indexOf(_id) !== -1

                      return (
                        <TableRow
                          hover
                          key={_id}
                          tabIndex={-1}
                          role="checkbox"
                          selected={isItemSelected}
                          aria-checked={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              checked={isItemSelected}
                              onClick={() => handleClick(_id)}
                            />
                          </TableCell>
                          <TableCell align="left">{_id}</TableCell>
                          <TableCell align="left">{name}</TableCell>
                          <TableCell align="left">{email}</TableCell>
                          <TableCell align="left">{role}</TableCell>
                          <TableCell align="left">
                            <Button
                              sx={{ minWidth: '10rem' }}
                              onClick={() => {
                                setCurrentUser(row)
                                handleOpenModal()
                              }}
                            >
                              View this user courses
                            </Button>
                          </TableCell>
                          {/* <TableCell align="right">
                            <ListMoreMenu
                              onDelete={() => handleDeleteUser(_id)}
                              onEdit={() => {
                                setUpdatedUser(row), handleOpenModal()
                              }}
                            />
                          </TableCell> */}
                        </TableRow>
                      )
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUserNotFound && userList.length > 0 &&  (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={userList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, page) => setPage(page)}
            onRowsPerPageChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChangeRowsPerPage(e)
            }
          />
        </Card>
      </Container>
    </>
  )
}
