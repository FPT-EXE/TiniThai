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
  Stack,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  Modal,
  Box,
  Typography,
  Paper,
} from '@mui/material'

// redux
// import { RootState, useDispatch, useSelector } from '../../redux/store'
// import { getuserList, deleteUser } from '../../redux/slices/course'
// routes
// hooks
// @types
// components
import { PurchasedCourse, User } from '../../../shared/common/types'
import ListHeader from '../sections/ListHeader'
import Scrollbar from '../sections/Scrollbar'
import ListToolbar from '../sections/ListToolbar'
import {
  useAppDispatch,
} from '../../../shared/utils/reduxHook'
import SearchNotFound from '../sections/SearchNotFound'

// ----------------------------------------------------------------------
const modalContentStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  width: { xs: '80%', md: '70%' },
  height: { xs: '80%', md: 'auto' },
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

const TABLE_HEAD = [
  { id: 'background', label: 'Background Image', alignRight: false },
  { id: '_id', label: 'Id', alignRight: false },
  { id: 'title', label: 'Title', alignRight: false },
  { id: 'price', label: 'Price', alignRight: true },
  { id: 'purchasedDate', label: 'Purchased Date'},
  { id: 'expiredDate', label: 'Expired Date' },
  { id: 'status', label: 'Status'},
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

type UserCoursesModalProps = {
  user: User,
  handleClose: VoidFunction,
  isOpen: boolean,
};

function getComparator(order: string, orderBy: string) {
  return order === 'desc'
    ? (a: Anonymous, b: Anonymous) => descendingComparator(a, b, orderBy)
    : (a: Anonymous, b: Anonymous) => -descendingComparator(a, b, orderBy)
}

function applySortFilter(
  array: PurchasedCourse[],
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
      (_pCourse) =>
        _pCourse.course.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
  }
  return stabilizedThis.map((el) => el[0])
}

export default function UserCoursesModal({
  user,
  handleClose,
  isOpen,
}: UserCoursesModalProps) {
  console.log('user', user)

  // const theme = useTheme()
  const dispatch = useAppDispatch()
  const purchasedCourses = user?.purchasedCourses
  const [page, setPage] = useState(0)
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')
  const [selected, setSelected] = useState<string[]>([])
  const [orderBy, setOrderBy] = useState('title')
  const [filterName, setFilterName] = useState('')
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (checked: boolean) => {
    if (checked) {
      const newSelecteds = purchasedCourses.map((n) => n.course._id)
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

  const emptyRows =
    page > 0
      ? Math.max(0, (1 + page) * rowsPerPage - purchasedCourses.length)
      : 0

  const filteredCourses =
    purchasedCourses.length > 0
      ? applySortFilter(
          purchasedCourses,
          getComparator(order, orderBy),
          filterName
        )
      : purchasedCourses

  const isUserNotFound = filteredCourses.length === 0

  const localDateParsing = (date: string) => {
    const newDate = new Date(date)
    return newDate.toLocaleDateString() + ', ' + newDate.toLocaleTimeString()
  }

  return (
    <>
      <Modal open={isOpen} onClose={handleClose}>
        <Box sx={modalContentStyle}>
          <Card>
            <Typography variant="h3">
              {user && user.name ? `${user.name}'s` : "User's"} Course
            </Typography>
            <ListToolbar
              numSelected={selected.length}
              filterName={filterName}
              onFilterName={handleFilterByName}
              searchPlaceholder="Search courses by title"
            />

            <Scrollbar>
              <TableContainer
                sx={{
                  minWidth: 800,
                  maxHeight: { xs: '15rem', md: '25rem', xl: '30rem' },
                  overflowX: 'clip',
                }}
              >
                <Table>
                  <ListHeader
                    order={order}
                    orderBy={orderBy}
                    headLabel={TABLE_HEAD}
                    rowCount={purchasedCourses.length}
                    numSelected={selected.length}
                    onRequestSort={handleRequestSort}
                    onSelectAllClick={handleSelectAllClick}
                  />
                  <TableBody>
                    {purchasedCourses.length > 0 ? (
                      <>
                        {filteredCourses
                          .slice(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                          )
                          .map((row) => {
                            const {
                              _id,
                              course,
                              expiredDate,
                              purchasedDate,
                              status,
                            } = row
                            const isItemSelected =
                              selected.indexOf(course._id) !== -1

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
                                    onClick={() => handleClick(course._id)}
                                  />
                                </TableCell>
                                <TableCell
                                  component="th"
                                  scope="row"
                                  padding="none"
                                >
                                  <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={2}
                                  >
                                    <img
                                      alt={course.title}
                                      src={course.background}
                                      width="100%"
                                      height="auto"
                                      style={{ maxWidth: '10rem' }}
                                    />
                                  </Stack>
                                </TableCell>
                                <TableCell align="left">{course._id}</TableCell>
                                <TableCell align="left">
                                  {course.title}
                                </TableCell>
                                <TableCell align="right">
                                  {course.price}
                                </TableCell>
                                <TableCell align="left">
                                  {localDateParsing(purchasedDate)}
                                </TableCell>
                                <TableCell align="left">
                                  {localDateParsing(expiredDate)}
                                </TableCell>
                                <TableCell align="left">{status}</TableCell>
                              </TableRow>
                            )
                          })}
                        {emptyRows > 0 && (
                          <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                          </TableRow>
                        )}
                      </>
                    ) : (
                      <TableRow>
                        <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                          <Paper>
                            <Typography
                              gutterBottom
                              align="center"
                              variant="subtitle1"
                            >
                              This user has not purchased any course!
                            </Typography>
                          </Paper>
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                  {isUserNotFound && purchasedCourses.length > 0 && (
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
              count={purchasedCourses.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={(e, page) => setPage(page)}
              onRowsPerPageChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeRowsPerPage(e)
              }
            />
          </Card>
        </Box>
      </Modal>
    </>
  )
}
