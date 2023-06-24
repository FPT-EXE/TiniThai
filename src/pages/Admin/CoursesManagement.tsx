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
// import { getcourseList, deleteUser } from '../../redux/slices/user'
// routes
// hooks
// @types
// components
import { useAppDispatch, useAppSelector } from '../../shared/utils/reduxHook'
import { coursesFetch, deleteCourse } from '../../shared/slices/courseSlice'
import { Course } from '../../shared/common/types'

import Scrollbar from './sections/Scrollbar'
import ListToolbar from './sections/ListToolbar'
import ListHeader from './sections/ListHeader'
import ListMoreMenu from './sections/ListMoreMenu'
import SearchNotFound from './sections/SearchNotFound'
import AdminSideNavBar from './components/AdminSideNavBar'
import HeaderBreadcrumbs from './components/HeaderBreadcrumbs'
import CreateCourseModal from './components/CreateCourseModal'

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'background', label: 'Background Image', alignRight: false },
  { id: '_id', label: 'Id', alignRight: false },
  { id: 'title', label: 'Title', alignRight: false },
  { id: 'price', label: 'Price', alignRight: true },
  { id: 'alias', label: 'Alias', alignRight: false },
  { id: 'description', label: 'Description', alignRight: false },
  {
    id: 'degreeOfDifficulty',
    label: 'Degree Of Difficulty',
    alignRight: false,
  },
  { id: 'rating', label: 'Rating', alignRight: false },
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
  array: Course[],
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
      (_course) =>
        _course.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    )
  }
  return stabilizedThis.map((el) => el[0])
}

export default function CoursesManagement() {
  // const theme = useTheme()
  const dispatch = useAppDispatch()
  const reduxState = useAppSelector((state) => state)
  const coursesLoading = reduxState.course.coursesLoading
  const courseList = reduxState.course.courseList
  const [updatedCourse, setUpdatedCourse] = useState<Course | null>(null)
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
      const newSelecteds = courseList.map((n) => n._id)
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

  const handleDeleteCourse = async (courseId: string) => {
    await dispatch(deleteCourse(courseId))
    dispatch(coursesFetch())
  }

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - courseList.length) : 0

  const filteredCourses = applySortFilter(
    courseList,
    getComparator(order, orderBy),
    filterName
  )

  const isUserNotFound = filteredCourses.length === 0

  useEffect(() => {
    dispatch(coursesFetch())
  }, [dispatch])

  return (
    <>
      <AdminSideNavBar />
      <Container maxWidth={'xl'}>
        <HeaderBreadcrumbs
          heading="Course List"
          links={[{ name: 'Home', href: '/' }, { name: 'Course Management' }]}
          action={
            <Button
              variant="contained"
              startIcon={<Icon icon={plusFill} />}
              onClick={() => {
                setUpdatedCourse(null)
                handleOpenModal()
              }}
            >
              New Course
            </Button>
          }
        />
        <CreateCourseModal
          isOpen={isOpenModal}
          handleClose={handleCloseModal}
          updatedCourse={updatedCourse}
        />
        <Card>
          <ListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            searchPlaceholder="Search course by title"
          />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800, overflowX: 'clip' }}>
              <Table>
                <ListHeader
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={courseList.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  <TableRow>
                    <TableCell align="center" sx={{ py: 3 }}>
                      {coursesLoading && (
                        <CircularProgress sx={{ color: 'primary.main' }} />
                      )}
                    </TableCell>
                  </TableRow>

                  {filteredCourses
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const {
                        _id,
                        title,
                        background,
                        price,
                        rating,
                        alias,
                        description,
                        degreeOfDifficulty,
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
                          <TableCell component="th" scope="row" padding="none">
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <img
                                alt={title}
                                src={background}
                                width="100%"
                                height="auto"
                                style={{ maxWidth: '10rem' }}
                              />
                            </Stack>
                          </TableCell>
                          <TableCell align="left">{_id}</TableCell>
                          <TableCell align="left">{title}</TableCell>
                          <TableCell align="right">{price}</TableCell>
                          <TableCell align="left">{alias}</TableCell>
                          <TableCell align="left">{description}</TableCell>
                          <TableCell align="left">{rating}</TableCell>
                          <TableCell align="left">
                            {degreeOfDifficulty}
                          </TableCell>
                          <TableCell align="right">
                            <ListMoreMenu
                              onDelete={() => handleDeleteCourse(_id)}
                              onEdit={() => {
                                setUpdatedCourse(row), handleOpenModal()
                              }}
                            />
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
                {isUserNotFound && courseList.length > 0 && (
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
            count={courseList.length}
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
