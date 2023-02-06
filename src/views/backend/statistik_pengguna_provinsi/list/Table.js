// ** React Imports
import { Fragment, useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'

// ** Columns
import { columns } from './columns'

// ** Store & Actions
import { getDataStatistikPenggunaProvince } from '../store/action'
import { useDispatch, useSelector } from 'react-redux'
import { AbilityContext } from '@src/utility/context/Can'

// ** Third Party Components
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle, Row, Col, Label, CustomInput, Button } from 'reactstrap'
import useDebounce from '@hooks/useDebounce'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const ClassList = () => {
  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.statistikpenggunaprovinces),
    ability = useContext(AbilityContext)

  // ** States
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(100)
  const [mounted, setMounted] = useState(false)
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Pengguna',
        data: [],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  })

  const debouncedSearch = useDebounce(searchTerm, 500)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false
      }
    }
  }

  // ** redirect
  const history = useHistory()

  // ** Get data on mount
  useEffect(() => {
    if (!store.params) {
      dispatch(
        getDataStatistikPenggunaProvince({
          page: currentPage,
          perPage: rowsPerPage,
          q: searchTerm
        })
      )
    } else {
      dispatch(
        getDataStatistikPenggunaProvince(store.params)
      )
      setSearchTerm(store.params.q)
      setCurrentPage(store.params.page)
      setRowsPerPage(store.params.perPage)
    }

    setMounted(true)
  }, [dispatch])

  useEffect(() => {
    if (mounted) {
      dispatch(
        getDataStatistikPenggunaProvince({
          page: currentPage,
          perPage: rowsPerPage,
          q: debouncedSearch
        })
      )
    }

  }, [debouncedSearch, currentPage, rowsPerPage])

  useEffect(() => {
    if (store.data.length > 0) {

      const labels = store.data.map(d => d.provinces)
      const data = store.data.map(d => d.total_pengguna)

      setData({
        labels,
        datasets: [
          {
            label: 'Pengguna',
            data,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
          }
        ]
      })
    }
  }, [store.data])

  return (
    <Fragment>
      <Card>
        <CardBody>
          <Line options={options} data={data} />
        </CardBody>
      </Card>
    </Fragment>
  )
}

export default ClassList
