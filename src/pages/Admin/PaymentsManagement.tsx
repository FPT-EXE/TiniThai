/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-lines */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable max-lines-per-function */
import { filter } from 'lodash'
// import { sentenceCase } from 'change-case'
import { useState, useEffect } from 'react'
// material
import {
  Card,
  Table,
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
// import { getcourseList, deleteUser } from '../../redux/slices/user'
// routes
// hooks
// @types
// components
import { useAppDispatch, useAppSelector } from '../../shared/utils/reduxHook'
import { Payment } from '../../shared/common/types'
import { paymentsFetch } from '../../shared/slices/paymentSlice'

import Scrollbar from './sections/Scrollbar'
import ListToolbar from './sections/ListToolbar'
import ListHeader from './sections/ListHeader'
import ListMoreMenu from './sections/ListMoreMenu'
import SearchNotFound from './sections/SearchNotFound'
import AdminSideNavBar from './components/AdminSideNavBar'
import HeaderBreadcrumbs from './components/HeaderBreadcrumbs'

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: '_id', label: 'Id', alignRight: false },
  { id: 'bankCode', label: 'Bank Code', alignRight: false },
  { id: 'content', label: 'Content', alignRight: false },
  { id: 'amount', label: 'Amount', alignRight: true },
  { id: 'date', label: 'Date', alignRight: false },
  {
    id: 'user',
    label: 'User',
    alignRight: false,
  },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'purchasedCourses', label: 'Purchased Courses', alignRight: false },
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
  array: Payment[],
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
      (_payment) =>
        _payment.bankCode.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
  }
  return stabilizedThis.map((el) => el[0])
}

export default function PaymentsManagement() {
  // const theme = useTheme()
  const dispatch = useAppDispatch()
  const reduxState = useAppSelector((state) => state)
  const paymentsLoading = reduxState.payment.paymentsLoading
  const paymentList = reduxState.payment.paymentList
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [selected, setSelected] = useState<string[]>([])
  const [orderBy, setOrderBy] = useState('title')
  const [filterName, setFilterName] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const handleOpenModal = () => setIsOpenModal(true)
  const handleCloseModal = () => setIsOpenModal(false)
  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (checked: boolean) => {
    if (checked) {
      const newSelecteds = paymentList.map((n) => n._id)
      setSelected(newSelecteds)
      return
    }
    setSelected([])
  }

  const handleClick = (_id: string) => {
    const selectedIndex = selected.indexOf(_id)
    let newSelected: string[] = []
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, _id)
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

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - paymentList.length) : 0

  const filteredPayments = applySortFilter(
    paymentList,
    getComparator(order, orderBy),
    filterName
  )

  const isUserNotFound = filteredPayments.length === 0

  useEffect(() => {
    dispatch(paymentsFetch())
  }, [dispatch])

  return (
    <>
      <AdminSideNavBar />
      <Container maxWidth={'xl'}>
        <HeaderBreadcrumbs
          heading="Payment List"
          links={[{ name: 'Home', href: '/' }, { name: 'Payment Management' }]}
        />
        <Card>
          <ListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
			searchPlaceholder="Search payment by bank code"
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, overflowX: 'clip' }}>
              <Table>
                <ListHeader
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={paymentList.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
				<TableRow>
                    <TableCell align="center" sx={{ py: 3 }}>
                      {paymentsLoading && (
                        <CircularProgress sx={{ color: 'primary.main' }} />
                      )}
                    </TableCell>
                  </TableRow>
                  {filteredPayments
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        _id,
                        amount,
                        bankCode,
                        content,
                        date,
                        purchasedCourses,
                        status,
                        user,
                      } = row
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
                          <TableCell align="left">{bankCode}</TableCell>
                          <TableCell align="left">{content}</TableCell>
                          <TableCell align="right">{amount}</TableCell>
                          <TableCell align="left">{`${date.substring(
                            6,
                            8
                          )}/${date.substring(4, 6)}/${date.substring(
                            0,
                            4
                          )}, ${date.substring(8, 10)}:${date.substring(
                            10,
                            12
                          )}:${date.substring(12, 14)}`}</TableCell>
                          <TableCell align="left">
                            {user ? user.name : 'Unknown'}
                          </TableCell>
                          <TableCell align="left">{status}</TableCell>
                          <TableCell align="left">
                            {purchasedCourses.map(
                              (course, index) =>
                                course +
                                `${
                                  index == purchasedCourses.length - 1
                                    ? ''
                                    : ', '
                                }`
                            )}
                          </TableCell>
                        </TableRow>
                      )
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                {isUserNotFound && paymentList.length > 0 &&  (
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
            count={paymentList.length}
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
